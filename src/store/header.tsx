import axios from "axios";
import { makeAutoObservable } from "mobx";
import { CategoriesTypes, IBookItem, SortTypes } from "../components/types";
import { API_KEY } from "../config";



class HeaderStore {

    inputValue: string = "";
    category: CategoriesTypes = "all";
    sort: SortTypes = "relevance";

    constructor() {
        makeAutoObservable(this);
    }

    setInputValue(value: string) {
        this.inputValue = value;
    }

    setCategory(value: CategoriesTypes) {
        this.category = value;
    }
    setSort(value: SortTypes) {
        this.sort = value;
    }
}


export default new HeaderStore();