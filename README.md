# vue-hotel
![GITHUB](https://github.com/trnet4334/vue-hotel/blob/development/src/assets/images/Screenshot.png "Screenshot of homepage")

## Description
This project is built with Vue 2, Vue-CLI 3, firebase and several tools. The content include the introduction of various resort services and hotel booking feature.

Tourists can make a reservation. They could also check their booking status from the site or either cancel their trip.

Comments and contributions will be appreciated. I am doing this for practicing different development skills. 

## Demo
[Click here for a demo](https://vue-hotel-53dd5.web.app/)
##### * Only UI part works, booking system should be worked on json-server

## Features
- Vue 2
- Vue-CLI
- vue-router
- vuex
- Firebase
- Element UI
- axios + vue-axios
- dayjs
- json-server
- lodash
- lozad
- shortid
- v-calender
- vee-validate
- vue-flux
- vuex-persistedstate

## Quick start
#### 1. Clone repository to get the latest version
```shell
git clone https://github.com/trnet4334/vue-hotel.git
cd vue-hotel
```
#### 2. Install npm packages
```shell
npm install
```
#### 3. Modify firebase config
- Create a new project from firebase console, copy your unique firebase config and paste into firebase.example.js
- Rename firebase.example.js to firebase.js

#### 4. Run mock
- Run on local environment
```shell
firebase emulators:start
```
- Deploy on firebase
```shell
firebase init
```
```
firebase deploy
```

## TODO
- Refactor vuex structure
- Build booking management system (maybe)
- Add few more features page
- Refactor style folder, decrease css code line
- Image animation, loading animation
- etc.

## Contribute
Contributions are always welcome!

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
