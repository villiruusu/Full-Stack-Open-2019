import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'
import Filter from './components/Filter.js'
import Notification from './components/Notification.js'
import phonebookService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [className, setClassName] = useState('')

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
            const messageClass = "add" // tallennetaan muuttujaan haluttu className, tässä tapauksessa "add"
            phonebookService
              .addPerson(newPerson)
              .then(addedPerson => {
                setPersons(persons.concat(addedPerson))
                setMessage(`${addedPerson.name} was added to phonebook`) // Asetetaan messageksi kyseinen viesti
                setClassName(messageClass) // asetetaan classNameksi aiemmin muuttujaan tallennettu "add"
                setTimeout(() => { // Viesti näkyy ikkunassa 5 sekuntia ja sen jälkeen tyhjenee, samoin classname-kenttä tyhjenee
                  setMessage(null)
                  setClassName('')
                }, 5000)
                setNewName('')
                setNewNumber('')
              })

          }
  }

  // Haetaan json-data ja asetetaan se persons-taulukkoon
  useEffect(() => {
    // console.log("Hiphei")
    phonebookService
      .getAll()
      .then(allNumbers => {
        setPersons(allNumbers)
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

  // Tallennetaan käyttäjän syöttämä filtteri muuttujaan talteen käsittelyä varten
  const filterNames = (event) => {
    event.preventDefault()
    setNewFilter(event.target.value)
  }

  const deletePerson = (person) => {
    //console.log("inside deletePerson")
    if (window.confirm(`Delete ${person.name} ?`)) {
      const messageClass = "delete" // tallennetaan muuttujaan haluttu className, tässä tapauksessa "delete"
      phonebookService
      .deletePerson(person.id)
        .then(response => {
          setPersons(persons.filter(item => item.id !== person.id ))
          setMessage(`${person.name} was deleted from phonebook`) // Muodostetaan näytettävä viesti, henkilö poistettu tietokannasta
          setClassName(messageClass) // Määritetään classNameksi aiemmin muuttujaan tallennettu "delete"
          setTimeout(() => { // Viesti näkyy ikkunassa 5 sekuntia ja sen jälkeen tyhjenee, samoin classname-kenttä tyhjenee
            setMessage(null)
            setClassName('')
          }, 5000)
        })
      }
    }

  return (
    <div>
      <h1>Phonebook</h1>

      <Notification
        message={message}
        className={className}
      />

      <h2>Filter numbers</h2>
      <Filter
        newFilter={newFilter}
        filterNames={filterNames}
      />
      <h2>Add a new contact</h2>
      <PersonForm
        addNumber={addNumber}
        newName={newName}
        handleNameAdding={handleNameAdding}
        newNumber={newNumber}
        handleNumberAdding={handleNumberAdding}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        newFilter={newFilter}
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App
