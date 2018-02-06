import React from 'react'
import LoanList from './LoanList'
import SearchBar from './SearchBar'

class Container extends React.Component {

  state = {
    loans: [],
    status: 'fundraising',
    filter: 0,
    nextPage: 1,
    loadable: true
  }

  componentDidMount() {
    this.loadLoans()
    document.addEventListener('scroll', this.handleScroll)
  }


  handleScroll = () => {
    let scrollBottom = window.innerHeight + window.pageYOffset
    let loadHeight = document.body.scrollHeight - (2 * window.innerHeight)
    if (scrollBottom > loadHeight && this.state.loadable ) {
      this.setState({
        loadable: false
      }, () => setTimeout(() => this.setState({ loadable: true }), 1000))
      this.loadLoans()
    }
  }

  loadLoans = () => {
    fetch(`http://api.kivaws.org/v1/loans/search.json?status=${this.state.status}&page=${this.state.nextPage}`)
    .then(res => res.json())
    .then(json => this.setState((prevState) => {
      return {
      loans: [...prevState.loans, ...json.loans],
      nextPage: ++prevState.nextPage
    }}))
  }

  handleSearch = (searchVal) => {
    this.setState({
      status: searchVal,
      nextPage: 1
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
        <SearchBar filter={this.state.filter} handleFilter={this.handleFilter} handleSearch={this.handleSearch} loadLoans={this.loadLoans}/>
        <LoanList loans={this.state.loans} filter={this.state.filter} />
      </div>
    )
  }
}

export default Container
