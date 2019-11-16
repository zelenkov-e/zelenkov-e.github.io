import React from 'react';
import ArtistMusic  from '../components/musicArtist.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageMusicActions from '../action/action';
import styled from "styled-components";





const Title = styled.h1`
    color:red;
  
`;




 
 class Music extends React.Component{

    componentDidMount() {
            this.props.musicActions.getMusic()
        }
     
    render(){
        const {musicTitle} = this.props
     
        
       
        return (
            <div>
                <Title>Music</Title>
                {/* <ArtistMusic musicTitle = 'hi' /> */}
                <ArtistMusic musicTitle ={musicTitle} />
            </div>
         )
    }
}

const mapStateToProps = (state, ownProps) => ({
    // musicTitle: state.musicTitle.music
    musicTitle: state.musicTitle.music
   
})


// переедаем action - кот меняют состоянме в reducere
const mapDispatchToProps =  (dispatch)=> ({
       musicActions: bindActionCreators(pageMusicActions, dispatch)
})



    export default connect(mapStateToProps,mapDispatchToProps) (Music);
    // export default (Music);