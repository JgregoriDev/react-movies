import { useParams } from 'react-router-dom'
import arrayMovies from "../assets/data/movies.json"
import Card from 'react-bootstrap/Card'
import {  Link } from 'react-router-dom'

function GetMovieArray() {
  const { id } = useParams();
  const movieFinded = arrayMovies.find(elem => {
    return elem.id === parseInt(id);
  });
  return movieFinded;
}

function ShowMovieInformation({title}) {
  const movieFinded = GetMovieArray();
  const date = new Date(movieFinded.release_date);

  const dateString = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  return (
    <div className='mt-2'>
      <h1>{title}</h1>
      <Card className='mt-2'>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movieFinded.backdrop_path}`} />
        <Card.Body>
          <Card.Title>Titul: {movieFinded.original_title}</Card.Title>
          <p><span className='fw-bold'>Puntuation: </span><span className='text-danger'>{movieFinded.vote_average}</span></p>
          <p><span className='fw-bold'>Date : </span>{dateString}</p>
          <p><span className='fw-bold'>Overview:</span> {movieFinded.overview}</p>
          <Link to="/"
            className='btn btn-primary' state={{ test: "test" }} >
           <i className="bi bi-house-door"></i> Home
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ShowMovieInformation;