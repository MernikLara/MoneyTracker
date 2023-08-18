import { useState, useRef } from "react"
import PropTypes from 'prop-types';
import { Form, Modal, Button, Alert } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../App.css'
import CategoryTransactions from '../components/CategoryTransactions'
import TransactionsProvider from '../components/TransactionsProvider'
import TransactionsContext from "../contexts/TransactionsContext";
import { Link } from 'react-router-dom'

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
       <CategoryTransactions/>
        </>
    )
}