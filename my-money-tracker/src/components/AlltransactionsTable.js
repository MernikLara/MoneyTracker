import { useContext, useState } from "react"
import TransactionsContext from "../contexts/TransactionsContext"
import PropTypes from 'prop-types';
import CategoryContext from "../contexts/CategoryContext";
import "../Styles/TTable.css"

const CategoryType = {
    income: 'income',
    expenditure: 'expenditure'
}

PropTypes.AlltransactionsTable = {
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
      Category: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        spendingLimit: PropTypes.number.isRequired,
        categoryType: PropTypes.oneOf(Object.values(CategoryType)).isRequired
      })
}


export default function AlltransactionsTable(){
    const { IncomeList, ExpenditureList, updateEList, updateIList } = useContext(TransactionsContext) 
    console.log(IncomeList)
    console.log(ExpenditureList)
    const { CategoryList } = useContext(CategoryContext)
    const [PCategoryName, setPCategoryName] = useState("");
    const [PCategoryNumber, setPCategoryNumber] = useState();
    const CCategory = useState();
    const [OCategoryName, setOCategoryName] = useState("");
    const [OCategoryNumber, setOCategoryNumber] = useState();
    const OCategory = useState();

    const findCategorybyID = (id) => {
        return CategoryList.find(Category => Category.id === id) || {};
    }
    return (
        <div className="container mt-5"> 
            <div className="row">
                <div className="col-md-6">
                    <h4>Incomes</h4>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Amount</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(IncomeList) && IncomeList.map(Income => {
                                const categoryID = Income.CategoryID;
                                const category = findCategorybyID(categoryID);
                                
                                return (
                                    <tr key={Income.id}>
                                        <td>{category && category.name ? category.name : "Failed to fetch category"}</td>
                                        <td>{Income.value}</td>
                                        <td>{Income.name}</td>
                                        <td>{Income.date}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <h4>Expenditures</h4>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Amount</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Array.isArray(ExpenditureList) && ExpenditureList.map(Expenditure => {
                                const categoryID = Expenditure.CategoryID;
                                const category = findCategorybyID(categoryID);
                                
                                return (
                                    <tr key={Expenditure.id}>
                                        <td>{category && category.name ? category.name : "Failed to fetch category"}</td>
                                        <td>{Expenditure.value}</td>
                                        <td>{Expenditure.name}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
