export { getLink as default }

function getLink(menuId) {
  /**
   * リンクIDを指定してリンクリストを作成する。
   * @param {Array} menuId 使用したいリンクーのid
   * @param {Object} links リンク情報オブジェクト
   */
  const result = []
  for (const id of menuId) {
    this.links.forEach((links) => {
      if (id === links.id) {
        result.push(links)
      }
    })
  }
  return result
}
