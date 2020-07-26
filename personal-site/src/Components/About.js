import React ,{Component} from 'react';


class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Home">
        <p>Simple example of an api request to OpenWeather, who can be found at <a href="https://openweathermap.org">https://openweathermap.org</a>, using a form with regex validation.</p>
        <p>Created for personal reference, feel free to use, to get this to work, obtain a AppID from OpenWeather and modify the 'const AppID' in src/Components/Home.js</p>
      </div>
      
    );
  }
}


export default About;