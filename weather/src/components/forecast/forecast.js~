import React, { Component } from 'react'
import './forecast.css'
import '../weather.css'
import Sunny from '../sunny/sunny'
import Thunder from '../thunder/thunder'
import Cloudy from '../cloudy/cloudy'
import Sunshower from '../sunshower/sunshower'
import Flurry from '../flurry/flurry'
import Rain from '../rain/rain'

export default class Forecast extends Component {

  constructor() {
    super()
    this.state = {
      apikey: '3154668c3b544540b0e1f035564d8e69',
      currentweather: '',
      currentcity: '',
      labels: {
        wind: '',
        currtemp: '',
        mintemp: '',
        maxtemp: ''
      },
      day1: {
        currweather: '',
        mintemp: '',
        maxtemp: ''
      },
      day2: {
        currweather: '',
        mintemp: '',
        maxtemp: ''
      },
      day3: {
        currweather: '',
        mintemp: '',
        maxtemp: ''
      },
      day4: {
        currweather: '',
        mintemp: '',
        maxtemp: ''
      },
      day5: {
        currweather: '',
        mintemp: '',
        maxtemp: ''
      }
    }
  }

  componentWillMount = () => {

    // Gets data for current location
    navigator.geolocation.getCurrentPosition((data) => {
      var lat = data.coords.latitude
      var lon = data.coords.longitude
      this.currentweather(lon, lat)
      this.forecastweather(lon, lat)
    }, () => console.log('Error'), {})

  }
  
  /**
   * Retrieves data for one day based on coordinates
   */
  currentweather = (lon, lat) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.state.apikey}`)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          currweather: this.getcurrweather(json.weather[0].id),
          currentcity: json.name,
          labels: {
            wind: this.windspeed(json.wind.speed),
            currtemp: this.fahrenheit(json.main.temp),
            maxtemp: this.fahrenheit(json.main.temp_max),
            mintemp: this.fahrenheit(json.main.temp_min),
          }
        })
      })
  }

  /**
   * Retrieves data for 5 days based on coordinates
   */
  forecastweather = (lon, lat) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.state.apikey}`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        day1: {
          currweather: this.getcurrweather(json.list[3].weather[0].id),
          mintemp: this.fahrenheit(json.list[3].main.temp_min),
          maxtemp: this.fahrenheit(json.list[3].main.temp_max)
        },
        day2: {
          currweather: this.getcurrweather(json.list[11].weather[0].id),
          mintemp: this.fahrenheit(json.list[11].main.temp_min),
          maxtemp: this.fahrenheit(json.list[11].main.temp_max)
        },
        day3: {
          currweather: this.getcurrweather(json.list[19].weather[0].id),
          mintemp: this.fahrenheit(json.list[19].main.temp_min),
          maxtemp: this.fahrenheit(json.list[19].main.temp_max)
        },
        day4: {
          currweather: this.getcurrweather(json.list[27].weather[0].id),
          mintemp: this.fahrenheit(json.list[27].main.temp_min),
          maxtemp: this.fahrenheit(json.list[27].main.temp_max)
        },
        day5: {
          currweather: this.getcurrweather(json.list[35].weather[0].id),
          mintemp: this.fahrenheit(json.list[35].main.temp_min),
          maxtemp: this.fahrenheit(json.list[35].main.temp_max)
        }
      })
    })
  }


  /**
   * Returns the appropriate Component based on weather
   */
  getcurrweather = (value) => {
    if (value > 800) {
      return <Cloudy />
    } else if (value === 800) {
      return <Sunny />
    } else if(value > 700) {
      return <Sunshower />
    } else if (value > 600) {
      return <Flurry />
    } else if (value > 300) {
      return <Rain />
    } else if (value > 200) {
      return <Thunder />
    }
  }
      

  /**
   * Returns windspeed in miles/hour format
   */
  windspeed = (speed) => {
    return Math.floor(speed * 2.24)
  }


  /** 
   * Handles form submission for the 
   * name of requested location
  */
  submit = (event) => {

    // Retrieves data for current day based on city name
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},us&appid=${this.state.apikey}`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        currweather: this.getcurrweather(json.weather[0].id),
        currentcity: json.name,
        labels: {
          wind: this.windspeed(json.wind.speed),
          currtemp: this.fahrenheit(json.main.temp),
          maxtemp: this.fahrenheit(json.main.temp_max),
          mintemp: this.fahrenheit(json.main.temp_min),
        }
      })

      // Retrieves data for 5 days based on city name
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${this.state.apikey}`)
        .then(res => res.json())
        .then(json => {
          this.setState({
            day1: {
              currweather: this.getcurrweather(json.list[3].weather[0].id),
              mintemp: this.fahrenheit(json.list[3].main.temp_min),
              maxtemp: this.fahrenheit(json.list[3].main.temp_max)
            },
            day2: {
              currweather: this.getcurrweather(json.list[11].weather[0].id),
              mintemp: this.fahrenheit(json.list[11].main.temp_min),
              maxtemp: this.fahrenheit(json.list[11].main.temp_max)
            },
            day3: {
              currweather: this.getcurrweather(json.list[19].weather[0].id),
              mintemp: this.fahrenheit(json.list[19].main.temp_min),
              maxtemp: this.fahrenheit(json.list[19].main.temp_max)
            },
            day4: {
              currweather: this.getcurrweather(json.list[27].weather[0].id),
              mintemp: this.fahrenheit(json.list[27].main.temp_min),
              maxtemp: this.fahrenheit(json.list[27].main.temp_max)
            },
            day5: {
              currweather: this.getcurrweather(json.list[35].weather[0].id),
              mintemp: this.fahrenheit(json.list[35].main.temp_min),
              maxtemp: this.fahrenheit(json.list[35].main.temp_max)
            }
          })
        })
    })
    .catch(err => {
      alert(`Error ${this.state.city} not found! Enter a valid city`)
      this.setState({
        city: ''
      })
    })
    event.preventDefault() // Prevents page from reloading
  }
  
  // Converts kelvin temp to fahrenheit
  fahrenheit = (temp) => {
    var result = (9 * temp)/5
    result -= 459.67
    return Math.floor(result)
  }

  /**
   * Handles name change in input tag
   */
  cityChange = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  /**
   * Renders the main UI
   */
  render() {
    return (
      < div className = "main" >
        <div id="search">
        <form onSubmit={this.submit}>
          <input value={this.state.city} onChange={this.cityChange} placeholder="Enter City Name" type="text"/><input id="submitbutton" type="submit" value="Submit"/>
        </form>
        </div>
        < h1 className="textclass">
          Current Conditions 
        </h1>
        < h3 className = "textclass" > 
        {this.state.currentcity} 
          </h3>
        <div className="container">
          {this.state.currweather}
        </div>
        <div className="labels">
          < label className="textclass mainlabels">Wind(Miles / Hr): {this.state.labels.wind} </label>
          < label className="textclass mainlabels" >Curr Temp: {this.state.labels.currtemp}° F</label>
          < label className="textclass mainlabels" >Max Temp: {this.state.labels.maxtemp}° F</label>
          < label className="textclass mainlabels" >Min Temp: {this.state.labels.mintemp}° F </label>
        </div>

        <hr/>

      <h2 className="textclass" >Five Day Forecast</h2>
      <div className="fivedayforecast">
        <div className="forecast">
          < span className = "textclass" > Day 1 </span>
          <div className="container">
            {this.state.day1.currweather}
            < div className = "labels" >
              <label className = "textclass inlabels" > Max Temp: {this.state.day1.maxtemp}° F </label> 
              <label className = "textclass inlabels" > Min Temp: {this.state.day1.mintemp}° F </label> 
            </div >
          </div>
        </div>
        
          
        < div className = "forecast" >
          < span className = "textclass" > Day 2 </span>
          <div className="container">
            {this.state.day2.currweather}
            <div className = "labels" >
              <label className = "textclass inlabels" > Max Temp: {this.state.day2.maxtemp}° F </label> 
              <label className = "textclass inlabels" > Min Temp: {this.state.day2.mintemp}° F </label> 
            </div > 
          </div>
        </div>
        
        < div className = "forecast" >
          < span className = "textclass" > Day 3 </span>
          < div className = "container" >
            {this.state.day3.currweather}
            <div className = "labels" >
              <label className = "textclass inlabels" > Max Temp: {this.state.day3.maxtemp}° F </label> 
              <label className = "textclass inlabels" > Min Temp: {this.state.day3.mintemp}° F </label> 
            </div >             
          </div>
        </div>
        
        < div className = "forecast" >
          <span className="textclass">Day 4</span>
          <div className="container">
            {this.state.day4.currweather}
             <div className = "labels" >
              <label className = "textclass inlabels" > Max Temp: {this.state.day4.maxtemp}° F </label> 
              <label className = "textclass inlabels" > Min Temp: {this.state.day4.mintemp}° F </label> 
            </div >            
          </div>
        </div>
        
        < div className = "forecast" >
          < span className = "textclass" > Day 5 </span>
          <div className="container">
            {this.state.day5.currweather}
             <div className = "labels" >
              <label className = "textclass inlabels" > Max Temp: {this.state.day5.maxtemp}° F </label> 
              <label className = "textclass inlabels" > Min Temp: {this.state.day5.mintemp}° F </label> 
            </div >            
          </div>
        </div>
      </div>
    </div>
    )
  }
}
