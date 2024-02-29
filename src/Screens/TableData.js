import React from "react";
import {Container, Table } from "react-bootstrap";

const TableData = () => {
    return(
        <Container>
           <Table className="my-5" responsive bordered>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>Sl No</th>
                    <th colSpan={2}>Subject
                    <th style={{paddingLeft:"10rem",paddingRight:"8rem"}}>Code</th>
                    <th style={{paddingLeft:"10rem",paddingRight:"8rem"}}>Subject</th>
                    </th>

                    <th colSpan={3}>Examination Marks Obtained
                    <th style={{padding:"0px 10rem"}}>Max</th>
                    <th style={{padding:"0px 10rem"}}>Min</th>
                    <th style={{padding:"0px 10rem"}}>Obtained</th>
                    </th>

                    <th style={{padding:"0px 10rem"}}>Subject Result</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>CSE001</td>
                    <td>Java</td>
                    <td>100</td>
                    <td>35</td>
                    <td>65</td>
                    <td>PASS</td>
                </tr>

                <tr>
                    <td>1</td>
                    <td>CSE001</td>
                    <td>Java</td>
                    <td>100</td>
                    <td>35</td>
                    <td>65</td>
                    <td>PASS</td>
                </tr>

                <tr>
                    <td>1</td>
                    <td>CSE001</td>
                    <td>Java</td>
                    <td>100</td>
                    <td>35</td>
                    <td>65</td>
                    <td>PASS</td>
                </tr>

                <tr>
                    <td>1</td>
                    <td>CSE001</td>
                    <td>Java</td>
                    <td>100</td>
                    <td>35</td>
                    <td>65</td>
                    <td>PASS</td>
                </tr>
            </tbody>

            <thead>
                <tr>
                    <th colSpan={3}>Grand Total</th>
                    <td>400</td>
                    <td>140</td>
                    <td>260</td>
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