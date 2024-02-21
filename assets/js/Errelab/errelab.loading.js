export default class loading
{
    element = null;
    wrap = null;
    start()
    {

        const randomWelcome = ['Welcome!!', 'Bien venido!!', 'Hello world!!', 'Cargando...', 'Loading...'];
        const randomText = randomWelcome[Math.floor(Math.random() * 100000) % randomWelcome.length];

        this.element = document.body;

        this.element.style.position = 'relative';
        this.element.style.overflow = 'hidden';

        this.wrap = document.createElement("section");
        this.wrap.setAttribute("id", "loading1");
        this.wrap.setAttribute("class", "loading show title");

        const loader = document.createElement("p");
        loader.setAttribute("class", "loader");

        const content = document.createElement("div");
        const text = document.createElement("p");
        text.style.textAlign = 'center';
        text.textContent = randomText;
        content.appendChild(loader);
        content.appendChild(text);


        const fragment = document.createDocumentFragment();
        const li = fragment
            .appendChild(this.wrap)
            .appendChild(content);

        this.element.prepend(fragment);

    }
    end()
    {
        const time = 1000;
        const timeOut = time * 2;

        setTimeout(() =>
        {
            this.wrap.classList.toggle('show');
            this.element.style.position = null;
            this.element.style.overflow = null;
        }, time);
        setTimeout(() =>
        {
            this.wrap.remove();
        }, timeOut);
    }
}
