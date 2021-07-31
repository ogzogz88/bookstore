import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, ListGroup, Image, Form, Button, Card } from "react-bootstrap"
import Message from '../components/Message'
import { addToCart, removeFromCart, cleanCartAll } from "../actions/cartActions"
import { Trash } from 'react-bootstrap-icons';
import { ChevronRight } from 'react-bootstrap-icons';
import ToastMessage from "../components/ToastMessage"




function CartPage({ match, location, history }) {
    const bookId = match.params.id
    const quantity = location.search ? Number(location.search.split("=")[1]) : 1
    const [show, setShow] = useState(false);
    const [buttonText, setButtonText] = useState("SEPETİ TEMİZLE")
    const [buttonBg, setButtonBg] = useState("#f8f9fa")


    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (bookId) {
            dispatch(addToCart(bookId, quantity))
        }
    }, [dispatch, bookId, quantity])

    const handleQuantityChange = (e, item) => {
        const quantity = Number(e.target.value)
        dispatch(addToCart(item.id, quantity))
    }
    const handleRemoveFromCart = (id) => {
        console.log("remove", id);
        dispatch(removeFromCart(id))

    }
    const handleCheckout = () => {
        history.push("/login?redirect=shipping")
    }
    const handleCleanCart = () => {
        setTimeout(() => {
            setButtonText("SEPET TEMİZLENDİ")
            setButtonBg("#fae1e3")
            setShow(true)
        }, 1000)
        setTimeout(() => {
            setButtonText("SEPETİ TEMİZLE")
            setButtonBg("#f8f9fa")
            setShow(false)
        }, 2000)
        setTimeout(() => {
            dispatch(cleanCartAll())
        }, 2500)

    }
    return (
        <div>
            <h3 className="main-header">Sepetim</h3>
            <Row>
                <Col md={8}>

                    {
                        cartItems.length === 0 ? (
                            <Message variant="info" >
                                Sepetiniz boş! <Link to="/">Alışverişe devam et<ChevronRight /></Link>
                            </Message>
                        )
                            : (
                                <Card >
                                    <ListGroup variant="flush" >
                                        {cartItems.map(item => (
                                            <ListGroup.Item key={item.id}  >
                                                <Row>
                                                    <Col xs={6} md={2} className="text-center">
                                                        <Image src={item.resim1} alt={item.Aciklama} fluid rounded />
                                                    </Col>
                                                    <Col xs={6} md={10}>
                                                        <Row >
                                                            <Col md={4} >
                                                                <Link to={`/book/${item.id}`}>{item.kitap_adi}</Link>
                                                            </Col>
                                                            <Col md={2} className="text-md-center ">
                                                                <strong>{`₺${item.fiyat}`}</strong>
                                                            </Col>
                                                            <Col md={4} className="mt-2 mt-md-0">
                                                                <Form>
                                                                    <Form.Control
                                                                        as="select"
                                                                        value={item.quantity}
                                                                        onChange={(e) => handleQuantityChange(e, item)}
                                                                        custom
                                                                    >
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
                                                            <Col md={2} className="mt-2 mt-md-0">
                                                                <Button
                                                                    type="button"
                                                                    variant="light"
                                                                    block
                                                                    onClick={() => handleRemoveFromCart(item.id)}
                                                                >
                                                                    <Trash />

                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card>
                            )
                    }

                </Col>

                <Col md={4} className="mt-3 mt-md-0">
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item >
                                <h4>Ara Toplam</h4>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Toplam ürün sayısı:{" "}<strong>{cartItems.reduce((acc, item) => acc + Number(item.quantity), 0)}</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Toplam tutar:{" "}<strong>₺{(cartItems.reduce((acc, item) => (acc + Number(item.fiyat) * item.quantity), 0).toFixed(2))}</strong>

                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                    <Button
                        className="mt-3 button-transition"
                        variant="light"
                        block
                        disabled={cartItems.length === 0 || show}
                        onClick={handleCleanCart}
                        style={{ "background": `${buttonBg}`, "borderColor": `${buttonBg}` }}
                    >
                        {buttonText}
                    </Button>
                    <Button
                        className="mt-3"
                        variant="success"
                        block
                        disabled={cartItems.length === 0}
                        onClick={handleCheckout}
                    >
                        ALIŞVERİŞİ TAMAMLA
                    </Button>

                </Col>
            </Row>
            <ToastMessage message="Sepet temizlendi" show={show} closeToast={() => setShow(false)} bg={"bg-danger"} />
        </div>
    )
}

export default CartPage
