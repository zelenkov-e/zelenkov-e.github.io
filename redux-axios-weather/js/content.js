import React  from 'react';
import Details  from './details';
import Button  from './button';
import axios from 'axios';
import {connect} from 'react-redux';
import { createStore } from "redux";
import redusers from "../src/reducer/index";
import setWeatherAction from "../src/action/index";


const store = createStore(redusers)

class Content extends React.Component {

  constructor(props){
    super(props)
    this.showWeather = this.showWeather.bind(this)
  }

 showWeather(dispatch){
    // console.log('hi')
  // }

 // componentDidMount(dispatch) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?id=620127&units=metric&cnt=5&APPID=1ef962a01bb852fda0e833c7385144ba`)
    .then(res=>{
      console.log(res.data)
        store.dispatch({
           type:"WEATHER_LIST_SUCCESS",
           payload:res.data
           // setWeatherAction
        })

      }
    ); 
 }

render() {
    return(
      <div>
          <Button handler= {this.showWeather} />
          <Details weather = {this.props.weather}/>
      </div>
      )
  }
}

// const mapStateToProps = function(state) {
 const mapStateToProps = function(store) {
  return {
   weather: store.weatherState.weather
    // weather: state.weatherState.model
    // weather: state.weatherState.weather
  }
}


export default connect(mapStateToProps) (Content);

