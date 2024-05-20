
let map = L.map('map').setView([50.90861061814837, 4.760298939128163], 14);

let osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
let osm = new L.TileLayer(osmUrl, {
    maxZoom: 18,
    subdomains: ['a', 'b', 'c']
});
osm.addTo(map);

const cafeIcon = L.icon({
    iconUrl: 'images/cafe-icon.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

const bookstoreIcon = L.icon({
    iconUrl: 'images/bookstore-icon.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

const cafeCoordinates = new L.LatLng(50.878821774109795, 4.6954757658607535); // Coordinates for a cafe
const bookstoreCoordinates = new L.LatLng(50.88093584664075, 4.701150333809971); // Coordinates for a bookstore

let map = L.map('map').setView([50.90861061814837, 4.760298939128163], 14);

let osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
let osm = new L.TileLayer(osmUrl, {
    maxZoom: 18,
    subdomains: ['a', 'b', 'c']
});
osm.addTo(map);

const cafeMarker = L.marker(cafeCoordinates, { icon: cafeIcon }).addTo(map);
cafeMarker.bindPopup("This is a café");

const bookstoreMarker = L.marker(bookstoreCoordinates, { icon: bookstoreIcon }).addTo(map);
bookstoreMarker.bindPopup("This is a bookstore");
