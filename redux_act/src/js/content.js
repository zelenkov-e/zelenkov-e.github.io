import React  from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
<<<<<<< HEAD

=======
import * as pageActions from '../action/action';
>>>>>>> 5abeaaf5cf2ad09b44c237a6568ffeb2538a0f28


class Content extends React.Component {
  
<<<<<<< HEAD
//   componentDidMount() {
//     this.props.actions.getAction()
// }
=======
  componentDidMount() {
    this.props.actions.increment()
	console.log(this.props)
}
>>>>>>> 5abeaaf5cf2ad09b44c237a6568ffeb2538a0f28
	
	render() {
		return (
		  <div>
			  	{/* <Button color="red" isHidden={true} /> */}
				<h4>{this.props.element}</h4>
				{/* <button onClick={() => this.props.actions.decrement(10)}>Do</button> */}
			</div>
		);
	}
}

// const Button = styled.button`
// 	display: ${props => props.isHidden ? 'none' : 'block' };
// 	color: ${props => props.color};
// `;
const mapStateProps = (state) => ({
	// element: state.reducerAdd
	element: state.reducerAdd
	
  })
// переедаем action - кот меняют состоянме в reducere
<<<<<<< HEAD
// const mapDispatchToProps =  (dispatch)=> ({
//   actions: bindActionCreators(pageActions, dispatch)
// })



// counterStore.dispatch(add);



// export default connect(mapStateProps,mapDispatchToProps)(Content);
export default connect(mapStateProps)(Content);
=======
const mapDispatchToProps =  (dispatch)=> ({
  actions: bindActionCreators(pageActions, dispatch)
})
// counterStore.dispatch(add);

export default connect(mapStateProps,mapDispatchToProps)(Content);
// export default connect(mapStateProps)(Content);
>>>>>>> 5abeaaf5cf2ad09b44c237a6568ffeb2538a0f28
