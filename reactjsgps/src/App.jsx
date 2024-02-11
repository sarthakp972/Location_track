import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Button from 'react-bootstrap/Button';
import './App.css'

function App() {

  const [latitude, setLatitude] = useState("Latitude is not available yet")
  const [longitude,setLongitude] = useState("Longitude is not available yet")
  const [continent,setcontinent]=useState("Continent is not available yet")
  const [country,setcountry]=useState("Country is not available yet")
  const [country_code,setcountry_code]=useState(" Country code is not available yet")
  const [state,setstate]=useState(" State is not available yet")
  const [state_district,setstate_district]=useState("State district is not available yet")
  const [suburb,setsuburb]=useState(" Suburb is not available yet")
  const [road,setroad]=useState(" Road is not available yet")
  const [road_type,setroad_type]=useState(" Road type is not available yet")
  const [postcode,setpostcode]=useState("Postcode is not available yet")
  const [county,setcounty]=useState("county is not available yet")
  const geo=navigator.geolocation
  //Get usser current position 
  geo.getCurrentPosition(userCoords)

  function userCoords(position){
let userLatitude=position.coords.latitude;
let userLongitude=position.coords.longitude;
// setLongitude(userLongitude)
// setLatitude(userLatitude)
setLongitude(userLongitude)
setLatitude(userLatitude)
}

const getUserAddress= async ()=>{
  let url=`https://api.opencagedata.com/geocode/v1/json?key=f2a4313351a64b8c855aa76850841f14&q=${latitude}%2C+${longitude}&pretty=1&no_annotations=1`;
  const loc=await fetch(url);
  const data = await loc.json()
  console.log(data);
  console.log("userAddress",data.results[0].formatted);
  // setUserAddress(data.results[0].formatted)
  setcountry(data.results[0].components.country)
  setcontinent(data.results[0].components.continent)
  setcountry_code(data.results[0].components.country_code)
  setpostcode(data.results[0].components.postcode)
  setstate(data.results[0].components.state_district)
  setsuburb(data.results[0].components.suburb)
  setstate_district(data.results[0].components.state_district)
  setroad_type(data.results[0].components.road)
  setroad(data.results[0].components.road)
  setcounty(data.results[0].components.county)

  
  console.log(data.results[0].components.continent);
}
const handleGetUserAddress=()=>{
  getUserAddress();
}

  return (
    <>
    
         <Button onClick={handleGetUserAddress} className='btn'  variant="dark">getCurrentPosition</Button>
    {/*   //////////////////////////////////////////                                */}
     <h3>latitude:-{latitude}</h3>
     <h3>longitude:-{longitude}</h3>
 <h3>continent:-{continent}</h3>
     <h3>country:-{country}</h3>
     <h3>country_code:-{country_code}</h3>
     <h3>state:-{state}</h3>
     <h3>state_district:-{state_district}</h3>
     <h3>suburb:-{suburb}</h3>
     <h3>county:- {county}</h3>
     <h3>postcode:-{postcode}</h3>
     <h3>road:-{road}</h3>
     <h3>road_type:-{road_type}</h3> 
     
    
    
    
  
    </>
  )
}

export default App
