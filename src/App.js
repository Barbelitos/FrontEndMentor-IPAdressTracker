import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import LocationInfo from "./components/LocationInfo";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./App.css";

function App() {
  const [ipData, setIpData] = useState({});
  const [location, setLocation] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [hasFetched, setHasFetched] = useState(false);

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [mapCenter, setMapCenter] = useState([]);
  const [hasCoordinates, setHasCoordinates] = useState(false);
  const [hasError, setHasError] = useState(false);
  // const [position, setPosition] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const mapRef = useRef();

  const handleFlyTo = () => {
    const map = mapRef.current;
    map.flyTo([location.lat, location.lng], 16);
  };

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        const newLat = position.coords.latitude;
        const newLong = position.coords.longitude;
        setLat(newLat);
        setLong(newLong);
        setMapCenter([newLat, newLong]);
        setHasCoordinates(true);
      },
      (err) => {
        setErrorMessage(err.message);
        setHasError(true);
      }
    );
  }, [lat, long]);

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchIpData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_Gy01R6uoncX188tFqpkDZTmyS8fDu&ipAddress=${searchTerm}`
      );

      if (!response.ok) throw new Error("IP address not found");
      const locationData = await response.json();
      const locData = locationData.location;
      console.log(locationData);
      if (locationData !== {}) {
        setIpData(locationData);
        setLocation(locData);
        setMapCenter([location.lat, location.lng]);
        setHasFetched(true);
        handleFlyTo(); // It is flying to the previous!!! - NEED TO FIX
      } else {
        setMapCenter([lat, long]);
      }
    } catch (error) {
      // Need to give user feedback of this error
      console.error(error.message);
    }
  };

  const renderMap = () => {
    if (hasCoordinates && !hasError && ipData) {
      return (
        <MapContainer
          center={mapCenter}
          zoom={13}
          ref={mapRef}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100vh" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, long]}>
            <Popup>You are here! 📍</Popup>
          </Marker>
        </MapContainer>
      );
    } else if (hasError) {
      return <h2>{errorMessage}</h2>;
    }
  };

  return (
    <div className="App">
      <Header
        getData={fetchIpData}
        handleSearchTerm={handleSearchTerm}
        inputTerm={searchTerm}
      />
      <LocationInfo
        locationData={ipData}
        location={location}
        inputTerm={searchTerm}
      />
      <Map
        renderMap={renderMap}
        location={location}
        inputSearch={searchTerm}
        ipData={ipData}
        hasFetched={hasFetched}
      />
    </div>
  );
}

export default App;
