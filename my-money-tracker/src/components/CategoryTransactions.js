import { useState, useRef, useContext } from "react"
import PropTypes from 'prop-types';
import { Form, Modal, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../App.css'
import { propTypes } from "react-bootstrap/esm/Image";
import TransactionsContext from "../contexts/TransactionsContext";

const Cashless = {
    Cash: 'Cash',
    Card: 'Card'
}

const TransactionType = {
    income: 'income',
    expenditure: 'expenditure'
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
    Category: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            spendingLimit: PropTypes.number.isRequired, 
            categoryType: PropTypes.oneOf(Object.values(CategoryType)).isRequired
        })
}

export default function CategoryTransactions({categoryid, name, spendingLimit, categoryType}) {
    const [showEditModal, setShowEditModal] = useState(false)
    const [showMoreModal, setShowMoreModal] = useState(false)
    const [showAddTransactionModal, setShowAddTransactionModal] = useState(false)
    const DescRep = useRef()
    const AmRef = useRef()
    const BenRef = useRef()
    const {TransactionList, updateTList} = useContext(TransactionsContext)
    console.log(JSON.stringify(TransactionList))

    function AddTransaction(){
        const id = TransactionList.length
        const catId = categoryid
        const Desc = DescRep.current.value
        const Amount = AmRef.current.value
        const Ben = BenRef.current.value
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
        console.log(id)
        if (categoryType === CategoryType.income) {
            const Leftover = Amount;
            const newTransaction = {
              id: id,
              CategoryID: catId,
              description: Desc,
              amount: Amount,
              date: formattedDate,
              Beneficiary: Ben,
              transactionType: TransactionType.income,
              cashCredit: Cashless.Cash,
            };
            updateTList([...TransactionList, newTransaction]);
            console.log(newTransaction)
            console.log(TransactionList)
          }
          if (categoryType === CategoryType.expenditure) {
            const RightUnder = Amount;
            const newTransaction = {
              id: id,
              CategoryID: catId,
              description: Desc,
              amount: Amount,
              date: formattedDate,
              Beneficiary: Ben,
              transactionType: TransactionType.expenditure,
              cashCredit: Cashless.Cash,
            };
            updateTList([...TransactionList, newTransaction]);
            console.log(newTransaction)
            console.log(TransactionList)
          }
    }
    return(
        <div className="card">
            <button className="Overviewbtn" onClick={() => setShowAddTransactionModal(true)}>Add Transaction</button>
            <Modal show={showAddTransactionModal} onHide={() => setShowAddTransactionModal(false)}>
                <Form>
                    <Modal.Header closeButton>
                    <Modal.Title>New Transaction</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Transaction Description:</Form.Label>
                        <Form.Control type="text" required ref={DescRep}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="amount">
                        <Form.Label>Amount:</Form.Label>
                        <Form.Control
                        ref={AmRef}
                        type="number"
                        required
                        min={0}
                        step={0.01}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Beneficiary">
                        <Form.Label>Beneficiary:</Form.Label>
                        <Form.Control type="text" required ref={BenRef}/>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                    <button className="Overviewbtn" type="button" onClick={AddTransaction}>
                        Add Transaction
                        </button>
                    </div>
                    </Modal.Body>
                </Form>
            </Modal>
            <ul className="CTransactionsul">
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