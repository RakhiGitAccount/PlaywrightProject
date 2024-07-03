// Include Playwright Module

const{expect} = require('@playwright/test')

//Create a class

exports.Homepage = class Homepage{

    
        /**
         * @param {import('@playwright').Page} page
         * 
         */


        //Initialize the page object
        constructor(page)
        {
            this.page = page;
        

            //Get Elements
            this.seachTextbox = page.locator('#APjFqb');

        }

        async goto(){
            await this.page.goto('https://www.google.co.in/');
            await expect(this.page).toHaveURL('https://www.google.co.in/');
            
        }

        async searchKeywords(searchParm){
            await expect(this.seachTextbox).toBeEnabled();
            await this.seachTextbox.click();
            await this.seachTextbox.fill(searchParm);
            await this.seachTextbox.press('Enter');
        }
    
}