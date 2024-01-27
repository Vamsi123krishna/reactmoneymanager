import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    amountDetailsList: [],
    titleValue: '',
    amountValue: '',
    optionValue: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    const {amountDetailsList} = this.state
    const updatedTransactionList = amountDetailsList.filter(
      eachTransaction => id !== eachTransaction.id,
    )

    this.setState({
      amountDetailsList: updatedTransactionList,
    })
  }

  onChangingTitle = event => {
    this.setState({
      titleValue: event.target.value,
    })
  }

  onChangingAmount = event => {
    this.setState({
      amountValue: event.target.value,
    })
  }

  onChangingOptions = event => {
    this.setState({
      optionValue: event.target.value,
    })
  }

  onSubmitAmount = event => {
    const {titleValue, amountValue, optionValue} = this.state
    event.preventDefault()
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionValue,
    )
    const {displayText} = typeOption
    const newBalnceItem = {
      id: uuidv4(),
      titleValue,
      amountValue,
      displayText,
    }

    this.setState(prevState => ({
      amountDetailsList: [...prevState.amountDetailsList, newBalnceItem],
      titleValue: '',
      amountValue: '',
      optionValue: transactionTypeOptions[0].optionId,
    }))
  }

  getExpenses = () => {
    const {amountDetailsList} = this.state
    let expensesAmount = 0

    amountDetailsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += parseInt(eachTransaction.amount)
      }
    })

    return expensesAmount
  }

  getIncome = () => {
    const {amountDetailsList} = this.state
    let incomeAmount = 0
    amountDetailsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += parseInt(eachTransaction.amount)
      }
    })

    return incomeAmount
  }

  getBalance = () => {
    const {amountDetailsList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    amountDetailsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += parseInt(eachTransaction.amount)
      } else {
        expensesAmount += parseInt(eachTransaction.amount)
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {amountDetailsList} = this.state
    const yourBalance = this.getBalance()
    const yourIncome = this.getIncome()
    const yourExpense = this.getExpenses()
    return (
      <div>
        <div className="name-container">
          <h1>Hi, Richard</h1>
          <p>Welcome back to your money manager</p>
        </div>

        <div className="money-details-container">
          <MoneyDetails
            yourBalance={yourBalance}
            yourIncome={yourIncome}
            yourExpenses={yourExpense}
          />
        </div>

        <div>
          <h1>Add Transaction</h1>
          <div>
            <form onSubmit={this.onSubmitAmount}>
              <div>
                <label htmlFor="title">TITLE</label>
                <input
                  type="text"
                  placeholder="TITLE"
                  id="title"
                  onChange={this.onChangingTitle}
                />
              </div>
              <div>
                <label htmlFor="amount">AMOUNT</label>
                <input
                  type="text"
                  placeholder="AMOUNT"
                  id="amount"
                  onChange={this.onChangingAmount}
                />
              </div>
              <div>
                <label htmlFor="type">TYPE</label>
                <select onChange={this.onChangingOptions}>
                  {transactionTypeOptions.map(eachItem => (
                    <option value={eachItem.optionId}>
                      {eachItem.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit">Add</button>
            </form>
          </div>

          <div>
            <h1>History</h1>
            <div>
              <div>
                <p>title</p>
                <p>Amount</p>
                <p>type</p>
              </div>
              <ul>
                {amountDetailsList.map(eachItem => (
                  <TransactionItem
                    key={eachItem.id}
                    eachItemDetails={eachItem}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
