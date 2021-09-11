

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h3>Home</h3>
            <Link to="/newAccount">New Account Page</Link><br />
            <Link to="/users">users  Page</Link><br />
            <Link to="/user">user Page</Link><br />
            <Link to="/remove">remove Page</Link><br />
        </div>
    )
}

export default Home