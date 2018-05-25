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
  render() {
    return (
      < div className = "main" >
        <div id="search">
          <input placeholder="Enter City Name" type="text"/><button>Submit</button>
        </div>
        < h1 className="textclass">
          Current Conditions 
        </h1>
        <div className="container">
          <Sunny />
        </div>
        <label className="textclass">65° F</label>
      <h2>Five Day Forecast</h2>
      <div className="fivedayforecast">
        <div className="forecast">
          < span className = "textclass" > Day 1 </span>
          <div className="container">
            <Thunder />
          </div>
        </div>
          
        < div className = "forecast" >
          < span className = "textclass" > Day 2 </span>
          <div className="container">
            <Cloudy />
          </div>
        </div>
        
        < div className = "forecast" >
          < span className = "textclass" > Day 3 </span>
          < div className = "container" >
            <Sunshower /> 
          </div>
        </div>
        
        < div className = "forecast" >
          <span className="textclass">Day 4</span>
          <div className="container">
            <Flurry />
          </div>
        </div>
        
        < div className = "forecast" >
          < span className = "textclass" > Day 5 </span>
          <div className="container">
            <Rain />
          </div>
        </div>
      </div>
    </div>
    )
  }
}
