import React  from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as pageActions from '../action/action';
import styled from "styled-components";




const Container = styled.div`
    width: 350px;
    height: 200px;
   
`;
const Image = styled.img`
    width: 350px;
    height:200px;
    margin-top:30px;
  
`;
const Title = styled.h4`
    color:red;
  
`;

const Audio = styled.audio`
    border: 1px solid;
  
`;





class ArtistMusic extends React.Component{

    showList() {
        
        return this.props.musicTitle.map((music,id)=>{
         
            return (
                <React.Fragment key={id}>
                    {/* <Image  src = { news.urlToImage } ></Image>
                    <Title >{news.title}</Title>
                    <h6>{news.publishedAt}</h6>
                    <p>{news.description}</p> */}
                     <Title>{music.artistName}</Title>
                     <p>{music.name}</p>
                     <Audio src={music.previewURL} controls></Audio>
                </React.Fragment>
                )
            }
        )
}

render(){ 
    console.log(this.props.musicTitle)
   
    return	(
            <Container>
                {this.showList()}    
            </Container>
          )
      }
  }

export default ArtistMusic;
