import React from 'react'

/*  Mapataan persons-taulukko läpi ja tulostetaan tietueet näkyville
      Laitettu unque keyksi puhelinnumero, sillä samannimisiä voi olla monia */
  const Persons = ({persons, newFilter}) => {
      // muutetaan käyttäjän syöttämä hakusana sisältämään pelkkiä pieniä kirjaimia
      let newFilterLowerCase = newFilter.toLowerCase()

      /* luodaan uusi apu-taulukko, jossa ensin käydään läpi jokainen tietue ja muutetaan
         sisältämään vain pieniä kirjaimia, ja palautetaan ne tietueet, jotka sisältävät
         newFilter-muuttujan sisältämän tekstinpätkän

         Yritin myös saada puhelinnumerohakua, mutta se jäi nyt toistaiseksi kesken.
         Tämän varmaan voisi tehdä if-lauseilla ja regex-säännöillä?? */ 
      let newFilterArray = persons.filter((person) => {
        let personToLowerCase = person.name.toLowerCase()
        // let noHyphens = person.number.replace(/-/g,"") -- numeroista väliviivat pois
        return (
          personToLowerCase.includes(newFilterLowerCase)
          // noHyphens.includes(newFilterLowerCase) -- jätetään hautumaan :D
        )
      })
      return newFilterArray.map(person =>
        <div key={person.number}>{person.name} {person.number}</div>
  )
}

export default Persons
