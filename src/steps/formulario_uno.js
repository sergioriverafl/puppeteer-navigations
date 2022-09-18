'use strict';

const formulario_uno = async (s, page, browser) => {

    let steps = [
        {
            type: 'go-to', // Go to website
            link: 'http://127.0.0.1:5500/server/index.html',
            waitFor: 500
        }, {
            type: 'fill-data',
            data: [
                {
                    type: 'input',
                    selector: '#names',
                    origin: 'static',
                    value: "Sergio"
                },
                {
                    type: 'input',
                    selector: '#last_names',
                    origin: 'static',
                    value: "Rivera"
                }
            ],
            waitFor: 2000
        },

    ];

    s.setSteps(steps);
    await s.scrap();

    steps = [
        {
            type: 'click',
            selector: '#goToTaxes',
            waitFor: 1000
        },
    ]


    s.setSteps(steps);
    await s.scrap();


    const scrapRce = async () => {

        try {
            // await s.browser.off("targetcreated", scrapRce);
            const pages = await s.browser.pages();
            let page = pages[1];

            const browser = s.getBrowser();
            const tabs = await browser.pages();

            console.log("Tabs", tabs.length);

            await s.selectPageByIndex(1);

            // await page.waitForTimeout(2000);

            // let page = s.getCurrentPage();
            // await page.waitForTimeout(10000);
            // const browser = s.getBrowser();
            // const tabs = await browser.pages();

            console.log('11---------------------------------------------------------------11')

            const steps_two = [
                {
                    type: 'fill-data',
                    data: [
                        {
                            type: 'input',
                            selector: '#taxe1',
                            origin: 'static',
                            value: "IVA"
                        },
                        {
                            type: 'input',
                            selector: '#taxe2',
                            origin: 'static',
                            value: "RETE-ICA"
                        }
                    ],
                    waitFor: 2000,
                },
                // {
                //     type: 'click',
                //     selector: '#closeTaxes',
                //     waitFor: 1000
                // },
            ]

            s.setSteps(steps_two);
            await s.scrap();

            await s.selectPageByIndex(0);
            page = pages[0];
            await page.bringToFront();

            const steps_tree = [
                {
                    type: 'fill-data',
                    data: [
                        {
                            type: 'input',
                            selector: '#document',
                            origin: 'static',
                            value: "111158799988"
                        },
                        {
                            type: 'input',
                            selector: '#email',
                            origin: 'static',
                            value: "example@email.com"
                        }
                    ],
                    waitFor: 30000,
                },
                // {
                //     type: 'click',
                //     selector: '#closeTaxes',
                //     waitFor: 1000
                // },
            ]

            s.setSteps(steps_tree);
            await s.scrap();

            const quoteOption = {
                value: 15552,
                name: 'Citizens'
            }            

        } catch (error) {
            console.log(error)
        }
    }

    await s.browser.on("targetcreated", scrapRce);



}

module.exports = formulario_uno;