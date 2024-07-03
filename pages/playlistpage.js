// Include Playwright Module

const{expect} = require('@playwright/test');
const exp = require('constants');

//Create a class

exports.PlaylistPage = class PlaylistPage{

    
        /**
         * @param {import('@playwright').Page} page
         * 
         */


        //Initialize the page object
        constructor(page)
        {
            this.page = page;
        

            //Get Elements
           this.videolink = page.locator('#container> #thumbnail');
           
        }

       

        async clickOnVideo(){
           // await expect(this.videolink).toContain(" tutorial");
            await expect(this.videolink.first()).toBeEnabled();
            await this.videolink.first().click();
            
        }
    
}