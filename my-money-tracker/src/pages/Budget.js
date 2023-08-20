import { useState } from "react"
import { Link } from 'react-router-dom'
import '../Styles/BudgetStyles.css'

export default function Budget(){
    const [AllTransactions, setAllTransactions] = useState([])
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
