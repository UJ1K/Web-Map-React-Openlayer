/** @jsxImportSource @emotion/react */

import { FaCrosshairs } from "react-icons/fa"
import { featureLokasiSekarang, geolocation, styleLokasiSekarang } from "../../map/layers"
import { map } from "../../map/map"

const MenuBawah = () => {
  return (
    <div
      css={{
        position: `fixed`,
        bottom: 0,
        left: 0,
        width: "100%",
        height: 48,
        display: "flex", 
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "end",
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <div
        onClick={() => {
          const coordinates = geolocation.getPosition()

          featureLokasiSekarang.getGeometry().setCoordinates(coordinates)
          map.getView().animate({
            center: coordinates,
            duration: 1000,
            zoom: 17,
          })
          featureLokasiSekarang.setStyle(styleLokasiSekarang)
        }}
        css={{
          borderRadius: 16,
          background: "#fafafa",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: 4,
          paddingLeft: 8,
          paddingRight: 8,
          fontSize: `0.85rem`,
          boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
          alignItems: "center",
          ":hover": {
            cursor: "pointer",
            background: "lightblue",
          },
        }}
      >
        <FaCrosshairs />
        Lokasi Saya Sekarang
      </div>
    </div>
  )
}

export default MenuBawah 
