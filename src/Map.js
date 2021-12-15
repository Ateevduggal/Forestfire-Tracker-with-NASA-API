import GoogleMapReact from "google-map-react";
import { useState } from "react";
import LocationInfo from "./LocationInfo";
import Location from "./Location";
const Map = ({ center, zoom, array }) => {
  const [data, setData] = useState(null);

  const marker = array.map((evnt) => {
    if (evnt.categories[0].id === 8) {
      return (
        <Location
          lat={evnt.geometries[0].coordinates[1]}
          lng={evnt.geometries[0].coordinates[0]}
          onClick={() => setData({ id: evnt.id, title: evnt.title })}
        />
      );
    }
    return null;
  });
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDSlHAplGt_pc1zhgdWcqbjD-2aoYh6hgA" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {marker}
      </GoogleMapReact>
      {data && <LocationInfo info={data} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756
  },
  zoom: 6
};

export default Map;
