/** @jsxImportSource @emotion/react */

import { useAtom } from "jotai"
import konfigurasiAtom from "../../konfigurasi-atom"

const MenuUser = () => {

  const [konfigurasi, setKonfigurasi] = useAtom(konfigurasiAtom) 

  return (
    <div
      css={{
        zIndex: 10,
        position: `fixed`,
        top: 56,
        right: 32,
        width: 360,
        height: 640,
        opacity: konfigurasi.bukaMenuUser ? 1 : 0,
        borderRadius: 8,
        boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
        background: "#fafafa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 16,
        gap: 8,
      }}
    >
      <div
        css={{
          width: 80,
          height: 80,
          borderRadius: 40,
          background: "#02808f",
          fontSize: `2.5rem`,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff",
        }}
      >
        I 
      </div>
      <span
        css={{
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        Fauzi Salam
      </span>
      <span
        css={{
          fontSize: "0.85rem",
          color: "#999999",
        }}
      >
        fauzisalam2002@mail.ugm.ac.id 
      </span>
    </div>
  )
}

export default MenuUser 
