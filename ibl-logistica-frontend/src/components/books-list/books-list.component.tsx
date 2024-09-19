import React, { FunctionComponent, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './books-list.style.css'
import { fieldLabels, SearchFields } from '../../enum/field/field.enum'

interface BookList {
  id: number
  title: string
  author: string
  isbn: string
  page_count: number
  edition: string
  publisher: string
}

const BooksList: FunctionComponent = () => {
  const [books, setBooks] = useState<BookList[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [searchField, setSearchField] = useState<SearchFields>(
    SearchFields.TITLE
  )
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const allowedFields = Object.values(SearchFields)

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    try {
      const response = await axios.get<{ books: BookList[] }>(
        'http://localhost:8000/api/books'
      )
      setBooks(response.data.books)
    } catch (err) {
      setError('Erro ao buscar livros')
    }
  }

  const handleSearch = async () => {
    try {
      const response = await axios.get<{ books: BookList[] }>(
        `http://localhost:8000/api/books?${searchField}=${searchTerm}`
      )
      setBooks(response.data.books)
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message)
      } else {
        setError('Erro ao buscar livros')
      }
    }
  }

  const goToDetails = (id: number) => {
    navigate(`/book/${id}`)
  }

  return (
    <div className='books-list-container'>
      <h1>Lista de Livros</h1>

      <div className='search-container'>
        <input
          type='text'
          placeholder='Buscar...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={searchField}
          onChange={(e) => setSearchField(e.target.value as SearchFields)}
        >
          {allowedFields.map((field) => (
            <option key={field} value={field}>
              {fieldLabels[field as SearchFields]}
            </option>
          ))}
        </select>

        <button onClick={handleSearch}>Buscar</button>
      </div>

      {error && <p className='error-message'>{error}</p>}

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author}{' '}
            <button onClick={() => goToDetails(book.id)}>Ver Detalhes</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BooksList
