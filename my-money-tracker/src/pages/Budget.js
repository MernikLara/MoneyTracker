import { useState } from "react"
import { Link } from 'react-router-dom'

export default function Budget(){
    const [AllTransactions, setAllTransactions] = useState([])
    return(
        <div>
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
            <h2>Budgeting</h2>
            <div className="row">
            <div className="card"><div className="BudgetContainer">Getting started</div></div>
            <div className="card"><div className="BudgetContainer">Basic Decision making algorythm</div></div>
            </div>
        </div>
    )

    }
