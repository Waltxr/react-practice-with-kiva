import React from 'react'

const Filter = (props) => {

  const handleChange = (e) => {
    props.handleFilter(e.target.value)
  }

  return(
    <input type="range" min="0" max="2000" value={props.filter} onChange={handleChange} />
  )

}

export default Filter
