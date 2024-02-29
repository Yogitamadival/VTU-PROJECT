import React from 'react';
import {Row,Col} from 'react-bootstrap';


const Aboutus = () => {

return(
    <>
    <div>
    <Row className='my-5'>
        <Col md={6}>
            <h3>Mission</h3>
        <p style={{textAlign:"justify"}}>
        VTU stands as one of India's most prominent Technological Universities, boasting a rich 24-year legacy of excellence 
              in Engineering, Technical Education, Research, and Innovations. Established in 1998, its primary mission was to address
               the growing demand of Indian industries for skilled technical professionals equipped with both practical expertise and 
               solid theoretical foundations.<br/>
              Over the years, the University has remarkably accomplished the formidable feat of unifying previously affiliated colleges 
              from diverse Universities, each characterized by distinct syllabi, procedures, and traditions. This consolidation has 
              brought together a diverse array of institutions under a single banner, fostering greater cohesion and uniformity.
        
        </p>
        
        </Col>
        <Col md={6} >
        <img src="images/mission.jpg" alt="mission" style={{width:"545px",height:"300px"}} />
        </Col>
    </Row>
    </div>

    <div>
        <Row>
            <Col md={6} >
            <img src="images/vision.jpg" alt="vision" style={{width:"545px",height:"300px"}}  />
            </Col>

            <Col>
            <h3>Vision</h3>
            <p style={{textAlign:"justify"}} >
            VTU stands as one of India's most prominent Technological Universities, boasting a rich 24-year legacy of excellence 
              in Engineering, Technical Education, Research, and Innovations. Established in 1998, its primary mission was to address
               the growing demand of Indian industries for skilled technical professionals equipped with both practical expertise and 
               solid theoretical foundations.<br/>
              Over the years, the University has remarkably accomplished the formidable feat of unifying previously affiliated colleges 
              from diverse Universities, each characterized by distinct syllabi, procedures, and traditions. This consolidation has 
              brought together a diverse array of institutions under a single banner, fostering greater cohesion.          

            </p>
            </Col>
        </Row>
    </div>
    <div>
        <Row>
            <Col md={6}>
            <p style={{textAlign:"justify"}} >
                <h3>Mandate</h3>
            VTU stands as one of India's most prominent Technological Universities, boasting a rich 24-year legacy of excellence 
              in Engineering, Technical Education, Research, and Innovations. Established in 1998, its primary mission was to address
               the growing demand of Indian industries for skilled technical professionals equipped with both practical expertise and 
               solid theoretical foundations.<br/>
              Over the years, the University has remarkably accomplished the formidable feat of unifying previously affiliated colleges 
              from diverse Universities, each characterized by distinct syllabi, procedures, and traditions. This consolidation has 
              brought together a diverse array of institutions under a single banner, fostering greater cohesion.          

            </p>

            </Col>
            <Col md={6}>
            <img src="images/mandate.jpg" alt="mandate" style={{width:"545px",height:"300px"}} />
            </Col>
        </Row>
    </div>


    </>
)

}
 
export default Aboutus