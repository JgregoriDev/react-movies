import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export default function Carta({ key,id, original_title,  vote_average, backdrop_path }) {
    return (
        <div key={`k${id}`} className={`col-4 my-2`}>
            <Card >
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`} />
                <Card.Body>
                    <Card.Title>Title: {original_title}</Card.Title>
                    <p>Puntuation: <span className='text-danger'>{vote_average}</span></p>
                    <Link to={{ pathname: `/movies/${id}` }}
                        className='btn btn-primary' state={{ test: "test" }} >
                       <i class="bi bi-info"></i> More about this movie
                    </Link>
                    {/* <Route name="MovieShow" path="/:movie.id" className='btn btn-primary' /> */}
                </Card.Body>
            </Card>
        </div>
    )
};
