import React from 'react'


    const getExperience = (dateString) => {
        let today = new Date()
        let startDate = new Date(dateString)
        let month = today.getMonth() - startDate.getMonth()
        let experience = today.getFullYear() - startDate.getFullYear()
      
        if (month < 0 || (month === 0 && today.getDate() < startDate.getDate())) {
          experience--
        }
        console.log(experience.toString())
      }
    
const AgeFinder = (props) => {
    return (
       <div>{getExperience} </div>
   )
}

