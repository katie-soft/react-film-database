function Header() {
    return <nav className="header__nav deep-orange darken-3">
        <div className="nav-wrapper">
            <a href="!#" className="brand-logo">Movies</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="https://github.com/katie-soft/react-film-database">Repo</a></li>
            </ul>
        </div>
    </nav>
}

export { Header }