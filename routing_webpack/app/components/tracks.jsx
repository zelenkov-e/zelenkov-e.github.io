import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import setTrack from '../action/action';
import Details from './details.jsx';



class Track extends React.Component{
   showList(){
    return this.props.track.map((track)=>{
        return (
                    <li onClick = {()=> this.props.select(track)} key = {track.id}>{track.name}</li>
            )
    })
   }
   
   
   
   
    render(){
       return(
           <div>
               <h3>my tracks</h3>
                <ul>
                    {this.showList()}
                </ul>
                <hr />
                <Details />
           </div>
       )
    }
 }

  //ownProps - обяз объект для routing
const mapStateToProps = (state, ownProps) => ({
        track: state.tracks  
    })

let matchDispatchToProps = (dispatch)=>{
    return bindActionCreators({select:setTrack},dispatch)
}  
  

export default connect(mapStateToProps,matchDispatchToProps)(Track);