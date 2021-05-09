import React from 'react'
import Header from './Header'
import { Link } from "react-router-dom";
import { Grid, Typography, ButtonBase, TextField } from '@material-ui/core';
import '../BeersList.css';

function BeersList(props) {

    const { onSearch, beers } = props

    return (

        <div>
            <Header />
            <TextField onChange={onSearch} id="outlined-basic" label="Search" variant="outlined" placeholder='Search a beer' />
            {
                beers.map((beer) => {
                    return (
                    <div key={beer._id}>
                        <Link to={`/beer/${beer._id}`} className='beerList'>
                            <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className='image'>
                                    <img className='img' alt="complex" src={beer.image_url} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            <h4>{beer.name}</h4>
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {beer.tagline}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Contributed by: {beer.contributed_by}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            </Grid>
                        </Link>
                        <hr/>
                    </div>
                    )
                })
            }

        </div >
    )
}

export default BeersList
