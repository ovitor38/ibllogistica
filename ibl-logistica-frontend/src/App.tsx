import React, { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home.page'
import BookDetailsPage from './pages/book-details.page'
// import BookDetailsPage from './pages/book-details.page'

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/book/:id' element={<BookDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
