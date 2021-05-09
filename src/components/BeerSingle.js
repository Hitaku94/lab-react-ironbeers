import React, {useState, useEffect} from 'react'
import Header from './Header'
import axios from 'axios'

function BeerSingle(props) {

const [beerDetail, updateBeer] = useState({})

const getData = () => {
    let beerId = props.match.params.beerId
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response) => {

            const {name, image_url, tagline, first_brewed, contributed_by, description, attenuation_level} = response.data 
                let detail = {
                    name : name,
                    image: image_url,
                    tagline: tagline,
                    firstBrewed: first_brewed,
                    contributedBy: contributed_by,
                    description: description,
                    attenuationLevel: attenuation_level,

                }
            updateBeer(detail)
        }).catch(() => {
            console.log("err2")
        });
}

useEffect(() => {
    getData()
}, [])

    return (
        
        <div>
            <Header />
            <img style={{width: 50}} src={beerDetail.image} alt={`${beerDetail.name}-img`}/>
            <div >
            <h4>{beerDetail.name}</h4>
            <span>{beerDetail.attenuationLevel}</span>
            </div>
            <div>
            <h6>{beerDetail.tagline}</h6>
            <span>{beerDetail.firstBrewed}</span>
            </div>
            <p>{beerDetail.description}</p>
            <p>{beerDetail.contributedBy}</p>
        </div>
    )
}

export default BeerSingle