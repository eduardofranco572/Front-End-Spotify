import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../css/global.css';
import '../css/fonts.css';
import '../css/playlist.css';
import '../css/container.css';
import PaginadaPlaylist from './paginaPlaylist';
import ImgIcone from '../images/music-icon.jpg';
import { FaPlay } from "react-icons/fa";



const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const CardsP2 = () => {

  const cardWidth = 250;
  const screenWidth = window.innerWidth; 
  const quantidade = Math.floor(screenWidth / cardWidth);

  const [focusedCard1, setFocusedCard] = React.useState(null);

  const handleHover = (index) => {
    setFocusedCard(index);
  };

  const handleLeave = () => {
    setFocusedCard(null);
  };

  //api
    const [musicas, setMusicas] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/playlist')
        .then(response => response.json())
        .then(data => {
          // Embaralhar a ordem das músicas
          const shuffledMusicas = shuffleArray(data);
          setMusicas(shuffledMusicas);
        })
        .catch(error => console.error('Erro ao obter dados de músicas:', error));
    }, []);
  //

  return (
    <main className="cardsP2">
      {musicas.map((musica, index) => (
        <div className="cardP2" key={index} onMouseEnter={() => handleHover(index)} onMouseLeave={handleLeave}>
          <div className="imgcardP">
            <img className="iconeP" src={`/upload/${musica.img}.jpg`} alt={`Icone ${index}`} />
          </div>
          <div className="alinhabuttoncard">
            <button className="buttonPlayCardGrande" style={{ display: focusedCard1 === index ? 'flex' : 'none' }}>
              <Link to={`/paginaplaylist/${musica.id}`} state={{ img: musica.img, nome: musica.nome }}><FaPlay /></Link>
            </button>
            <Routes>
              <Route path='/paginaplaylist/' element={<PaginadaPlaylist />} />
            </Routes>
          </div>
          <div className="textP">
            <h1>{musica.nome}</h1>
            <p>{musica.altor}</p>
          </div>
        </div>
      ))}
    </main>
  );
}

export default CardsP2;