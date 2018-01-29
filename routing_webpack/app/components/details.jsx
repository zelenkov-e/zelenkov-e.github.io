import React from 'react';
import { connect } from 'react-redux';
 
class Details extends React.Component{
    render(){
        return(
            <div>
                <h2>details</h2>
                <h2>{this.props.track.author}</h2>
                <p>{this.props.track.name}</p>
                <img src = {this.props.track.img} />
                <audio controls><source src={this.props.track.audio} type="audio/wav"></source></audio>
            </div>
        ) 
    }
}


  //ownProps - обяз объект для routing
  const mapStateToProps = (state, ownProps) => ({
    track: state.active
})

export default connect(mapStateToProps)(Details);