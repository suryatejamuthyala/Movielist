import React,{useState,createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props =>{
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
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}