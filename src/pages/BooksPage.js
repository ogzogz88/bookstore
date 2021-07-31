import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from "react-bootstrap"
import Book from "../components/Book"
import Loader from "../components/Loader"
import Message from "../components/Message"
import { listBooks } from '../actions/bookActions';
import booksDemo from "../booksDemo"



function BooksPage() {
    const dispatch = useDispatch();
    const bookList = useSelector(state => state.bookList);
    useEffect(() => {
        dispatch(listBooks);
    }, [dispatch]);


    const { error, loading, books } = bookList;
    if (books.length === 0) {
        return (
            <div>
                <h3 className="main-header">Son Kitaplar</h3>

                <Row className="mt--1">
                    {booksDemo.map(book => (
                        <Col key={book.id} xs={6} lg={3} className="py-3 book-card" >
                            <Book book={book} />
                        </Col>
                    ))}
                </Row>
            </div>

        )
    } else

        return (
            <div>
                <h3 className="main-header">Son Kitaplar</h3>
                {
                    loading ? <Loader />
                        : error ? <Message variant="danger">{error}</Message>
                            :
                            <Row>
                                {books.map(book => (
                                    <Col key={book.id} xs={12} sm={6} lg={3} className="py-3 book-card" >
                                        <Book book={book} className="book-card" />
                                    </Col>
                                ))}
                            </Row>
                }
            </div>
        )
}

export default BooksPage
