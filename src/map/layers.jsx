import Feature from "ol/Feature"
import TileLayer from "ol/layer/Tile"
import VectorLayer from "ol/layer/Vector"
import OSM from "ol/source/OSM"
import VectorSource from "ol/source/Vector"
import Style from "ol/style/Style"
import CircleStyle from "ol/style/Circle"
import Fill from "ol/style/Fill"
import Stroke from "ol/style/Stroke"
import { Point } from "ol/geom"
import Geolocation from "ol/Geolocation"
import { map } from "./map"

export const layerPetaDasar = new TileLayer({
  source: new OSM(),
})

export const styleLokasiSekarang = new Style({
  image: new CircleStyle({
    radius: 6,
    fill: new Fill({
      color: '#005243',
    }),
    stroke: new Stroke({
      color: '#fff',
      width: 2,
    }),
  }),
})

export const featureLokasiSekarang = new Feature({
  geometry: new Point([0, 0]),
})

export const layerLokasiSekarang = new VectorLayer({
  source: new VectorSource({
    features: [featureLokasiSekarang]
  }),
})

export const geolocation = new Geolocation({
  trackingOptions: {
    enableHighAccuracy: true,
  },
})
  geolocation.setProjection(map.getView().getProjection())
  geolocation.setTracking(true)
