import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { listBookDetails } from "../actions/bookActions"
import { Link } from "react-router-dom"
import { Row, Col, Image, ListGroup, Button, Card, Form, ListGroupItem } from "react-bootstrap"
import { ChevronLeft } from 'react-bootstrap-icons';
import ToastMessage from "../components/ToastMessage"


import Loader from "../components/Loader"
import Message from "../components/Message"
import booksDemo from "../booksDemo"


function BookDetailPage({ match, history }) {
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const [buttonText, setButtonText] = useState("Sepete ekle")
    const [buttonBg, setButtonBg] = useState("#007bff")
    const [quantity, setQuantity] = useState("1");

    const dispatch = useDispatch()
    const bookDetails = useSelector(state => state.bookDetails)
    const { loading, error, book2 } = bookDetails
    const [show, setShow] = useState(false);


    // const book = books.find(book => book.id === match.params.id);
    const [book, setBook] = useState([]);

    useEffect(() => {
        dispatch(listBookDetails(match.params.id))
        // async function fetchBooks() {
        //     const data = await axios.get(`/books/${match.params.id}`)
        //     setBook(data);
        // }
        // fetchBooks();
        if (book.length === 0) {
            const book = booksDemo.find(book => book.id === match.params.id);
            const bookQuantity = cartItems.filter(el => el.id === match.params.id)[0]?.quantity
            console.log("quantity", bookQuantity);
            if (bookQuantity) {
                setQuantity(bookQuantity)

            }
            setBook(book)
        }
        // return () => {
        //     cleanup
        // };
    }, [dispatch, match]);

    const addToCartHandler = () => {
        console.log("add to cart", match.params.id);
        setTimeout(() => {
            setButtonText("Sepete eklendi")
            setButtonBg("#28a745")
            setShow(true)

        }, 1000);
        setTimeout(() => {
            setButtonText("Sepete ekle")
            setButtonBg("#007bff")
            setShow(false)

            history.push(`/cart/${match.params.id}?quantity=${quantity}`)

        }, 2000);
    }

    //automate going to previous page, istead of specifying it statically using <Link to="address to go"
    const goToPreviousPath = () => {
        // history.push("/")
        history.goBack()
    }


    const handleQuantityChange = (e) => {
        const value = e.target.value
        setQuantity(value)
    }
    return (
        <div>
            <Link to="" onClick={goToPreviousPath} className="btn btn-outline-dark my-3"><ChevronLeft className="mr-2" />GERİ</Link>

            {/* {
                loading ?
                    <Loader />
                    : error
                        ? <Message variant="danger">{error}</Message>
                        : ( */}
            <Row >
                <Col md={3}>
                    <Card className="rounded shadow-sm">
                        <Image src={book.resim1} alt={book.kitap_adi} className="p-3" />
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="rounded shadow-sm">
                        <Card.Body>
                            <ListGroup variant="flush" >
                                <ListGroup.Item><h5 className="text-primary">{book.kitap_adi}</h5></ListGroup.Item>
                                <ListGroup.Item><h6>{book.yazar}</h6></ListGroup.Item>
                                <ListGroup.Item>{book.Aciklama}</ListGroup.Item>
                                <ListGroup.Item><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae inventore debitis incidunt quidem ipsam qui facere recusandae dolorum repellat! Aperiam nulla repellendus a voluptates asperiores cumque necessitatibus fuga amet rerum.</p> </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="rounded shadow-sm">
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Fiyat :
                                        </Col>
                                        <Col>
                                            <strong>{`₺${book.fiyat}`}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Stok :
                                        </Col>
                                        <Col>
                                            <strong>
                                                {
                                                    book.envanter > 0 ? "Mevcut" : "Tükendi"
                                                }
                                            </strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                {
                                    book.envanter > 0 && (
                                        <ListGroupItem>
                                            <Row>
                                                <Col>Miktar</Col>
                                                <Col>
                                                    <Form>
                                                        <Form.Control
                                                            as="select"
                                                            value={quantity}
                                                            onChange={(e) => handleQuantityChange(e)}
                                                            custom
                                                        >
                                                            {/* [...Array(book.envanter).keys()].map(count => { */}
                                                            {
                                                                [...Array(5).keys()].map(count => {
                                                                    return (
                                                                        <option key={count + 1} value={count + 1}>
                                                                            {count + 1}
                                                                        </option>
                                                                    )

                                                                })
                                                            }

                                                        </Form.Control>
                                                    </Form>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                    )
                                }
                                <Button
                                    variant="primary"
                                    block
                                    disabled={book.envanter === 0 || show}
                                    type="button"
                                    onClick={addToCartHandler}
                                    style={{ "background": `${buttonBg}`, "borderColor": `${buttonBg}` }}
                                    className="button-transition mt-3"
                                >
                                    {buttonText}
                                </Button>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row >
            <ToastMessage message="Ürün sepete eklendi" show={show} closeToast={() => setShow(false)} bg={"bg-success"} />

        </div >
    )
}

export default BookDetailPage
