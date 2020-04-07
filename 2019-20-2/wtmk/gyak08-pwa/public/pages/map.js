export function load() {
  let map = L.map("map").setView([47.5, 19], 13);
  let marker = L.marker([47.5, 19]).addTo(map);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  function handleLocationUpdate(position) {
    map.setView([position.coords.latitude, position.coords.longitude]);
    marker.setLatLng([position.coords.latitude, position.coords.longitude]);
  }

  navigator.geolocation.watchPosition(handleLocationUpdate);
}
