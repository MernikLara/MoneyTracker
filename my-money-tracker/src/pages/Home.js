import { Link, Route, Routes, Router, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap'
import { Button, Form, Modal } from 'react-bootstrap';
import { useState, useRef } from "react"
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryTransactions from '../components/CategoryTransactions'
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import '../Styles/HomepageStyles.css'
import { LoginContext } from '../components/LoginProvider';


export default function Home() {
  const navigate = useNavigate();



  const LogOut = () => {
    sessionStorage.clear();
    console.log("succeffuly logged out")
    navigate('/')
  }


  const isLoggedIn = sessionStorage.getItem('isLoggedIn')
    return (

        <>
            { isLoggedIn ? <div className='fixed-header'>
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
            <li>
              <Button className='btn1' onClick={LogOut}>Logout</Button>
            </li>
            <li className='logo'>
              <img
              src='/images/MoneyTracker_logo.png'
              ></img>
            </li>
                </ul>
            </div> :
            
            <div className='fixed-header'>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link to='/pages/Home'>
                  <button className="Navbtn">Home</button>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/'><button className="Navbtn">Login</button></Link>
              </li>
            <li className='logo'>
                  <img
                  src='/images/MoneyTracker_logo.png'
                  ></img>
                </li>
                    </ul>
                </div>
            
            
            }
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
                            <h3>The Road to financial freedom, begins here</h3>
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
                        <Col sm={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>What is MyMoney Tracker?</Card.Title>
                                    <Card.Text>
                                        MyMoney Tracker, is a web application which allows a user to easily and intuitivelly budget and manage their income and expenses
                                        Unilke Excel and similar data solutions which require time and effort to learn, MyMoneyTracker is easy and intuitive to learn and use. 
                                    </Card.Text>
                                    <img></img>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card className='InfoCard'>
                                <Card.Body>
                                    <Card.Title>Financial Freedom</Card.Title>
                                    <Card.Text>
                                        Everywhere you go in financial and business circles people talk about "passive income" and "financial freedom", 
                                        now the vague definitions of those concepts are probably well within your understanding, yet to achieve "financial freedom" seems out of grasp for many.
                                        It requires capital investment, which most people nowadays due to economic recession and stagnating wages, is hard to come by. 
                                        By vizualizing the way you spend and what you're spending your income on, you can make better financial decisions, which will save you money, that you can then set aside for capital investment. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card className='InfoCard'>
                                <Card.Body>
                                    <Card.Title>Getting started</Card.Title>
                                    <Card.Text>
                                        MyMoney Tracker is a simple tool based in proven psychology. It assigns transactions to categories and helps to vizualize those relationships in a web UI.
                                        To start, simply: register, login, create a Category and attach your transactions.
                                        Over time, or if you have old reciepts this cataloging will make you more aware of what you buy and how you spend your money, since doing an action or writing thoughts leads to faster internalization and recognition of a behavioural pattern. 
                                        leading you to evaluate your financial decisions more carefully.
                                        Your budget is tracked by your spending "limits" per category and the total value of transactions.
                                        Under Budgeting you can view a ... 
                                      
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                </Row>
                <Row>
                <Col sm={4}></Col>
                <Col sm={4}>
                            <Card className='InfoCard'>
                                <Card.Body>
                                    <Card.Title>COMING SOON</Card.Title>
                                    <Card.Text>
                                       -Bank transaction integration
                                    </Card.Text>
                                    <img
                                    className="InfoCardImage"
                                    src="/images/undercontruction.jpeg" style={{width: '30%', height: '50%'}}
                                    
                                    ></img>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}></Col>
                </Row>
            </Container>
        </>
    );
}



