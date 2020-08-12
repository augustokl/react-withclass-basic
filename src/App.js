import React from 'react';
import SeasonDisplay from './pages/SeasonDisplay';
import ErrorDisplay from './pages/ErrorDisplay';

class App extends React.Component {
    state = { lat: null, errorMessage: '' }

    componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
        (pos) => this.setState({ lat: pos.coords.latitude }),
        (err) => this.setState({ errorMessage: err.message })
        );
    }
  
  
    render() { 
      if(this.state.errorMessage && !this.state.lat){
        return <ErrorDisplay error={this.state.errorMessage}/>
      }
  
      if(!this.state.errorMessage && this.state.lat){
        return  <SeasonDisplay lat={this.state.lat}/> 
      }
  
      return <div>Loading... </div>
    }
}

export default App;
