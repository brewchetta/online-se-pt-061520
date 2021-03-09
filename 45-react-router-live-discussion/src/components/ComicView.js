export default function ComicView(props) {

  const title = props.match.params.title

  console.log(title)

  const foundComic = props.comics.find(comic => comic.title.toLowerCase().replace(/[ ]/g, "-") === title)

  console.log(foundComic)

  return (

    <div className="comic-view">

      {foundComic

        ?

      (<>
        <h2>{foundComic.title}</h2>

        <h3>by {foundComic.authors}</h3>

        <img className="comic-view-image" src={foundComic.art_url} alt="uh oh something went wrong..." />

      </>)

        :

      <p>404 comic not found</p>}


    </div>

  )

}
