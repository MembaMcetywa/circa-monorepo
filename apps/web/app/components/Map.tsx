"use client";
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: -26.1151,
  lng: 28.011,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={options}
      ></GoogleMap>
    </LoadScript>
  );
};

export default Map;
