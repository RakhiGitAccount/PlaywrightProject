// Include Playwright Module

const{expect} = require('@playwright/test')

//Create a class

exports.ResultPage = class ResultPage{

    
        /**
         * @param {import('@playwright').Page} page
         * 
         */


        //Initialize the page object
        constructor(page)
        {
            this.page = page;
        

            //Get Elements
            this.playlistlink = page.getByRole('link',{name: 'Playwright by Testers Talk'});

            //this.playlistlink = page.getByRole('link',{name: 'Playwright with Javascript tutorials'});
            
 

        }

       

        async clickOnPlaylist(){
            await expect(this.playlistlink.first()).toBeEnabled();
            await this.playlistlink.first().click();
            
        }
    
}