import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'
import Filter from './components/Filter.js'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  /* Käyttäjän syöttämä nimi on newName-muuttujassa, joka syötetään addNumber-metodin
     avulla persons-taulukkoon, jonka jälkeen newName-tietueen arvo nollataan */
  const addNumber = (event) => {
    // console.log("sisällä addNumberissa ollaan")
    event.preventDefault()
        const newPerson = {
          name: newName,
          number: newNumber
        }
        // Testataan, onko nimi tai numero jo lisätty, ja lisätään vain jos se on uusi tietue
        if (persons.some(person => person.name === newName)) {
            window.alert(`${newName} is already added to phonebook`)
        } else if (persons.some(person => person.number === newNumber)) {
          window.alert(`${newNumber} is already added to phonebook`)
        } else {
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewNumber('')
          }
  }

  // Haetaan json-data ja asetetaan se persons-taulukkoon
  useEffect(() => {
    // console.log("Hiphei")
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        //console.log(response.data)
        setPersons(response.data)
      })
  }, [])


  // Tallennetaan käyttäjän syöttämä nimi newName-muuttujaan talteen
  const handleNameAdding = (event) => {
    setNewName(event.target.value)
  }

  // Tallennetaan käyttäjän syöttämä puhelinnumero newNumber-muuttujaan talteen
  const handleNumberAdding = (event) => {
    setNewNumber(event.target.value)
  }

  const filterNames = (event) => {
    event.preventDefault()
    setNewFilter(event.target.value)
  }


  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Filter numbers</h2>
      <Filter newFilter={newFilter} filterNames={filterNames} />
      <h2>Add a new contact</h2>
      <PersonForm addNumber={addNumber} newName={newName} handleNameAdding={handleNameAdding} newNumber={newNumber} handleNumberAdding={handleNumberAdding} />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter}/>
    </div>
  )
}

export default App
