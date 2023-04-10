import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: window.innerWidth * .9,
  height: window.innerWidth * .9,
  maxHeight: '80vh',
  margin: '0 auto'
};

interface IMapProps {
  countryName: string
}

const Map:React.FC<IMapProps> = ({countryName}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY as string,
  });

  const [, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: countryName }, function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        map.setCenter(results![0].geometry.location);
        map.fitBounds(results![0].geometry.viewport);
      }
    });

    setMap(map);
  }, [countryName]);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      onLoad={onLoad}
      onUnmount={onUnmount}
    ></GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
