import React from 'react'

const Course = ({courses, topic})=>
    <>
    <h1>{topic}</h1>
    {courses.map(item =>
        <CourseInformation
          key={item.id}
          course={item}
          topic={topic} />
    )}
    </>

const CourseInformation = (props) => {
  // console.log(props.course)
  return (
    <>
      <Header header={props.course.name} />
      <Content course={props.course} />
      <Total course={props.course.parts} />
    </>
  )
}

const Header = ({header}) => <h2>{header}</h2>

const Content = ({course}) => /*console.log(course.parts) ||*/ course.parts.map(item =>
  <div key={item.id}>{item.name}: {item.exercises}</div>)

const Total = ({course}) => /*console.log(course) ||*/ <p><strong>Total of {course.reduce((sum, part) =>
      sum + part.exercises, 0)} exercises </strong></p>


export default Course
