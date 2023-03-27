import axios from "axios";
import { makeAutoObservable } from "mobx";
import { IBookItem, IBookRequest } from "../components/types";
import { API_KEY } from "../config";
import header from "./header";

class Books {

    private startIndex = 0;

    totalBooks = 0;
    isLoading = false;
    bookList: IBookItem[] = [];
    bookItem: IBookItem | undefined;

    constructor() {
        makeAutoObservable(this);
    }

    setStartIndex(index: number) {
        this.startIndex = index;
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

    setTotalBooks(items: number): void {
        this.totalBooks = items;
    }

    async loadBookList(query: string) {
        this.setStartIndex(0);
        this.setIsLoading(true);
        const req = await axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
                q: `${query} ${header.category === 'all' ? '' : `subject:${header.category}`}`,
                orderBy: header.sort,
                maxResults: 30,
                key: API_KEY
            }
        });
        const data: IBookRequest = req.data;
        this.setTotalBooks(data.totalItems)
        this.setBookList(data.items);
        this.setIsLoading(false);
    }

    async loadMoreBooks(query: string) {
        this.setStartIndex(this.startIndex + 30);
        const req = await axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
                q: `${query} ${header.category === 'all' ? '' : `subject:${header.category}`}`,
                orderBy: header.sort,
                startIndex: this.startIndex,
                maxResults: 30,
                key: API_KEY
            }
        });
        this.setBookList([...this.bookList, ...req.data.items]);
    }


    async loadBookItem(id: string) {
        this.setIsLoading(true);
        const req = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);        
        this.setBookItem(req.data);
        this.setIsLoading(false);
    }
}


export default new Books();