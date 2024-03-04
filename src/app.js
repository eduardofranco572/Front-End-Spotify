import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import PaginadaPlaylist from './pages/paginaPlaylist';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/paginaplaylist" element={<PaginadaPlaylist />} />
                <Route path="/home" element={<HomePage />} />
                <Route path='/paginaplaylist/:id' element={<PaginadaPlaylist />} />
            </Routes>
        </Router>
    );
};

export default App;
