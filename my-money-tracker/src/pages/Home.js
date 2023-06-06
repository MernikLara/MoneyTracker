import { useState, useRef } from "react"
import PropTypes from 'prop-types';
import { Form, Modal, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../App.css'
import CategoryTransactions from '../components/CategoryTransactions'

export default function Home(){
    return(
        <div>
            <h2>Home Page</h2>
            <div className="MainHome">
            <div className="card"><div className="HomeContainer">Company Details</div></div>
            <div className="card"><div className="HomeContainer">Contact Information</div></div>
            <div className="card"><div className="HomeContainer">Getting started guide link</div></div>
            </div>
        </div>
    )



}