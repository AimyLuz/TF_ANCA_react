import React from "react";
import "./NavBar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./img/logo.png";
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid>
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Guitarras" id="basic-nav-dropdown" className="items_menu categories">
              <NavDropdown.Item as={NavLink} activeclassname="active" to="/category/guitarras_acusticas" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Guitarras Acústicas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} activeclassname="active" to="/category/guitarras_electricas" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Guitarras Eléctricas</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Percusión" id="basic-nav-dropdown" className="items_menu">
              <NavDropdown.Item as={NavLink} activeclassname="active" to="/category/baterias_acusticas" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Baterías Acústicas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} activeclassname="active" to="/category/baterias_electronicas" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Baterías Electrónicas</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Teclados y Pianos" id="basic-nav-dropdown" className="items_menu">
              <NavDropdown.Item as={NavLink} activeclassname="active" to="/category/teclados" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Teclados</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} activeclassname="active" to="/category/pianos" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pianos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Vientos" id="basic-nav-dropdown" className="items_menu">
              <NavDropdown.Item as={NavLink} activeclassname="active" to="/category/saxofones" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Saxofones</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} activeclassname="active" to="/category/trompetas" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Trompetas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex buscardor">
            <Form.Control
              type="search"
              placeholder="Buscar productos, marcas y más"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success boton_buscar">Buscar</Button>
          </Form>
          <NavLink style={{ textDecoration: 'none' }} to='/cart'><CartWidget /></NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
