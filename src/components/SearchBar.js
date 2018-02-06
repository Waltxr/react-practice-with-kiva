import React from 'react'
import Filter from './Filter'
import Search from './Search'

const SearchBar = (props) => {

  return(
    <div>
      <Filter handleFilter={props.handleFilter} />
      <Search handleSearch={props.handleSearch}/>
    </div>
  )

}

export default SearchBar
