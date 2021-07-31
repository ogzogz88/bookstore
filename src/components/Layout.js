import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap'
import ScrollToTop from "react-scroll-to-top";


function Layout({ children }) {
    const scrollToTopStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: ".7rem",
    }
    return (
        <div className="layout-main">
            <Header />
            <main className="pb-3">
                <Container className="mb-5 pb-5">
                    {children}
                </Container>
            </main>
            <Footer />
            <ScrollToTop smooth style={scrollToTopStyle} />

        </div>
    )
}

export default Layout
