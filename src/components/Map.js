import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import locationIcon from "../assets/icon-location.svg";

const icon = new L.icon({
  iconUrl: locationIcon,
  iconSize: [36, 46],
  iconAnchor: [18, 46],
});

const Map = ({ position, ipData }) => {
  return (
    <MapContainer
      center={[position.lat, position.lon]}
      zoom={13}
      key={position.lat}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[position.lat, position.lon]} icon={icon}>
        <Popup>{ipData.isp} 📍</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
