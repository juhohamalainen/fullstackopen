import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [initialCountries, setInitialCountries] = useState([])
  const [search, setSearch] = useState('')
  const [tooMany, setTooMany] = useState('')
  const [showMoreData, setShowMorewData] = useState(false)
  const [weatherData, setWeatherData] = useState({})
  
  useEffect(() => {
    console.log('effect')
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      console.log('promise fulfilled')
      setInitialCountries(response.data)
    })
  }, [])
  console.log('render', initialCountries.length, 'initialCountries')


  useEffect(() => {
    const find = initialCountries.filter(country => country.name.common.includes(search))
    if (find.length > 10) {
      setCountries([])
      setTooMany('Too many matches, specify another filter')
    } else {
      setCountries(find)
      setTooMany('')
    }
    if (find.length === 1) {
      setShowMorewData(true)
      const capital = countries.map((country) => country.capital[0]);
      const api_key = process.env.REACT_APP_API_KEY
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital[0]}&units=metric&&appid=${api_key}`)
    .then(response => {
      setWeatherData(response.data)

    })
    } else {
      setShowMorewData(false)
    }
    console.log(initialCountries)
  },[search, initialCountries])

  const inputHandler = (event) => {
    setSearch(event.target.value)
  }
  
  const show = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="App">
      <h2>Search for a country</h2>
      <div>
        <input onChange={inputHandler}></input>
        {countries.length ?
        <div>
          {countries.map((country, i) => (
          <Country
          key={i}
          name={country.name.common}
          capital={country.capital}
          flag={country.flags.png}
          languages={country.languages}
          showMoreData={showMoreData}
          show={show}
          weatherData={weatherData}
          />
          ))}
        </div> : null}
        <p>{tooMany}</p>
      </div>
    </div>
  );
}

export default App;
