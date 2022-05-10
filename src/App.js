import { useState, useEffect } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import LocationInfo from "./components/LocationInfo";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./App.css";
import { map } from "leaflet";
import { latLng } from "leaflet";

function App() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [hasCoordinates, setHasCoordinates] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setLat(latitude);
        setLng(longitude);
        setHasCoordinates(true);
      },
      (error) => {
        console.log(error);
        setHasError(true);
      }
    );
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  // const fetchIp = useCallback(async () => {
  //   try {
  //     const response = await fetch(
  //       `https://geo.ipify.org/api/v2/country,city?apiKey=at_Gy01R6uoncX188tFqpkDZTmyS8fDu&ipAddress=${searchTerm}`
  //     );

  //     if (!response.ok) throw new Error("IP address not found");
  //     const locationData = await response.json();
  //     const locData = locationData.location;
  //     console.log(locData);
  //     setIpData(locationData);
  //     setLocation(locData);
  //     setPosition({ lat: locData.lat, long: locData.long });
  //   } catch (error) {
  //     // Need to give user feedback of this error
  //   }
  // }, []);

  // useEffect(() => {
  //   fetchIp();
  // }, [fetchIp]);

  const renderMap = () => {
    if (hasCoordinates) {
      return (
        <MapContainer
          center={[lat, lng]}
          zoom={13}
          // ref={mapRef}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100vh" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>You are here! 📍</Popup>
          </Marker>
        </MapContainer>
      );
    }
  };

  return (
    <div className="App">
      <Header
        submitHandler={submitHandler}
        searchHandler={searchHandler}
        searchTerm={searchTerm}
      />
      <LocationInfo
      // locationData={ipData}
      // location={location}
      // inputTerm={searchTerm}
      />
      <Map
        renderMap={renderMap}
        // location={location}
        // inputSearch={searchTerm}
        // ipData={ipData}
      />
    </div>
  );
}

export default App;
