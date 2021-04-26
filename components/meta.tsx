const url = process.env.URL
const twitterHandle = '@O_Super_Gregory'

export default function Meta({
  title,
  image = '/favicon.png',
  description,
  path,
  largeImage = false,
}) {
  const cardType = image ? (largeImage ? 'summary_large_image' : 'summary') : 'player'
  return (
    <>
      <title>greg - {title}</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:card" content={cardType} />
      <meta name="twitter:image" content={url + image} />
      <meta name="og:title" content={title} />
      {description && <meta name="og:description" content={description} />}
      <meta property="og:image" content={url + image} />
      <meta property="og:url" content={`${url}/${path}`} />
      <meta property="og:type" content="article" />
    </>
  )
}
