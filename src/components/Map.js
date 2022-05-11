import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ position }) => {
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
      <Marker position={[position.lat, position.lon]}>
        <Popup>{position.isp} 📍</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
