import React from 'react';
import { connect } from 'react-redux';

// const Track = () => <div>Track</div>;

// export default Track;
class Track extends React.Component{
    render(track){
        return <h2>треки</h2>;
        // return <h2>{track.name}</h2>;
    }
  
}

// const mapStateToProps = (state, ownProps) => ({
//     track: state.tracks.find(track => track.id === Number(ownProps.params.id))
//   })
  


module.exports = Track;
// export default connect(mapStateToProps)(Track);