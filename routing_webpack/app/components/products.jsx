import React from 'react';
import styled from "styled-components";
import MusicProducts from "./musicProducts.jsx";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActionsProducts from '../action/action';






class Products extends React.Component{

    componentDidMount() {
        this.props.productActions.getProducts()
    }
    
    
    render() {
        const {productsAttr} = this.props
        const {productsSucces} = this.props
        return (

            <div>
                {/* <MusicProducts productsAttr = 'first music product'/> */}
                <MusicProducts 
                productsAttr = {productsAttr} 
                productsSucces = {productsSucces} 
                />
            </div>
                // <h3>products</h3>
                //    <Wrapper>
            //        products
            //    </Wrapper>
            
        )
            
      }
}

const mapStateToProps = (state, ownProps) => ({
    productsAttr: state.productsTitle.productArticles,
    productsSucces: state.productsSucces.productSucsess

})


// переедаем action - кот меняют состоянме в reducere
const mapDispatchToProps =  (dispatch)=> ({
    productActions: bindActionCreators(pageActionsProducts, dispatch)
})



export default connect(mapStateToProps,mapDispatchToProps) (Products);
// export default  Products;
