const { compose, withProps, withStateHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
const demoFancyMapStyles = require("./demoFancyMapStyles.json");

const StyledMapWithAnInfoBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBZibHlhg2TX5MQuzQzr7h3cPTtZhfo7MY",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `35rem`, width: `550px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 25.03, lng: 121.6 },
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={props.center}
    defaultOptions={{ styles: demoFancyMapStyles }}
  >
    <InfoBox
      defaultPosition={new window.google.maps.LatLng(props.center.lat, props.center.lng)}
      options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
      <div style={{ backgroundColor: `green`, opacity: 0.75, padding: `12px` }}>
        <div style={{ fontSize: `12px`, fontColor: `#08233B` }}>
          Hello, Taipei!
        </div>
      </div>
    </InfoBox>
    <Marker
      position={{ lat: 22.6273, lng: 120.3014 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoBox
        onCloseClick={props.onToggleOpen}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <div style={{ backgroundColor: `green`, opacity: 0.75, padding: `12px` }}>
          <div style={{ fontSize: `12px`, fontColor: `#08233B` }}>
            Hello, Kaohsiung!
          </div>
        </div>
      </InfoBox>}
    </Marker>
  </GoogleMap>
);

export default StyledMapWithAnInfoBox;

