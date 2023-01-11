import React from 'react';
import "./LoanData.css";
import { loanEligibilityList } from './LoanEligibiltyList.data';


const LoanData = () => {
  return (
    <div className='loandata_main'>
      <h2>Eligibility</h2>
      <div className='loandata_box'>
      <ul className='loandata_list'>{
        loanEligibilityList.map((list) =><li className='primary_color' key={list}>{list}</li>)
      }

        
      </ul>
      <div className='loandata_img'>
        <img src='./images/eligibility_img.svg' alt='eligibility_img'/>
      </div>
      </div>
    </div>
  )
}

export default LoanData