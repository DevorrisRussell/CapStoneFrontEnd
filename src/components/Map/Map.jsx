import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { googleAPIKey } from "../../ApiKeys";

const mapStyles = {
  width: "100%",
  height: "100%",
};

function MapComponent(props) {
  return (
    <div>
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 28.0854352,
          lng: -82.40952070000002,
        }}
      >
        <Marker name={"I Live Here!"}></Marker>
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: googleAPIKey,
})(MapComponent);
