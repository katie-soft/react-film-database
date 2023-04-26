import React from "react";
import { FilmCard } from './FilmCard';

function FilmList(props) {

    const { filmData = [] } = props;

    return (
        <div className="film-list">
            {filmData.length ? (
                filmData.map((listItem) => 
                    <FilmCard key={listItem.imdbID} {...listItem} />)
                ) : (
                <h4>No results found...</h4>
            )}
        </div>
    );
};

export { FilmList }
