import React from 'react'

const PersonForm = ({addNumber, newName, handleNameAdding, newNumber, handleNumberAdding}) =>  {
  return (
    <form onSubmit={addNumber}>
      <div>
        name:
        <input
          value={newName}
          onChange={handleNameAdding}
        />
      </div>
      <div>
        number:
        <input
          value={newNumber}
          onChange={handleNumberAdding}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )

}

export default PersonForm
