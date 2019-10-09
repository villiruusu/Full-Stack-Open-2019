import React, { useState } from 'react'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'
import Filter from './components/Filter.js'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567'},
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
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
