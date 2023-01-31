import React from 'react'

const Country = ({ name, capital, flag, languages, showMoreData, show, weatherData }) => {

 if(showMoreData === true) {
   return(
     <div>
       <h2>{name}</h2>
       <h4>languages:</h4>
         {Object.values(languages).map((language, i) => (
           <p key={i}>{language}</p>
         ))}
       <img src={flag} alt="No flag found" />
       <div>
          <h2>{capital}</h2>
          {weatherData.main ? <h1>{weatherData.main.temp} °C</h1> : null}
          {weatherData.wind ? <h1>{weatherData.wind.speed} m/s</h1> : null}
          {weatherData.weather && (<img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
      )}
        </div>
     </div>
   ) 
 } else {
   return(
     <div>
       <p>{name} 
        <button value= {name} onClick={show} >
         Show
       </button>
      </p>
     </div>
   ) 
 }
}

export default Country