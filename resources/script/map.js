const map = L.map('map').setView([41.480492405593466, -71.31096111763853], 16);
const accessToken = process.env.ACCESS_TOKEN;


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: accessToken
}).addTo(map);

const myIcon = L.icon({
    iconUrl: './resources/assets/icon-location.svg',

    iconSize:     [66, 88],
    iconAnchor:   [44, 66],
});

L.marker([41.480492405593466, -71.31096111763853], {icon: myIcon}).addTo(map);

L.control.scale().addTo(map);

map.zoomControl.setPosition('bottomright');
