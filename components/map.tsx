import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSearchContext } from "@/app/context/searchLocation";
import MarkerIcon from "@/public/icon/locator.png";
import Room from "@/app/json-data/rooms.json";
import L from "leaflet";
interface JumpToLocationProps {
  latitude: string;
  longitude: string;
}

const JumpToLocation = ({ latitude, longitude }: JumpToLocationProps) => {
  const map = useMap();

  useEffect(() => {
    // jump to next location transition
    map.flyTo([Number(latitude), Number(longitude)], 17, { duration: 1 });
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
      center={
        searchLocation != null
          ? [Number(searchLocation.latitude), Number(searchLocation.longitude)]
          : [27.7048, 85.3095]
      }
      zoom={18}
      className="outline-none md:rounded-xl box-shadow-2 md:h-[510px] w-full h-[100vh]"
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
      <Marker
        position={
          searchLocation != null
            ? [
                Number(searchLocation.latitude),
                Number(searchLocation.longitude),
              ]
            : [27.7048, 85.3095]
        }
        icon={customIcon}
      >
        <Popup>Here is your Location</Popup>
      </Marker>
      {Room.rooms.length > 0
        ? Room.rooms.map((room, index) => (
            <Marker
              position={
                searchLocation != null
                  ? [
                      Number(searchLocation.latitude),
                      Number(searchLocation.longitude),
                    ]
                  : [
                      room.details.location.latitude,
                      room.details.location.longitude,
                    ]
              }
              icon={customIcon}
              key={index}
            >
              <Popup>Here is your Location</Popup>
            </Marker>
          ))
        : null}
      <Marker
        position={
          searchLocation != null
            ? [
                Number(searchLocation.latitude),
                Number(searchLocation.longitude),
              ]
            : [27.7048, 85.3095]
        }
        icon={customIcon}
      >
        <Popup>Here is your Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
