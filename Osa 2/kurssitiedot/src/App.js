import React from 'react'
import Course from './components/Course'


const App = ({ courses, topic }) => {
    return (
      <Course
        courses={courses}
        topic={topic}
      />
    )

}

export default App
