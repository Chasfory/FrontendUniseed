from selenium import webdriver
from time import sleep
from selenium.webdriver.common.by import By
from selenium.common.exceptions import WebDriverException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.chrome.options import Options as OptionsChrome
from selenium.webdriver.firefox.options import Options as OptionsFirefox
from selenium.webdriver.edge.options import Options as OptionsEdge
from selenium.webdriver.firefox.firefox_binary import FirefoxBinary
from selenium.webdriver.support import expected_conditions as EC
# from msedge.selenium_tools import webdriver as EdgeDriver
# from msedge.selenium_tools import EdgeOptions
import time
import sys
import pytest
from dotenv import load_dotenv
import os

load_dotenv(".env")
used_webdriver = os.getenv('WEBDRIVER')
url_website = os.getenv("URL_WEBSITE")

homepage = {
    'english': url_website + "en/about",
    'french': url_website + "fr/a-propos"
}

def choose_version_language(arg):
    if used_webdriver == "CHROME":
        options_len = OptionsChrome()
        options_len.add_argument("--headless")
        options_len.add_argument("--no-sandbox")
        options_len.add_argument("--disable-dev-shm-usage")
        prefs = {}
        options_len.experimental_options["prefs"] = prefs
        prefs["profile.default_content_settings"] = {"images": 2}
        driver = webdriver.Chrome(options=options_len)
    elif used_webdriver == "FIREFOX":
        options_len = OptionsFirefox()
        options_len.add_argument("--headless")
        options_len.add_argument("--no-sandbox")
        options_len.add_argument("--disable-dev-shm-usage")
        driver = webdriver.Firefox(executable_path='/home/Chasfory/PycharmProjects/pythonProject/geckodriver', options=options_len)
    # elif used_webdriver == "EDGE":
    #     options_edge = EdgeOptions()
    #     options_edge.use_chromium = True
    #     options_edge.add_argument("headless")
    #     options_edge.add_argument("disable-gpu")
    #     driver = EdgeDriver.WebDriver(options=options_edge, executable_path='/home/Chasfory/PycharmProjects/pythonProject/msedgedriver')
    driver.get(homepage[arg])
    return (driver)

def funct_all_page(driver, wait):
    try:
        wait.click()
        return (True)
    except WebDriverException:
        return (False)

def button_contact_us(arg):
    driver = choose_version_language(arg)
    wait = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.XPATH, '/html/body/div[5]/div[2]/div[2]/a')))
    start = time.time()
    while 1:
        if funct_all_page(driver, wait) == True:
            break
        else:
            end = time.time()
            result = end - start
            assert result <= 10, 'TimeOut Test 1 failed in '+arg
    element = driver.find_element_by_xpath("/html/body/main/section[8]/div/div/div[1]/div/a")
    element.location_once_scrolled_into_view
    start = time.time()
    wait = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.XPATH, '/html/body/main/section[8]/div/div/div[1]/div/a')))
    while 1:
        if funct_all_page(driver, wait) == True:
            break
        else:
            end = time.time()
            result = end - start
            assert result <= 10, 'No cliquable Test 1 failed in '+arg
    if arg == "english":
        assert driver.current_url == url_website + "en/contact", 'Test failed 1 in english'
    if arg == "french":
        assert driver.current_url == url_website + "fr/contact", 'Test failed 1 in french'
    driver.close()

@pytest.mark.parametrize("Language", [("french"), ("english")])
def test_everyone_buttons_MainChain_page(Language):
    button_contact_us(Language)