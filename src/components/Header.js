import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, InputGroup, Badge } from 'react-bootstrap'
import logo from "../assets/logo.png";
import { CartFill } from 'react-bootstrap-icons';
import { PersonFill } from 'react-bootstrap-icons';
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux"

function Header() {
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    const { quantity } = cartItems.length > 0 ? cartItems.reduce((a, b) => ({ quantity: Number(a.quantity) + Number(b.quantity) })) : { quantity: 0 }
    console.log("itemCountInCart ", quantity);
    return (
        <header >
            <Container>
                <Row className="d-block d-md-flex">
                    <Col className="d-flex align-items-center col-lg-3 my-3">
                        <LinkContainer to="/">
                            <Navbar.Brand className="text-light font-weight-bold text-uppercase" >
                                <img className="logo" src={logo} alt="Ardıç Kitabevi" />
                            </Navbar.Brand>
                        </LinkContainer>
                    </Col>
                    <Col className="d-flex align-items-center col-lg-6 my-3">
                        <Form className="search-form">
                            <InputGroup>
                                <FormControl
                                    placeholder="Kitap ara..."
                                    aria-label="Kitap ara..."
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button variant="primary">Ara</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                    </Col>
                    <Col className="col-lg-3 my-3" >
                        <Row className="justify-content-md-end icon-main-container">
                            <div className="icon-wrapper">
                                <LinkContainer to="/cart">
                                    <Nav.Link className="text-light icon-main" >
                                        <CartFill className="text-secondary" size={25} />
                                        <Badge variant="primary">{quantity}</Badge>
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/cart">
                                    <Nav.Link className="pt-0 pb-0">
                                        <span className="text-center">Sepetim</span>
                                    </Nav.Link>
                                </LinkContainer>
                            </div>
                            <div className="icon-wrapper">
                                <LinkContainer to="/login">
                                    <Nav.Link className="text-light icon-main ">
                                        <PersonFill className="text-secondary" size={25} />
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/login">
                                    <Nav.Link className="pt-0 pb-0">
                                        <span className="text-center "> Giriş Yap</span>
                                    </Nav.Link>
                                </LinkContainer>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Navbar collapseOnSelect className="px-md-5" bg="primary" expand="md">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "#e2e6ea" }} />
                    <Navbar.Collapse className="" id="basic-navbar-nav">
                        <Nav className=" ">
                            <Nav.Link className="text-light" href="/">Anasayfa</Nav.Link>
                            <Nav.Link className="text-light" href="/schools">Okullar</Nav.Link>
                            <Nav.Link className="text-light" href="/about">Hakkımızda</Nav.Link>
                            <Nav.Link className="text-light" href="/contact">İletişim</Nav.Link>
                            <Nav.Link className="text-light" href="/books-with-id">TC</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </header>
    )
}

export default Header
