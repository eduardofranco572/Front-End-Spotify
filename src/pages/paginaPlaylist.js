import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import '../css/global.css';
import '../css/fonts.css';
import '../css/playlist.css';
import '../css/container.css';
import '../css/musicasSalvas.css';
import '../css/playPage.css';
import '../css/mobile.css'

import ImgIcone from '../images/music-icon.jpg';
import ImgIconePerfio from '../images/perfio.jpg';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowCircleDown } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { FaRandom } from "react-icons/fa";
import { FaForwardStep } from "react-icons/fa6"
import { SlLoop } from "react-icons/sl";
import { BsFilePlay } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import { MdTableRows } from "react-icons/md";
import { LuMonitorSpeaker } from "react-icons/lu";
import { IoMdVolumeHigh } from "react-icons/io";
import { CgMiniPlayer } from "react-icons/cg";
import { MdCloseFullscreen } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { SlOptions } from "react-icons/sl";
import { IoIosArrowUp } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import MusicPl from './musicPl';

import Menu from './menu';

const PaginadaPlaylist = () => {

  const [valorRange, setValorRange] = useState(50);
  
  const handleRangeChange = (event) => {
    setValorRange(event.target.value);
  };


  const location = useLocation();
  const { id } = useParams();

  const { img, nome } = location.state || {};

  const [isVisible, setIsVisible] = useState(false);

  const fecharDetalhes = () => {
    setIsVisible(false);
  };

  const abrirDetalhes = () => {
    setIsVisible(true);
  };

  //cor do fundo

  
  //

  return (
    <main className="tudo"> 
      <div className="conteudo">
        <Menu />
        <div className="container">
          <div className="backgrondInt backpagPl" id="mudacor">
            <div className="menucontainer">
              <div className="butonsT">
                <button><IoIosArrowBack /></button>
                <button><IoIosArrowForward /></button>
              </div>
              <div className="optionsT">
                <button className="planos">Ver Planos Premium</button>
                <button className="intalar"><span><FaArrowCircleDown /></span> Instalar aplicativo</button>
                <button className="notficacao"><GoBell /></button>
                <button className="perfio"><img src={ImgIconePerfio}/></button>
              </div>
            </div>
            <div className='detailsPlaylist'>
                <div className='imgmusicaPl'>
                  <img src={`/upload/${img}.jpg`} alt={`User`} />
                </div>
                <div className='infosPl'>
                    <p>Playlist</p>
                    <h1 id="diminuirTitulo">{nome}</h1>
                    <div className='userPl'>
                      <div className='imguserPl'>
                        <img src={ImgIconePerfio} alt={`User`} />
                      </div>
                      <p>Nome Usuário . <span>339 Músicas</span> </p>
                    </div>
                </div>
            </div>
            <div className='playmusic'>
              <button className="buttonplaymusic"><FaPlay /></button>
              <div className='listname'>
                <p>list</p>
                <TfiMenuAlt />
              </div>              
            </div>
            <div className='cardsMusicasdaPlaylist'>
              <div className='manuNavmusics gridc'>
                <div className='alinhaone'>
                    <p>#</p>
                    <p className='espacoMnm'>Título</p>
                </div>
                <div><p>Álbum</p></div>
                <div><p>Adicionada em</p></div>
                <div className='utm'><p><IoTimeOutline /></p></div>
              </div>
            </div>

            <MusicPl />
        
          </div>    
        </div>
        <div className='DetalhesdaMusica' style={{ display: isVisible ? 'block' : 'none' }}>
          <div className='menuDdm'>
            <h1>Musica Curtida</h1>
            <button onClick={fecharDetalhes}><IoMdClose /></button>
          </div>
          <div className='imgmusicDdm'>
            <img src={ImgIcone} alt={`imagem musica`} />
          </div>
          <div className='titlesMusicDdm'>
            <div className='textsDdm'>
              <h1>Musica Curtida</h1>
              <p>Nome1, Nome2</p>
            </div>
            <div className='iconsDdm'>
              <div className='iccoracao'><FaHeart /></div>
              <div className='icops'><SlOptions /></div>
            </div>
          </div>
          <div className='sobreDdm'>
            <div className='cardSobreDdm'>
              <div className='imgDdm'>
                <h1>Sobre o artista</h1>
              </div>
              <div className='infosatDdm'>
                <div className='textsifDdm'>
                  <h1>Nome1</h1>
                  <p>62.440 ouvintes mensais</p>
                  <p>Let's make it to #1 </p>
                </div>
                <div className='segir'>
                  <button>Seguir</button>
                </div>

              </div>

            </div>
            <div className='creditos'>

            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container-md">
          <div className="musicDetalhes">
            <div className="img-md">
              <img src={ImgIcone} alt={`Icone`} onClick={abrirDetalhes}  />
              <span onClick={abrirDetalhes} ><IoIosArrowUp /></span>
            </div>
            <div className="titles-md">
              <h1>Musica Curtida</h1>
              <p>Nome, Nome2, Nome3</p>
            </div>
            
            <button><IoIosHeartEmpty /></button>
            
          </div>
          <div className="play">
            <div className="icons-play">
              <button className="normal-ip"><FaRandom /></button>
              <button className="normal-ip rotar"><FaForwardStep /></button>
              <button className="meior-ip"><FaPlay /></button>
              <button className="normal-ip"><FaForwardStep /></button>
              <button className="normal-ip"><SlLoop /></button>
            </div>

            <div className="sond-md">
              <p>0:39</p>
              <div className="barra-play">
                <div className="barraDentro-play"></div>
              </div>
              <p>1:36</p>
            </div>
          </div>

          <div className="option-md">
            <button className="normal-op"><BsFilePlay /></button>
            <button className="normal-op"><TbMicrophone2 /></button>
            <button className="normal-op"><MdTableRows /></button>
            <button className="normal-op"><LuMonitorSpeaker /></button>
            <button className="normal-op"><IoMdVolumeHigh /></button>
            <input
              type="range"
              min="20"
              max="100"
              value={valorRange}
              onChange={handleRangeChange}
              style={{
                width: '5.8rem',
                height: '4px',
                borderRadius: '10px',
                background: `linear-gradient(to right, #1DB954 ${valorRange}%, gray ${valorRange}%)`,
                outline: 'none', 
              }}
            />
            <button className="normal-op"><CgMiniPlayer /></button>
            <button className="normal-op">< MdCloseFullscreen /></button>
          </div>
        </div>
        
      </footer> 
    </main>
  );
}

export default PaginadaPlaylist;
