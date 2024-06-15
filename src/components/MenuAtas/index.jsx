/** @jsxImportSource @emotion/react */

import MenuAtasAnekaTombol from "./AnekaTombol"
import MenuAtasTombolUser from "./TombolUser"

const MenuAtas = () => {
  return (
    <div
      className="MenuAtas"
      css={{
        // background: `blue`,
        position: `fixed`,
        top: 0,
        left: 0,
        width: `100%`,
        height: 56,
        display: "flex", 
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <MenuAtasAnekaTombol />  
      <MenuAtasTombolUser />
    </div>
  )
}

export default MenuAtas 
