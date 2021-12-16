import GoogleMapReact from "google-map-react";
import { useState } from "react";
import LocationInfo from "./LocationInfo";
import Forest from "./Forest";
import Valcano from "./Valcano";
import Iceburg from "./Iceburg";
import Storm from "./Storm";
const Map = ({ center, zoom, array }) => {
  const [data, setData] = useState(null);
  const marker = array.map((evnt) => {
    if (evnt.categories[0].id === 8) {
      return (
        <Forest
          lat={evnt.geometries[0].coordinates[1]}
          lng={evnt.geometries[0].coordinates[0]}
          onClick={() => setData({ id: evnt.id, title: evnt.title })}
        />
      );
    }
    return null;
  });
  const storm = array.map((evnt) => {
    if (evnt.categories[0].id === 10) {
      return (
        <Storm
          lat={evnt.geometries[0].coordinates[1]}
          lng={evnt.geometries[0].coordinates[0]}
          onClick={() => setData({ id: evnt.id, title: evnt.title })}
        />
      );
    }
    return null;
  });

  const smoke = array.map((evnt) => {
    if (evnt.categories[0].id === 12) {
      return (
        <Valcano
          lat={evnt.geometries[0].coordinates[1]}
          lng={evnt.geometries[0].coordinates[0]}
          onClick={() => setData({ id: evnt.id, title: evnt.title })}
        />
      );
    }
    return null;
  });
  const ice = array.map((evnt) => {
    if (evnt.categories[0].id === 15) {
      return (
        <Iceburg
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
        {smoke}
        {ice}
        {storm}
      </GoogleMapReact>
      {data && <LocationInfo info={data} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lng: 139.8,
    lat: 6,
  },
  zoom: 3,
};

export default Map;
