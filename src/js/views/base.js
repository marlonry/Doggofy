export const elements = {
    sliderMain: document.querySelector(".slider"),
    slider: document.querySelector(".slider__items-container"),
    sliderContainer: document.querySelector(".slider__items-container"),
    sliderMover: document.querySelector(".slider__items"),
    left: document.querySelector(".btn-slider--left"),
    right: document.querySelector(".btn-slider--right"),
    searchInput: document.querySelector(".search__input"),
    results: document.querySelector(".results"),
    btnSearch: document.querySelector(".search__icon"),
    content: document.querySelector(".content"),
}

export const renderLoader = () => {
    const html = `
         <div class="loader">
            <div class="loader__ball loader__ball--1"></div>
            <div class="loader__ball loader__ball--2"></div>
            <div class="loader__ball loader__ball--3"></div>
        </div>
    `;

    elements.content.insertAdjacentHTML("beforeend", html);
    document.querySelector(".loader").classList.remove("hidden");
}

export const clearLoader = () => document.querySelector(".loader").classList.add("hidden");