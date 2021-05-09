import React, { useState, useEffect } from 'react'
import Header from './Header'
import axios from 'axios'

function RandomBeer() {

const [randomBeer, updateBeer] = useState({})

useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then((response) => {
        const {name, image_url, tagline, first_brewed, contributed_by, description, attenuation_level} = response.data 
        let detail = {
            name: name,
            image: image_url,
            tagline: tagline,
            firstBrewed: first_brewed,
            contributedBy: contributed_by,
            description: description,
            attenuationLevel: attenuation_level,
        }

        updateBeer(detail)
    }).catch(() => {
        console.log('random beer err')
    });
    
}, [])


    return (
        <div>
            <Header />
            <img style={{width: 50}} src={randomBeer.image} alt="random-beer"/>
            <div >
            <h4>{randomBeer.name}</h4>
            <span>{randomBeer.attenuationLevel}</span>
            </div>
            <div >
            <h6>{randomBeer.tagline}</h6>
            <span>{randomBeer.firstBrewed}</span>
            </div>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributedBy}</p>
        </div>
    )
}

export default RandomBeer