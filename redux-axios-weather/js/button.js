import React  from 'react';


class Button extends React.Component{
	
	render() {
		return <button 
		onClick = {this.props.handler}>show weather
		</button>
	}
}

export default Button;