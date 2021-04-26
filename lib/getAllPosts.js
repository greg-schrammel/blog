function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\.mdx$|\/index\.mdx$/, ''),
    module: r(fileName),
  }))
}

const sortPosts = (a, b) =>
  new Date(a.module.meta.date).getTime() > new Date(b.module.meta.date).getTime() ? -1 : 1

export default function getAllPostPreviews() {
  return importAll(require.context('pages/?preview', true, /\.mdx$/)).sort(sortPosts)
}
