

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h3>Home</h3>
            <Link to="/newAccount">New Account Page</Link>
            <Link to="/users">users  Page</Link>
            <Link to="/user">user Page</Link>
            <Link to="/remove">remove Page</Link>
        </div>
    )
}

export default Home