export default function ComicList({comics}) {

  const renderComics = () => {
    return comics.map(c => <a href="#">{c.title}</a>)
  }

  return (

    <div id="comics-list">

      <div/>

      <h2>My Comics:</h2>

      <div/>

      {renderComics()}

    </div>

  )

}
