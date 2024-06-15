/** @jsxImportSource @emotion/react */

import { useAtom } from "jotai"
import { FaBed, FaBook, FaFish, FaLaptopHouse, FaMoneyCheckAlt, FaMountain } from "react-icons/fa"

import konfigurasiAtom from "../../../konfigurasi-atom"

const menu = [
  {
    judul: "Perumahan",
    icon: <FaLaptopHouse />,
  },
  {
    judul: "Perpus",
    icon: <FaBook />,
  },
  {
    judul: "Istirahat",
    icon: <FaBed />,
  },
  {
    judul: "Makan",
    icon: <FaFish />,
  },
  {
    judul: "Alam",
    icon: <FaMountain />,
  },
  {
    judul: "ATM",
    icon: <FaMoneyCheckAlt />,
  },
]

const MenuAtasAnekaTombol = () => {

  const [konfigurasi, setKonfigurasi] = useAtom(konfigurasiAtom)

  return (
    <div
      className="MenuAtasAnekaTombol"
      css={{
        display: "flex",
        flexDirection: "row",
        gap: 8,
        paddingLeft: (konfigurasi.bukaMenuPinggir ? 360 : 0),
        transition: ".4s",
        flexGrow: 1,
      }}
    >
    {menu.map((tiapMenu, urutan) => (
      <div
        className="MenuAtasAnekaTombol_menu"
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
          ":hover": {
            cursor: "pointer",
            background: "#eaeaea",
          },
        }}
      >
        {tiapMenu.icon}
        {tiapMenu.judul}
      </div>
    ))}
    </div>
  )
}

export default MenuAtasAnekaTombol 
