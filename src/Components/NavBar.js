import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'; // FontAwesome search icon
import '../style.css';
import React, { useState } from 'react';

function NavScroll({ SearchFilter }) {
  const [value, setValue] = useState('');
  const [showSearch, setShowSearch] = useState(false); // toggle search on small screen

  const OnSearch = (e) => {
    e.preventDefault();
    if (value.trim() !== '') {
      SearchFilter(value.trim());
    }
    setValue('');
    setShowSearch(false); // close search after submit
  };

  return (
    <Row>
      <Navbar bg='dark' variant='dark' expand='lg' className='py-2'>
        <Container>
          <Navbar.Brand href='#'>
            <div className='brand-color'>مـطـعـم جـديـد</div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='navbarScroll'
            onClick={() => setShowSearch(!showSearch)}>
            <FaSearch style={{ color: 'white' }} />
          </Navbar.Toggle>
          <Navbar.Collapse id='navbarScroll' className='justify-content-end'>
            <Nav className='me-auto' navbarScroll></Nav>

            {/* Desktop search (always visible on lg and up) */}
            <Form className='d-none d-lg-flex' onSubmit={OnSearch}>
              <Form.Control
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type='text'
                placeholder='ابحـث'
                className='me-2'
              />
              <button type='submit' className='btn-search me-3'>
                بحـث
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile search (same style as desktop) */}
      {showSearch && (
        <Container fluid className='bg-dark py-2 d-lg-none'>
          <Form className='d-flex px-2' onSubmit={OnSearch}>
            <Form.Control
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type='text'
              placeholder='ابحـث'
              className='me-2'
            />
            <button type='submit' className='btn-search me-3'>
              بحـث
            </button>
          </Form>
        </Container>
      )}
    </Row>
  );
}

export default NavScroll;
