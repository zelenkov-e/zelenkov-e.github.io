import React  from 'react';
import axios from 'axios';
import {connect} from 'react-redux';



class Details extends React.Component{
  render(){
    return(
      <div>
        <ol>
         <li>{this.props.weather}</li>
        </ol>
      </div>
      )    
  }
}

export default Details;
