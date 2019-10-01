import React from 'react'

const Content = ({ course }) => {
    return (
    <div>{course.name}  {course.exercises} </div>
    )
}

export default Content