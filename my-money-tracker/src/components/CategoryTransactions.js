import React, { useState } from 'react';
import '../Styles/Categories.css';
import { Form, Modal, Button, Alert } from "react-bootstrap"

const CategoryTransactions = ({ userId }) => {
    const [categories, setCategories] = useState([]);
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [showTransactionModal, setShowTransactionModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [Categoryname, setCategoryName] = useState('');
    const [limit, setLimit] = useState('');
    const [type, setType] = useState(true);
    const [Transactionname, setTransactionName] = useState('');
    const [value, setValue] = useState('');
  return (
    <div className="category-container">
      <button onClick={() => setShowCategoryModal(true)}>Add Category</button>
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
                    <Button variant="primary" onClick={() =>setShowCategoryModal(false)}>
                    Add
                    </Button>
                </Modal.Footer>
                </Modal>
        </div>
        <div className="modal">
        <Modal show={showTransactionModal} onHide={()=>showTransactionModal(false)}>
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
                <Button variant="secondary" onClick={() =>setShowTransactionModal(false)}>
                Close
                </Button>
                <Button variant="primary" onClick={() =>setShowTransactionModal(false)}>
                Add
                </Button>
            </Modal.Footer>
            </Modal>
        </div>
      {categories.map(category => (
        <div key={category.id} className="category-box">
          <h3>{category.name}</h3>
          {category.transactions.map(transaction => (
            <div key={transaction.id} className="transaction">
              <span>{transaction.name}</span>
              <span>{transaction.value}</span>
            </div>
          ))}
          <button className='btn1' onClick={() => {
            setSelectedCategory(category.id);
            setShowTransactionModal(true);
          }}>
            Add Transaction
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryTransactions;