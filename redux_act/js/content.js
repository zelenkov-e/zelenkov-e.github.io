import React  from 'react';
import List from './list';
import Details from './details';

class Content extends React.Component {

	
	render() {
		return (
		  <div>
				<h4></h4>
			</div>
		);
	}
}




export default Content;


counterStore.dispatch(add);



// let matchDispatchToProps = (dispatch)=>{
// 	return bindActionCreators({select:selectPhone},dispatch)
// }

// export default connect(mapStateProps,matchDispatchToProps)(Content);


// let mapStateProps = (state) => {
//   return {
//     phone: state.active
//   }
// }
// export default connect (mapStateProps)(Content);