import React from "react";

function FilmCard(props) {
    const { Title, Year, imdbID, Type, Poster } = props;
    return <a href={`https://imdb.com/title/${imdbID}`}>
    <div id={imdbID} className="card">
        <div className="card-image waves-effect waves-block waves-light">
            {
                Poster === 'N/A' ?
                    <img className="activator" src={`https://via.placeholder.com/300x400?text=${Title}`} alt="N/A" /> :
                    <img className="activator" src={Poster} alt="Poster"/>
            }

        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{Title}</span>
            <div className="card-info-wrapper">
                <span className="film-year">{Year}</span>
                <span className="film-type">{Type}</span>
            </div>
        </div>
    </div>
    </a>
}

export { FilmCard };
