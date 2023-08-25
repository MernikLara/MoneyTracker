import { useState, useRef } from "react"
import PropTypes from 'prop-types';
import { Form, Modal, Button, Alert } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../App.css'
import CategoryTransactions from '../components/CategoryTransactions'
import TransactionsProvider from '../components/TransactionsProvider'
import TransactionsContext from "../contexts/TransactionsContext";
import { Link, useNavigate } from 'react-router-dom'
import CategoryProvider from "../components/CategoryProvider";
import '../Styles/Categorystyles.css'
import MasterProvider from "../components/MasterProvider";


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
    const navigate = useNavigate();


    const LogOut = () => {
      sessionStorage.clear();
      console.log("succeffuly logged out")
      navigate('/')
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
      <MasterProvider>
      <br></br>
      <br></br>
      <h2>Category Overview</h2>
      <br></br>
      <br></br>
       <CategoryTransactions/>
       </MasterProvider>
        </>
    )
}