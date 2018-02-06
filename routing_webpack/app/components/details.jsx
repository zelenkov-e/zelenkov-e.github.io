import React from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";





const ContainerDetails = styled.div`
        width: 250px;
`;


const Image = styled.img`
    width: 300px;
  
`;



class Details extends React.Component{

   
    render(){
        if(!this.props.track){
            return (<p>select track..</p>)
        }
        return(
            <ContainerDetails>
                <h2>{this.props.track.author}</h2>
                <p>{this.props.track.name}</p>
                <Image src = {this.props.track.img}></Image>
                <audio src={this.props.track.audio} controls />
            </ContainerDetails>
        ) 
    }
}


  //ownProps - обяз объект для routing
  const mapStateToProps = (state, ownProps) => ({
    track: state.active
})

export default connect(mapStateToProps)(Details);