import React, { useState, } from 'react'


import './App.css';
import ExpenseForm from './components/ExpenseForm';
import Expenselist from './components/Expenselist';

const App = () => { 
  const [expenses, setExpenses] = useState([
    { id : 1, charge:"렌트비", amount:1600},
    { id : 2, charge:"교통비", amount:400},
    { id : 3, charge:"식비", amount:1200},
  ]);
  const [charge, setcharge] = useState("");
  const [amount, setAmount] = useState(0);
  const [id, setId] = useState("")
  
  const [isEditing, setisEditing] = useState(false);

  ///수정 함수
  

  ///제출 함수
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if(charge !== '' && amount > 0) { ///charge와 amount의 존재 확인

      if(isEditing) {
      const newExpense = expenses.map(item => {
          return item.id === id ? {...item, charge, amount} : item;
        })
        setExpenses(newExpense);
        setisEditing(false);
      } else {
        const newExpense = {id: crypto.randomUUID(), charge, amount} ///새로 만드는 항목
        const newExpenses = [...expenses, newExpense]; ///기존 배열을 새 배열로 만들어 주고
        setExpenses(newExpenses);   ///setter 함수에 집어 넣어 최신화 시킨다
         
        }
        
      setAmount(0);   
      setcharge("");

    } else {
      alert("경고") 
    }
  }

  ///charge change
  const handleCharge = (e) => {
    setcharge(e.target.value);
  }
  ///amount change
  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber)
  }

  ///item 제거 함수
  const handleDelete = (id) => {
    //새로운 배열로 만들어 주는 작업
    const newExpenses = expenses.filter(expense => expense.id !== id);
   
    setExpenses(newExpenses);
  }

  const handleEdit = (id) => {
    setisEditing(true);
    const expense = expenses.find(item=> item.id ===id); ///find 값을 리턴 id
    const {charge, amount} = expense;
    setcharge(charge);
    setAmount(amount);
    setId(id);
  }

  const handleReset = () => {
    setcharge("");
    setAmount(0);
    setisEditing(false);
    setExpenses([]);
  }
  const total = expenses.reduce((acc,curr) => {
    return acc += curr.amount
}, 0)

  return (
    <main className='container'>
    <h1>
      예산 계산기
    </h1>

    <div>
      <ExpenseForm charge={charge}
                    amount={amount}
                    handleCharge={handleCharge}
                    handleAmount={handleAmount}
                    handleSubmit={handleSubmit}
                    isEditing={isEditing}/>
    </div>

    <div>
      <Expenselist 
                  expenses={expenses}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  handleReset={handleReset}
                  />
    </div>

    <div>
      <p className='resultContainer'>
        <span className='Total'>
          Total Expense : {
            total
          }원
        </span>
      </p>
    </div>
  </main>
  )
}

export default App;