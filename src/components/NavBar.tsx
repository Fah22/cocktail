import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { IEpisode } from '../interfaces';

export default function NavBar():JSX.Element {
    return (
        <>
            <header>
                <div>
                    <h1>The Bold Type</h1>
                </div>
                <nav>
                    <ul>
                        <Link to='home'>
                            <li>Home</li>
                        </Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}
