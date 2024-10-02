import React from 'react';
import ExpenseItem from './ExpenseItem';
import "./Expenselist.css";
import { MdDelete } from 'react-icons/md';
const Expenselist = ({handleReset,expenses,handleEdit,handleDelete}) => {
  return (
    <>
        <ul className='itemContainer'>
            {
               expenses.map(
                    expense => {
                        return (
                            <ExpenseItem 
                            expense={expense}                            
                            key={expense.id}
                            handleEdit={handleEdit}     
                            handleDelete={handleDelete}                       
                            />
                        )
                    }
                )
            }
            

        </ul>
        {expenses.length > 0 && (
        <button className='Delete-Button' onClick={handleReset}>
            Reset
            <MdDelete/>
        </button>
        )}
      </>
  )
}

export default Expenselist