import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Main from './components/Main'
import Home from './pages/Home'
import NewAccount from './pages/NewAccount'
import ShowUsers from './pages/ShowUsers'
import SingleUser from './pages/SingleUser'
import DeleteUser from './pages/DeleteUser'
import User from './pages/User'


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Main >
                        <Home />
                    </ Main>
                </Route>
                <Route exact path="/newAccount">
                    <Main >
                        <NewAccount />
                    </ Main>
                </Route>
                <Route exact path="/users">
                    <Main >
                        <ShowUsers />
                    </ Main>
                </Route>
                <Route exact path="/users/:_id">
                    <Main >
                        <User />
                    </ Main>
                </Route>
                <Route exact path="/user">
                    <Main >
                        <SingleUser />
                    </ Main>
                </Route>
                <Route exact path="/remove">
                    <Main >
                        <DeleteUser />
                    </ Main>
                </Route>
            </Switch>
        </Router>
    )
}

export default App