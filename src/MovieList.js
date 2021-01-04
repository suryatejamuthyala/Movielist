import React, {useState} from 'react';

const MovieList = () => {
    const [movies, setMovies] = useState([
            {
                name: 'Godzilla',
                price: '$10',
                id: 1234
            }, {
                name: 'Harry Potter',
                price: '$10',
                id: 5678
            }, {
                name: 'Jumanji',
                price: '$10',
                id: 91011
            }
        ]
    );
    return (
        <div>
            {movies.map(movies => (
                <li>{movies.name}</li>
            ))}
        </div>
    );
}
export default MovieList;

