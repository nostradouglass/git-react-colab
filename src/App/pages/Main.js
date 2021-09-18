
import React from 'react'
import { Link } from 'react-router-dom'
import MyNavbar from '../components/MyNavbar';

const Main = (props) => {
    return (
        <div>
            <MyNavbar/>
           {props.children}
        </div>
    )
}

export default Main