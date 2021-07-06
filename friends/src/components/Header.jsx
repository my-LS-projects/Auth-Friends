import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {


    return (
        <header>
            <nav>
                <Link to='/login'>Login</Link>
                <Link to='/protected'>Friends</Link>
            </nav>
        </header>
    )
}

export default Header