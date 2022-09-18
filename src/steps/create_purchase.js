'use strict';

const method = async (s, page, DOCUMENT_PROVIDER, UNIT_VALUE, AMOUNT, SUMMARY) => {
   
    const { log } = console;

    log(`:: INICIA CREACION DE FACTURA DE COMPRA :: `)  

    let steps = [
        {
            type: 'wait-for-selector',
            selector: '#dropdown_dropdownSelect',
            waitFor: 3000
        }, {
            type: 'fill-data',
            data: [
                {
                    type: 'select',
                    selector: '#dropdown_dropdownSelect',
                    origin: 'static',
                    value: "24451"
                },
            ]
        },
    ];


    s.setSteps(steps);
    await s.scrap();

    // Información del proveedor

    steps = [
        {
            type: 'wait-for-selector',
            selector: '#autocomplete_autocompleteInput',
            waitFor: 1000
        },
        {
            type: 'fill-data',
            data: [
                {
                    type: 'input',
                    selector: '#autocomplete_autocompleteInput',
                    origin: 'static',
                    value: DOCUMENT_PROVIDER,
                    waitFor: 6000
                },
            ]
        },
        {
            type: 'press-key',
            key: 'Enter',
            waitFor: 5000
        }
    ];  

    s.setSteps(steps);
    await s.scrap();    

    // Obtener y escribir número de factura

    let ID_INNOVICE = await page.evaluate(() => {  
        let lblAutomaticNumber = document.getElementById("lblAutomaticNumber");
        let innoviceNumber = lblAutomaticNumber.innerHTML;
        return parseInt(innoviceNumber);
    });

    steps = [
        {
            type: 'fill-data',
            data: [
                {
                    type: 'input',
                    selector: "#txtExternalConsecutive",
                    origin: 'static',
                    value:  parseInt(ID_INNOVICE),
                    waitFor: 6000
                },
            ]
        }
    ];

    s.setSteps(steps);
    await s.scrap();

    // Información del producto

    steps = [
        {
            type: 'fill-data',
            data: [
                {
                    type: 'input',
                    selector: "#editProduct > div > div > div > input#autocomplete_autocompleteInput",
                    origin: 'static',
                    value: "48",
                    waitFor: 6000
                },
            ]
        }
    ];

    s.setSteps(steps);
    await s.scrap();

    steps = [
        {
            type: 'press-key',
            key: 'Enter',
            waitFor: 100
        },
    ];

    s.setSteps(steps);
    await s.scrap();
       
    await page.evaluate( (AMOUNT) => {
        document.querySelector('#editQuantity > dx-number-box > div > div > input#inputDecimal_siigoInputDecimal').value = AMOUNT;
    }, AMOUNT);

    await page.evaluate( (UNIT_VALUE) => {       
        document.querySelector('#editUnitValue > dx-number-box > div > div > input#inputDecimal_siigoInputDecimal').value = UNIT_VALUE;
    }, UNIT_VALUE);

    steps = [
        {
            type: 'click',
            selector: '#editQuantity',
            waitFor: 5000
        },
        {
            type: 'press-key',
            key: 'Tab',
            waitFor: 100
        },{
            type: 'press-key',
            key: 'Tab',
            waitFor: 100
        },
    ];

    s.setSteps(steps);
    await s.scrap();     

    await page.evaluate((SUMMARY) => {    
        const { log } = console;
        document.querySelector('textarea[maxlength="1000"]').click();
        document.querySelector('textarea[maxlength="1000"]').value = SUMMARY;
        log('Escribiendo las Observaciones')
    }, SUMMARY);


    await page.evaluate(() => {
        const { log } = console;
        document.querySelector('#editingAcAccount_autocompleteInput').click();
        log('Registrando Click en #editingAcAccount_autocompleteInput')
    });

    await page.evaluate(() => {
        const { log } = console;
        document.querySelector("#trShowNewRowPay > a").click();
        log('Registrando Click en #trShowNewRowPay')
    });

    await page.evaluate(() => {
        alert('Favor llenar campos faltantes')
    });    
}

module.exports = method;