import React from 'react';
import axios from 'axios';

import Search from './Search.jsx'
import City from './City.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state ={
      view: "home",
      searchText: '',
      cityWeather: '',
    }

    this.onChange = this.onChange.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.handleEnterKey = this.handleEnterKey.bind(this);
  }

  changeView(view) {
    this.setState({ view });
    if (view === 'home') {
      document.body.className = 'text-center';
    }
  }

  renderView() {
    const view = this.state.view;
    if (view === "home") {
      return <Search getWeather={this.getWeather} onChange={this.onChange} searchText={this.state.searchText} handleEnterKey={this.handleEnterKey}/>
    } else if (view === "city") {
      return <City city={this.state.searchText} weather={this.state.cityWeather}/>
    }
  }

  onChange(e) {
    this.setState({searchText: e.target.value});
  }

  handleEnterKey(e) {
    if (e.key === 'Enter') {
      this.getWeather(this.state.searchText);
    }
  }

  getWeather(city) {
    axios.get(`/api/${city}`)
      .then(response => this.setState({cityWeather: response.data}))
      .then(() =>  this.changeView('city'))
      .catch(err => console.log(err));
  }

  render() {
    return(    
      <div className="main">
        <a onClick={() => this.changeView('home')}>
          <h1 className="cover-heading">Is it Cold Today?</h1>
        </a>
        {this.renderView()}
      </div>
    )
  }
}

export default App;
