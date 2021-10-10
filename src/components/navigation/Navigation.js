// import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, InputGroup, Form, FormControl, Navbar, Nav } from 'react-bootstrap'
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
      <div>
        <div className={styles.navContainer}>
        <Nav.Link eventKey='1' as={NavLink} className={styles.navbar} to='/'>
          <img src={logo} className={styles.navbarImage} alt='brand logo' />
        </Nav.Link>
        <Form className={styles.searchForm}>
          <InputGroup className="mb-3">
            <FormControl
              className={styles.formInput}
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <Button bsPrefix='buttonSearch' className={styles.buttonSearch}  id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </Form>
        <Nav.Link className={styles.customerCart} eventKey='2' as={NavLink} to='/cart'>
          <CartIcon cart={cart} />
        </Nav.Link>
        </div>
        <Navbar.Toggle
          className={styles.toggleButton} 
          aria-controls='responsive-nabar-nav' 
        />
        <Navbar.Collapse bsPrefix='responsiveNav' className={styles.responsiveNav} id='responsive-nabar-nav'>
          <Nav className={cn(styles.navLinks, 'me-auto mb-2 mb-lg-0')} >
            <Nav.Link eventKey='3' as={NavLink} className='nav-link' to='/'>Home</Nav.Link>

            <Nav.Link eventKey='4' as={NavLink} className='nav-link' to='/bath-bombs'>Bath Bombs</Nav.Link>

            <Nav.Link eventKey='5' as={NavLink} className='nav-link' to='/bath-salts'>Bath Salts</Nav.Link>

            <Nav.Link eventKey='6' as={NavLink} className='nav-link' to='/candles'>Candles</Nav.Link>
            <Form className={styles.searchFormCollapse}>
              <InputGroup className="mb-3">
                <FormControl
                  className={styles.formInput}
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <Button bsPrefix='buttonSearch' className={styles.buttonSearch}  id="button-addon2">
                  Search
                </Button>
              </InputGroup>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Navigation