import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import { useHttp } from '../hook/http.hook'

export const UsersPage = () => {
    const history = useHistory()
    const { request } = useHttp()
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            const data = await request('/api/users/getUsers')
            setUsers(data.users)
        } catch (e) { }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <h1>Users Page</h1>

            <ul className="collection">
                {users.length > 0 && users.map((user) => {
                    return (
                        <li key={user._id} className="collection-item avatar">
                            <i className="material-icons circle">user</i>
                            <span className="title">User</span>
                            <p>id: {user._id}</p>
                            <p>email: {user.email}</p>
                            <a className="secondary-content" onClick={() => history.push(`/users/${user._id}`)}>
                                <i className="material-icons" >details</i>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
