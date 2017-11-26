
const React = require('react')

class Button extends React.Component {
 
 render() {
       return (
        <button 
        onClick = {this.props.showForm} 
        >show form</button> 
        );
     }
  } 

  module.exports  = Button