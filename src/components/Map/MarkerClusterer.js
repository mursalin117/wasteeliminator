import React, { useEffect, useState } from "react";
import locdata from './mockLocation.json';
const fetch = require("isomorphic-fetch");
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");
const {
  MarkerClusterer,
} = require("react-google-maps/lib/components/addons/MarkerClusterer");

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBZibHlhg2TX5MQuzQzr7h3cPTtZhfo7MY&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `90%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers();
      console.log(`Current clicked markers length: ${clickedMarkers.length}`);
      console.log(clickedMarkers);
    },
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={3} defaultCenter={{ lat: 26.0252409, lng: 89.0209659 }}>
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map((marker) => (
        <Marker
          key={Math.random()}
          position={{ lat: marker.lat, lng: marker.long }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
));

// Mock Location Data for better clustering....
const arr = locdata.map((item) => ({lat: parseFloat(item.latitude), long: parseFloat(item.longitude)}));

const Markerclusterer = (props) => {
 
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const url =
      "https://waste-eliminator-api.us-south.cf.appdomain.cloud/datas";

    fetch(url)
      .then((res) => res.json())
      .then((data) => 
      {
        setMarkers(data.datas.map((item) => ({lat: parseFloat(item.location.lat), long: parseFloat(item.location.long)}))
        );
      })
  }, [props.updatedData]);



  return (
    <MapWithAMarkerClusterer
      containerElement={
        <div style={{ height: `${props.height}`, width: `${props.width}` }} />
      }
      markers={markers}
    />
  );
};

export default Markerclusterer;
