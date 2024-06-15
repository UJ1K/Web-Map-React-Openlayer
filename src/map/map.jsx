import Map from "ol/Map"
import View from "ol/View"

export const map = new Map({
  target: undefined,
  view: new View({
    projection: "EPSG:4326",
    center: [107.6689, -7.0909],
    zoom: 10,
  })
})
