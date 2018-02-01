import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from '../action/action';


 
 class Home extends React.Component{

    componentDidMount() {
            this.props.actions.getNews()
        }
     
    render(){
<<<<<<< HEAD
        const { newsElements } = this.props.news
    //    console.log(JSON.parse(newsElements))
        return (
            

            <div>
               <h3>{newsElements}</h3>
=======
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
>>>>>>> 50ceb16f686fdeeca50732f995e8f40e7fb5911d
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