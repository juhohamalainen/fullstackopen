import React from 'react'

const Country = ({ name, flag, languages, showMoreData}) => {
 if(showMoreData === true) {
   return(
     <div>
       <h2>{name}</h2>
       <h4>languages:</h4>
         {Object.values(languages).map((language, i) => (
           <p key={i}>{language}</p>
         ))}
       <img src={flag} alt="No flag found" />
     </div>
   ) 
 } else {
   return(
     <div>
       <p>{name}</p>
     </div>
   ) 
 }
}

export default Country