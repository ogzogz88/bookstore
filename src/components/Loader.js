import React from 'react'
import { Spinner } from "react-bootstrap"

function Loader() {
    return (
        <Spinner
            animation="grow"
            role="status"
            variant="primary"
            style={{
                height: "50px",
                width: "50px",
                margin: "auto",
                display: "block",
            }}
        >
            <span className="sr-only">Yükleniyor...</span>
        </Spinner>
    )
}

export default Loader
