import OnViewElement from './Errelab/onViewElement.js';



document.addEventListener("DOMContentLoaded", function ()
{
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