import GoogleMapReact from "google-map-react";
import MarkerIcon from "../../assets/MarkerIcon";

const googleKey = import.meta.env.VITE_GOOGLE_KEY;

const MapCard = ({ lat, lng }) => {
  const location = { lat: Number(lat), lng: Number(lng) };
  return (
    <div className="w-full h-[200px] p-5">
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleKey }}
        defaultCenter={location}
        defaultZoom={8}
      >
        <MarkerIcon lat={location.lat} lng={location.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default MapCard;
