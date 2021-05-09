import React from 'react'
import { Link } from "react-router-dom";
import { Container } from '@material-ui/core';
import '../Home.css';

function Home() {
    return (
        <Container maxWidth="sm">
            <div>
                <Link className="link" to={"/beers"}>
                    <img src="./beers.png" alt="random-beer"></img>
                    <h2>All Beers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis quam non massa venenatis porttitor. Aliquam erat volutpat. In hac habitasse platea dictumst. Aliquam mattis sapien sit amet quam posuere tempor. Nulla eget pulvinar mi. Vestibulum commodo maximus arcu at convallis. Sed vel risus fermentum, rutrum justo ac, vehicula quam. Morbi varius volutpat dolor, et bibendum magna malesuada non. Vivamus eu tincidunt est.</p>
                </Link>
            </div>
            <div>
                <Link className="link" to={"/random-beer"}>
                    <img src="./random-beer.png" alt="random-beer"/>
                    <h2>Random Beer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis quam non massa venenatis porttitor. Aliquam erat volutpat. In hac habitasse platea dictumst. Aliquam mattis sapien sit amet quam posuere tempor. Nulla eget pulvinar mi. Vestibulum commodo maximus arcu at convallis. Sed vel risus fermentum, rutrum justo ac, vehicula quam. Morbi varius volutpat dolor, et bibendum magna malesuada non. Vivamus eu tincidunt est.</p>
                </Link>
            </div>
            <div>
                <Link className="link" to={"/new-beer"}>
                    <img src='./new-beer.png' alt="random-beer"/>
                    <h2>New Beer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis quam non massa venenatis porttitor. Aliquam erat volutpat. In hac habitasse platea dictumst. Aliquam mattis sapien sit amet quam posuere tempor. Nulla eget pulvinar mi. Vestibulum commodo maximus arcu at convallis. Sed vel risus fermentum, rutrum justo ac, vehicula quam. Morbi varius volutpat dolor, et bibendum magna malesuada non. Vivamus eu tincidunt est.</p>
                </Link>
            </div>
        </Container>

    )
}

export default Home