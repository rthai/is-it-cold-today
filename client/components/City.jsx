import React from 'react';
import Weather from './Weather.jsx';

class City extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tempF: (this.props.weather.main.temp * 9/5 - 459.67).toFixed(),
      city: this.props.weather.name,
      isCold: '',
      outerwear: ''
    }
  }

  componentWillMount() {
    const temp = this.state.tempF;
    if (temp <= 45) {
      this.setState({
        isCold: `Yes, it's freezing in ${this.state.city}.`,
        outerwear: 'Bundle up.'
      });
    } else if (temp >= 45 && temp < 55) {
      this.setState({
        isCold: `Yes, it's cold in ${this.state.city}.`,
        outerwear: 'Bring a jacket.'
      });
    } else if (temp >= 55 && temp < 65) {
      this.setState({
        isCold: `It's a bit chilly in ${this.state.city}.`,
        outerwear: 'Sweater weather!'
      });
    } else {
      this.setState({
        isCold: `No, it's hot in ${this.state.city}!`,
        outerwear: 'Wear sunscreen!'
      });
    }
  }

  render() {
    return(
      <div className="city">
        <h2>{this.state.isCold}</h2>
        <h3>{this.state.outerwear}</h3>
        <Weather tempF={this.state.tempF} weather={this.props.weather}/>
      </div> 
    )
  }
}

export default City;
