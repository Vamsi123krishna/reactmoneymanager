// Write your code here
const MoneyDetails = props => {
  const {yourBalance, yourIncome, yourExpenses} = props

  return (
    <div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p>Your Balance</p>
          <p data-testsid="balanceAmount">Rs {yourBalance}</p>
        </div>
      </div>

      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {yourIncome}</p>
        </div>
      </div>

      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testsid="expensesAmount">Rs {yourExpenses}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
