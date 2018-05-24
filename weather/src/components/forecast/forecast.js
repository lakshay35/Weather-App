import React, { Component } from 'react';
import './forecast.css';
import '../weather.css';

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
          <div className ="icon sunny">
            <div className = "sun">
              <div className = "rays">
              </div> 
            </div> 
          </div>
      </div>
      <label className="textclass">65° F</label>
      <label>
      </label>
      <h2>Five Day Forecast</h2>
      <div className="fivedayforecast">
        <div className="forecast">
          < span className = "textclass" > Day 1 </span>
          <div className="container">
            <div className = "icon thunder-storm" >
              <div className = "cloud" > 
              </div> 
              <div className = "lightning" >
                <div className = "bolt" > 
                </div> 
                <div className = "bolt" > 
                </div> 
              </div> 
            </div>
          </div>
        </div>
          
        < div className = "forecast" >
          < span className = "textclass" > Day 2 </span>
          <div className="container">
            < div className = "icon cloudy" >
              <div className = "cloud" > 
              </div> 
              <div className = "cloud" > 
              </div> 
            </div>
          </div>
        </div>
        
        < div className = "forecast" >
          < span className = "textclass" > Day 3 </span>
          < div className = "container" >
            < div className = "icon sun-shower" >
              <div className = "cloud" > 
              </div> 
              <div className = "sun" >
                <div className = "rays" > 
                </div> 
              </div> 
              <div className = "rain" > 
              </div> 
            </div> 
          </div>
        </div>
        
        < div className = "forecast" >
          <span className="textclass">Day 4</span>
          <div className="container">
            < div className = "icon flurries" >
              <div className = "cloud" > 
              </div> 
              <div class = "snow" >
                <div class = "flake" > 
                </div> 
                <div class = "flake" > 
                </div> 
              </div> 
            </div>
          </div>
        </div>
        
        < div className = "forecast" >
          < span className = "textclass" > Day 5 </span>
          <div className="container">
            < div className = "icon rainy" >
              <div class = "cloud" > 
              </div> 
              <div class = "rain" > 
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
