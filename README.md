# Pump weather (pet project)

Hello, everyone.
This is my [React](https://react.dev/)  ![react](./public/react-icon.png) pet project Weather site.

## Description

It is designed to monitor the weather in different places.
The project is assembled on [Vite](https://vitejs.dev/) ver.^4.3.0 ![vite](./public/vite-icon.svg) 

## Installation

Use the package manager npm 

```bash
npm install
```
or yarn

```bash
yarn install
```
I use "npm", so further commands will be through "npm", but you can also use "yarn"

start project

```bash
npm run dev
```

the project is launched on port 8888
but this can be changed in the vite.config.js file in the object 
server: {
    open: './',
    port: 8888,
  }


after saving any changes to the project, the server restarts to see the changes on the live page,


after pushing changes to GitHub, automatically build the page to gh-pages

## Technologies used

    "axios": "^1.3.6",
    "gh-pages": "^5.0.0",
    "lodash.debounce": "^4.0.8",
    "moment-timezone": "^0.5.43",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-dropdown": "^1.11.0",
    "react-hook-form": "^7.43.9",
    "react-router-dom": "^6.10.0",
    "styled-components": "^5.3.9",
    "suncalc": "^1.9.0"

## API service 

To download weather data
[openweathermap](https://openweathermap.org/)

To take the ip address to download the local (approximate) weather where the user is located 
[ipapi](https://ipapi.co)

To find the location of the place that the user entered to search for weather 
[geoapify](https://geoapify.com/)

To take sun position data 
[sunrise-sunset](https://sunrise-sunset.org/)
