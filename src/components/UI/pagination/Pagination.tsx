import React from 'react'
import books from '../../../store/books';
import header from '../../../store/header';
import cl from "./Pagination.module.css"


const Pagination = () => {

    const onLoadMore = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        books.loadMoreBooks(header.inputValue);
    }

    return (
        <div className={cl.paginationContainer}>
            <button onClick={onLoadMore}>Загрузить еще</button>
        </div>
    )
}

export default Pagination