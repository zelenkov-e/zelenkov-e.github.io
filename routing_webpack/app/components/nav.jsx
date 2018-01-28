import React from 'react';
import {Link}  from 'react-router-dom';
 
class Nav extends React.Component{
    render(){
        return <div>
                <Link to="/">Главная</Link> 
                <Link to="/products">Товары</Link>
                {/* <Link to={`/tracks/${track.id}`}>{track.name}</Link> */}
                <Link to="/tracks">Треки</Link>
              </div>;
    }
}
module.exports = Nav;