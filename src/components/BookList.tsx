import { observer } from 'mobx-react-lite'
import React from 'react'
import books from '../store/books'
import BookListItem from './BookListItem'

const BookList = observer(() => {
    return (
        <>
            <div className='book-list'>
                {books.bookList.map(book => <BookListItem key={book.id} book={book} />)}
            </div>
        </>
    )
}
)

export default BookList