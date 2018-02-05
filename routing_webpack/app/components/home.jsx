import React from 'react';
import News  from './news.jsx';
// import NewsDetails  from './newsDetails.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from '../action/action';


 
 class Home extends React.Component{

    componentDidMount() {
            this.props.actions.getNews()
        }
     
    render(){
        const {newsTitle} = this.props
        // const {newsMain} = this.props

       
        return (
            <div>
                <News newsTitle ={newsTitle} />
                {/* <hr /> */}
                {/* <NewsDetails newsMain ={newsMain} /> */}
{/* //------------------------------------------------------------------------------------// */}
                {/* <p>{(this.props.news.newsElements}</p>  
                {/* <p>{this.props.news.title}</p>   */}
                {/* <p>{this.props.news.description}</p>   */}
                {/* <p>{this.props.news.newsElements}</p>    */}
                {/* <p>{this.props.news.newsElements.description}</p>   */}
        </div>
         )
    //   }
    
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