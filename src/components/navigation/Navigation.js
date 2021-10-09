import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import logo from '../../assets/images/brand-transparent.png'
import { CartIcon } from '../icons'

import styles from './Navigation.module.scss'

const Navigation = ({ cart }) => {

  const [isOpen, setIsOpen] = useState(true)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <NavLink className={cn(styles.navbar, 'navbar-brand')} to='/'>
          <img src={logo} className={styles.navbarImage} alt='brand logo' />
        </NavLink>
        <NavLink to='/cart'>
          <CartIcon cart={cart} />
        </NavLink>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded={!isOpen ? true : false} aria-label='Toggle navigation' onClick={toggleOpen}>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className={`${isOpen ? 'collapse' : ''} navbar-collapse`} id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink className='nav-link active' aria-current='page' to='/' onClick={toggleOpen}>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/bath-bombs' onClick={toggleOpen}>Bath Bombs</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/bath-salts' onClick={toggleOpen}>Bath Salts</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/candles' onClick={toggleOpen}>Candles</NavLink>
            </li>
          </ul>
          <form className='d-flex'>
            <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
            <button className='btn btn-outline-success' type='submit'>Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navigation