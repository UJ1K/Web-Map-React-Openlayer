/** @jsxImportSource @emotion/react */

import { useAtom } from "jotai"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa"

import konfigurasiAtom from "../../../konfigurasi-atom"

const MenuPinggirTombolTampilkan = () => {

  const [konfigurasi, setKonfigurasi] = useAtom(konfigurasiAtom)

  return (
    <div
      onClick={() => {
        setKonfigurasi({...konfigurasi, bukaMenuPinggir: !konfigurasi.bukaMenuPinggir})
      }}
      css={{
        background: `#fafafa`,
        borderTopRightRadius: 8, 
        borderBottomRightRadius: 8, 
        position: `absolute`,
        height: 48,
        width: 24,
        right: -24,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        top: "calc(50% - 24px)",
        borderLeft: `1px solid #dddddd`,
        ":hover": {
          cursor: "pointer",
          background: "#eaeaea",
        },
      }}
    >
    {konfigurasi.bukaMenuPinggir ? <FaCaretLeft /> : <FaCaretRight />}
    </div>
  )
}

export default MenuPinggirTombolTampilkan 
