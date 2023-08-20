import { Link, Route, Routes, Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap'
import { Button, Form, Modal } from 'react-bootstrap';
import { useState, useRef } from "react"
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryTransactions from '../components/CategoryTransactions'
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import '../Styles/HomepageStyles.css'

export default function Home() {
    return (
        <>
            <div className='fixed-header'>
                <ul className="nav nav-pills">
                <li className="nav-item">
              <Link to='/pages/Home'>
                <button className="Navbtn">Home</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/pages/Overview'><button className="Navbtn">Overview</button></Link>
            </li>
            <li className="nav-item">
              <Link to='/pages/Budget'><button className="Navbtn">Budgeting</button></Link>
            </li>
            <li className="nav-item">
              <Link to='/pages/AllTransactions'><button className="Navbtn">Transactions</button></Link>
            </li>
                </ul>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>	
            <div className="banner">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/Freedom.jpeg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Financial Freedom</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/Increasespending.jpeg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>A planned and prosperous future</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/NoWorries.jpeg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>No worries</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <Container className="my-5">
                <Row>
                    {[1, 2, 3].map(num => (
                        <Col sm={4} key={num}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Sample Card Title {num}</Card.Title>
                                    <Card.Text>
                                        Sample text for the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}



