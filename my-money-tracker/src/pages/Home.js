import { Link, Route, Routes, Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap'
import { Button, Form, Modal } from 'react-bootstrap';
import { useState, useRef } from "react"
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryTransactions from '../components/CategoryTransactions'

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

          
          </>
    )



}

