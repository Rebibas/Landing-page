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
          <p>Transforme ideias em sistemas,
          desenvolva soluções, aprenda novas tecnologias e construa seu futuro na área de TI.</p>
        </div>
      </div>
      <div className="btnex">
        <a href="https://dg-among-project-17owggovw-rebibas-projects.vercel.app/" className="among">Clique aqui para acessar um projeto de um dos nossos estudantes</a>
      </div>
    </div>
    </section>
    <section id='Sobre'>
    <div className="separacao"></div>
    
      <div className="fundosobre">
        <div class="section-title">
          <span class="line"></span>
          <h2>SOBRE O CURSO</h2>
          <span class="line"></span>
        </div>
        <div className="quadrados">
        <div className="quadrado">
          <h1>O que é Desenvolvimento de Sistemas?</h1>
          <h2>O Desenvolvimento de Sistemas é uma área da tecnologia voltada à criação
             de soluções digitais. Ela envolve programação, bancos de dados, lógica e
              outras ferramentas utilizadas para transformar necessidades em sistemas,
               aplicativos e plataformas.</h2>
        </div>
        <div className="quadrado" >
          <h1>Qual o objetivo do curso?</h1>
          <h2>O curso Técnico em Desenvolvimento de Sistemas do SENAI busca preparar o
             aluno para atuar no mercado de tecnologia. Durante a formação, são desenvolvidas
             competências técnicas e práticas para analisar problemas, desenvolver soluções
             e trabalhar com diferentes tecnologias.</h2>
        </div>
        <div className="quadrado" >
          <h1>O que um profissional dessa área faz?</h1>
          <h2>No dia a dia, o profissional pode transformar uma ideia ou necessidade em uma
             solução funcional. Ele pode escrever códigos, trabalhar com bancos de dados,
              corrigir erros, realizar testes e acompanhar a evolução de sistemas, além de
               colaborar com outros profissionais em projetos de tecnologia.</h2>
        </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default App
