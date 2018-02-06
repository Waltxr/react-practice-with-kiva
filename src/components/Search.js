import React from 'react'

const Search = (props) => {

  const handleChange = (e) => {
    props.handleSearch(e.target.value)
  }

  return(
    <div>
      <select onChange={handleChange}>
        <option value="fundraising">fundraising</option>
        <option value="funded">funded</option>
        <option value="expired">expired</option>
      </select>
    </div>
  )
}

export default Search
