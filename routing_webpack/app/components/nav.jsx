import React from 'react';
import {Link}  from 'react-router-dom';
import styled from "styled-components";
 


const Container = styled.div`
    background: papayawhip;
  
`;


const Wrapper = styled.ul`
     font-size:20px;
    text-align:center;
  

`;
const Title = styled.li`
    width:100px;
    list-style-type: none;
    margin: 1em;
    border: 2px solid black;
    border-radius: 3px;
`;





export default class Nav extends React.Component{
    render(){
        return (
         <Container>
            <Wrapper>
                <Title><Link to="/">home</Link></Title> 
                <Title><Link to="/products">products</Link></Title>
                {/* <Link to={`/tracks/${track.id}`}>{track.name}</Link> */}
                <Title><Link to="/tracks">tracks</Link></Title>
            </Wrapper>
        </Container> 
        )    
    }
}
