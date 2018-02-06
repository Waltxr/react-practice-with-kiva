import React from 'react'
import LoanList from './LoanList'
import SearchBar from './SearchBar'

class Container extends React.Component {

  state = {
    loans: [],
    status: 'fundraising',
    filter: 0
  }

  componentDidMount() {
    this.loadLoans()
  }

  loadLoans() {
    fetch(`http://api.kivaws.org/v1/loans/search.json?status=${this.state.status}`)
    .then(res => res.json())
    .then(json => this.setState({
      loans: json.loans
    }))
  }

  handleSearch = (searchVal) => {
    this.setState({
      status: searchVal
    }, this.loadLoans)
  }

  handleFilter = (filter) => {
    this.setState({
      filter: filter
    })
  }

  render() {
    return(
      <div>
        <SearchBar filter={this.state.filter} handleFilter={this.handleFilter} handleSearch={this.handleSearch}/>
        <LoanList loans={this.state.loans} filter={this.state.filter} />
      </div>
    )
  }
}

export default Container
