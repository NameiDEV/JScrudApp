import React from 'react'
import "./ExpenseForm.css";
import { MdSend } from 'react-icons/md';

const ExpenseForm = ({isEditing,charge,amount,handleCharge,handleAmount,handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}
            >
        <div className='valuebox'>
            <div className='Inputbox'>
                <label htmlFor='charge'>
                    지출 항목
                </label>
                <input
                    className="form-control"
                     type='text'
                    id="charge"
                    name="charge"
                    placeholder="예) 과자값 "
                    value={charge}
                    onChange={handleCharge}/>                                        
            </div>
            <div className='Inputbox'>
                <label htmlFor='amount'>
                    비용
                </label>
                <input 
                    className="form-control"
                type='number'
                    id="amount"
                    name="amount"
                    placeholder='100'
                    value={amount}
                    onChange={handleAmount}/>                                        
            </div>
        </div>
        <button className="nomalButton" type='submit'>
            {isEditing ? "Edit" : "Submit"}
            <MdSend className='Mdsend'/>
        </button>
      </form>
  )
}
export default ExpenseForm