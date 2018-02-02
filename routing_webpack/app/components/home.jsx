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
        console.log(this.props.news.newsElements)
        // console.log(newsElements)
       
        // var obj = this.props.news.newsElements;
        // var key;
        // console.log(obj)
        
               
        
        

      
       
        return (
            <div>
                
               

                {/* {
                   this.props.news.map((news,index)=>{
                        return(
                            <p key = {index}>{news}</p>
                        )
                    })
                } */}




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
    news: state.news
})


// переедаем action - кот меняют состоянме в reducere
function mapDispatchToProps(dispatch) {
    return {
       actions: bindActionCreators(pageActions, dispatch)
    }
}



    export default connect(mapStateToProps,mapDispatchToProps) (Home);