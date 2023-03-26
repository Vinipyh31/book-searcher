import React, { useState } from 'react'
import BookList from '../BookList'
import Loader from '../UI/Loader/Loader'
import { observer } from 'mobx-react-lite'
import books from '../../store/books'
import '../../styles/Books.css';
import Pagination from '../UI/pagination/Pagination'



// 

const Books = observer(() => {
  return (
    <>
      {
        books.isLoading ?
          <Loader />
          :
          <>
            <BookList />
            {books.bookList.length && 
              <Pagination/>
            }
          </>
      }
    </>
  )
})

export default Books