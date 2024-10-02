import React from 'react'
import "./ExpenseItem.css";
import { MdDelete, MdEdit } from 'react-icons/md';
function ExpenseItem({expense,handleDelete,handleEdit}) {
  return (
    <li className='item'>
        <div className='iteminfo'>
            <span>{expense.charge}</span>
            <span>{expense.amount}원</span>

        </div>
        <div className='itemButtons'>
            <button className="itembutton" onClick={() => handleEdit(expense.id)}>
              
               <MdEdit className='Edit'/>
            </button>
            <button className="itembutton" onClick={() => handleDelete(expense.id)}>
               
                <MdDelete className='Delete'/>
            </button>
        </div>
      </li>
  )
}

export default ExpenseItem