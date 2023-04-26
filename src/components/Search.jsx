import React from "react";

class Search extends React.Component {
  state = {
    searchStr: "",
    searchType: "all",
  };

  checkEnter = (event) => {
    if (event.key === "Enter") {
      this.startSearch();
    }
  };

  handleFilter = (event) => {
    this.setState({ searchType: event.target.dataset.type });
  };

  startSearch = () => {
    this.props.searchFilms(this.state.searchStr, this.state.searchType);
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            id="search_inline"
            type="search"
            className="validate"
            placeholder="Search..."
            value={this.state.searchStr}
            onChange={(event) => {
              this.setState({ searchStr: event.target.value });
            }}
            onKeyDown={this.checkEnter}
          />
          <button
            className="btn search-btn deep-orange accent-1"
            onClick={this.startSearch}
          >
            Search
          </button>
        </div>
        <div className="radio-buttons">
          <p>
            <label>
              <input
                className="with-gap"
                name="search-type"
                type="radio"
                data-type="all"
                onChange={this.handleFilter}
                checked={this.state.searchType === 'all'}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="search-type"
                type="radio"
                data-type="movie"
                onChange={this.handleFilter}
                checked={this.state.searchType === 'movie'}
              />
              <span>Movies</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="search-type"
                type="radio"
                data-type="series"
                onChange={this.handleFilter}
                checked={this.state.searchType === 'series'}
              />
              <span>Series</span>
            </label>
          </p>
        </div>
      </div>
    );
  }
}

export { Search };
