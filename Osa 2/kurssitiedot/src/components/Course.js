import React from 'react'


const Course = (props) => {

  const mappingCourses = () => props.courses.map(course =>
    <div key={course.id}>
      <h2>{course.name}</h2>
        {course.parts.map(item =>
        <p key={item.id}>{item.name}: {item.exercises} </p>)}
        <p><strong>Total of {course.parts.reduce((sum, parts) => sum + parts.exercises, 0)} exercises</strong></p>
      </div>)

  return (
    <div>
    <h1>{props.topic}</h1>
      {mappingCourses()}
    </div>
  )
}
export default Course
