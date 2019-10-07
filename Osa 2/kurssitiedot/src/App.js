import React from 'react'
import Course from './components/Course'


const App = ({ courses, topic }) => {
    return (
      <Course
        topic={topic}
        courses={courses}
      />
    )

}


export default App
