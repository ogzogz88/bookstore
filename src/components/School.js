import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function School({ school }) {
    return (
        <Card className="rounded h-100 shadow">
            <Link to={`/school/${school.id}`} className="card-img-wrapper text-center p-3">
                <Card.Img src={school.logo} className="school-logo" />
            </Link>
            <Card.Body className="d-flex flex-column justify-content-between p-3">
                <Link to={`/school/${school.id}`} className="text-dark">
                    <Card.Title as="h6" className="font-weight-bold">
                        {school.okul_adi}
                    </Card.Title>
                </Link>
                <Card.Text as="p">
                    {school.aciklama}
                </Card.Text>
                <Link to={`/school/${school.id}`} className="school-button">
                    <Button variant="primary" block >Okulu Seç</Button>
                </Link>

            </Card.Body>
        </Card>
    )
}

export default School