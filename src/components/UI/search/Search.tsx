import React from 'react'
import books from '../../../store/books'
import header from '../../../store/header'
import cl from "./Search.module.css"
import search from "../../../images/search.svg"
import { observer } from 'mobx-react-lite'


const Search = observer(() => {

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    header.setInputValue(e.target.value);
  }

  const loadBookList = (): void => {
    books.loadBookList(header.inputValue);
  }

  const onSearch = (e: React.MouseEvent<HTMLImageElement>): void => {
    loadBookList();
  }

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      loadBookList();
    }
  }

  return (
    <div className={cl.search}>
      <input
        className={cl.searchInput}
        type="text"
        value={header.inputValue}
        onChange={onInputChange}
        onKeyDown={onEnter}
      />
      <img src={search} alt="search-btn" className={cl.searchBtn} onClick={onSearch} />
    </div>
  )
}
)

export default Search