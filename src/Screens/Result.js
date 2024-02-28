import React from "react";
import { Link } from "react-router-dom";
import {Row,Col,Form, Button} from "react-bootstrap";

const Result = () => {

    return(
        <>
        <Link to='/' className="btn btn-dark" style={{marginTop:"1rem"}}>Go Back</Link>

        <Row className="text-center">
            <Col>
            <h3>Check your results here...</h3>
            
            </Col>
        </Row>
        <br/>
        <Row>
            <Col></Col>
            <Col style={{marginLeft:"-20rem"}}>
            <Form>
                <label>Enter your Register No:</label><br/>
                <input type='text' placeholder="Enter your Register No" style={{width:"60%"}}/><br/>
                <Button type="submit" style={{marginTop:"1rem"}}>Submit</Button>
            </Form>
            </Col>
        </Row>
        </>
    )
}
export default Result