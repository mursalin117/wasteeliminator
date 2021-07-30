import classes from "./Map.module.css";
// import CoreMap from "./CoreMap";
// import StyledMapWithAnInfoBox from './StyledMapWithAnInfoBox';
import MarkerClusterer from './MarkerClusterer';

const Map = (props) => {
  let styles = classes.map;
  if (props.style === "post"){
    styles = classes.header;
  }
    return (
        <div className={styles}>
        {/* <CoreMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBZibHlhg2TX5MQuzQzr7h3cPTtZhfo7MY"
          loadingElement={<div style={{ height: `100%`}} />}
          containerElement={<div style={{ height: `35rem`, width: `535px` }} />}
          mapElement={<div style={{ height: `100%`}} />}
        /> */}
        {/* <StyledMapWithAnInfoBox /> */}
        <MarkerClusterer height={props.height} width={props.width}/>
      </div>
    )
};

export default Map;
