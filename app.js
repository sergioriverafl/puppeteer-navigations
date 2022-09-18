const Scrapper = require('puppeteer-by-steps');
const path = require('path');
const axios = require('axios')

const formulario_uno = require('./src/steps/formulario_uno'); // Step 1
const navigate_to_create_purchase = require('./src/steps/navigate_to_create_purchase'); // Step 2
const create_purchase = require('./src/steps/create_purchase'); // Step 3

(async () => {

    const { log } = console;

    let takeScreenshot = false;

    try {

        log('Ejecutando...')

        const showBrowser = true;
        const s = new Scrapper({ width: 1366, height: 868 }, showBrowser, [], null, "");

        await s.init();

        // console.log(s)

        const browser = s.getBrowser();

        // console.log('browser')
        // console.log(browser)
        // console.log('browser')

        const page = await s.getCurrentPage();
        
        formulario_uno(s, page, browser);
     
        console.log('SALIO DEL FORMUALRIO UNO')

        // await navigate_to_create_purchase(s, page);

        // await create_purchase(
        //     s,
        //     page,
        //     document_provider,
        //     unit_value,
        //     amount,
        //     summary
        // );

        // takeScreenshot = true;

        // if (takeScreenshot) {

        //     const pathScreenshotSuccess = `data/screenshot_success/screenshot-success.png`;
        //     await page.screenshot({ path: pathScreenshotSuccess, type: 'png', fullPage: true });
        // }


    } catch (err) {

        // if (takeScreenshot) {

        //     const page = s.getCurrentPage();
        //     const pathScreenshotSuccess = `data/screenshot_error/screenshot-error.png`;
        //     await page.screenshot({ path: pathScreenshotSuccess, type: 'png', fullPage: true });
        // }

        log(err)
    }
})();