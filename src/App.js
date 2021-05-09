import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Container } from '@material-ui/core';
import BeersList from './components/BeersList'
import NewBeer from './components/NewBeer'
import BeerSingle from './components/BeerSingle'
import RandomBeer from './components/RandomBeer'
import axios from 'axios'



function App(props) {

  const [beers, updateBeers] = useState([])
  const [filteredBeers, updateFilter] = useState(beers)


  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {

        updateBeers(response.data)
      }).catch(() => {
        console.log('err')
      });
  }, [])


  const handleAdd = (event) => {
    event.preventDefault()
    console.log(event)

    let newBeer = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      first_brewed: event.target.first_brewed.value,
      brewers_tips: event.target.brewers_tips.value,
      contributed_by: event.target.contributed_by.value,
      description: event.target.description.value,
      attenuation_level: event.target.attenuation_level.value

    }

    axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
      .then((response) => {

        console.log(newBeer)
        updateBeers([response.data, ...beers])
      }).catch(() => {
        console.log("err to Add")
      });

  }

  const handleSearch = (event) => {

    let input = event.target.value
    console.log(event.target.value)

    let filteredBeers = beers.filter((beer) => {
      // converting to same case 
      // checking if the input includes in the books title
      return beer.name.toLowerCase().includes(input.toLowerCase())
    })

    updateBeers(filteredBeers)
  }


  if (!beers.length) {
    return <h1>Loading. . . </h1>
  }

  return (
    <Container maxWidth="sm">
      <Switch>
        <Route exact path={"/"} render={() => {
          return <Home />
        }} />
        <Route exact path={"/beers"} render={() => {
          return <BeersList beers={beers} onSearch={handleSearch} />
        }} />
        <Route path={"/new-beer"} render={() => {
          return <NewBeer onAdd={handleAdd} />
        }} />
        {/*<Route exact path={"/beer/:beerId"} render={(routeProps) => {
          return <BeerSingle {...routeProps}/>
        }}/>*/}
        <Route exact path={"/beer/:beerId"} component={BeerSingle} />
        <Route path={"/random-beer"} render={() => {
          return <RandomBeer />
        }} />
      </Switch>

    </Container>
  );
}

export default withRouter(App);
