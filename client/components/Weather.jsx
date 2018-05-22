import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    let name = "text-center size ";
    let description = this.props.weather.weather[0].main;
    let weatherBg = ['Sunny', 'Haze', 'Mist', 'Clouds', 'Rain', 'Thunder', 'Clear'];
    
    if (weatherBg.includes(this.props.weather.weather[0].main)) {
      name += description;  
      document.body.className= name; 
    }
  }

  render() {
    let name = "text-center size ";
    let description = this.props.weather.weather[0].main;
    let weatherBg = ['Sunny', 'Haze', 'Mist', 'Clouds', 'Rain', 'Thunder'];
    if (weatherBg.includes(this.props.weather.weather[0].main)) {
      name += description;  
      document.body.className= name; 
    }

    return (
      <div className="container weather">
        <div className="col">
          <h4>{`${this.props.tempF} `}&deg;F</h4>
        </div>
        <div className="col">
          <h5>{this.props.weather.weather[0].main}</h5>
        </div>
        <div className="w-100"></div>
        <div className="col">
        <p>{`High: ${(this.props.weather.main.temp_max * 9/5 - 459.67).toFixed()} `}&deg;F</p>
        <p>{`Low: ${(this.props.weather.main.temp_min * 9/5 - 459.67).toFixed()} `}&deg;F</p>
        </div>
        <div className="col">{`Humidity: ${this.props.weather.main.humidity}%`}</div>
      </div>
    )
  }
}

export default Weather;
