import React from 'react'
import Loan from './Loan'

const LoanList = (props) => {

  const loans = props.loans
  .filter((loan) => loan.loan_amount >= props.filter)
  .map((loan) =>  <Loan key={loan.id} loan={loan} />)

  return(
    <div>{loans}</div>
  )

}

export default LoanList
