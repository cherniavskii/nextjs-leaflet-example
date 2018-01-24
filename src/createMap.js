const { Map, tileLayer } = require('leaflet');

export default function createMap() {
    const map = new Map('map').setView([51.505, -0.09], 13);

    tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    return map;
}