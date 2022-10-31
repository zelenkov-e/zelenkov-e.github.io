import React  from 'react';
import Details  from './details';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as pageActions from '../src/action/index';



class Content extends React.Component {

 /* {weatherElements} - находиться весь объект от res.data*/
 /* weatherElements, weatherMain,weatherTemp - 
 передаем как атрибуты для связи с Detais,
 и как свойство <Details weatherMain = {weatherMain} - для связи с mapStateToProps */

 
 render(){
   const {weatherElements} = this.props
   const {weatherMain} = this.props
   const {weatherTemp} = this.props
  
   const { getWeather } = this.props.pageActions
      return <div>
              <Details weatherMain = {weatherMain} 
              getWeather = {getWeather}
              weatherElements = {weatherElements} 
              weatherTemp = {weatherTemp} 
               />
              </div>
       }   
}
 

 const mapStateToProps = function(state) {
  return {
    weatherElements: state.weatherElements.weatherElements,
    weatherMain: state.weatherMain.main,
    weatherTemp: state.weatherTemp.temp
    }
}



// переедаем action - кот меняют состоянме в reducere
 function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Content);

