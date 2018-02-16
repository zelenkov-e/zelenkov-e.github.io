import React  from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as pageActions from '../action/actionCreators';


class Content extends React.Component {
  
//   componentDidMount() {
//     this.props.actions
// }
	
	render() {
		return (
		  <div>
				<h4>{this.props.element}</h4>
			</div>
		);
	}
}






const mapStateProps = (state) => (

   {
    element: state.reducerAdd
  }
)


// переедаем action - кот меняют состоянме в reducere
// const mapDispatchToProps =  (dispatch)=> ({
//   actions: bindActionCreators(pageActions, dispatch)
// })



// counterStore.dispatch(add);



// export default connect(mapStateProps,matchDispatchToProps)(Content);
export default connect(mapStateProps)(Content);
