import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ course }) => {
    const courseInformation = () => course.parts.map(item =>
        <Content 
            key={item.id}
            course={item}
        />
    )

    const totalExercises = course.parts.reduce((sum, parts) => {
         return sum + parts.exercises
    }, 0)


    return (
        <div>
            <Header course={course} />
            {courseInformation()}
            <Total total={totalExercises} />
        </div>
    )
}


export default Course 