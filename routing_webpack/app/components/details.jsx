import React from 'react';
import { connect } from 'react-redux';

 
class Details extends React.Component{

   
    render(){
        if(!this.props.track){
            return (<p>select track..</p>)
        }
        return(
            <div>
                <h2>{this.props.track.author}</h2>
                <p>{this.props.track.name}</p>
                <img src = {this.props.track.img}  />
                <audio src={this.props.track.audio} controls />
            </div>
        ) 
    }
}


  //ownProps - обяз объект для routing
  const mapStateToProps = (state, ownProps) => ({
    track: state.active
})

export default connect(mapStateToProps)(Details);