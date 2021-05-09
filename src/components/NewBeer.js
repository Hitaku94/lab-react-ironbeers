import React from 'react'
import Header from './Header'
import { TextField, Button } from '@material-ui/core';

function NewBeer(props) {

const { onAdd } = props

    return (
        <div>
            <Header />
            <form onSubmit={onAdd} noValidate autoComplete="off">
                <TextField id="name" label="Name" />
                <TextField id="tagline" label="tagline" />
                <TextField id="description" label="description" />
                <TextField id="first_brewed" label="first brewed" />
                <TextField id="brewers_tips" label="brewers tips" />
                <TextField min={0} type="number" id="attenuation_level" label="attenuation level" />
                <TextField id="contributed_by" label="contributed by" />
                <div><Button type="submit" variant="contained">Create Beer</Button></div>
                

            </form>
        </div>
    )
}

export default NewBeer
