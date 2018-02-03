import React  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from '../action/action';
// import {getNews} from '../action/action';

class News extends React.Component{

    // componentDidMount() {
    //     this.props.actions.getNews()
    // }
 

    

  showList() {
    
      return this.props.newsTitle.map((news)=>{
        return (
          <li 
        //   onClick = {() => this.props.actions.getNews(weather) } 
          key  = {news.url}>{news.title}</li>
          )
        }
      )
    

}

render(){ 
    console.log(this.props.newsTitle)
    // что б прочитать свойство из <News newsElements />this.props.newsElements
   
    return	(
            <ul >
                {this.showList()}    
            </ul>
          )
      }
  }


//   const mapStateToProps = (state, ownProps) => ({
//     weatherMain: state.weatherMain.main
// })

// function mapDispatchToProps(dispatch) {
//     return {
//        actions: bindActionCreators(pageActions, dispatch)
//     }
// }


//   function mapDispatchToProps(dispatch) {
//     return 
//        bindActionCreators({select:getNews}, dispatch)
    
// }

export default News;
// export default connect(mapStateToProps,mapDispatchToProps) (News);