import React from 'react';
import { FilmList } from '../components/FilmList';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

class Main extends React.Component {

    state = {
        films: [],
        loading: true,
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=dog`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({ films: data.Search, loading: false });
            })
            .catch((err) => {
                console.log('Error while fetching from API');
                this.setState({ loading: false });
            })
    }

    searchFilms = (searchQuery, searchType) => {
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}${searchType !== 'all' ? `&type=${searchType}` : ''}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({ films: data.Search, loading: false });
            })
            .catch((err) => {
                console.log('Error while fetching from API');
                this.setState({ loading: false });
            })
    }

    render() {
        const { films, loading } = this.state;
        return <main className="content container">
            <Search searchFilms={this.searchFilms}/>
            {loading ? (
                <Preloader />
            ) : (
                <FilmList filmData={films} />
            )
            }
        </main >
    }
}

export { Main }