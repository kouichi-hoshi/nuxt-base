export { preLoadImages as default }
/**
 * 画像プレロード
 * @param {Array} images 画像のURL
 */
function preLoadImages(images) {
  for (let i = 0; i < images.length; i++) {
    const img = document.createElement('img')
    img.src = images[i]
  }
}
