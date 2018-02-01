import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from '../action/action';


 
 class Home extends React.Component{

    componentDidMount() {
            this.props.actions.getNews()
        }
     
    render(){
        // console.log( this.props.news.newsElements )
        console.log( this.props.news.newsElements )
       return (
            <div>
              
              {/* {this.props.news.newsElements.map((weather)=>{
                      return (
                        <p key = {weather.id}>{weather.main}</p>
                        )
                      }
                    )
                  } */}
              
              
               {/* вывод {
                    "status":"ok",
                    "source":"bbc-news",
                    "sortBy":"top",
                    "articles":}  */}
               {/* <h3>{this.props.news.newsElements}</h3> */}
            
            
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