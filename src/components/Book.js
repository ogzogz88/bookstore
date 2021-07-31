import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../actions/cartActions"
import ToastMessage from "./ToastMessage"



function Book({ book, history }) {

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const [buttonText, setButtonText] = useState("Sepete ekle")
    const [buttonBg, setButtonBg] = useState("#007bff")
    const [quantity, setQuantity] = useState(1)
    const [show, setShow] = useState(false);


    const dispatch = useDispatch()


    useEffect(() => {
        let bookQuantity = cartItems.filter(el => el.id === book.id)[0]?.quantity
        console.log("bookQuantity in Book", bookQuantity);
        if (bookQuantity) {
            bookQuantity++
            setQuantity(bookQuantity)
        }
    }, [quantity, cartItems, book.id]);

    const addToCartHandler = () => {
        console.log("add to cart", book.id);
        // history.push(`/cart/${book.id}?quantity=${1}`)

        dispatch(addToCart(book.id, quantity))

        setTimeout(() => {
            setButtonText("Sepete eklendi")
            setButtonBg("#28a745")
            setShow(true)

        }, 1000);
        setTimeout(() => {
            setButtonText("Sepete ekle")
            setButtonBg("#007bff")
            setShow(false)
        }, 3000);

    }



    return (
        <Card className="rounded h-100 shadow">
            <Link to={`/book/${book.id}`} className="card-img-wrapper p-3">
                <Card.Img src={book.resim1} />
            </Link>
            <Card.Body className="d-flex flex-column justify-content-between p-3">
                <Link to={`/book/${book.id}`} className="text-dark mt--1">
                    <Card.Title as="p" className="font-weight-bold">
                        {book.kitap_adi}
                    </Card.Title>
                </Link>
                <Card.Text as="p" className="mt-auto">
                    {book.yazar}
                </Card.Text>
                <Button
                    variant="primary"
                    block
                    disabled={book.envanter === 0 || show}
                    onClick={addToCartHandler}
                    style={{ "background": `${buttonBg}`, "borderColor": `${buttonBg}` }}
                    className="button-transition mt-1"
                >
                    {buttonText}
                </Button>
            </Card.Body>
            <ToastMessage message="Ürün sepete eklendi" show={show} closeToast={() => setShow(false)} bg={"bg-success"} />
        </Card>
    )
}

export default withRouter(Book)