import React, { useState } from 'react'
import './Weatherapp.css'
import search_icon from '../assets/search.png'
import cloud_icon from '../assets/cloudy.png'
import humidity_icon from '../assets/humidity 1.png' 
import wind from '../assets/clouds.png'
import cloudy_icon from '../assets/fog.png' 
import heavy_rain_icon from '../assets/heavy-rain.png' 
import snow_icon from '../assets/snow.png'
import storm_icon from '../assets/storm.png'
import sun_icon from '../assets/sun-cloud.png'
import clouds_icon from '../assets/clouds.png'

const Weatherapp = () => {
  let api_key ="312d3d64d0fecf4ba6e02081a94b02c4"; 
  const [wicon,setWicon] = useState(cloud_icon)

  

  const search = async () => { 
    const element = document.getElementsByClassName("location_input");
    if(element[0].value === "")
    {
        return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const temp = document.getElementsByClassName("weather_temp");
    const humidity = document.getElementsByClassName("humidity");
    const wind = document.getElementsByClassName("wind");
    const location = document.getElementsByClassName("weather_location");

    humidity[0].innerHTML = Math.floor(data.main.humidity)+"%";
    wind[0].innerHTML = Math.floor(data.wind.speed)+"km/hr";
    location[0].innerHTML = data.name;
    temp[0].innerHTML = Math.floor(data.main.temp) +" °c"; 

    if(data.weather[0].icon ==="01d" || data.weather[0].icon ==="01n")
    {
        setWicon(sun_icon)
    }
    else if(data.weather[0].icon ==="02d" || data.weather[0].icon ==="02n")
    {
        setWicon(cloud_icon)
    } 
    else if(data.weather[0].icon ==="03d" || data.weather[0].icon ==="03n")
    {
        setWicon(clouds_icon)
    }
    else if(data.weather[0].icon ==="04d" || data.weather[0].icon ==="04n")
    {
        setWicon(clouds_icon)
    }
    else if(data.weather[0].icon ==="09d" || data.weather[0].icon ==="09n")
    {
        setWicon(heavy_rain_icon)
    }
    else if(data.weather[0].icon ==="10d" || data.weather[0].icon ==="10n")
    {
        setWicon(heavy_rain_icon)
    }
    else if(data.weather[0].icon ==="11d" || data.weather[0].icon ==="11n")
    {
        setWicon(storm_icon)
    }
    else if(data.weather[0].icon ==="13d" || data.weather[0].icon ==="13n")
    {
        setWicon(snow_icon)
    }
    else if(data.weather[0].icon ==="50d" || data.weather[0].icon ==="50n")
    {
        setWicon(cloudy_icon)
    }
    else{
        setWicon(sun_icon)
    }


  } 
  return (
    <div className = "container">
        <div className= "topbar">
            <div className = "inputtext">
            <input type="text" placeholder='search' className="location_input"/>
            </div>
            <div className="search" onClick = { () => {search()}}> 
            <img src = {search_icon} alt="" style={{height:"30px"}}/>
            </div>
        </div>
        <div className="cloudicon">
            <img src={wicon} alt="" style={{height:"100px"}} />
        </div>
        <div className='weather_temp'> 24°c </div>
        <div className='weather_location'> LONDON </div>
        <div className="bottom ">
        <div className="data-conainer card">
            <div className='element '>
                <img src={humidity_icon} alt="" style={{height:"50px"}}  /> 
                <div className='humidity'> 25</div>
            </div>
            <div className='humidity_text'> Humidity </div>
        </div>
        <div className="data-conainer card">
            <div className='element'>
                <img src={wind} alt="" style={{height:"50px"}}  /> 
                <div className='wind'> 25</div>
            </div>
            <div className='wind_text'> Wind Speed </div>
        </div>
        </div> 
    </div>
  )
}

export default Weatherapp