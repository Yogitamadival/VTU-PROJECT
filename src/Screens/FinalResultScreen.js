import React,{useState,useEffect} from 'react';
import {Row,Col,Form} from 'react-bootstrap';
import TableData from './TableData';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FinalResultScreen = () => {

    const[studentDetails, setStudentDetails] = useState([])
    const value = useParams()

    useEffect(()=>{
        axios.get('http://localhost:3004/resultsInfo')
        .then((response) =>{
            response.data.map((data)=>{
                if(data.registerId === value.id){
                    setStudentDetails(data)
                }
            })
        }).catch((error) => console.log("error",error))
    },[studentDetails])   
    
    console.log("state",studentDetails)
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
                    <Form.Label style={{marginLeft:"4.5rem"}}>{studentDetails.name}</Form.Label><br/>
                    <Form.Label>Father's/Mother's Name :</Form.Label>
                    <Form.Label style={{marginLeft:"0.5rem"}}>{studentDetails.fatherName}</Form.Label><br/>
                    <Form.Label>College Name :</Form.Label>
                    <Form.Label style={{marginLeft:"4.5rem"}}>{studentDetails.collegeName}</Form.Label>
                    </Form.Group>
                </Col>

                <Col sm={12} md={6}>
                    <Form.Group>
                        <Form.Label style={{float:"right"}}>Register No : {studentDetails.registerId}</Form.Label>
                    </Form.Group>
                </Col>

                <Col sm={12} md={6}>
                </Col>
            </Row>

            <Row>
                <TableData studentId = {studentDetails.registerId}  />
            </Row>
        </>
    )
}
export default FinalResultScreen;