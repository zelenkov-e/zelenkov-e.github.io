import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { UsersPage } from './pages/UsersPage'
import DetailPage from './pages/DetailPage'

const useRoutes = (isAuth) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path='/users' exact>
                    <UsersPage />
                </Route>
                <Route path='/users/:id'>
                    <DetailPage />
                </Route>
                <Redirect to='/users' />
            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route path='/' exact>
                    <AuthPage />
                </Route>
                <Redirect to='/' />
            </Switch>
        )
    }
}

export default useRoutes