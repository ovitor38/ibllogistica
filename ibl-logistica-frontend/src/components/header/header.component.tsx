import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import './header.style.css'

const Header: React.FC = () => {
  return (
    <>
      <header className='header'>
        <Link to='/' className='logo'>
          <img
            src='https://ibllogistica.com.br/wp-content/themes/ibllogistica/img/logoibl_221x73.png'
            alt='Logo'
            className='logo-image'
          />
        </Link>
        <Link to='/' className='search-button'>
          <FaSearch className='search-icon' />
          <span className='search-text'>Nova Busca</span>
        </Link>
      </header>
      <div className='header-divider'></div>
    </>
  )
}

export default Header
