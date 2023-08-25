import React, { useContext, useState, useEffect } from 'react';
import '../Styles/Categories.css';
import { Form, Modal, Button, Alert } from "react-bootstrap"
import MasterContext from '../contexts/MasterContext';
import { Link, useNavigate } from 'react-router-dom'
import propTypes from 'prop-types';

const CategoryType = {
    income: 'income',
    expenditure: 'expenditure'
}




const CategoryTransactions = ({ userId }) => {
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [showTransactionModal, setShowTransactionModal] = useState(false);
    const [kategorijaID, setKategorijaID] = useState();
    const [Categoryname, setCategoryName] = useState('');
    const [limit, setLimit] = useState('');
    const [type, setType] = useState(true);
    const [Transactionname, setTransactionName] = useState('');
    const [value, setValue] = useState('');
    const { CategoryList, setCategoryList, addCategory, IncomeList, setIncomeList, ExpenditureList, setExpenditureList, addExpenditure, addIncome, getSpecificPrihodi } = useContext(MasterContext);
    const [transactionType, setTransactionType] = useState('')
    const navigate = useNavigate();
    const UserID = sessionStorage.getItem('userID')
    const incomeShape = propTypes.shape({
        id: propTypes.number.isRequired,
        name: propTypes.string.isRequired,
        amount: propTypes.number.isRequired, 
        date: propTypes.string.isRequired,
        kategorijaid: propTypes.number.isRequired
    });
    
    const expenditureShape = propTypes.shape({
        id: propTypes.number.isRequired,
        name: propTypes.string.isRequired,
        amount: propTypes.number.isRequired, 
        date: propTypes.string.isRequired,
        kategorijaid: propTypes.number.isRequired
    });
    
    CategoryTransactions.propTypes = {
        Category: propTypes.shape({
            name: propTypes.string.isRequired,
            userid: UserID,
            limita: propTypes.number.isRequired,
            tip: propTypes.bool.isRequired,
            transactions: propTypes.arrayOf(
                propTypes.oneOfType([incomeShape, expenditureShape])
            ).isRequired
        }),
        Income: incomeShape,
        Expenditure: expenditureShape
    };
    


    useEffect(() => {
        console.log("Kategorija ID in TransactionType", kategorijaID);
    }, [kategorijaID]);

    function handleClick (id, Type) {
        console.log("My Name Jeff" + id, type)
        setTransactionType(Type)
        setKategorijaID(id)
        setShowTransactionModal(true)
        console.log("Catch22" + transactionType, kategorijaID)
    }

    /*const IncomesByCategory = IncomeList.reduce((acc, Income) => {
        if (!acc[Income.kategorijaid]) {
            acc[Income.kategorijaid] = [];
        }
        acc[Income.kategorijaid].push(Income);

        return acc;
        
    }, {});*/

    

    function handleRender(id, Type) {
        console.log("Handlerender" + id, Type);
    
    
        const updatedCategoryList = [...CategoryList];
    

        const category = updatedCategoryList.find(cat => cat.id === id);
    
        if (category) {
            if (Type === true) {
        
                IncomeList.forEach(Income => {
                    if (Income.kategorijaid === id) {
                        console.log(category.transaction)
                        if (!category.transactions) {
                            category.transactions = [];
                        }
                        category.transactions.push(Income);
                    }
                });
            } else if (Type === false) {
                ExpenditureList.forEach(Expenditure => {
                    if (Expenditure.kategorijaid === id) {
                        if (!category.transactions) {
                            category.transactions = [];
                        }
                        category.transactions.push(Expenditure);
                    }
                });
            }
            setCategoryList(updatedCategoryList);
        }
    }
    CategoryList.map(category => {
        console.log("Transactions for category", category.id, ":", category.transactions);
    });
   

  return (
    <div className="add-category-container">
      <button className='btn1' onClick={() => setShowCategoryModal(true)}>Add Category</button>
        <div className="modal">
            <Modal show={showCategoryModal} onHide={() =>setShowCategoryModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group>
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter category name" 
                        value={Categoryname} 
                        onChange={(e) => setCategoryName(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Limit</Form.Label>
                        <Form.Control 
                        type="number" 
                        placeholder="Enter limit" 
                        value={limit} 
                        onChange={(e) => setLimit(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Type</Form.Label>
                        <Form.Control 
                        as="select" 
                        value={type} 
                        onChange={(e) => setType(e.target.value === 'true')}
                        >
                        <option value={true}>Income</option>
                        <option value={false}>Expenditure</option>
                        </Form.Control>
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() =>setShowCategoryModal(false)}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={() => {

                      addCategory(Categoryname, limit, type);
                     }}>
                    Add
                    </Button>
                </Modal.Footer>
                </Modal>
        </div>
        <div className="modal">
        <Modal show={showTransactionModal} onHide={()=>setShowTransactionModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Add Transaction</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group>
                    <Form.Label>Transaction Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter transaction name" 
                    value={Transactionname} 
                    onChange={(e) => setTransactionName(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Value</Form.Label>
                    <Form.Control 
                    type="number" 
                    placeholder="Enter value" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    />
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="btn2" onClick={() =>setShowTransactionModal(false)}>
                Close
                </Button>
                {
                <button 
                    variant="btn1" 
                    onClick={() => {
                        addIncome(Transactionname, kategorijaID, value)
                        }}>
                                Add Income
                  </button>}
            </Modal.Footer>
            </Modal>
        </div>
        {(CategoryList && Array.isArray(CategoryList)) && CategoryList.map(category => (
            <div key={category.id} className="category-box">
                <h3>Category Name: {category.name}</h3>
                <h3>Limit: {category.limita} EUR</h3>
                <h3>Type: {category.type}</h3>
                <h4>Transactions</h4>
                {(category.transactions && Array.isArray(category.transactions)) ? (
                    category.transactions.map(transaction => (
                        <ul key={transaction.id}>
                            <li>{transaction}</li>

                        </ul>
                    ))
                ) : (
                    <p>No transactions for this category.</p>
                )}
        <button className='btn1' onClick={() => {
            handleClick(category.id, category.Type);
        }}>
            Add Transaction
        </button>
    </div>
))}
    
    </div>
  );
};

export default CategoryTransactions;