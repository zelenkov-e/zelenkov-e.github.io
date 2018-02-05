import React from 'react';
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




class MusicProducts extends React.Component{

    showList() {
        
        return this.props.productsAttr.map((news,id)=>{
         
            return (
                <React.Fragment key={news.url}>
                    {/* <Image  src = { news.urlToImage } ></Image>
                    <Title >{news.title}</Title>
                    <h6>{news.publishedAt}</h6>
                    <p>{news.description}</p> */}
                </React.Fragment>
                )
            }
        )
         return this.props.productsSucces.map((news,id)=>{
         
             return (
                 <React.Fragment key={news.url}>
                    {/* <Image  src = { news.urlToImage } ></Image>
                    <Title >{news.title}</Title>
                    <h6>{news.publishedAt}</h6>
                    <p>{news.description}</p> */}
                 </React.Fragment>
                 )
             }
         )
}

render(){ 
    console.log(this.props.productsAttr)
    console.log(this.props.productsSucces)
   
    return	(
            <Container>
                {this.showList()}    
            </Container>
          )
      }
  }
   
   
   

export default MusicProducts;

