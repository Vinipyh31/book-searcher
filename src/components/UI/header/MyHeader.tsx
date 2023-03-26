import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'
import books from '../../../store/books'
import header from '../../../store/header';
import cl from "./MyHeader.module.css"


const MyHeader = observer(() => {

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        header.setInputValue(e.target.value);
    }

    const onSearch = (e: React.MouseEvent<HTMLInputElement, MouseEvent>): void => {
        books.loadBookList(header.inputValue);
    }

    return (
        <div className={cl.header}>
            <div className={cl.headerContent}>
                <h1>Search for books</h1>
                <input type="text" value={header.inputValue} onChange={onInputChange} />
                <input type="button" value="Поиск" onClick={onSearch} />
            </div>
        </div>
    )
})

export default MyHeader