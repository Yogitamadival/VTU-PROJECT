import React from 'react';
import { Carousel,Row,Col,Button } from 'react-bootstrap';

const HomeScreen = () => {
    return(
        <>
            <div>
                <marquee> VTU Results 2024 out - Check Exam results here!!!
                    <a href='#'>Click here...</a>Best of Luck!!!</marquee>
            </div>

            <div>
            <Carousel>
                <Carousel.Item>
                    <img height="450px"
                    className="d-block w-100"
                    src="images/img1.jpg"
                    alt="First slide"
                    />
                    </Carousel.Item>

                <Carousel.Item>
                    <img height="450px"
                    className="d-block w-100"
                    src="images/img2.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img height="450px"
                    className="d-block w-100"
                    src="images/img3.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img height="450px"
                    className="d-block w-100"
                    src="images/img4.jpg"
                    alt="Fouth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img height="450px"
                    className="d-block w-100"
                    src="images/img5.jpg"
                    alt="Fifth slide"
                    />
                </Carousel.Item>
                </Carousel>
                <br/>
                <div>
                    <Row>
                        <Col>
                            
                                <h3><a href='#'> Vision</a></h3>
                                <p className='p-style'>To plan the development of technical education, to establish value-based
                                    and need-based education and training in engineering and technoligy, 
                                    with a view to generate qualified and comprtent manpower,responsive
                                    to technology and social needs
                                </p>

                                <p className='p-style'>To plan the development of technical education, to establish value-based
                                    and need-based education and training in engineering and technoligy, 
                                    with a view to generate qualified and comprtent manpower,responsive
                                    to technology and social needs
                                </p>
                                <Button variant='warning'>Read More</Button>
                        </Col>

                         <Col>
                            
                                <h3 className='p-style'><a href='#'> Mission</a></h3>
                                <p>To plan the development of technical education, to establish value-based
                                    and need-based education and training in engineering and technoligy, 
                                    with a view to generate qualified and comprtent manpower,responsive
                                    to technology and social needs
                                </p>

                                <p className='p-style'>To plan the development of technical education, to establish value-based
                                    and need-based education and training in engineering and technoligy, 
                                    with a view to generate qualified and comprtent manpower,responsive
                                    to technology and social needs
                                </p>
                                <Button variant='warning'>Read More</Button>
                        </Col>

                        <Col>
                            
                                <h3 className='p-style'><a href='#'> Mandate</a></h3>
                                <p>To plan the development of technical education, to establish value-based
                                    and need-based education and training in engineering and technoligy, 
                                    with a view to generate qualified and comprtent manpower,responsive
                                    to technology and social needs
                                </p>

                                <p className='p-style'>To plan the development of technical education, to establish value-based
                                    and need-based education and training in engineering and technoligy, 
                                    with a view to generate qualified and comprtent manpower,responsive
                                    to technology and social needs
                                </p>
                                <Button variant='warning'>Read More</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default HomeScreen