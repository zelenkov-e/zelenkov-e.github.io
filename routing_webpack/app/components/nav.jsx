import React from 'react';
import {Link}  from 'react-router-dom';
import styled from "styled-components";
 


const Container = styled.div`
   color:red;
  
`;


const Wrapper = styled.ul`
    font-size:20px;
    text-align:center;
  

`;
const Title = styled.li`
    width:100px;
    list-style-type: none;
    margin: 1em;
    border: 2px solid red;
    border-radius: 3px;
  
`;





export default class Nav extends React.Component{
    render(){
        return (
         <Container>
            <Wrapper>
                <Title><Link style = {{color:"red"}} to="/">news</Link></Title> 
                <Title><Link style = {{color:"red"}} to="/products">sport</Link></Title>
                <Title><Link style = {{color:"red"}} to="/tracks">tracks</Link></Title>
                <Title><Link style = {{color:"red"}} to="/music">music</Link></Title>
            </Wrapper>
        </Container> 
        )    
    }
}
