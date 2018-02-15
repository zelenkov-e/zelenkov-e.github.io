import React  from 'react';
import {connect} from 'react-redux';


class Content extends React.Component {

	
	render() {
		return (
		  <div>
				<h4>{this.props.element}</h4>
			</div>
		);
	}
}



// const matchDispatchToProps = (dispatch)=>{
// 	return bindActionCreators({select:selectPhone},dispatch)
// }


const mapStateProps = (state) => (

   {
    element: state.reducerAdd
  }
)






// counterStore.dispatch(add);



// export default connect(mapStateProps,matchDispatchToProps)(Content);
export default connect(mapStateProps)(Content);
