import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hook/http.hook'
import { useMessage } from '../hook/message.hook'

export const AuthPage = () => {
    const { loading, request, error, clearError } = useHttp()
    const message = useMessage()
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const registerHendler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...form })
            message(data.message)
        } catch (e) { }
    }
    const loginHendler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...form })
            auth.login(data.token, data.userId)
        } catch (e) { }
    }

    return (
        <div className='row'>
            <div className='col s6 offset-s3' >
                <h1>Auth Page</h1>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Auth Card</span>
                        <div>
                            <div className="input-field">
                                <input id="email" type="text" name='email' onChange={changeHandler} />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input id="password" type="password" name='password' onChange={changeHandler} />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="card-action" style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <button
                                className='btn yellow darken-4 waves-effect'
                                disabled={loading}
                                onClick={loginHendler}
                            >
                                Entry
                                </button>
                            <button
                                className='btn grey lighten-1 black-text waves-effect'
                                onClick={registerHendler}
                                disabled={loading}
                            >
                                Registration
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
