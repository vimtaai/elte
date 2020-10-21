const server = "http://webprogramming.inf.elte.hu:1337/geodata";

export async function getData(lat, long, range) {
  // Send a request for a server (async)
  const response = await fetch(`${server}/${lat}/${long}/${range}`);
  const data = await response.json();

  return data;
}

export async function getAllData() {
  // Send a request for a server (async)
  const response = await fetch(`${server}`);
  const data = await response.json();

  return data;
}