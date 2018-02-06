import React from 'react';
import News  from './news.jsx';
// import NewsDetails  from './newsDetails.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from '../action/action';
import styled from "styled-components";





const Title = styled.h1`
    color:red;
  
`;

 
 class Home extends React.Component{

    componentDidMount() {
            this.props.actions.getNews()
        }
     
    render(){
        const {newsTitle} = this.props
        // const {newsMain} = this.props
        
       
        return (
            <div>
                <Title>News</Title>
                <News newsTitle ={newsTitle} />
            </div>
         )
    }
}

const mapStateToProps = (state, ownProps) => ({
    newsTitle: state.newsTitle.newsArticles
   
})


// переедаем action - кот меняют состоянме в reducere
const mapDispatchToProps =  (dispatch)=> ({
       actions: bindActionCreators(pageActions, dispatch)
})



    export default connect(mapStateToProps,mapDispatchToProps) (Home);