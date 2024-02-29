import React from 'react';
import {Row,Col,Form} from 'react-bootstrap';
import TableData from './TableData';

const FinalResultScreen = () => {
    return(
        <>
            <Row className='justify-content-center my-4'>
                <Col sm={12} md={6}>
                   <h4>Vivsevaraya Technological University,Belgaum</h4> 
                   <h6 style={{marginLeft:"4rem", fontSize:"15px"}}>VII -Semester B.E Examination Result, Nov,Dec-2024</h6>
                </Col>
            </Row>

            <Row>
                <Col sm={12} md={6}>
                    <Form.Group>
                    <Form.Label>StudentName :</Form.Label>
                    <Form.Label style={{marginLeft:"4.5rem"}}>Riya k</Form.Label><br/>
                    <Form.Label>Father's/Mother's Name :</Form.Label>
                    <Form.Label style={{marginLeft:"0.5rem"}}>Krishna Gowda</Form.Label><br/>
                    <Form.Label>College Name :</Form.Label>
                    <Form.Label style={{marginLeft:"4.5rem"}}>Oxford University</Form.Label>
                    </Form.Group>
                </Col>

                <Col sm={12} md={6}>
                    <Form.Group>
                        <Form.Label style={{float:"right"}}>Register No : 1ST19CS221</Form.Label>
                    </Form.Group>
                </Col>

                <Col sm={12} md={6}>
                </Col>
            </Row>

            <Row>
                <TableData />
            </Row>
        </>
    )
}
export default FinalResultScreen;