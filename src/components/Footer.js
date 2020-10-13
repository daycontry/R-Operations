import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-investigation'>
        <p className='footer-investigation-heading'>
          Proyecto Investigacion de Operaciones
        </p>
        <p className='footer-Investigation-text'>
        Жизнь слишком коротка, чтобы любить тебя в одной, я обещаю искать тебя в другой жизни
        </p>
        <div className='input-areas'>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Acerca de</h2>
            <Link to='/'>Como funciona</Link>
            <Link to='/'>Objetivos</Link>
            <Link to='/'>Documentacion</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Comunidad</h2>
            <Link to='/'>Github</Link>
            <Link to='/'>Preguntas</Link>
            <Link to='/'>Colecciones</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Redes Sociales</h2>
            <a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer">Intagram</a>
            <a href='https://www.facebook.com/profile.php?id=100044725177225' target='_blank' rel="noopener noreferrer">Facebook</a>
            <a href='https://twitter.com/' target='_blank' rel="noopener noreferrer">Twitter</a>
          </div>
          <div class='footer-link-items'>
            <h2>Aprender</h2>
            <Link to='/'>Libros</Link>
            <Link to='/'>Videos</Link>
            <Link to='/'>Ejercicios</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              AddBros
            </Link>
          </div>
          <small class='website-rights'>AddBros Company 2020</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/profile.php?id=100044725177225'
              target='_blank'
              aria-label='Facebook'
              rel="noopener noreferrer"
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/'
              target='_blank'
              aria-label='Instagram'
              rel="noopener noreferrer"
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link github'
              href='https://github.com/'
              target='_blank'
              aria-label='Github'
              rel="noopener noreferrer"
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/'
              target='_blank'
              aria-label='Twitter'
              rel="noopener noreferrer"
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link linkedIn'
              href='https://www.linkedin.com/'
              target='_blank'
              aria-label='LinkedIn'
              rel="noopener noreferrer"
            >
              <i class='fab fa-linkedIn' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
