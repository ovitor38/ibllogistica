import React, { FunctionComponent, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { FaEdit, FaSave, FaTrashAlt, FaTimes } from 'react-icons/fa'
import './book-details.css'

interface Book {
  id: number
  title: string
  author: string
  isbn: string
  page_count: number
  edition: string
  publisher: string
}

const BookDetails: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>()
  const [book, setBook] = useState<Book | null>(null)
  const [isEditing, setIsEditing] = useState<{ [key: string]: boolean }>({})
  const [updatedBook, setUpdatedBook] = useState<Book | null>(null)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchBookDetails()
  }, [id])

  const fetchBookDetails = async () => {
    try {
      const response = await axios.get<{ book: Book }>(
        `http://localhost:8000/api/books/${id}`
      )
      setBook(response.data.book)
      setUpdatedBook(response.data.book)
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message)
      } else {
        setError('Erro ao buscar detalhes do livro')
      }
    }
  }

  const handleEditClick = (field: keyof Book) => {
    setIsEditing({ ...isEditing, [field]: true })
  }

  const handleInputChange = (field: keyof Book, value: string | number) => {
    if (updatedBook) {
      setUpdatedBook({ ...updatedBook, [field]: value })
    }
  }

  const handleSave = async () => {
    if (!updatedBook) return

    try {
      await axios.put(`http://localhost:8000/api/books/${id}`, updatedBook)
      setBook(updatedBook)
      setIsEditing({})
      alert('Livro atualizado com sucesso')
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message)
      } else {
        setError('Erro ao atualizar o livro')
      }
    }
  }

  const handleCancel = () => {
    setUpdatedBook(book)
    setIsEditing({})
  }

  const handleDelete = async () => {
    if (window.confirm('Tem certeza que deseja excluir este livro?')) {
      try {
        await axios.delete(`http://localhost:8000/api/books/${id}`)
        navigate('/')
      } catch (err) {
        setError('Erro ao excluir o livro')
      }
    }
  }

  if (error) {
    return <p className='error-message'>{error}</p>
  }

  if (!book) {
    return <p>Carregando detalhes do livro...</p>
  }

  return (
    <div className='book-details-container'>
      <h1>Detalhes do Livro</h1>
      <div className='field'>
        <strong>Título:</strong>
        {isEditing.title ? (
          <input
            type='text'
            value={updatedBook?.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
          />
        ) : (
          <span>{book.title}</span>
        )}
        <button onClick={() => handleEditClick('title')}>
          {isEditing.title ? <FaSave /> : <FaEdit />}
        </button>
      </div>

      <div className='field'>
        <strong>Autor:</strong>
        {isEditing.author ? (
          <input
            type='text'
            value={updatedBook?.author}
            onChange={(e) => handleInputChange('author', e.target.value)}
          />
        ) : (
          <span>{book.author}</span>
        )}
        <button onClick={() => handleEditClick('author')}>
          {isEditing.author ? <FaSave /> : <FaEdit />}
        </button>
      </div>

      <div className='field'>
        <strong>ISBN:</strong>
        {isEditing.isbn ? (
          <input
            type='text'
            value={updatedBook?.isbn}
            onChange={(e) => handleInputChange('isbn', e.target.value)}
          />
        ) : (
          <span>{book.isbn}</span>
        )}
        <button onClick={() => handleEditClick('isbn')}>
          {isEditing.isbn ? <FaSave /> : <FaEdit />}
        </button>
      </div>

      <div className='field'>
        <strong>Número de Páginas:</strong>
        {isEditing.page_count ? (
          <input
            type='number'
            value={updatedBook?.page_count}
            onChange={(e) =>
              handleInputChange('page_count', Number(e.target.value))
            }
          />
        ) : (
          <span>{book.page_count}</span>
        )}
        <button onClick={() => handleEditClick('page_count')}>
          {isEditing.page_count ? <FaSave /> : <FaEdit />}
        </button>
      </div>

      <div className='field'>
        <strong>Edição:</strong>
        {isEditing.edition ? (
          <input
            type='text'
            value={updatedBook?.edition}
            onChange={(e) => handleInputChange('edition', e.target.value)}
          />
        ) : (
          <span>{book.edition}</span>
        )}
        <button onClick={() => handleEditClick('edition')}>
          {isEditing.edition ? <FaSave /> : <FaEdit />}
        </button>
      </div>

      <div className='field'>
        <strong>Editora:</strong>
        {isEditing.publisher ? (
          <input
            type='text'
            value={updatedBook?.publisher}
            onChange={(e) => handleInputChange('publisher', e.target.value)}
          />
        ) : (
          <span>{book.publisher}</span>
        )}
        <button onClick={() => handleEditClick('publisher')}>
          {isEditing.publisher ? <FaSave /> : <FaEdit />}
        </button>
      </div>

      {Object.keys(isEditing).some((key) => isEditing[key as keyof Book]) && (
        <div className='save-container'>
          <button onClick={handleSave} className='save-btn'>
            <FaSave /> Salvar Alterações
          </button>
          <button onClick={handleCancel} className='cancel-btn'>
            <FaTimes /> Cancelar
          </button>
        </div>
      )}

      <div className='book-details-actions'>
        <button onClick={handleDelete} className='delete-btn'>
          <FaTrashAlt /> Excluir
        </button>
      </div>
    </div>
  )
}

export default BookDetails
