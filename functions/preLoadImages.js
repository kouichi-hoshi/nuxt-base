export { preLoadImages as default }
  function preLoadImages(images) {
  for (let i = 0; i < images.length; i++) {
    const img = document.createElement('img')
    img.src = images[i]
  }
}