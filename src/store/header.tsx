import axios from "axios";
import { makeAutoObservable } from "mobx";
import { IBookItem } from "../components/types";
import { API_KEY } from "../config";

class HeaderStore {

    inputValue: string = "";

    constructor() {
        makeAutoObservable(this);
    }

    setInputValue(value: string) {
        this.inputValue = value;
    }

}


export default new HeaderStore();