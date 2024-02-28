import React from 'react';
import { Carousel,Row,Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
    return(
        <>
            <div>
                <marquee> VTU Results 2024 out - Check Exam results here!!!
                    <Link to='/results'>Click here...</Link>Best of Luck!!!</marquee>
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
                            
                                <h3><Link to='/about'> Vision</Link></h3>
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
                                
                                <Link to='/about' className='btn btn-warning'>Read More</Link>
                        </Col>

                         <Col>
                            
                                <h3 className='p-style'><Link to='/about'> Mission</Link></h3>
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
                                <Link to='/about' className='btn btn-warning'>Read More</Link>
                        </Col>

                        <Col>
                            
                                <h3 className='p-style'><Link to='/about'> Mandate</Link></h3>
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
                                <Link to='/about' className='btn btn-warning'>Read More</Link>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default HomeScreen