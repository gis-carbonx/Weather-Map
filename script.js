var map = L.map("map").setView([-2, 118], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
}).addTo(map);

var weatherLayer = null;

function setLayer(type) {
    if (weatherLayer) {
        map.removeLayer(weatherLayer);
    }

    if (type === "precip") {
        weatherLayer = L.tileLayer(
            "https://tile.open-meteo.com/v1/precipitation/{z}/{x}/{y}",
            { attribution: "© Open-Meteo", opacity: 0.8 }
        ).addTo(map);
    }

    if (type === "clouds") {
        weatherLayer = L.tileLayer(
            "https://tile.open-meteo.com/v1/cloudcover_total/{z}/{x}/{y}",
            { attribution: "© Open-Meteo", opacity: 0.8 }
        ).addTo(map);
    }

    if (type === "temp") {
        weatherLayer = L.tileLayer(
            "https://tile.open-meteo.com/v1/temperature_2m/{z}/{x}/{y}",
            { attribution: "© Open-Meteo", opacity: 0.8 }
        ).addTo(map);
    }

    if (type === "none") {
        weatherLayer = null;
    }
}
