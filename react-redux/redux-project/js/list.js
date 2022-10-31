
import React  from 'react';
//нужна что бы action привести к св-ву
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectPhone} from '../src/action/index'


class List extends React.Component {

  showList(){
  	return this.props.phones.map((phone)=>{
  		return (
  				<li onClick = {()=>this.props.select(phone)}
  				 key={phone.id}>{phone.model}</li>
  			)
  	})
  }	

  render() {
    return (
      <ol>
	  	{this.showList()}
	  </ol>
     );
  }
}

let mapStateProps = (state) => {
  return {
    phones: state.phones
  }
}


let matchDispatchToProps = (dispatch)=>{
	return bindActionCreators({select:selectPhone},dispatch)
}

export default connect(mapStateProps,matchDispatchToProps)(List);
