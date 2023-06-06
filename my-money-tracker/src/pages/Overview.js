import { useState, useRef } from "react"
import PropTypes from 'prop-types';
import { Form, Modal, Button, Alert } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../App.css'
import CategoryTransactions from '../components/CategoryTransactions'
import TransactionsProvider from '../components/TransactionsProvider'
import TransactionsContext from "../contexts/TransactionsContext";

const CategoryType = {
    income: 'income',
    expenditure: 'expenditure'
}

Overview.propTypes = {
    Categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        spendingLimit: PropTypes.number.isRequired,
        categoryType: PropTypes.oneOf(Object.values(CategoryType)).isRequired
      })
    )
  };

export default function Overview(){
    const NameRef = useRef()
    const LimitRef = useRef()
    const [SelectedType, setSelectedType] = useState(CategoryType.income)
    const [Categories, setCategories] = useState([{}])
    const [showAddCategoryModal, setshowAddCategoryModal] = useState(false)
    const [showEditModal, setshowEditModal] = useState(false)
    const selectedRef = useRef()
    const [progress, setprogress] = useState(56)
    const [Budget, setBudget] = useState(0)
    const [Limit, setLimit] = useState(0)
    const EditNRef = useRef()
    const EditLRef = useRef()
    const EditCatid = useState()
    const ok = document.getElementById("EEditN")

    function handleSubmit(e) {
        e.preventDefault()
        setSelectedType(selectedRef.current.value)
        addCategory(NameRef.current.value, LimitRef.current.value, SelectedType)
        console.log(NameRef.current.value, LimitRef.current.value, SelectedType + "sn tu 1")
        setshowAddCategoryModal(false)
    }
  
  
    function addCategory(name, spendingLimit, categoryType) {
        setCategories((prevCategories) => [
          ...prevCategories,
          {
            id: prevCategories.length + 1,
            name: name,
            spendingLimit: parseInt(spendingLimit),
            categoryType: categoryType
          }
        ]);
        console.log(Categories.length)
        console.log(ok)
    }
    
    function editCategory(id) {
        console.log(id-1)
        const updatedCategories = [...Categories];
        updatedCategories[id-1].name = EditNRef.current.value;
        updatedCategories[id-1].spendingLimit = EditLRef.current.value;
        console.log(updatedCategories[id-1].name, updatedCategories[id-1].spendingLimit)
        setCategories(updatedCategories);
      }
      


    


    return(
        <div id="PageDiv" className="container">
            <h2>Overview</h2>
            <div id="CategoryListContainer" className="card">
                <button className="Overviewbtn" onClick={() => setshowAddCategoryModal(true)}>Add Catergory</button> <label>Budget: XYZ$ / XYZ$</label><progress value={progress} max={100}></progress>
                <Modal show={showAddCategoryModal} onHide={() => setshowAddCategoryModal(false)}>
                    <Form onSubmit={handleSubmit}>
                        <Modal.Header closeButton>
                        <Modal.Title>Add Category</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Category name:</Form.Label>
                            <Form.Control ref={NameRef} type="text" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="amount">
                            <Form.Label>Spending Limit:</Form.Label>
                            <Form.Control
                            ref={LimitRef}
                            type="number"
                            required
                            min={0}
                            step={0.01}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="amount">
                        <Form.Select defaultValue={SelectedType} ref={selectedRef}>
                            <option value={CategoryType.income}>Income</option>
                            <option value={CategoryType.expenditure}>Expenditure</option>
                        </Form.Select>
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <button className="Overviewbtn" type="submit">
                            Add
                            </button>
                        </div>
                        </Modal.Body>
                    </Form>
                </Modal>
                        {Categories.map(Category => (
                            <div className="CategoryListContainer" key={Category.id}>
                                {Category.categoryType === CategoryType.income &&
                                    <div className="Overviewincome">
                                        <h4>Category: {Category.name} </h4><br></br><h4> Available: {Category.spendingLimit}$ </h4><p>{Category.id}</p>
                                        <button className="Overviewbtn" onClick={() => setshowEditModal(true)}>Uredi</button>
                                        <Modal show={showEditModal} onHide={() => setshowEditModal(false)}>
                                            <Modal.Header closeButton>
                                                    <Modal.Title>Uredi Kategorijo</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                    <label>Name</label><input type="text" id="EEditN" ref={EditNRef}/>
                                                    <br></br>
                                                    <label>Limit</label><input type="number" ref={EditLRef}/>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="primary" onClick={() => editCategory(Category.id)}>
                                                    Save changes
                                                </Button>
                                            </Modal.Footer>
                                            </Modal>
                                            <CategoryTransactions name={Category.name} spendingLimit={Category.spendingLimit} categoryType={Category.categoryType}  />
                                    </div>

                                }
                                {Category.categoryType === CategoryType.expenditure &&
                                    <div className="Overviewexpenditure">
                                        <h4>Category: {Category.name}</h4><br></br><h4>Spending Limit: {Category.spendingLimit}$</h4><p>{Category.id}</p>
                                        <p>Spent: 0/{Category.spendingLimit}</p>
                                        <button className="Overviewbtn" onClick={() => setshowEditModal(true)}>Uredi</button>
                                            <Modal show={showEditModal} onHide={() => setshowEditModal(false)}>
                                                <Modal.Header closeButton>
                                                        <Modal.Title>Uredi Kategorijo</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                        <label>Name</label><input type="text" ref={EditNRef}/>
                                                        <br></br>
                                                        <label>Limit</label><input type="number" ref={EditLRef}/>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="primary" onClick={() => editCategory(Category.id)}>
                                                        Save changes
                                                    </Button>
                                                </Modal.Footer>
                                                </Modal>
                                                <TransactionsProvider>
                                                <CategoryTransactions name={Category.name} spendingLimit={Category.spendingLimit} categoryType={Category.categoryType}/>
                                                </TransactionsProvider>
                                    </div>
                                }
                            </div>
                        ))}

            </div>
        </div>
    )
}