async function fetchAPI(API_URL) {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default fetchAPI;
