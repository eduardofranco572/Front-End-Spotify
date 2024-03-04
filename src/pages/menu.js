import React, { useState, useRef, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import '../css/global.css'
import '../css/musicasSalvas.css'
import '../css/container.css'
import '../css/fonts.css'
import '../css/footer.css'

import { GoHome } from "react-icons/go"
import { IoIosSearch } from "react-icons/io"
import { VscLibrary } from "react-icons/vsc"
import { FaPlus } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"
import { RxHamburgerMenu } from "react-icons/rx"

import HomePage from './home'

import Salvos from "./salvos"

const Menu = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startWidth, setStartWidth] = useState(200);
  const block1Ref = useRef();

  const handleMouseDown = (e) => {
    setIsResizing(true);
    setStartX(e.pageX);
    setStartWidth(block1Ref.current.offsetWidth);
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const newWidth = startWidth + (e.pageX - startX);
      const minWidth = 280;
      const finalWidth = Math.max(minWidth, newWidth);
      block1Ref.current.style.width = `${finalWidth}px`;
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, handleMouseMove, handleMouseUp]);


  return (
    <div  
      ref={block1Ref}
      className={`block1 ${isResizing ? 'resizing' : ''}`}
    >
      <div className="menu">
        <div className="home">
          <span className="iconeh"><GoHome /></span>
          <button className="buttonInicio">
            <Link to={`/home`}><h1 className="titulo">Início</h1></Link>
          </button>
          <Routes>
            <Route path='/home' element={<HomePage/>}/>
          </Routes>
        </div>
        <div className="pesquisa">
          <span className="iconeh"><IoIosSearch /></span>
          <h1 className="titulo">Buscar</h1>
        </div>
      </div>
      <div className="resizer" onMouseDown={handleMouseDown}></div>
      <div className="part2">
        <div className="minhasmusicas">
          <div className="info">
            <div className="alinhainfo">
              <span className="iconeh"><VscLibrary /></span>
              <h1 className="titulo2">Sua Biblioteca</h1>
            </div> 
          </div>
          <div className="links">
            <button><FaPlus /></button>
            <button><FaArrowRight /></button>
          </div>
        </div>
        <div className="tags">
          <h1>Playlists</h1>
          <h1>Artistas</h1>
          <h1>Álbuns</h1>
        </div>
        <div className="scrollpart">
          <div className="pesquisaMin">
            <div className="inputpesq">
              <span className="iconeh"><IoIosSearch /></span>
            </div>
            <div className="OpRecentes">
              <h1>Recentes</h1>
              <span className="iconeh"><RxHamburgerMenu /></span>
            </div>
          </div>
          <div className="cardsSalvos">
            <Salvos/>
          </div>
        </div>
      </div>
     
    </div>
  );
} 

export default Menu;
