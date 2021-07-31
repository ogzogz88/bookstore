import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { Row, Col, Image, ListGroup, Button, Card, Form } from "react-bootstrap"
import { ChevronLeft } from 'react-bootstrap-icons';
import axios from "axios"
import schoolsDemo from "../schoolsDemo"
import Message from '../components/Message';
import Book from "../components/Book"
import { addToCart } from "../actions/cartActions"
import { useDispatch } from "react-redux"
import ToastMessage from "../components/ToastMessage"



function SchoolDetailPage({ match, history }) {
    // const book = books.find(school => school.id === match.params.id);
    const [school, setSchool] = useState([]);
    const [schoolClass, setSchoolClass] = useState("9")
    const [buttonText, setButtonText] = useState("Tümünü Sepete ekle")
    const [buttonBg, setButtonBg] = useState("#007bff")
    const [show, setShow] = useState(false);


    const dispatch = useDispatch()


    useEffect(() => {
        // async function fetchBooks() {
        //     const data = await axios.get(`/schools/${match.params.id}`)
        //     setSchool(data);
        // }
        // fetchBooks();
        if (school.length === 0) {
            const school = schoolsDemo.find(school => school.id === match.params.id);

            setSchool(school)
        }
        // return () => {
        //     cleanup
        // };
    }, []);

    let schoolClassBooks = []
    let total = 0
    const addBooks = () => {
        let books = school.books?.filter(item => item.sinif === schoolClass) ? school.books?.filter(item => (item.sinif === schoolClass) && (item.envanter > 0)) : [];
        if (books.length > 0) {
            schoolClassBooks = [...books]
            total = schoolClassBooks.reduce((acc, el) => (acc + el.fiyat), 0)
        }
    }
    addBooks();



    const handleSelect = (e) => {
        let value = e.target.value;
        setSchoolClass(value);
    }

    const handleAddToCartAll = () => {
        schoolClassBooks.forEach(el => {
            dispatch(addToCart(el.id, 1))

        })
        setTimeout(() => {
            setButtonText("Tümü sepete eklendi")
            setButtonBg("#28a745")
            setShow(true)
        }, 1000);
        setTimeout(() => {
            setButtonText("Tümünü sepete ekle")
            setButtonBg("#007bff")
            setShow(false)

            history.push(`/cart`)
        }, 3000);


    }
    return (
        <div>
            <Link to="/schools" className="btn btn-outline-dark my-3"><ChevronLeft className="mr-2" />GERİ</Link>
            <Row>
                <Col md={3}>
                    <Card className="rounded shadow-sm">
                        <Image src={school.logo} alt={school.okul_adi} className=" p-3" />
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="rounded shadow-sm">
                        <Card.Body>
                            <ListGroup variant="flush" >
                                {/* <ListGroup.Item><h5 className="text-primary">{school.kitap_adi}</h5></ListGroup.Item> */}
                                <ListGroup.Item><h5 className="text-primary">{school.okul_adi}</h5></ListGroup.Item>
                                <ListGroup.Item><h5 className="text-primary">{`${schoolClass}. Sınıf`}</h5></ListGroup.Item>
                                <ListGroup.Item>{school.aciklama}</ListGroup.Item>
                                <ListGroup.Item><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae inventore debitis incidunt quidem ipsam qui facere recusandae dolorum repellat! Aperiam nulla repellendus a voluptates asperiores cumque necessitatibus fuga amet rerum.</p> </ListGroup.Item>
                                <ListGroup.Item>
                                    <Form inline>
                                        <Form.Group as={Col} controlId="classState" className="m-0 p-0">
                                            <Form.Label><h6>Sınıf Seçiniz</h6></Form.Label>
                                            <Form.Control
                                                as="select"
                                                value={schoolClass}
                                                className="ml-md-3"
                                                onChange={(e) => handleSelect(e)}
                                                custom
                                            >
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </ListGroup.Item>
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
                                            Fiyat:
                                        </Col>
                                        <Col>
                                            <strong>₺{total}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Stok :
                                        </Col>
                                        <Col>
                                            <strong>{schoolClassBooks.length > 0 ? "Mevcut" : "Tükendi"}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <Button
                                    variant="primary"
                                    block
                                    disabled={schoolClassBooks.length === 0 || show}
                                    type="button"
                                    onClick={handleAddToCartAll}
                                    style={{ "background": `${buttonBg}`, border: `${buttonBg}` }}
                                    className="button-animation mt-3"
                                >
                                    {buttonText}
                                </Button>

                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div>
                {
                    schoolClassBooks.length > 0 ?
                        <div>
                            <h3 className="main-header">{`${school.okul_adi} - ${schoolClass}. Sınıf`}</h3>
                            <Row>
                                {
                                    schoolClassBooks.map(book => (
                                        <Col key={book.id} xs={6} lg={3} className="py-3 book-card" >
                                            <Book book={book} />
                                        </Col>
                                    ))}
                            </Row>
                        </div> :
                        <div className="mt-3">
                            <Message variant="danger" ><strong > {`${school.okul_adi} - ${schoolClass}. Sınıf kitabı bulunmamaktadır.`}</strong></Message>
                        </div>
                }

            </div>
            <ToastMessage message="Tümü sepete eklendi" show={show} closeToast={() => setShow(false)} bg={"bg-success"} />

        </div >
    )
}

export default SchoolDetailPage
