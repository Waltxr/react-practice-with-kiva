import React from 'react'
import Filter from './Filter'
import Search from './Search'


const SearchBar = (props) => {

  const handleClick = () => {
    props.loadLoans()
  }

  const LoadMore = () => {
    return(<button onClick={handleClick}>Load More</button>)
  }

  return(
    <div>
      <Filter handleFilter={props.handleFilter} />
      <Search handleSearch={props.handleSearch}/>
      {LoadMore()}
    </div>
  )

}

export default SearchBar
