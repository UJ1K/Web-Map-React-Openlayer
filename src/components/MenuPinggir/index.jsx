/** @jsxImportSource @emotion/react */

import { useAtom } from "jotai"
import konfigurasiAtom from "../../konfigurasi-atom"
import MenuPinggirKonten from "./Konten" 
import MenuPinggirPencarian from "./Pencarian"
import MenuPinggirTombolTampilkan from "./TombolTampilkan"

const MenuPinggir = () => {

  const [konfigurasi, setKonfigurasi] = useAtom(konfigurasiAtom)

  return (
    <div
      className="MenuPinggir"
      css={{
        zIndex: 10,
        background: `green`,
        position: `fixed`,
        top: 0,
        left: konfigurasi.bukaMenuPinggir ? 0 : -360,
        width: 360,
        height: `100%`,
        transition: ".4s",
        background: "#fafafa",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
      }}
    >
      <MenuPinggirPencarian />
      <MenuPinggirKonten />
      <MenuPinggirTombolTampilkan />
    </div>
  )
}

export default MenuPinggir 
