import { useState, useRef, useContext } from "react"
import PropTypes from 'prop-types';
import { Form, Modal, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../App.css'
import { propTypes } from "react-bootstrap/esm/Image";
import TransactionsContext from "../contexts/TransactionsContext";
import { Link } from 'react-router-dom'

const Cashless = {
    Cash: 'Cash',
    Card: 'Card'
}

const CategoryType = {
    income: 'income',
    expenditure: 'expenditure'
}


propTypes.CategoryTransactions = {
    Transaction: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired, 
        date: PropTypes.string.isRequired,
        Beneficiary: PropTypes.string.isRequired,
        transactionType: PropTypes.oneOf(Object.values(CategoryType)).isRequired,
        cashCredit: Cashless.isRequired,
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
            <h2>All Transactions</h2>
            <ul>
            {TransactionList.map(Transaction => (
                    <div key={Transaction.id} className="TransactionList">
                    <li>
                        {Transaction.amount}$ / to:  {Transaction.Beneficiary} / {Transaction.cashCredit} 
                        <button className="Overviewbtn" onClick={() => setShowMoreModal(true)}>Details</button>
                        <Modal show={showMoreModal} onHide={() => setShowMoreModal(false)}>
                            <Modal.Header closeButton>
                                    <Modal.Title>Več informacij</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Transaction Description: {Transaction.description} <br></br> Amount: {Transaction.amount} <br></br> {Transaction.TransactionType} <br></br> Date: {Transaction.date} <br></br>Beneficiary: {Transaction.Beneficiary} <br></br>Type of Transaction: {Transaction.cashCredit}
                            </Modal.Body>
                            <Modal.Footer>
                            </Modal.Footer>
                        </Modal>

                    </li>
                    </div>
                ))}
                </ul>
        </div>
    )



}