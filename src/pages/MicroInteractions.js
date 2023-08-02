import React, { useContext } from 'react';
import { LanguageContext } from '../components/LangContext.js';
import text from '../text.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './MicroInteractions.module.css';

function rays () {
  if(window.location.pathname === '/microInteractions') {
    let background = document.getElementById('animatedBg');
    let ray = document.createElement('div');
    let wid = Math.random() * 20;
    let heig = wid * 20;
    let x = Math.random() * 90;
    let y = Math.random() * 50;
    ray.style.width = wid + 'px';
    ray.style.height = heig + 'px';
    ray.style.left = (x + 10) + 'vw';
    ray.style.bottom = (y - 20) + 'vh';
    ray.className = styles.backRay;
    background.appendChild(ray);
    setTimeout(() => {
      background.removeChild(ray);
    }, 20000);
  }
}

setInterval(rays, 1000);

export default function MicroInteractions() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <div className={styles.background} />
      <div id='animatedBg' className={styles.animatedBg} />
      <div className="whitespace" />
      <div>
        <div className={styles.contenedor}>
          <h1 className={styles.name}>Juan José Farina</h1>
          <h2 className={styles.title}>{text[language]['title']}</h2>
          <div className={styles.arrows}>
            <svg className={styles.arrowDown} width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M 12 0 L 12 24" stroke="black" fill="none" />
              <path d="M 12 24 L 6 16 M 12 24 L 18 16" stroke="black" fill="none" />
            </svg>
          </div>
        </div>
      </div>
      <div className="whitespace" />
      <div className="whitespace" />
      <div className={styles.contenedor}>
        <h2 className={styles.heading}>{text[language]['sections'][0]['title']}</h2>
        <div className={styles.bg}>
          <p>{text[language]['sections'][0]['text'][0]}</p><hr />
          <p>{text[language]['sections'][0]['text'][1]}</p><hr />
          <p>{text[language]['sections'][0]['text'][2]}</p>
        </div>
      </div>
      <div className="whitespace" />
      <div className="whitespace" />
      <div className={styles.contenedor}>
        <h2 className={styles.heading}>{text[language]['sections'][1]['title']}</h2>
        <div className={styles.bg}>
          <p>{text[language]['sections'][1]['text'][0]}</p><hr />
          <p>{text[language]['sections'][1]['text'][1]}</p><hr />
          <p>{text[language]['sections'][1]['text'][2]}</p><hr />
          <p>{text[language]['sections'][1]['text'][3]}</p><hr />
          <p>{text[language]['sections'][1]['text'][4]}</p>
        </div>
      </div>
      <div className="whitespace" />
      <div className="whitespace" />
      <div className={styles.contenedor}>
        <div className={styles.contProj}>
          <h2 className={styles.projHead}>{text[language]['sections'][2]['title']}</h2>
        </div>
        <div className={styles.bg} style={{gridRow: '2 / span 1', marginBottom:'100px'}}>
          <h6>{text[language]['sections'][2]['projects'][0]['title']}</h6>
          <div style={{width:'70%'}}>{text[language]['sections'][2]['projects'][0]['text']}</div>
          <img className={styles.projImg} alt="Inicio de Arte Numerológico" />
        </div>
        <div className={styles.bg} style={{gridRow: "3 / span 1", marginBottom:'100px'}}>
          <h6>{text[language]['sections'][2]['projects'][1]['title']}</h6>
          <div style={{width:'70%'}}>{text[language]['sections'][2]['projects'][1]['text']}</div>
          <img className={styles.projImg} alt="Inicio de Academia Rosario Ballet" />
        </div>
        <div className={styles.bg} style={{gridRow: "4 / span 1", marginBottom:'100px'}}>
          <h6>{text[language]['sections'][2]['projects'][2]['title']}</h6>
          <div style={{width:'70%'}}>{text[language]['sections'][2]['projects'][2]['text']}</div>
          <img className={styles.projImg} alt="Replit" />
        </div>
        <div className={styles.bg} style={{gridRow: "5 / span 1", marginBottom:'100px'}}>
          <h6>{text[language]['sections'][2]['projects'][3]['title']}</h6>
          <div style={{width:'70%'}}>{text[language]['sections'][2]['projects'][3]['text']}</div>
          <img className={styles.projImg} alt="Proyecto de Meta" />
        </div>
        <div className={styles.bg} style={{gridRow: "6 / span 1", marginBottom:'100px'}}>
          <h6>{text[language]['sections'][2]['projects'][4]['title']}</h6>
          <div style={{width:'70%'}}>{text[language]['sections'][2]['projects'][4]['text']}</div>
          <img className={styles.projImg} alt="Codepen" />
        </div>
        <div className={styles.bg} style={{gridRow: "7 / span 1"}}>
          <h6>{text[language]['sections'][2]['projects'][5]['title']}</h6>
          <div style={{width:'70%'}}>{text[language]['sections'][2]['projects'][5]['text']}</div>
          <img className={styles.projImg} alt="Proyectos viejos" />
        </div>
      </div>
      <div className="whitespace" />
      <div className="whitespace" />
      <div className={styles.contenedor}>
        <h2 className={styles.contInf}>{text[language]['sections'][3]['title']}</h2>
        <div className={styles.bg} style={{display:'flex', justifyContent:'space-around'}}>
          <a href="https://linkedin.com/in/juanjosefarina" target="_blank" rel="noopener noreferrer" title="https://linkedin.com/in/juanjosefarina">
            <FontAwesomeIcon icon={faLinkedin} className={styles.icons} />
          </a>
          <a href="https://github.com/juanjfarina" target="_blank" rel="noopener noreferrer" title="https://github.com/juanjfarina">
            <FontAwesomeIcon icon={faGithubSquare} className={styles.icons} />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=juanjosefarina.jjf@gmail.com" target="_blank" rel="noopener noreferrer" title="juanjosefarina.jjf@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className={styles.icons} />
          </a>
        </div>
      </div>
      <div className="whitespace" />
      <div className="whitespace" />
    </>
  )
}