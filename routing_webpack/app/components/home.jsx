import React from 'react';
import News  from './news.jsx';
import NewsDetails  from './newsDetails.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from '../action/action';


 
 class Home extends React.Component{

    componentDidMount() {
            this.props.actions.getNews()
        }
     
    render(){
        const {weatherMain} = this.props

       
        return (
            <div>
                <News weatherMain ={weatherMain} />
                <hr />
                <h3>Detais</h3>
                {/* <NewsDetails weatherMain ={weatherMain} /> */}
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
    weatherMain: state.weatherMain.main
})


// переедаем action - кот меняют состоянме в reducere
function mapDispatchToProps(dispatch) {
    return {
       actions: bindActionCreators(pageActions, dispatch)
    }
}



    export default connect(mapStateToProps,mapDispatchToProps) (Home);