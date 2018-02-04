import React  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from '../action/action';
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




class News extends React.Component{

    showList() {
        
        return this.props.newsTitle.map((news,id,index,url,At)=>{
         
            return (
                <React.Fragment>
                 <Image key = {news.url} src = { news.urlToImage } ></Image>
                 <Title key  = {news.id}>{news.title}</Title>
                 <h6 key  = {news.At}>{news.publishedAt}</h6>
                 <p key  = {news.index}>{news.description}</p>

                </React.Fragment>
                )
            }
        )
}

render(){ 
    console.log(this.props.newsTitle)
   
    return	(
            <Container>
                {this.showList()}    
            </Container>
          )
      }
  }

export default News;
