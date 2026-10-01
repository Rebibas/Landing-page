import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <header>
      <div class="cabecalho">
        <h1>DESI 2026/1 V1</h1>
        <div class="links_linha">
          <a href="#Inicio" className="links">Início</a>
          <a href="#Sobre" className="links">Sobre</a>
          <a href="#Tecnologias" className="links">Tecnologias</a>
          <a href="#Mercado" className="links">Mercado</a>
          <a href="Projetos" className="links">Projetos</a>
        </div>
      </div>
    </header>
    <section id='Inicio'>
    <div className="hero">
      <div class="texto">
      <h1>Técnico em </h1>
      <h2>Desenvolvimento de Sistemas</h2>
      <div class="p">
      <p>Transforme ideias em sistemas.
      Desenvolva soluções, aprenda novas tecnologias e construa seu futuro na área de TI.</p>
      </div>
      <a href="Projetos" className="links">Projetos</a>
      </div>
    </div>
    </section>
    

    </>
  )
}

export default App
