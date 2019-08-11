import { elements } from "./base";

export const getQuery = () => elements.searchInput.value;

export const cleanInput = () => elements.searchInput.value = "";

export const cleanSlider = () => { 
    elements.sliderMain.innerHTML = ""
    elements.sliderMain.classList.add("hidden");
};

export const clearContent = () => {
    while (elements.content.children.length > 1) {
        elements.content.removeChild(elements.content.lastChild);
    }

    console.log(elements.content.children);
}

export const clearButtons = () => {
    elements.left.classList.add("hidden");
    elements.right.classList.add("hidden");
};

export const showResults = (obj) => {
    const html = `
        <div class="results">
            <h1 class="results__heading">Choose a Dog</h1>

            <div class="card-small">
                <figure class="card-small__figure">
                    <img class="card-small__image" src="img/dog3.jpg" alt="Dog 1 Image">
                </figure>

                <h2 class="card-small__info">
                    Entlebucher <span class="card-small__attributes">Bold, Happy, Strong</span>
                </h2>

                <div class="btn-add btn-add--animated">
                    <i class="icon icon-plus icon--white"></i>
                </div>
            </div>
        </div>
    `

    elements.content.insertAdjacentHTML("beforeend", html);
}