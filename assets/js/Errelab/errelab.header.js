

export function start()
{

    window.addEventListener("scroll", () => { opacityOnScroll(); });
    opacityOnScroll();
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

    console.log("Header Start");

    console.log(CalcPosition);
    console.log(CalcOpacity);

    if (CalcOpacity > 0.05)
    {
        header.style.setProperty('opacity', CalcOpacity);
    } else if (CalcPosition > 100)
    {
        header.style.setProperty('opacity', 0.05);

    }
    header.style.setProperty('transition-duration', '0s');
}

// opacity = 1
// position = 0

