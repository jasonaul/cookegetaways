import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './Map.css';

const containerStyle = {
  width: '75vw',
  height: '50vh'
};

const center = {
  lat: 44.44193150693084,
  lng: -72.67193500679673
};

function Location() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  React.useEffect(() => {
    if (map) {
      const bounds = new window.google.maps.LatLngBounds();
      const radiusInMeters = 3 * 1609.34; // 10 miles in meters
      const circle = new window.google.maps.Circle({
        center,
        radius: radiusInMeters
      });
      bounds.union(circle.getBounds());
      map.fitBounds(bounds);
    }
  }, [map]);

  return (
    <div className="location">
      <h2>Location</h2>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14} // Adjust the initial zoom level as needed
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components */}
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}

export default React.memo(Location);
