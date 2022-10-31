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
const Titleh4 = styled.h4`
    color:red;
  
`;



class SportsProducts extends React.Component{

    render(){ 
    // console.log(this.props.productsAttr)
   
    return	(
            <Container>
                  {
                        this.props.productsAttr.map((news,index)=>{
                                
                            return (
                                <React.Fragment key={index}>
                                    <Image  src = { news.urlToImage } ></Image>
                                    <Titleh4 >{news.title}</Titleh4>
                                    <h6>{news.publishedAt}</h6>
                                    <p>{news.description}</p>
                                </React.Fragment>
                                )
                            }
                        )
                  }
                  
            </Container>
          )
      }
  }
   
   
   

export default SportsProducts;

