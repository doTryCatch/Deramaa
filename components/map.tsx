import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSearchContext } from "@/app/context/searchLocation";
import MarkerIcon from "@/public/icon/locator.png";
import L from "leaflet";
interface JumpToLocationProps {
  latitude: string;
  longitude: string;
}

const JumpToLocation = ({ latitude, longitude }: JumpToLocationProps) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo([Number(latitude), Number(longitude)], 13, { duration: 2 });
  }, [latitude, longitude, map]);

  return null;
};

const Map = () => {
  const { searchLocation } = useSearchContext();
  const customIcon = new L.Icon({
    iconUrl: MarkerIcon.src,
    iconSize: [65, 65], // Adjust size as needed
    iconAnchor: [16, 45], // Adjust for icon's alignment
    popupAnchor: [0, -40], // Adjust popup position relative to icon
  });
  useEffect(() => {
    console.log(searchLocation);
  }, [searchLocation]);

  return (
    <MapContainer
      center={[27.7048, 85.3095]}
      zoom={13}
      className="outline-none md:rounded-xl box-shadow-2"
      style={{ height: "505px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {searchLocation && (
        <JumpToLocation
          latitude={searchLocation.latitude}
          longitude={searchLocation.longitude}
        />
      )}
      <Marker position={[27.7048, 85.3095]} icon={customIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
