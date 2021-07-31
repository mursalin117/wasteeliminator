import { ReactBingmaps } from "react-bingmaps";

const API_KEY =
  "Add you r api key";

// Creating a map and adding a pin after API has been loaded
function BingMap() {
  return (
    <div className={classes.header}>
      <ReactBingmaps
        bingmapKey={API_KEY}
        center={[23.6850, 90.3563]}
        mapTypeId = {"road"}
        navigationBarMode = {"compact"}
        supportedMapTypes = {["road","canvasDark"]}
        zoom = {7}
        disableStreetside={true}
        pushPins = {
            [
              {
                "location":[23.6850, 90.3563], "option":{ color: 'red' }, "addHandler": {"type" : "click", callback: callBackMethod }
              },
              {
                "location":[23.9860, 90.6563], "option":{ color: 'red' }, "addHandler": {"type" : "mouseout", callback: callBackMethod }
              }
            ]
          }
        boundary = {
            {
              "search":"Bangladesh",
              "option":{
                entityType: 'PopulatedPlace'
              },
              "polygonStyle" :{
                fillColor: 'green',
                strokeColor: 'green',
                strokeThickness: 100
              }
            }
          }
      ></ReactBingmaps>
    </div>
  );
}

export default BingMap;
