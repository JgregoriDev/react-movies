import React from 'react'; // get the React object from the react module
import arrayMovies from "../assets/data/movies.json";
import Card from './Card';
export default function ListMovies({title}) {
    return (
            <div className="row ">
                <h1>{title}</h1>
                {arrayMovies.map(movie => (
                   <Card id={movie.id} original_title={movie.original_title} 
                   backdrop_path={movie.backdrop_path} vote_average={movie.vote_average}>
                    </Card>

                ))}
            </div>
    )
};
