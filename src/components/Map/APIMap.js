import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import classes from "./Map.module.css";

const Map = () => {

    const containerStyle = {
        width: '530px',
        height: '550px'
      };

    const center = {
    lat: 23.6850,
    lng: 90.3563
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBZibHlhg2TX5MQuzQzr7h3cPTtZhfo7MY"
      })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
    }, [])

  return (
    <header className={classes.header}>
      {
          isLoaded ? (
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={2}
            onLoad={onLoad}
            onUnmount={onUnmount}
            >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
            </GoogleMap>
        ) : <><h1>There is nothing</h1></>
      }

    </header>
  );
};

export default React.memo(Map);

