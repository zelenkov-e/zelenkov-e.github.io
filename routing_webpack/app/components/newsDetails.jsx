import React  from 'react';
import { connect } from 'react-redux';


class NewsDetails extends React.Component{

    // componentDidMount() {
    //     this.props.actions.getNews()
    // }
 

render(){ 
    console.log(this.props.weatherMain)
    // console.log('HELLO')
    // что б прочитать свойство из <News newsElements />this.props.newsElements
   
    return	(
            <div>
               {/* <p>{this.props.weatherMain}</p>      */}

               {/* {weatherMain.map((weather)=>{
                      return (
                        <p key = {weather.id}>{weather.main}</p>
                        )
                      }
                    )
                  } */}


            </div>
          )
      }
  }
  


function mapStateToProps(state, ownProps){
    return {
        weatherMain: state.weatherMain.main
    }
   
}

// function mapDispatchToProps(dispatch) {
//     return {
//        actions: bindActionCreators(pageActions, dispatch)
//     }
// }


//   function mapDispatchToProps(dispatch) {
//     return 
//        bindActionCreators({select:getNews}, dispatch)
    
// }

// export default NewsDetails;
export default connect(mapStateToProps) (NewsDetails);