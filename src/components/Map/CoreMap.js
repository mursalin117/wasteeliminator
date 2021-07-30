// import classes from './CoreMap.module.css';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

const latlong = [
    { lat: 23.3850, lng: 90.0563 },
    { lat: 23.2850, lng: 90.1563 },
    { lat: 23.1850, lng: 90.2563 },
    { lat: 23.0850, lng: 90.3563 },

]

const CoreMap = withScriptjs(withGoogleMap(props =>
<GoogleMap
    defaultZoom={7.5}
    defaultCenter={{ lat: 23.6850, lng: 90.3563 }}
>
    <Marker
    position={latlong[0]}
    />
    <Marker
    position={latlong[1]}
    />
    <Marker
    position={latlong[2]}
    />
    <Marker
    position={latlong[3]}
    />

</GoogleMap>

));
  
export default CoreMap;