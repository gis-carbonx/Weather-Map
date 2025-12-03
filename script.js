var map = L.map("map").setView([-2, 118], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
}).addTo(map);

var radarOpacity = 0.7;

var radarLayer = L.tileLayer(
    "https://tilecache.rainviewer.com/v2/radar/now/{z}/{x}/{y}/2/1_1.png",
    {
        tileSize: 256,
        opacity: radarOpacity,
        attribution: "Radar data © RainViewer"
    }
);

function showRadar() {
    radarLayer.addTo(map);
}

function hideRadar() {
    map.removeLayer(radarLayer);
}

function increaseOpacity() {
    radarOpacity = Math.min(1, radarOpacity + 0.1);
    radarLayer.setOpacity(radarOpacity);
}

function decreaseOpacity() {
    radarOpacity = Math.max(0, radarOpacity - 0.1);
    radarLayer.setOpacity(radarOpacity);
}
