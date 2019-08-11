import axios from 'axios';
import { key, proxy } from '../config';
import { elements } from '../views/base';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${this.query}`);
            this.result = res;
        }
        catch (error) {
            alert(error);
        }
    }
}

