import { useState } from "react"

export default function Budget(){
    const [AllTransactions, setAllTransactions] = useState([])
    return(
        <div>
            <h2>Budgeting</h2>
            <div className="row">
            <div className="card"><div className="BudgetContainer">Getting started</div></div>
            <div className="card"><div className="BudgetContainer">Basic Decision making algorythm</div></div>
            </div>
        </div>
    )

    }
