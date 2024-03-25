import { useState } from 'react';
import NavBar from './components/navBar.js';
import Home from './views/home.js';
import Search from './views/search.js';
import Album from './views/album.js';
import Genre from './views/genre.js';
import Artist from './views/artist.js';

export default function App() {
    const [currentView, setCurrentView] = useState('Home');
    const changeView = (viewName) => { setCurrentView(viewName) };

    return (
        <>
            <NavBar changeView={changeView} />
            {currentView === 'Home' && <Home />}
            {currentView === 'Search' && <Search />}
            {currentView === 'Album' && <Album />}
            {currentView === 'Genre' && <Genre />}
            {currentView === 'Artist' && <Artist />}
        </>
    );
}
