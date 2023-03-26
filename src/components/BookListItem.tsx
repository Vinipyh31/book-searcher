import React from 'react';
import { IBookItem } from './types';

interface Props {
    book: IBookItem;
}

const BookListItem = ({ book }: Props) => {
    return (
        <div className='book-list_item'>
            <img className='book-list_item--image' src={book.volumeInfo.imageLinks?.thumbnail} alt={`${book.volumeInfo.title}`}/>
            <span className='book-list_item--category'>{book.volumeInfo.categories}</span>
            <h1 className='book-list_item--title'>{book.volumeInfo.title}</h1>
            <div className='book-list_item--authors'>
                {book.volumeInfo.authors?.join(', ')}
            </div>
        </div>
    );
};

export default BookListItem;
