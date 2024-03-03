import React,{useState,useEffect} from "react";
import {Container, Table } from "react-bootstrap";
import axios from "axios";

const TableData = ({studentId}) => {
    console.log("id",studentId)

    const[resultDetails,setResultDetails] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3004/resultsInfo')
        .then((response) => {
            console.log("ress", response.data)
            let temp = []
            temp = response.data.filter((d) => d.registerId === studentId )
            setResultDetails(temp)
        })
        .catch((error) => console.log("err",error))
    },[studentId])

    console.log("state2",resultDetails)

    const getTotalMarks = (value) => {
        console.log("value",value)
        let sum = 0
        resultDetails.map((d) =>{
            sum += parseInt(d[value])
        })
        return sum
    }

    return(
        
        <Container>
           <Table className="my-5" responsive bordered>
            <thead>
                <tr>
                    <th>Sl No</th>
                    <th colSpan={2}>Subject
                    <th>Code</th>
                    <th>Subject</th>
                    </th>

                    <th colSpan={3}>Examination Marks Obtained
                    <th>Max</th>
                    <th>Min</th>
                    <th>Obtained</th>
                    </th>

                    <th>Subject Result</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    resultDetails.map((data,index) => {
                        <tr key = {index}>
                            <td>{index+1}</td>
                            <td>{data.code}</td>
                            <td>{data.subject}</td>
                            <td>{data.max_marks}</td>
                            <td>{data.min_marks}</td>
                            <td>{data.obtained_marks}</td>
                            <td>{data.result}</td>
                        </tr>
                    })
                }
            </tbody>

            <thead>
                <tr>
                    <th colSpan={3}>Grand Total</th>
                    <td>{getTotalMarks('max_marks')}</td>
                    <td>{getTotalMarks('min_marks')}</td>
                    <td>{getTotalMarks('obtained_marks')}</td>
                    <td>PASS</td>
                </tr>
               
            </thead>
            </Table> 

            <p><b>Total Marks Obtained[in words]</b>:
                Two Hundred And Sixty Only
            </p>
            <p><b>Result of Semester</b>:PASS</p>
            <p><b>Percentage</b>:65%</p>
            <p><b>Date</b>:05 DEC 2024</p>

        </Container>
    )
}
export default TableData;