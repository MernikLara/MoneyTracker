import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/BudgetStyles.css'
import { Alert, Button, Form, Modal } from 'react-bootstrap';

const sampleCategoryList = [
    {
      id: 1,
      name: 'Najemnina',
      userId: 123,
      limita: 500,
      tip: 'Expense',
      transactions: [
        { id: 101, name: 'Najemnina', value: 400 },
        { id: 102, name: 'Staninvest', value: 50 },
      ],
    },
    {
      id: 2,
      name: 'Stroški bivanja',
      userId: 123,
      limita: 500,
      tip: 'Expense',
      transactions: [
        { id: 201, name: 'Tamstan', value: 70 },
        { id: 202, name: 'Telemach', value: 70 },
        { id: 203, name: 'Elektro Maribor', value: 55 },
      ],
    },
    {
      id: 2,
      name: 'Avto',
      userId: 123,
      limita: 500,
      tip: 'Expense',
      transactions: [
        { id: 201, name: 'Bencin', value: 90 },
        { id: 202, name: 'Lizing', value: 200 },
        { id: 202, name: 'Zavarovanje', value: 50 },
      ],
    },
  ];

export default function Budget(){
    const [AllTransactions, setAllTransactions] = useState([])
    const navigate = useNavigate();
    const LogOut = () => {
        sessionStorage.clear();
        console.log("succeffuly logged out")
        navigate('/')
      }
    

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
             <br></br>
             <br></br>
             <br></br>
             <h2>Budgeting</h2>
             <center>
                { sampleCategoryList.reduce(
                    (total, category) => total + category.transactions.reduce((categoryTotal, transaction) => categoryTotal + transaction.value, 0),0)
                }
                /
                { sampleCategoryList.reduce((total, category) => total + category.limita,0) }
             </center>
            <div className="row">
                
                {sampleCategoryList.map(category => (

                <div key={category.id} className="small-card">
                    <h4>{category.name}</h4>
                    <p>Limit: {category.limita}</p>
                    <p>Type: {category.tip}</p>
                    <p>Spent: {category.transactions.reduce((total, transaction) => total + transaction.value, 0)}</p>
                </div>

                ))}
            </div>
        </div>
    )

    }
