import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import setTrack from '../action/action';
import Details from './details.jsx';
import styled from "styled-components";


const Title = styled.li`
    list-style-type: none;
  
`;

class Track extends React.Component{
   showList(){
    return this.props.track.map((track)=>{
        return (
                    <Title onClick = {()=> this.props.select(track)} key = {track.id}>{track.name}</Title>
            )
    })
   }
   
   
   
   
    render(){
        // if(!this.props.track){
        //     return (<p>select phone..</p>)
        // }
       return(
           
           <div>
               <h3>my tracks</h3>
                <ul>
                    {this.showList()}
                </ul>
                <hr />
                <h3>Details</h3>
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