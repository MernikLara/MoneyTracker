import { useContext } from "react"
import TransactionsContext from "../contexts/TransactionsContext"
import PropTypes from 'prop-types';

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


export default function AlltransactionsTable(){
    const { TransactionList, updateTList } = useContext(TransactionsContext) 
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>date</th>
                        <th>Beneficiary</th>
                        <th>Cash or Credit:</th>
                    </tr>
                    {TransactionList.map(Transaction => (
                        <tr>
                            <th>{Transaction.CategoryID}</th>
                            <th>{Transaction.amount}</th>
                            <th>{Transaction.description}</th>
                            <th>{Transaction.date}</th>
                            <th>{Transaction.Beneficiary}</th>
                            <th>{Transaction.cashCredit}</th>
                        </tr>
                    ))}
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    )



}