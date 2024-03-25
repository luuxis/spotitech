import nav from '../styles/modules/nav.module.css';

export default function NavBar({ changeView }) {
    return (
        <div className={nav.nav}>
            <div className={nav.logo} onClick={() => changeView('Home')}>
                <img src="/images/logo512.png" alt="logo" />
                <div className={nav.logoText}>My Spotify</div>
            </div>
            <div className={nav.boxNav}>
                <div className={`${nav.navBTN} ${nav.search}`} onClick={() => changeView('Search')}>Search</div>
                <div className={`${nav.navBTN} ${nav.albums}`} onClick={() => changeView('Album')}>Albums</div>
                <div className={`${nav.navBTN} ${nav.genres}`} onClick={() => changeView('Genre')}>Genres</div>
                <div className={`${nav.navBTN} ${nav.artists}`} onClick={() => changeView('Artist')}>Artists</div>
            </div>
        </div>
    );
}