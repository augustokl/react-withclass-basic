import React from 'react';

class SeasonDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: '' }

    window.navigator.geolocation.getCurrentPosition(
      (pos) => this.setState({ lat: pos.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
      );
  }
  render() { 
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.lat){
      return <div>Latitude: {this.state.lat}</div>
    }
  }
} 

export default SeasonDisplay;