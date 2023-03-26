import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import BookPage from './pages/BookPage'
import Books from './pages/Books'

const AppRouter = () => {
  return (
      <Routes>
          <Route key='/books' path='/books' element={<Books/>} />
          <Route key='/book/:id' path='/book/:id' element={<BookPage/>} />
          <Route
              path="*"
              element={<Navigate to="/books" replace />}
          />
      </Routes>
  )
}

export default AppRouter