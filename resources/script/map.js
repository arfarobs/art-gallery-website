// Configuration
const MAP_CONTAINER_ID = 'map';
const INITIAL_VIEW = {
    lat: 41.480492405593466,
    lng: -71.31096111763853,
    zoom: 16
};
const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiYXJmYXJvYnMiLCJhIjoiY2wxMGhuNnJlMDU0ODNrcnprM2FieDYwZyJ9.shCLpqfyIUhfeZGaWoEghA";
const TILE_LAYER_CONFIG = {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_ACCESS_TOKEN
};
const ICON_CONFIG = {
    iconUrl: './resources/assets/icon-location.svg',
    iconSize: [66, 88],
    iconAnchor: [44, 66]
};

// Initialize the map
const map = L.map(MAP_CONTAINER_ID).setView([INITIAL_VIEW.lat, INITIAL_VIEW.lng], INITIAL_VIEW.zoom);

// Add tile layer to the map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', TILE_LAYER_CONFIG).addTo(map);

// Add custom marker to the map
const customIcon = L.icon(ICON_CONFIG);
L.marker([INITIAL_VIEW.lat, INITIAL_VIEW.lng], {icon: customIcon}).addTo(map);

// Add scale control to the map
L.control.scale().addTo(map);

// Set position of the zoom control
map.zoomControl.setPosition('bottomright');
