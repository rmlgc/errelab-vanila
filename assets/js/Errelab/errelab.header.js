
const listneers = {
    length: 0,

    addEvent(elem)
    {
        // obj.length is automatically incremented
        // every time an element is added.
        [].push.call(this, elem);
    },
};

export function start()
{

    window.addEventListener("scroll", () => { opacityOnScroll(); }, { once: false });
    const qoteListener = window.addEventListener("scroll", () => { widthOnScroll(); });
    listneers.addEvent({ 'qoteListener': qoteListener });
    opacityOnScroll();
    widthOnScroll();
}

function opacityOnScroll()
{
    const header = document.body.getElementsByTagName('header')[0];
    const headerH = header.offsetHeight;
    const bodyH = document.body.scrollHeight;
    const windowHeight = window.innerHeight;

    const scrollPosition = document.body.getBoundingClientRect().top * -1;

    const CalcPosition = (scrollPosition * 100) / headerH;

    const CalcOpacity = (100 - (CalcPosition)) * 0.01;

    // console.log("Header Start");

    // console.log(CalcPosition);
    // console.log(CalcOpacity);

    if (CalcOpacity > 0.05)
    {
        header.style.setProperty('opacity', CalcOpacity);
    } else if (CalcPosition > 100)
    {
        header.style.setProperty('opacity', 0.05);

    }
    header.style.setProperty('transition-duration', '0s');
}
let blockquoteW = null;
function widthOnScroll()
{
    const target = document.body.getElementsByTagName('blockquote')[0];
    const targetH = target.offsetHeight;
    const targetW = blockquoteW === null ? blockquoteW = target.offsetWidth : blockquoteW;
    const headerH = header.offsetHeight;
    const bodyH = document.body.scrollHeight;
    const windowHeight = window.innerHeight;

    const scrollPosition = document.body.getBoundingClientRect().top * -1;

    const CalcPosition = (scrollPosition * 100) / headerH;

    const CalcWidth = (targetW - (CalcPosition) * 2);

    console.log("Width Start");

    // console.log(CalcPosition);
    // console.log(CalcWidth);
    // console.log(listneers);

    if (CalcWidth >= 0)
    {
        target.style.setProperty('transform', `translateX(${ CalcPosition * 11 }px)`);
    } else if (CalcPosition <= CalcWidth)
    {
        target.style.setProperty('transform', `translateX(${ 0 }px)`);

    }
    target.style.setProperty('transition-duration', '0s');
}

// opacity = 1
// position = 0

