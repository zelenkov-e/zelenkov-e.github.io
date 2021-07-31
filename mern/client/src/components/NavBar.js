import { useContext } from "react"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"


export const NavBar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const logoutHendler = (e) => {
        e.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-wrapper blue-grey darken-1">
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/" onClick={logoutHendler}>Logout</a></li>
                </ul>
            </div>
        </nav>
    )
}