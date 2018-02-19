import React  from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';



class Content extends React.Component {
  
//   componentDidMount() {
//     this.props.actions.getAction()
// }
	
	render() {
		return (
		  <div>
				<h4>{this.props.element}</h4>
			</div>
		);
	}
}






const mapStateProps = (state) => ({
	// element: state.reducerAdd
	element: state.reducerAdd
	
  })


// переедаем action - кот меняют состоянме в reducere
// const mapDispatchToProps =  (dispatch)=> ({
//   actions: bindActionCreators(pageActions, dispatch)
// })



// counterStore.dispatch(add);



// export default connect(mapStateProps,mapDispatchToProps)(Content);
export default connect(mapStateProps)(Content);
