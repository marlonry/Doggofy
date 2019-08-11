// css
import '../sass/styles.scss';

//models
import Search from './models/Search';

//views 
import * as searchView from './views/searchView';

//interface
import { transitionFix, goLeft, goRight, setScroll, stopFunc, goLeftContinously, goRightContinously } from './interface';

//html elements
import { elements, renderLoader, clearLoader} from './views/base'




const state = {}

// search controller

const searchController = async () => {
    // get query store in the variable
    const query = searchView.getQuery();

    if(query) {
        // create the search object and store in the state
        state.search = new Search(query); 
        

        // clean the ui
        searchView.cleanInput();
        searchView.cleanSlider();
        searchView.clearButtons();
        searchView.clearContent();


        // API _____________________________________ https://docs.thedogapi.com/api-reference/breeds/breeds-search

        renderLoader();

        // get results through the instance object
        await state.search.getResults();

        clearLoader();
        
        await searchView.showResults(state.search.data);
    }

    console.log(state.search);
    console.log(query);
}

elements.content.addEventListener('click', e => {
    if(e.target.matches(".search__icon, .search__icon *")) searchController();
});





// transition fix for the load event on the page

transitionFix();

// handling events for scroll

elements.sliderContainer.addEventListener('scroll', setScroll);
elements.left.addEventListener('click', goLeft);
elements.right.addEventListener('click', goRight);
elements.left.addEventListener('mousedown', goLeftContinously);
elements.right.addEventListener('mousedown', goRightContinously);

elements.left.addEventListener('mouseup', stopFunc);
elements.right.addEventListener('mouseup', stopFunc);
elements.left.addEventListener('mouseleave', stopFunc);
elements.right.addEventListener('mouseleave', stopFunc);