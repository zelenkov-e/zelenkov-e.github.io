import React from 'react';
import styled from "styled-components";
import MusicProducts from "./musicProducts.jsx";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActionsProducts from '../action/action';





const Title = styled.h1`
    color:red;
`;


class Products extends React.Component{

    componentDidMount() {
        this.props.productActions.getProducts()
    }
    
    
    render() {
        const {productsAttr} = this.props
        return (

            <div>
                <Title>Sport</Title>
                <MusicProducts  productsAttr = {productsAttr} />
            </div>
             
        )
            
      }
}

const mapStateToProps = (state, ownProps) => ({
    productsAttr: state.productsTitle.productArticles
})


// переедаем action - кот меняют состоянме в reducere
const mapDispatchToProps =  (dispatch)=> ({
    productActions: bindActionCreators(pageActionsProducts, dispatch)
})



export default connect(mapStateToProps,mapDispatchToProps) (Products);
