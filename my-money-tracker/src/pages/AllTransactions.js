import { useState, useRef, useContext } from "react"
import PropTypes from 'prop-types';
import { Form, Modal, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../App.css'
import { propTypes } from "react-bootstrap/esm/Image";
import TransactionsContext from "../contexts/TransactionsContext";
import { Link } from 'react-router-dom'
import AlltransactionsTable from "../components/AlltransactionsTable";
import TransactionsProvider from "../components/TransactionsProvider";

const Cashless = {
    Cash: 'Cash',
    Card: 'Card'
}

const CategoryType = {
    income: 'income',
    expenditure: 'expenditure'
}


propTypes.CategoryTransactions = {
    Income: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired, 
        date: PropTypes.string.isRequired,
        CategoryID: PropTypes.number.isRequired
        }),
    Expenditure: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired, 
        CategoryID: PropTypes.number.isRequired
    }),
}

export default function AllTransactions(){
    const {TransactionList, updateTList} = useContext(TransactionsContext)
    const [showMoreModal, setShowMoreModal] = useState(false)
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
             <br></br>
             <br></br>
            <h2>All Transactions</h2>
            <TransactionsProvider>
            <AlltransactionsTable/>
            </TransactionsProvider>
        </div>
    )



}