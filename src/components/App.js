import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import NewAccount from './pages/NewAccount'
import ShowUsers from './pages/ShowUsers'
import SingleUser from './pages/SingleUser'
import DeleteUser from './pages/DeleteUser'



const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/newAccount">
                    <NewAccount />
                </Route>
                <Route exact path="/users">
                    <ShowUsers />
                </Route>
                <Route exact path="/user">
                    <SingleUser />
                </Route>
                <Route exact path="/remove">
                    <DeleteUser />
                </Route>
            </Switch>
        </Router>
    )
}

export default App