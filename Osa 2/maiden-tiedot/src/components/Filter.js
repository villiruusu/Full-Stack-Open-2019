import React from 'react'

const Filter = ({ newFilter, filterCountries }) => {
  return (
    <form>
      <div>
        Find countries:
          <input
            value={newFilter}
            onChange={filterCountries}
          />
      </div>
    </form>
  )
}

export default Filter
