import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap"

function FormContainer({ children }) {
    return (
        <Container className="mt-5" >
            <Row className="justify-content-md-center">
                <Col xs={12} md={6} className="login-form-column shadow">
                    {children}
                </Col>
            </Row>
        </Container>

    )
}

export default FormContainer
