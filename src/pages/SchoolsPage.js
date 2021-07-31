import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from "react-bootstrap"
import School from "../components/School"
import Loader from "../components/Loader"
import Message from "../components/Message"
import { listSchools } from '../actions/schoolActions';
import schoolsDemo from "../schoolsDemo"



function SchoolsPage() {
    const dispatch = useDispatch();
    const schoolList = useSelector(state => state.schoolList);
    useEffect(() => {
        dispatch(listSchools);
    }, [dispatch]);
    const { error, loading, schools } = schoolList;
    if (schools.length === 0) {
        return (
            <div>
                <h3 className="main-header">Tüm Okullar</h3>

                <Row className="mt--1">
                    {schoolsDemo.map(school => (
                        <Col key={school.id} xs={12} sm={6} lg={3} className="py-3" >
                            <School school={school} />
                        </Col>
                    ))}
                </Row>
            </div>

        )
    } else

        return (
            <div>
                <h3 className="main-header">Tüm Okullar</h3>
                {
                    loading ? <Loader />
                        : error ? <Message variant="danger">{error}</Message>
                            :
                            <Row>
                                {schoolsDemo.map(school => (
                                    <Col key={school.id} xs={12} sm={6} lg={3} className="py-3" >
                                        <School school={school} />
                                    </Col>
                                ))}
                            </Row>
                }
            </div>
        )
}

export default SchoolsPage
