import React from 'react';
import './App.css';
import GoogleLocationMarker from './assets/location_marker.png';
import GoogleMapReact from 'google-map-react';
import SearchLocationInput from './components/GooglePlcasesApi';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 31.1048,
  lng: 77.1734
};

const markers = [
  { lat: 31.111129, lng: 77.1418 },
  { lat: 31.1038, lng: 77.1929 },
]

const LocationPin = ({ text }) => (
  <div className="pin">
    <img src={GoogleLocationMarker} width={50}/>
    <p className="pin-text">{text}</p>
  </div>
)

function App() {

  
  return (
   // Important! Always set the container height explicitly
   <div style={{ height: '100vh', width: '100%' }}>
    <SearchLocationInput />
    {/* <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={center}
        defaultZoom={11}
        bootstrapURLKeys={{ key: "AIzaSyA41ywZjIz2hgaKqXduK1F8ihe1bnRmOz0" }}
      >
        <LocationPin
          lat={31.111129}
          lng={77.1418}
          text="Himachal Pradesh University shimla"
        />
      </GoogleMapReact> */}
 </div>
  );
}

export default App;
