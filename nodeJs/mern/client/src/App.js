import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import useRoutes from './routes'
import { useAuth } from './hook/useAuth.hook'
import { AuthContext } from './context/AuthContext'
import { NavBar } from './components/NavBar'
import 'materialize-css'

const App = () => {
  const { token, login, logout, userId } = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider value={{ token, login, logout, userId, isAuthenticated }}>
      <Router>
        {isAuthenticated && <NavBar />}
        <div className='container'>
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App
