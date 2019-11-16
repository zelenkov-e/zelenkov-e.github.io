import React  from 'react';
import {connect} from 'react-redux';

class  Details extends React.Component{

	
	render() {
	if(!this.props.phone){
		return (<p>select phone..</p>)
	}
		return (
			<div>
				<h4>{this.props.phone.model}</h4>
				<p>cost:{this.props.phone.cost} руб </p>
				<img src = {this.props.phone.img} />
			</div>
		);
	}
}

let mapStateProps = (state) => {
  return {
    phone: state.active
  }
}

export default connect (mapStateProps)(Details);