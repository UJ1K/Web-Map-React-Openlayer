/** @jsxImportSource @emotion/react */

import Peta from "./components/Peta"
import MenuAtas from "./components/MenuAtas"
import MenuPinggir from "./components/MenuPinggir"
import MenuUser from "./components/MenuUser"
import MenuBawah from "./components/MenuBawah"
import { Global } from "@emotion/react"

const App = () => {
  return (
    <div className="App">
      <Global 
        styles={{
          'html': {
            '*': {
              boxSizing: "border-box",
            },
            fontFamily: `'Roboto', sans-serif`,
            fontSize: `16px`,
            padding: 0,
            margin: 0,
          },
          'body': {
            padding: 0,
            margin: 0,
          },
        }}
      />
      <Peta />
      <MenuAtas />
      <MenuPinggir />
      <MenuUser />
      <MenuBawah />
    </div>
  );
}

export default App;
