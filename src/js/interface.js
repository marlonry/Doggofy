// slider
import { elements } from "./views/base";

const sliderOptions = {
    scroll: 0,
    velocity: 50,
    isClicked: false,
    timeOut: undefined,
    interval: undefined,
}

export const setScroll = () => {
    sliderOptions.scroll = elements.sliderContainer.scrollLeft;
}

export const goLeft = () => {
    sliderOptions.scroll -= sliderOptions.velocity;
    elements.sliderContainer.scrollLeft = sliderOptions.scroll;
    setScroll();
}

export const goRight = () => {
    sliderOptions.scroll += sliderOptions.velocity;
    elements.sliderContainer.scrollLeft = sliderOptions.scroll;
    setScroll();
}

export const goLeftContinously = () => {
    sliderOptions.timeOut = setTimeout(() => {
        sliderOptions.interval = setInterval(() => {
            sliderOptions.scroll -= sliderOptions.velocity;
            elements.sliderContainer.scrollLeft = sliderOptions.scroll;
        setScroll();
        }, 100);
    }, 100);
}

export const goRightContinously = () => {
    sliderOptions.timeOut = setTimeout(() => {
        sliderOptions.interval = setInterval(() => {
        sliderOptions.scroll += sliderOptions.velocity;
        elements.sliderContainer.scrollLeft = sliderOptions.scroll;
        setScroll();
    setScroll();
        }, 100);
    }, 100);
}

export const stopFunc = () => {
    clearInterval(sliderOptions.interval);
    clearTimeout(sliderOptions.timeOut);
}

// transition fix
export const transitionFix = () => {
    window.addEventListener('load', function() {
        const body = this.document.querySelector(".preload");
        body.classList.remove('preload');
    })
} 

