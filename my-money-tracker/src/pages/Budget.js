import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/BudgetStyles.css'
import { Alert, Button, Form, Modal } from 'react-bootstrap';

export default function Budget(){
    const [AllTransactions, setAllTransactions] = useState([])
    const navigate = useNavigate();
    const LogOut = () => {
        sessionStorage.clear();
        console.log("succeffuly logged out")
        navigate('/')
      }
    

    return(
        <div className="budget-page">
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
                    <li>
              <Button className='btn1' onClick={LogOut}>Logout</Button>
            </li>
            <li className='logo'>
              <img
              src='/images/MoneyTracker_logo.png'
              ></img>
            </li>
                </ul>
             </div>
             <br></br>
             <br></br>
             <br></br>
             <h2>Budgeting</h2>
            <div className="row">
                <div className="small-card">
                    <h4>Getting started</h4>
                    <p>Some introductory content about getting started with budgeting.</p>
                </div>
                <div className="large-card">
                    <h4>Basic Decision-making Algorithm</h4>
                    <p>Detailed content and structure for the decision-making algorithm.</p>
                </div>
            </div>
        </div>
    )

    }
