// Write your code here
const TransactionItem = props => {
  const {eachItemDetails, deleteTransaction} = props
  const {id, amountValue, titleValue, optionValue} = eachItemDetails

  const onClickDelete = () => {
    deleteTransaction(id)
  }
  return (
    <li>
      <div>
        <p>{titleValue}</p>
        <p>{amountValue}</p>
        <p>{optionValue}</p>
        <button type="button" data-testid="delete" onClick={onClickDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
