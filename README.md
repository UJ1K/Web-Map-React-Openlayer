# Membuat Web Seperti Google Map Dengan OpenLayers dan React 

## Cara Penggunaan

### Tools yang Dibutuhkan
- NodeJS dan Node Package Manager (NPM) [website](https://nodejs.org/en/)
- Yarn [cara instalasi](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)


### 1. Clone dan Masuk ke Folder Project
```sh
git clone https://gitlab.com/marchgis/march-ed/2022/qna/openlayers-react
cd openlayers-react
```

### 2. Install Dependensi
```sh
yarn
```

### 3. Jalankan Server Development
```sh
yarn start
```

## Arsitektur Aplikasi 

### Komponen
- Peta
- MenuPinggir
- MenuAtas
- MenuBawah
- MenuUser

### Variabel OpenLayers
- map 
- layers
  - layerPetaDasar 
  - layerLokasiSekarang
  - geolocation
