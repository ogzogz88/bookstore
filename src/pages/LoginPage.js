import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap"
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import Loader from "../components/Loader"
import Message from "../components/Message"
import FormContainer from '../components/FormContainer'
import { useDispatch, useSelector } from "react-redux"
import { login } from "../actions/userActions"

function LoginPage({ location, history }) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordShown, setPasswordShown] = useState(false);
    const [eyeClassName, setEyeClassName] = useState({ "d-none": "d-none", "d-block": "d-block" });


    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split("=")[1] : "/"

    const userLogin = useSelector(state => state.userLogin)
    const { loading, userInfo, error } = userLogin

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(userName, password))
    }
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
        eyeClassName["d-none"] === "d-none" ? setEyeClassName({ "d-none": "d-block", "d-block": "d-none" }) : setEyeClassName({ "d-none": "d-none", "d-block": "d-block" })
    };
    return (
        <FormContainer>
            <h3>Kullanıcı Girişi</h3>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="username">
                    <Form.Label>Kullanıcı Adı</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Kullanıcı Adınız"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Parola</Form.Label>
                    <InputGroup className="mb-3">

                        <Form.Control
                            className="form-login-password"
                            type={passwordShown ? "text" : "password"}
                            placeholder="Parolanız"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        >
                        </Form.Control>
                        <InputGroup.Text id="basic-addon1" className="eye-slash-wrapper" onClick={togglePasswordVisiblity}>
                            <Eye className={eyeClassName["d-none"]} />
                            <EyeSlash className={eyeClassName["d-block"]} />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>


                <Button type="submit" variant="dark" block>
                    GİRİŞ YAP
                </Button>
            </Form>
            <Row className="py-3">
                <Col>
                    Hesabınız yok mu?{" "}
                    <Link
                        to={redirect ? `/register?redirect=${redirect}` : "/register"}
                    >
                        Kayıt Ol
                    </Link>

                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginPage
