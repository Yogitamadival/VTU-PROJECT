import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Row,Col,Form, Button,Alert} from "react-bootstrap";
import axios from 'axios';

const Result = () => {
    const[registerInput,setRegisterInput] = useState("")
    const[message,setMessage] = useState("")

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        if(registerInput === ''){
            setMessage("Please Enter Register no")
        }else{
            axios.get('http://localhost:3001/studentInfo')
            .then((response) =>{
                console.log("res,response")
                response.data.map((data) => {
                    if(data.registerId === registerInput){
                        navigate(`/final/resultpage/${registerInput}`)
                    }else{
                        setMessage("Invalid RegisterId")
                    }
                })
            })
            .catch((err) => console.log("err",err))
        }
    }

    const changeHandler = (e) => {
          setRegisterInput(e.target.value)
          setMessage('')  
    }


    return(
        <>
        <Link to='/' className="btn btn-dark my-3">Go Back</Link>

        <Row className="text-center">
            <Col><h2>Check your results here...</h2></Col>
        </Row>
    
        <Row className="mt-2">
            <Col>
            <Form onSubmit={submitHandler}>
                <Form.Label style={{marginLeft:"20rem"}}>Enter your Register No:</Form.Label><br/>
                <Form.Control style={{width:"50%",marginLeft:"20rem"}} type='text' placeholder="Enter your Register No" value={registerInput}onChange={changeHandler}/>
                <Button type="submit" style={{marginLeft:"20rem"}} className="mt-3">Submit</Button>
            </Form>
            </Col>
        </Row><br/>
        <div className="text-danger text-center"> {message} </div>
        </>
    )
}
export default Result