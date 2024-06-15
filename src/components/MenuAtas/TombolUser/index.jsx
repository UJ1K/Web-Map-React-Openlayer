/** @jsxImportSource @emotion/react */

import { useAtom } from "jotai"
import konfigurasiAtom from "../../../konfigurasi-atom"

const MenuAtasTombolUser = () => {

  const [konfigurasi, setKonfigurasi] = useAtom(konfigurasiAtom)

  return (
    <div
      onClick={() => {
        setKonfigurasi({...konfigurasi, bukaMenuUser: !konfigurasi.bukaMenuUser})
      }}
      css={{
        borderRadius: 16,
        width: 32,
        height: 32,
        background: "#02808f",
        fontSize: `1rem`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff",
        ":hover": {
          cursor: "pointer",
        },
      }}
    >
      I 
    </div>
  )
}

export default MenuAtasTombolUser 
