import React from 'react'

const Countries = ({ countries, newFilter }) => {
      let newFilterLowercase = newFilter.toLowerCase()
      let newFilterArray = countries.filter((country) => {
        let countryToLowerCase = country.name.toLowerCase()
        return (
          countryToLowerCase.includes(newFilterLowercase)
        )
      })
      // console.log(newFilterArray.length)
      // console.log(newFilter.length)
      if (newFilter.length === 0) {
        return "Let's start"
      } else if (newFilterArray.length < 10 && newFilterArray.length > 1) {
        return newFilterArray.map(country => <div key={country.name}>{country.name}</div>)
      } else if (newFilterArray.length === 1) {
            return (
            newFilterArray.map(country =>
              <div key={country.name}>
                <h2>{country.name}</h2>
                <div>
                  Capital: {country.capital} <br />
                  Population: {country.population}
                  <h3>Languages</h3>
                  <ul>
                  {country.languages.map(language => {
                    return <li key={language.name}>{language.name}</li>
                  })}
                  </ul>
                  <img src={country.flag} alt="Flag" width="200px"/>
                </div>
              </div>
            )
          )
      } else  {
        return "Too many matches, spesify another filter"
      }


}





export default Countries
