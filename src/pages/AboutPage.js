import React from 'react'
import { Row, Col, Card } from "react-bootstrap"
import aboutİmage1 from "../assets/ardic-about-1.svg"

function AboutPage() {



    return (
        <React.Fragment>
            <Row className="mb-md-5 ">
                <Col xs={12}>
                    <h3 className="main-header" >Hakkımızda </h3>
                </Col>
                <Col md={6} className="mb-4 mb-md-0">
                    <p className="first-letter-big text-indent text-justify">Ardıç Kitap Kırtasiye 1984 yılında, günümüzde şirketin sahibi ve yöneticisi olan Mustafa Kutluay Şahin'in annesi Filiz Şahin ve
                        babası Altay Şahin tarafından Kayseri'de kuruldu. İlk yıllarında sadece Kayseri TED kolejine yönelik satış yapan 30 m2 büyüklüğünde ufak bir okul kitap,
                        kırtasiyesiydi.
                    </p>
                    <p className="text-indent text-justify">1990'lı yıllarda ve sonrasında Türkiye'de yabancı dil öğreniminin yaygınlaşmasına ve Anadolu Liselerinin, özel eğitim kurumlarının çoğalmasına
                        paralel olarak Ardıç Kitabevi de büyümeye başladı. 1992 yılında, Oxford Üniversitesi’nin bir alt birimi olan, yabancı dil öğreniminin lider kuruluşu,
                        Oxford University Press firmasının Kayseri ve çevre illeri bayisi oldu.</p>
                    <p className="text-indent text-justify">1995 yılında ara sokaktaki ilk mağazadan, ana caddede, Kayseri geneline hitap eden daha büyük bir mağazaya taşınarak önemli bir atılım yaptı.</p>
                    <p className="text-indent text-justify">İlerleyen yıllarda, yabancı dil öğretimi alanında deneyim ve bilgisini arttıran Ardıç Kitabevi, Kayseri ve bölgesinde yabancı dil öğretiminde
                        kullanılan içerik temininde öncü kuruluş oldu.</p>

                </Col>
                <Col className="d-flex justify-content-center align-items-center" md={6}>
                    <img className="w-100" src={aboutİmage1} alt="Ardic Kitabevi Hakkında" />

                </Col>
            </Row>
            <hr className="hr-special" />
            <Row className="mt-md-5 mb-md-5">
                <Col xs={12} md={6}>
                    <p className="text-indent text-justify">Ardıç Kitabevi, başarılı çalışmalarının ve istikrarlı büyümesinin sonucu olarak 2008 yılında Oxford University Press’in İzmir,
                        Manisa ve Aydın illeri bayiliğini üstlenerek çalışmalarını kayseri dışına taşıdı.</p>
                    <p className="text-indent text-justify">2014 yılı ve 2015 yılı Ardıç Kitabevi’nin tarihinde önemli dönüm noktası oldu.
                        Kayseri Aşık Veysel Bulvarın’da 300 m2 büyüklüğünde yeni bir mağazaya taşındı. Yeni mağazasında, müşterilerine çok daha profesyonelce düzenlenmiş,
                        daha geniş kitap ve kırtasiye çeşidi sunabilmektedir.
                    </p>
                    <p className="text-indent text-justify">Ardıç Kitabevi, 2017 yılında, yeni ve önemli bir atılım yaparak Ankara, Kırıkkale, Çorum, Çankırı ve Yozgat
                        illerinde de Oxford University Press bayiliğini üstlendi. Genel olarak İngilizce öğretiminin ve özel okulculuğun çok daha eski ve daha köklü bir geçmişe
                        sahip olduğu Ankara ilinde Oxford University Press bayiliğini yürütmesi Ardıç Kitabevi’ne yeni bir deneyim ve bilgi sağlamaktadır.
                    </p>
                </Col>
                <Col xs={12} md={6}>
                    <p className="text-indent text-justify">Ardıç Kitabevi, yabancı dil öğreten kuruluşlara içerik temin etmenin yanı sıra, temin edilen içeriğin kullanımına
                        yönelik danışmanlık hizmetleri ve öğretmen eğitimlerini de üstlenmektedir. Ardıç Kitabevi’nin öncülüğünde, İzmir, Manisa, Aydın bölgesinde,
                        Kayseri ve bölge illerinde, Ankara ve çevre illerinde, yüzlerce öğretmenin ve eğitim yöneticisinin katıldığı eğitim seminerleri,
                        dünyaca ünlü kitap yazarları ve editörlerin okul ziyaretleri, öğrenci velileri ve okul yöneticilerine yönelik seminerler düzenlenmektedir.
                    </p>
                    <p className="text-indent text-justify mb-0">2019 ve 2020 yıllarında yepyeni bir atılım yapan Ardıç Kitabevi, her geçen gün daha da yaygınlaşan internet
                        üzerinden yapılan satışların artma eğilimini dikkate alarak Türkiye’nin en başarılı internet satış sitelerinden birini hazırlamıştır.
                        İnternet sitesi kullanıcılar için kolay ve anlaşılabilir olarak hazırlanmıştır. Türkçe ve yabancı dil ders kitaplarını,
                        yardımcı ders kitabı ve test kitaplarını, kültür kitaplarını, kırtasiye çeşitlerini en uygun fiyatlarla Ardıç Kitabevi internet sitesinden
                        sipariş edebilirsiniz ve adresinizde teslim alabilirsiniz.
                    </p>
                </Col>
            </Row>
            <hr className="hr-special" />
            <Row className="mt-md-5">
                <Col xs={12} md={6}>
                    <Card
                        bg="primary"
                        text="white"
                        className="mb-2"
                    >
                        <Card.Header><h4>Misyonumuz</h4></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Yabancı dil öğretiminde dünyadaki bilimsel ve teknolojik gelişmeleri takip edip yakalayan, en doğru ve yüksek kaliteli eğitim öğretim içeriğini öğretmen
                                ve eğitim yöneticileriyle buluşturmak, tanıtmak ve kullanılan içeriğe ait gerekli eğitimleri sağlamak.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={6}>
                    <Card
                        bg="secondary"
                        text="white"
                        className="mb-2"
                    >
                        <Card.Header><h4>Vizyonumuz</h4></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Türkiye'de, eğitimde kullanılan içeriği temin eden, bu içeriği çeşitli biçimlerde eğitim kurumlarına ulaştıran ve içeriğin kullanımına yönelik
                                danışmanlık ve eğitim hizmetleri veren, en yaygın ve en büyük kuruluş olmak.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AboutPage
