import { Link } from 'react-router-dom'

export default function ComicList({comics}) {

  const renderComics = () => {
    return comics.map(c => <Link to={`/comics/${c.title.toLowerCase().replace(/[ ]/g, '-')}`}>{c.title}</Link>)
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
