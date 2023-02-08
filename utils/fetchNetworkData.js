async function fetchNetworkData(url) {
  const res = await fetch(url);
  if (res) return res.json();
  else return null;
}

export default fetchNetworkData;
