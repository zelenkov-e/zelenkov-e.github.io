import React, { useEffect, useState } from 'react'
import { withRouter } from "react-router-dom"
import { useHttp } from '../hook/http.hook'

const DetailPage = (props) => {
    const { id } = props.match.params
    const { request } = useHttp()
    const [datails, setDetais] = useState(null)

    useEffect(() => {
        id.length > 0 && getUserDetais()
    }, [id])

    const getUserDetais = async () => {
        try {
            const data = await request(`/api/users/${id}`)
            setDetais(data.user)
        } catch (e) { }
    }

    return (
        <div>
            { datails && <div class="col s12 m7">
                <h2 class="header">User datails card</h2>
                <div class="card horizontal">
                    <div class="card-image">
                        <img src="https://lorempixel.com/100/190/nature/6" />
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <p>id : {datails._id}</p>
                            <p>email : {datails.email}</p>
                            <p>password : {datails.password}</p>
                        </div>
                        <div class="card-action">
                            <a href="#">get more info</a>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default withRouter(DetailPage)
