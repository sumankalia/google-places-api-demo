import React, { useState } from "react";
import "./App.css";
import SearchLocationInput from "./components/GooglePlcasesApi";
import MapComponent from "./components/Map";

function App() {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 28.7041,
    lng: 77.1025,
  });
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <SearchLocationInput setSelectedLocation={setSelectedLocation} />
      <MapComponent selectedLocation={selectedLocation} />
    </div>
  );
}

export default App;
