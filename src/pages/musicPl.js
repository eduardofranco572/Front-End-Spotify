import React, { useEffect, useState } from 'react';
import '../css/global.css';
import '../css/fonts.css';
import '../css/playlist.css';
import '../css/container.css';

import ImgIcone from '../images/music-icon.jpg'

import { FaHeart } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";

const MusicPl = () => {
  const quantidade = 8;
  const music = [];

  //api
    const [musicas, setMusicas] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/musicas')
        .then(response => response.json())
        .then(data => setMusicas(data))
        .catch(error => console.error('Erro ao obter dados de músicas:', error));
    }, []);
  //
    
  return (
    <div className="containerCardsMusic">
      {musicas.map((musica, index) => (
        <div className='card1Cmp gridc'>
          <div className='imgCcmp'>
          <div className="numero">
              <p>{index + 1}</p>
          </div>
          <img src={`/upload/${musica.img}.jpg`} alt={`Icone ${index}`}  />
          <div className='textCcmp'>
            <h1>{musica.nome}</h1>
            <p>{musica.artista}</p>
          </div>
          </div>
          <div className='componentesCmp'>
          <p>Name Álbum</p>
          </div>
          <div className='componentesCmp'>
          <p>há <span id='data'>2</span> dia</p>
          </div>
          <div className='optCcmp'>
          <div className='inv'><p className='iconeHeart'><FaHeart /></p></div>
          <div><p id='timeMusic'>2:49</p></div>
          <div className='inv'><p><SlOptions /></p></div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default MusicPl;
