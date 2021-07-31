import React from 'react'
import { Breadcrumb } from "react-bootstrap"

function BreadCrumb() {
    return (
        <React.Fragment>

            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
            <hr className="m-0" />
        </React.Fragment>
    )
}

export default BreadCrumb
