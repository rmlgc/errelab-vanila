import { start as headerInit } from './Errelab/errelab.header.js';
import loading from './Errelab/errelab.loading.js';
import OnViewElement from './Errelab/onViewElement.js';

const webApp = new loading();
webApp.start();

document.addEventListener("DOMContentLoaded", function ()
{
    webApp.end();
    headerInit();
    const header = document.querySelector('header');
    // console.log(header);
    const options = {
        in: false,
        out: { class: 'sticky' },
        to: {
            offset: 0.2,
        }
    };
    const oveHeader = new OnViewElement('#header', options);

    // oveHeader.OnIntersectionInit();

    const optionsAboutEs = {
        // in: false,
        // out: { class: 'sticky' },
        from: {
            offset: 0.3,
        },
        to: {
            offset: 0.2,
        },
    };
    const oveAboutEs = new OnViewElement('.animate', optionsAboutEs);

    oveAboutEs.initOutClass();
    oveAboutEs.OnScrollInit();

});
