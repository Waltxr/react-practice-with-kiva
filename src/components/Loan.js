import React from 'react'

class Loan extends React.Component {

  render() {
    return(
      <div>
        <h3>Name: {this.props.loan.name}</h3>
        <h4>This loan is {this.props.loan.use}</h4>
        <h4>Country: {this.props.loan.location.country}</h4>
        <h4>Town: {this.props.loan.location.town}</h4>
        <h4>Requested Amount: {this.props.loan.loan_amount}</h4>
        <h4>Funded Amount: {this.props.loan.funded_amount}</h4>
      </div>
    )
  }

}


export default Loan
