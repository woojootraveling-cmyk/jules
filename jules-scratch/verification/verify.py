from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Get the absolute path to the HTML file
        file_path = os.path.abspath('luke_character_sheet.html')

        # Go to the local HTML file
        page.goto(f'file://{file_path}')

        # Wait for the animations to complete
        page.wait_for_timeout(3000)

        # Take a screenshot
        page.screenshot(path='jules-scratch/verification/verification.png', full_page=True)

        browser.close()

if __name__ == '__main__':
    run()
