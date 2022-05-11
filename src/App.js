import { useState, useEffect } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import LocationInfo from "./components/LocationInfo";

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [ipData, setIpData] = useState({
    ip: "",
    city: "",
    timezone: "",
    isp: "",
  });
  const [position, setPosition] = useState({ lat: 0, lon: 0 });

  const handleSearch = (input) => {
    setSearchTerm(input);
  };

  const getIpData = async (ip) => {
    const response = await fetch(`http://ipwho.is/${ip}`);
    const data = await response.json();
    if (data.success) {
      setIpData({
        ...ipData,
        ip: data.ip,
        city: data.city,
        timezone: data.timezone.utc,
        isp: data.connection.isp,
      });
      setPosition({ ...position, lat: data.latitude, lon: data.longitude });
    }
    if (!data.success) alert("Please choose valid IP");
  };

  useEffect(() => {
    getIpData(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <LocationInfo ipData={ipData} />
      <Map position={position} />
    </div>
  );
}

export default App;
