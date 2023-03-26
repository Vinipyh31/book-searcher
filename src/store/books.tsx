import axios from "axios";
import { makeAutoObservable } from "mobx";
import { IBookItem } from "../components/types";
import { API_KEY } from "../config";

class Books {

    isLoading = false;
    startIndex: number = 0;

    bookList: IBookItem[] = [];
    bookItem: IBookItem = {} as IBookItem;

    constructor() {
        makeAutoObservable(this);
    }

    setIsLoading(value: boolean): void {
        this.isLoading = value;
    }
    setBookList(books: IBookItem[]): void {
        this.bookList = books;
    }

    setBookItem(book: IBookItem): void {
        this.bookItem = book;
    }

    async loadBookList(query: string) {
        this.startIndex = 0;
        this.setIsLoading(true);
        const req = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=30&key=${API_KEY}`);
        this.setBookList(req.data.items);
        this.setIsLoading(false);
    }

    async loadMoreBooks(query: string) {
        this.startIndex += 30;
        console.log(this.startIndex);
        const req = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${this.startIndex}&maxResults=30&key=${API_KEY}`);
        this.setBookList([...this.bookList, ...req.data.items]);
    }


    async loadBookItem(id: string) {
        const req = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        this.setBookItem(req.data.items);
    }
}


export default new Books();