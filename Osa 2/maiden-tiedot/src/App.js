import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log("Hello hook!")
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const filterCountries = (event) => {
    event.preventDefault()
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h1>Let's find countries, yey!</h1>
      <Filter
        newFilter={newFilter}
        filterCountries={filterCountries}
      />
      <Countries
        countries={countries}
        newFilter={newFilter}
      />
    </div>
  )
}

export default App;
