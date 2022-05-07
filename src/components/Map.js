import { useEffect, useState } from "react";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";

import styles from "./Map.module.css";

const Map = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [latLong, setLatLong] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const newLat = position.coords.latitude;
        const newLong = position.coords.longitude;
        setLat(newLat);
        setLong(newLong);
        setLatLong(true);
        console.log(lat, long);
      },
      (err) => {
        setErrorMessage(err.message);
        setHasError(true);
      }
    );
  }, [lat, long]);

  const renderMap = () => {
    if (latLong && !hasError) {
      return (
        <MapContainer
          className={styles.map_container}
          center={[lat, long]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "900px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      );
    } else {
      return <h2>{errorMessage}</h2>;
    }
  };

  return renderMap();
};

export default Map;
