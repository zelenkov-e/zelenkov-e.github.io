import React from 'react';
import { connect } from 'react-redux';


class Track extends React.Component{
    render(track){
        return <h2>{this.props.track}</h2>;
    }
  
}

  
const mapStateToProps = (state, ownProps) => ({
        track: state.tracks    
    })
  

export default connect(mapStateToProps)(Track);