'use strict';

const method = async (s) => {


    // let steps = [
    //     { 
    //         type: 'wait-for-selector', 
    //         selector: '#main > div > app-dashboard-page > div > div > dashboard-shortcut > div > siigo-panel-atom > div:nth-child(1) > div:nth-child(3) > div > img', 
    //         timeout: 220000 
    //     },
    //     {
    //         type: 'click',
    //         selector: '#main > div > app-dashboard-page > div > div > dashboard-shortcut > div > siigo-panel-atom > div:nth-child(1) > div:nth-child(3) > div > img',
    //         waitFor: 7000
    //     },
    // ];

    // s.setSteps(steps);
    // await s.scrap();

    await s.waitForSelector('#single-spa-application\\:asp')

}

module.exports = method;