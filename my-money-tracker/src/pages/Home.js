import { useState, useRef } from "react"
import PropTypes from 'prop-types';
import { Form, Modal, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../App.css'
import CategoryTransactions from '../components/CategoryTransactions'
import logo from './MoneyTracker_logo.png' // relative path to image 

export default function Home() {
    return (
        <div>

            <div className="MainHome">
            <div className="card"><div className="HomeContainer"><h1>New to MoneyTracker?</h1>
                    <p><h2>Some quick tips:</h2></p>
                    <ul>
                    <p> <li><b>OVERVIEW:</b> A place where all your finances are - You can see your transactions (positive and negative ones), spent and remaing money.</li>
                    <li><b>BUDGETING</b>: Divide your expenses in categories and track exactly where your money goes!</li>
                    <li><b>TRANSACTIONS:</b> This is a page for you to add your transactions to track them!</li>
                    </p>
                    </ul>
                    </div></div>
                </div>
                
            </div>
    )



}