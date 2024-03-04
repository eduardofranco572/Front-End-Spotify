import React, { useEffect, useState } from 'react';
import '../css/global.css';
import '../css/fonts.css';
import '../css/playlist.css';

import ImgIcone from '../images/music-icon.jpg';
import { FaPlay } from "react-icons/fa";

const Salvos = () => {
  const quantidade = 10;
  const cards = [];
  
  //api
    const [musicas, setMusicas] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/salvos')
        .then(response => response.json())
        .then(data => setMusicas(data))
        .catch(error => console.error('Erro ao obter dados de músicas:', error));
    }, []);
  //
  return (
    <main className="card1De">
      {musicas.map((musica, index) => (
        <div className="card1">
          <img className="icone" src={`/upload/${musica.img}.jpg`} alt={`Icone ${index}`}/>
          <div className="infoscard">
          <h1>{musica.nome}</h1>
            <p>{musica.artista}</p>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Salvos;

