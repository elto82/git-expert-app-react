export const getGits = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=KC3nP75cRD0RDqnN8GPI7IJycDBCXfFb&q=${category}&limit=16`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  // console.log(data);

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  // console.log(gifs);
  return gifs;
};
