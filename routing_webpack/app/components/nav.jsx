import React from 'react';
import {Link}  from 'react-router-dom';
 
export default class Nav extends React.Component{
    render(){
        return <div>
                <Link to="/">home</Link> 
                <Link to="/products">products</Link>
                {/* <Link to={`/tracks/${track.id}`}>{track.name}</Link> */}
                <Link to="/tracks">tracks</Link>
              </div>;
    }
}
