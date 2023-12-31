import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  GeolocationControl,
  TrafficControl,
  ZoomControl,
} from "react-yandex-map";

const Yandexmaps = () => {
  return (
    <YMaps>
      <div className="aga">
        <Map
          defaultState={{
            center: [42.875969, 74.603701],
            zoom: 7,
          }}
          className="maptip-yandex"
        >
          <Placemark geometry={[42.875969, 74.603701]} />

          <FullscreenControl options={{ float: "left" }} />

          <GeolocationControl options={{ float: "right" }} />

          <TrafficControl options={{ float: "right" }} />

          <ZoomControl options={{ float: "left" }} />
        </Map>
      </div>
    </YMaps>
  );
};

export default Yandexmaps;
