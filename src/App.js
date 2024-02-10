import React, { useState } from "react";
import Layout from "./components/Layout"
import "./style.css";

export default function App() {
  const [data, setData] = useState({})
  const [query, setQuery] = useState('')
  const [err, setErr] = useState([])
  const url = "https://api.openweathermap.org/data/2.5/"
  const apiKey = process.env.REACT_APP_WEATHER_APP_API_KEY;

  const searchData = (e) => {
    try {
      if (e.key === 'Enter') {
        fetch(`${url}weather?q=${query}&appid=${apiKey}&units=metric`).then((res) => {
          if (res.status !== 200) {
            throw new Error('Error occured!')
          } else return res.json()
        }).then((wdata) => { setData(wdata); setQuery('') })
          .catch((err) => setErr(err.message))
      }
    } catch (e) {
      if (query !== data.name) {
        setErr('city doesn\'t exist')
      } else {
        setErr(err.message)
      }
    }

  }

  console.log(err)


  return (
    <Layout >
      <div className="main-page">
        <input className="search" value={query} type="search" onChange={(e) => setQuery(e.target.value)} onKeyPress={searchData} placeholder="Search by City Name" />
        <h3 style={{ color: 'grey', marginTop: '20px' }}>Weather Condition Data:</h3>
        <div className="w-data">
          {!data?.name && <p className="error">{err}</p> ||
            (<> <p>City Name: {data.name}</p>
              <p>Current Temperature: {data?.main?.temp}°C</p>
              <p>Weather Conditions: {data.weather && Array.isArray(data.weather) && data?.weather[0]?.description} </p>
              <p>Wind Speed: {data.wind?.speed} km/h</p></>)
          }
        </div>
        <br />
        <br />
        <br />
        <div>
          <h3 style={{ color: 'grey', marginTop: '20px' }}>UI City Grid:</h3>
          <div className="city-grid">
            <div className="grid1">
              <div className="tooltip">New Delhi
                <span className="tooltiptext" style={{ color: 'red' }}>High Temp: 33.12°C</span>
                <span className="tooltiptext" style={{ color: 'skyblue' }}>Low Temp: 20.12°C</span>
                <span className="tooltiptext">Population: 5.2L</span>
              </div>
            </div>
            <div className="grid2">
              <div className="tooltip">Mumbai
                <span className="tooltiptext" style={{ color: 'red' }}>Temp: 40.10°C</span>
                <span className="tooltiptext" style={{ color: 'skyblue' }}>Low Temp: 14.10°C</span>
                <span className="tooltiptext">Population: 6.3L</span>
              </div>
            </div>
            <div className="grid3">
              <div className="tooltip">Bengaluru
                <span className="tooltiptext" style={{ color: 'red' }}>High Temp: 40.12°C</span>
                <span className="tooltiptext" style={{ color: 'skyblue' }}>Low Temp: 28.12°C</span>
                <span className="tooltiptext">Population: 9L</span>
              </div>
            </div>
            <div className="grid4">
              <div className="tooltip">Pune
                <span className="tooltiptext" style={{ color: 'red' }}>High Temp: 30.12°C</span>
                <span className="tooltiptext" style={{ color: 'skyblue' }}>Low Temp: 12.84°C</span>
                <span className="tooltiptext">Population: 8.54L</span>
              </div>
            </div>
            <div className="grid5">
              <div className="tooltip">Hyderabad
                <span className="tooltiptext" style={{ color: 'red' }}>High Temp: 32°C</span>
                <span className="tooltiptext" style={{ color: 'skyblue' }}>Low Temp: 18.0°C</span>
                <span className="tooltiptext">Population: 7.4L</span>
              </div>
            </div>
            <div className="grid6">
              <div className="tooltip">Kolkata
                <span className="tooltiptext" style={{ color: 'red' }}>Hign Temp: 36°C</span>
                <span className="tooltiptext" style={{ color: 'skyblue' }}>Low Temp: 14.24°C</span>
                <span className="tooltiptext">Population: 7.54L</span>
              </div>
            </div>
            <div className="grid7">
              <div className="tooltip">Chennai
                <span className="tooltiptext" style={{ color: 'red' }}>Hign Temp: 30°C</span>
                <span className="tooltiptext" style={{ color: 'skyblue' }}>Low Temp: 16.6°C</span>
                <span className="tooltiptext">Population: 7L</span>
              </div>
            </div>
            <div className="grid8">
              <div className="tooltip">Kanpur
                <span className="tooltiptext" style={{ color: 'red' }}>Hign Temp: 38°C</span>
                <span className="tooltiptext" style={{ color: 'skyblue' }}>Low Temp: 17.20°C</span>
                <span className="tooltiptext">Population: 6L</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
