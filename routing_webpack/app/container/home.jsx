import React from 'react';
import NewsHome  from '../components/newsHome.jsx';

import Description  from '../components/description.jsx';
import { Route, Switch } from 'react-router-dom';

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
     
        
       
        return (
            <div>
                <Title>News</Title>
                {/* <Description /> */}
                <Switch>
                    <Route path="/home/description" component={Description} />
                </Switch>
               
                <NewsHome newsTitle ={newsTitle} />
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