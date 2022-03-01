/**
 * TODO
 * @param {Array} array
 * @param {String} path
 * @returns
 */
export default function (array, path) {
  const urls = []
  for (let i = 0; i < array.length; i++) {
    urls.push(path + array[i])
  }
  return urls
}
