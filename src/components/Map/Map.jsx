import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { googleAPIKey } from "../../ApiKeys";

const mapStyles = {
  width: "50%",
  height: "50%",
};

function MapComponent(props) {
  console.log(props.myEquipments);
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
        {props.myEquipments.map((equipment) => (
          <Marker
            name={"I Live Here!"}
            position={{ lat: equipment.lat, lng: equipment.lng }}
          ></Marker>
        ))}
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: googleAPIKey,
})(MapComponent);
