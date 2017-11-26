
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
      text: []
    };
  }

 
  showForm(){
    let className = (this.state.class==="off") ? "show": "off";
    this.setState({ class:className});
  }
 
  
  submitAdd() {
    let task = this.refs.task.value
    this.state.text.push(task)
    let newArr = this.state.text.map(function(item,index){
        return <div className = "showBox">{item}</div>
          })
     this.setState({
      text:newArr
    })

     this.state.text = newArr

 }
 submitClear(){
    this.setState({text:''})
  }

  render() {
    return (
      <div className = "container">
          <Button 
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


            <div className="submit_claer">
              <input type = "button" onClick={this.submitClear} value = "clear"/>
            </div>
             {this.state.text}
          </div>
      </div>
    )
  }
}

module.exports  = Content