import React, { useState } from 'react'
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap"

function BooksWithIdentity({ history }) {
    const [tc, setTc] = useState("")
    const regexp = /^[0-9\b]+$/
    const handleChange = (e) => {
        const tcNumber = e.target.value
        if (tcNumber === "" || regexp.test(tcNumber)) {
            setTc(tcNumber)
            console.log("tc", tc);

        } else {
            alert("TC Kimlik No sadece rakamlardan oluşmalıdır!")
        }

    }
    const handleClick = () => {
        if (tc === "11111111111") {
            history.push("/")
        }
        else {
            alert("Lütfen geçerli bir TC Kimlik No giriniz.")

        }
    }
    return (
        <div className="mt-5">
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={4} className="mt-5">
                    <h5 className="text-center">TC Kimlik No giriniz</h5>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            maxLength="11"
                            placeholder="11111111111"
                            onChange={(e) => handleChange(e)}
                            value={tc}
                        />
                        <InputGroup.Append>
                            <Button
                                variant="primary"
                                onClick={() => handleClick()}
                            >
                                Giriş
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
        </div>
    )
}

export default BooksWithIdentity
