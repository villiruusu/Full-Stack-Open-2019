import React from 'react'

const Filter = ({newFilter, filterNames}) => {
  return (
    <form>
    Filter with: 
      <input
        value={newFilter}
        onChange={filterNames}
      />
    </form>
  )
}

export default Filter
