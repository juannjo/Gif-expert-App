const getGif = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=T18ONOQPPtM6u5aDAYPb3Gf0sKtNALNZ&q=${category}&limit=6`
    const res = await fetch(url)
    const { data } = await res.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs
}

export { getGif }