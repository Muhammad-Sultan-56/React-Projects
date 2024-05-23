
import './App.css';
import ExpensItem from './components/ExpensItem';

function App() {
  let title = "Food Amount";
  let amount = 300;
  let date = new Date();

  return (

    <>
      <div className='main'>
        <h1 className='heading'>Expense Tracker App</h1 >

        <ExpensItem date={date} title={title} amount={amount}></ExpensItem>
        <ExpensItem date={date} title={title} amount={amount}></ExpensItem>
        <ExpensItem date={date} title={title} amount={amount}></ExpensItem>
        <ExpensItem date={date} title={title} amount={amount}></ExpensItem>
      </div>
    </>
  )
}

export default App;
