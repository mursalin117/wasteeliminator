import classes from "./Map.module.css";
import MarkerClusterer from './MarkerClusterer';

const Map = (props) => {
  let styles = classes.map;
  if (props.style === "post"){
    styles = classes.header;
  }
    return (
        <div className={styles}>
        <MarkerClusterer updatedData={props.updatedData} height={props.height} width={props.width}/>
      </div>
    )
};

export default Map;
