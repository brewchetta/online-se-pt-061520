export default function ComicView({comic}) {

  return (

    <div className="comic-view">

      <h2>{comic.title}</h2>

      <h3>by {comic.authors}</h3>

      <img className="comic-view-image" src={comic.art_url} alt="uh oh something went wrong..." />

    </div>

  )

}
