const server = "http://webprogramming.inf.elte.hu:1337";

export async function getElevationData(lat, long, range) {
  // Send a request for a server (async)
  const response = await fetch(`${server}/geodata/${lat}/${long}/${range}`);
  const data = await response.json();

  return data;
}

export async function getAllElevationData() {
  // Send a request for a server (async)
  const response = await fetch(`${server}/geodata`);
  const data = await response.json();

  return data;
}

export async function getWaterData(lat, long, range) {
  // Send a request for a server (async)
  const response = await fetch(`${server}/waterdata/${lat}/${long}/${range}`);
  const data = await response.json();

  return data;
}

export async function getAllWaterData() {
  // Send a request for a server (async)
  const response = await fetch(`${server}/waterdata`);
  const data = await response.json();

  return data;
}