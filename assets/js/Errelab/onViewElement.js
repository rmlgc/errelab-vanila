/**
 * module description
 * @module OnViewElement
 */


//An example class
/** MyClass description */

/**
 * target
 * @class onViewElement for add functions to a elemnt
 * @argument target Html element to target for interact on view
 * @argument string: addClass Html element to target for interact on view
 * 
 */
export default class OnViewElement
{
    target = null;
    targetDefaultOffsetTop = null;
    options = {
        in: {
            class: "show",
            override: false,
        },
        out: {
            class: "hide",
            override: false,
        },
        from: {
            offset: 0.1,
            override: false,
        },
        to: {
            offset: 0.10,
            override: false,
        },
        override: false,
    };
    constructor(target = ".ove-target", options = {})
    {
        this.target = target;
        this.targetDefaultOffsetTop = document.querySelector(target).offsetTop;
        this.options = { ...this.options, ...options };
    }

    OnScrollInit()
    {
        window.addEventListener("scroll", () => { this.revealOnScroll(this.target, this.options); });
        window.addEventListener("resize", () => { this.revealOnScroll(this.target, this.options); });
        this.revealOnScroll(this.target, this.options);
    }
    initOutClass()
    {
        const boxes = document.querySelectorAll(this.target);
        const classOut = this.options.out.class;

        for (const key in boxes)
        {
            if (boxes.hasOwnProperty.call(boxes, key))
            {
                const box = boxes[key];
                this.classListAdd(box, classOut);
            }
        }
    }
    revealOnScroll(target, options)
    {
        const boxes = document.querySelectorAll(this.target);
        const windowHeight = window.innerHeight;
        const windowOffsetBottom = Math.round(windowHeight - (windowHeight * this.options.from.offset));
        const windowOffsetTop = Math.round(windowHeight * this.options.to.offset);
        const classOut = this.options.out.class;
        const classIn = this.options.in.class;

        if (boxes[1])
        {
            const b1 = boxes[1];
            const b1Top = Math.round(b1.getBoundingClientRect().top);
            const b1Bottom = Math.round(b1.getBoundingClientRect().bottom);

            if ((b1Top - windowOffsetBottom <= 0) && (b1Bottom - windowOffsetTop >= 0))
            {
                console.log('elemento Entra');
            } else
            {
                console.log('elemento Sale');
            }
        }

        for (const key in boxes)
        {
            if (boxes.hasOwnProperty.call(boxes, key))
            {
                const box = boxes[key];
                const boxTop = Math.round(box.getBoundingClientRect().top);
                const boxBottom = Math.round(box.getBoundingClientRect().bottom);

                const OffsetTop = windowOffsetTop - windowOffsetBottom > boxBottom - boxTop ? boxBottom >= ((boxBottom - boxTop) * this.options.to.offset) : boxBottom - windowOffsetTop >= 0;

                if ((boxTop - windowOffsetBottom <= 0) && (OffsetTop))
                {
                    console.log('show');
                    if (this.options.in)
                        this.classListAdd(box, classIn);
                    if (this.options.out)
                        this.classListRemove(box, classOut);
                } else
                {
                    console.log('hide');
                    if (this.options.out)
                        this.classListAdd(box, classOut);
                    if (this.options.in)
                        this.classListRemove(box, classIn);
                }
            }
        }

        boxes.forEach(function (box)
        {


        });
    }
    getTarget = () =>
    {
        return this.target;
    };
    getOptions = () =>
    {
        return this.options;
    };
    classListAdd = (element, classes) =>
    {
        const arrayClass = typeof classes != 'object' ? classes.split(' ') : classes;
        for (const key in arrayClass)
        {
            if (arrayClass.hasOwnProperty.call(arrayClass, key) && arrayClass[key].length > 0)
            {
                const addClass = arrayClass[key];
                element.classList.add(addClass);
            }
        }
    };
    classListRemove = (element, classes) =>
    {
        const arrayClass = typeof classes != 'object' ? classes.split(' ') : classes;
        for (const key in arrayClass)
        {
            if (arrayClass.hasOwnProperty.call(arrayClass, key) && arrayClass[key].length > 0)
            {
                const removeClass = arrayClass[key];
                element.classList.remove(removeClass);
            }
        }
    };
}

