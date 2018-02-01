import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from '../action/action';


 
 class Home extends React.Component{

    componentDidMount() {
            this.props.actions.getNews()
        }
     
    render(){
        // const { newsElements } = this.props.news
        console.log(this.props.news)
        // console.log(newsElements)
      
       
        return (
            <div>
                {/* {
                  newsElements.map((news,index)=>{
                        return(
                            <p key = {index}>{news.title}</p>
                        )
                    })

                } */}
                
              {/* {/* <p>{this.props.news.newsElements.author}</p>   */}
              {/* <p>{this.props.news.title}</p>   */}
              {/* <p>{this.props.news.description}</p>   */}
              {/* <p>{newsElements.author}</p>    */}
              {/* <p>{this.props.news.newsElements.description}</p>   */}
            </div>
        )

    }
}

const mapStateToProps = (state, ownProps) => ({
    news: state.news
})


// переедаем action - кот меняют состоянме в reducere
function mapDispatchToProps(dispatch) {
    return {
       actions: bindActionCreators(pageActions, dispatch)
    }
}



    export default connect(mapStateToProps,mapDispatchToProps) (Home);