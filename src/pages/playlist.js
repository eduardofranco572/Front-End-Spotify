import React, { useEffect, useState } from 'react';
import '../css/global.css';
import '../css/fonts.css';
import '../css/playlist.css';

import ImgIcone from '../images/music-icon.jpg';

import { FaPlay } from "react-icons/fa";

const PlaylistPage = () => {
  const quantidade = 6;
  const cards = [];

  const [focusedCard, setFocusedCard] = React.useState(null);

  const handleHover = (index) => {
    setFocusedCard(index);
  };

  const handleLeave = () => {
    setFocusedCard(null);
  };

  //api
  const [musicas, setMusicas] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/salvos')
        .then(response => response.json())
        .then(data => setMusicas(data.slice(0, quantidade)))
        .catch(error => console.error('Erro ao obter dados de músicas:', error));
    }, []);
  //

  return (
    <main className="cardsPlay">
    {musicas.map((musica, index) => (
      <div key={index} className="card1Play">
        <img className="iconePlay" src={`/upload/${musica.img}.jpg`} alt={`Icone ${index}`}  />
        <div
          className="infosPlay"
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={handleLeave}
        >
          <h1>{musica.nome}</h1>
          <button id="abrirdetalhes" className="buttonPlay" style={{ display: focusedCard === index ? 'flex' : 'none' }}>
            <FaPlay />
          </button>
        </div>
      </div>
    ))}
    </main>
  );
} 

export default PlaylistPage;