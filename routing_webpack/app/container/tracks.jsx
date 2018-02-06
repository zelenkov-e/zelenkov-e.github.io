import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import setTrack from '../action/action';
import DetailsTraks from '../components/detailsTraks.jsx';
import styled from "styled-components";


const Title = styled.h1`
    color:red; 
  
`;
const Li = styled.li`
    list-style-type: none;
  
`;




class Track extends React.Component{
   showList(){
    return this.props.track.map((track)=>{
        return (
                    <Li onClick = {()=> this.props.select(track)} key = {track.id}>{track.name}</Li>
            )
    })
   }
   
   
   
   
    render(){
        // if(!this.props.track){
        //     return (<p>select phone..</p>)
        // }
       return(
           
           <div>
               <Title>tracks</Title>
                <ul>
                    {this.showList()}
                </ul>
                <hr />
                <Title>Details</Title>
                <DetailsTraks />
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