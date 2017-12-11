
const React = require('react')
const Button = require('./button.js')

class Content extends React.Component {
  
  constructor(props) {
    super(props)
    this.showForm = this.showForm.bind(this)
    this.submitAdd = this.submitAdd.bind(this)
    this.submitClear = this.submitClear.bind(this)
    this.state = {
      class:"off",
      text: [],
      className:"showElem"
    };
  }

  showForm(){
    let className = (this.state.class==="off") ? "show": "off";
    this.setState({ class:className});
  }
 
  
  submitAdd() {
   
    this.refs.task.value
    this.state.text.push( this.refs.task.value)
    this.setState({
      text:this.state.text
    })
      this.refs.task.value = '';
 }


 submitClear(){
    this.setState({
      className:"showBoxOff"
    })
  }


  render() {
    return (
      <div className = "container">
          <Button // компонент Button
          showForm = {this.showForm}
          />
          
          <hr />

          <div 
          className={this.state.class} 
          >
             <div className="task">
              <input
              ref="task" 
              className="form-control" type="text"  placeholder="Task"/>
            </div>
           <div className="submit_add">
              <input type = "button" onClick={this.submitAdd} value = "add" />
            </div>
           <div className = {this.state.className}>
             {this.state.text.map(function(item,index){
                return  <div className = "showBox" key = {index}>{item}</div>
             })
           }
           </div>
             <div className="submit_claer">
              <input type = "button" onClick={this.submitClear} value = "clear"/>
            </div>         
          </div>
      </div>
    )
  }
}

module.exports  = Content