export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=1SnCAd24b8b8qH1ZU5HJlmi3y5A9YMEf&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    return gifs;
};
