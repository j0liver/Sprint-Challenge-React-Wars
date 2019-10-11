import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardLayout from './Card'


const StarWarsCharacterCards = () => {
    const [starWarsData, setStarWarsData] = useState([])
    useEffect(() => {
        axios 
            .get('https://swapi.co/api/people/')
            .then(response => {
                console.log(response);
                setStarWarsData(response.data.results)
            })
            .catch(error => {
                console.log(error)
            })
    },[])
    console.log(starWarsData);
    return (
        <div>
            {starWarsData.map((person, index) => {
            return (
            <CardLayout key={index} name={person.name} height={person.height} weight={person.mass} />
                    )
                })
            }
        </div>
    )
}

export default StarWarsCharacterCards

