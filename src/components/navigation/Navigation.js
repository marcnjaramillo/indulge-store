// import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Container} from 'react-bootstrap'
import cn from 'classnames'

import logo from '../../assets/images/brand-transparent.png'
import { CartIcon } from '../icons'

import styles from './Navigation.module.scss'

const Navigation = ({ cart }) => {

  // const [isOpen, setIsOpen] = useState(true)

  // const handleSelect = () => {
    
  // }

  return (
    <Navbar collapseOnSelect={true} expand='lg' className={styles.navbarBackground}>
      <Container fluid>
        <Nav.Link eventKey='1' as={NavLink} className={styles.navbar} to='/'>
          <img src={logo} className={styles.navbarImage} alt='brand logo' />
        </Nav.Link>
        <Nav.Link eventKey='2' as={NavLink} to='/cart'>
          <CartIcon cart={cart} />
        </Nav.Link>
        <Navbar.Toggle aria-controls='responsive-nabar-nav'/>
        <Navbar.Collapse id='responsive-nabar-nav'>
          <Nav className='me-auto mb-2 mb-lg-0' >
            <Nav.Link eventKey='3' as={NavLink} className='nav-link' to='/'>Home</Nav.Link>

            <Nav.Link eventKey='4' as={NavLink} className='nav-link' to='/bath-bombs'>Bath Bombs</Nav.Link>

            <Nav.Link eventKey='5' as={NavLink} className='nav-link' to='/bath-salts'>Bath Salts</Nav.Link>

            <Nav.Link eventKey='6' as={NavLink} className='nav-link' to='/candles'>Candles</Nav.Link>

          </Nav>
          <form className='d-flex'>
            <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
            <button className={cn('btn', styles.buttonSearch)} type='submit'>Search</button>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation