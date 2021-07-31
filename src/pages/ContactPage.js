import React from 'react'
import { Row, Col, Card, Tab, Tabs } from "react-bootstrap"
import { GeoAltFill } from 'react-bootstrap-icons';
import { TelephoneFill } from 'react-bootstrap-icons';
import { EnvelopeFill } from 'react-bootstrap-icons';



function ContactPage() {
    return (
        <React.Fragment>
            <Row>
                <Col xs={12}>
                    <h3 className="main-header">İletişim</h3>
                </Col>
                <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Tabs
                        defaultActiveKey="kayseri"
                        id="uncontrolled-tab"
                        className="d-flex justify-content-center"
                        variant="pills"
                        style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                        fill
                    >
                        <Tab eventKey="kayseri" title="Kayseri">
                            <Col>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.484553689425!2d35.523240215229876!3d38.72964157959695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b6b211f296139%3A0x3f0d1251fcca86b7!2zQXJkxLHDpyBLaXRhYmV2aQ!5e0!3m2!1str!2str!4v1587324615175!5m2!1str!2str"
                                    title="Kayseri Şube"
                                    width="100%"
                                    height="320px"
                                    frameborder="0"
                                    style={{ border: 0, }}
                                    className="mt-3"
                                    allowfullscreen=""
                                    aria-hidden="false"
                                    tabindex="0">
                                </iframe>
                                <Row className="mb-3 mt-3">
                                    <Col xs={12} md={12} lg={4} className="mb-3">
                                        <Card border="primary" className="h-100" >
                                            <Card.Header className="text-center">
                                                <GeoAltFill className="text-primary" size={25} />
                                            </Card.Header>
                                            <Card.Body className="d-flex align-items-center justify-content-center">
                                                <Card.Text className="text-center">
                                                    <address className="mb-0">
                                                        Alparslan Mh. Aşık Veysel Blv. No:11/B Melikgazi/Kayseri
                                                    </address>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} md={6} lg={4} className="mb-3">
                                        <Card border="primary" className="h-100" >
                                            <Card.Header className="text-center">
                                                <TelephoneFill className="text-primary" size={25} />
                                            </Card.Header>
                                            <Card.Body className="d-flex align-items-center justify-content-center">
                                                <Card.Text className="text-center">
                                                    <a href="tel:03522333737">
                                                        <span>+90 352 233 37 37</span>
                                                    </a>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} md={6} lg={4} className="mb-3">
                                        <Card border="primary" className="h-100" >
                                            <Card.Header className="text-center">
                                                <EnvelopeFill className="text-primary" size={25} />
                                            </Card.Header>
                                            <Card.Body className="d-flex align-items-center justify-content-center">
                                                <Card.Text className="text-center">
                                                    <a href="mailto:info@ardickitabevi.com">
                                                        <span >info@ardickitabevi.com</span>
                                                    </a>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Tab>
                        <Tab eventKey="izmir" title="İzmir">
                            <Col>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.9093528253434!2d27.211296415221717!3d38.46665397963952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e30de5828b%3A0xa0c1755c9b717da6!2zQXJkxLHDpyBLaXRhcCBLxLFydGFzaXll!5e0!3m2!1str!2str!4v1587326243758!5m2!1str!2str"
                                    title="İzmir Şube"
                                    width="100%"
                                    height="320px"
                                    frameborder="0"
                                    style={{ border: 0, }}
                                    className="mt-3"
                                    allowfullscreen=""
                                    aria-hidden="false"
                                    tabindex="0">
                                </iframe>
                                <Row className="mb-3 mt-3">
                                    <Col xs={12} md={12} lg={4} className="mb-3 mt-3 mt-md-0">
                                        <Card border="primary" className="h-100" >
                                            <Card.Header className="text-center">
                                                <GeoAltFill className="text-primary" size={25} />
                                            </Card.Header>
                                            <Card.Body className="d-flex align-items-center justify-content-center">
                                                <Card.Text className="text-center">
                                                    <address className="mb-0">
                                                        Ergene Mh.Yüzbaşı İbrahim Hakkı Caddesi No:109 Bornova/İzmir
                                                    </address>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} md={6} lg={4} className="mb-3">
                                        <Card border="primary" className="h-100" >
                                            <Card.Header className="text-center">
                                                <TelephoneFill className="text-primary" size={25} />
                                            </Card.Header>
                                            <Card.Body className="d-flex align-items-center justify-content-center">
                                                <Card.Text className="text-center">
                                                    <a href="tel:02324412826">
                                                        <span>+90 232 441 28 26</span>
                                                    </a>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} md={6} lg={4} className="mb-3">
                                        <Card border="primary" className="h-100" >
                                            <Card.Header className="text-center">
                                                <EnvelopeFill className="text-primary" size={25} />
                                            </Card.Header>
                                            <Card.Body className="d-flex align-items-center justify-content-center">
                                                <Card.Text className="text-center">
                                                    <a href="mailto:info@ardickitabevi.com">
                                                        <span >info@ardickitabevi.com</span>
                                                    </a>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Tab>
                        <Tab eventKey="ankara" title="Ankara" >
                            <Col>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.681602940788!2d32.81400941526758!3d39.92614097942517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f2db8864719%3A0xa876141df9db74ba!2zQXJkxLHDpyBLaXRhYmV2aQ!5e0!3m2!1str!2str!4v1587330110663!5m2!1str!2str"
                                    title="Ankara Şube"
                                    width="100%"
                                    height="320px"
                                    frameborder="0"
                                    style={{ border: 0, }}
                                    className="mt-3"
                                    allowfullscreen=""
                                    aria-hidden="false"
                                    tabindex="0">
                                </iframe>
                                <Row className="mb-3 mt-3">
                                    <Col xs={12} md={12} lg={4} className="mb-3 mt-3 mt-md-0">
                                        <Card border="primary" className="h-100" >
                                            <Card.Header className="text-center">
                                                <GeoAltFill className="text-primary" size={25} />
                                            </Card.Header>
                                            <Card.Body className="d-flex align-items-center justify-content-center">
                                                <Card.Text className="text-center">
                                                    <address className="mb-0">
                                                        Emek Mahallesi, Mevlana Blv. No:72/A, 06490 Çankaya/Ankara
                                                    </address>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} md={6} lg={4} className="mb-3">
                                        <Card border="primary" className="h-100" >
                                            <Card.Header className="text-center">
                                                <TelephoneFill className="text-primary" size={25} />
                                            </Card.Header>
                                            <Card.Body className="d-flex align-items-center justify-content-center">
                                                <Card.Text className="text-center">
                                                    <a href="tel:03124258850">
                                                        <span>	+90 312 425 88 50</span>
                                                    </a>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} md={6} lg={4} className="mb-3">
                                        <Card border="primary" className="h-100" >
                                            <Card.Header className="text-center">
                                                <EnvelopeFill className="text-primary" size={25} />
                                            </Card.Header>
                                            <Card.Body className="d-flex align-items-center justify-content-center">
                                                <Card.Text className="text-center">
                                                    <a href="mailto:info@ardickitabevi.com">
                                                        <span >info@ardickitabevi.com</span>
                                                    </a>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ContactPage
