function ExpensItem(props) {
    return (

        <div className="expensItem">

            <div className="date-title">
                <div>{props.title}</div>
                <div>{props.date.toLocaleString()}</div>
            </div>

            <div>
                <span className="amount">  {props.amount} </span>
            </div>

        </div>
    )
}

export default ExpensItem;