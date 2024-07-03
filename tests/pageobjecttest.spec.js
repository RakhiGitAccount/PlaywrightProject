// @ts-check
const { test, expect } = require('@playwright/test');

const{Homepage} = require('../pages/homepage');
const{PlaylistPage} = require('../pages/playlistpage');
const{ResultPage} = require('../pages/resultpage');


test('Page Object Model in Playwright', async ({ page }) => {
 
    // Go to URl
    const homepage = new Homepage(page);
    await homepage.goto();

    //Search with Keywords
    //Playwright with Javascript tutorials
    homepage.searchKeywords('playwright by testers talk');

    //Click on playlist
    const resultpage = new ResultPage(page);
    resultpage.clickOnPlaylist();
    await page.waitForTimeout(2000);

    //Click on video
    const playlistpage = new PlaylistPage(page);
    playlistpage.clickOnVideo();

    await page.waitForTimeout(5000);
 
});
