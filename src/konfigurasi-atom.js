import { atom } from "jotai"

const konfigurasiBawaan = {
  bukaMenuPinggir: true,
  bukaMenuUser: true,
}

const konfigurasiAtom = atom(konfigurasiBawaan)

export default konfigurasiAtom
