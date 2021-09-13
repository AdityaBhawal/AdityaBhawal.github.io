
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/adityabhawal/Desktop/adityabhawal.github.io/src/pages/404.js")),
  "component---src-pages-actionitem-js": preferDefault(require("/Users/adityabhawal/Desktop/adityabhawal.github.io/src/pages/actionitem.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/adityabhawal/Desktop/adityabhawal.github.io/src/pages/index.js"))
}

