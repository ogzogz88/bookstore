import React from 'react'
import { Toast } from "react-bootstrap"
import logo from "../assets/logo.png";
import useWindowDimensions from '../hooks/useWindowDimensions '


function ToastMessage({ message, show, closeToast, bg }) {
    const { width } = useWindowDimensions();

    const toastStyle = {
        position: "fixed",
        flexBasis: "0",
        maxWidth: "none",
        top: "1rem",
        right: "1rem",
        width: width < 576 ? "calc(100% - 2rem)" : 350,
        zIndex: 10,
        border: "none",
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 0.25rem 0.75rem"
    }
    const toastBodyStyle = {
        background: "rgba(255,255,255,.85)",
        borderBottomLeftRadius: "calc(.25rem - 1px)",
        borderBottomRightRadius: "calc(.25rem - 1px)"
    }
    return (
        <Toast
            style={toastStyle} show={show} className={bg}
            onClose={() => closeToast()}
        >
            <Toast.Header justifyContent="space-between">
                <img src={logo} height="20px" className="rounded me-2 mr-auto" alt="Ardiç Kitabevi" />
            </Toast.Header>
            <Toast.Body style={toastBodyStyle}>{message}!</Toast.Body>
        </Toast>
    )
}

export default ToastMessage
