/** @jsxImportSource @emotion/react */

import { useEffect, useRef } from "react"

import "ol/ol.css"
import { map } from "../../map/map"
import { layerLokasiSekarang, layerPetaDasar } from "../../map/layers"

const Peta = () => {

  const petaRef = useRef(null)

  useEffect(() => {
    if(petaRef.current !== null) {
      map.setTarget(petaRef.current)
      map.setLayers([
        layerPetaDasar,
        layerLokasiSekarang,
      ])
    }
  }, [petaRef])

  return (
    <div
      ref={petaRef}
      css={{
        background: `#fafafa`,
        position: `fixed`,
        width: window.outerWidth,
        height: window.outerHeight,
      }}
    >
    </div>
  )
}

export default Peta 
