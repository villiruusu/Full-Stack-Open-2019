import React from 'react'

const Notification = ({ message, className }) => {
  if (message === null) {
    return null
  }

// Palautetaan viestipalkki sovellukseen, classNamen mukaan muodostuu eri värinen palkki riippuen onko delete vai add
    return (
      <div className={className}>
        {message}
      </div>
    )
  }

export default Notification
