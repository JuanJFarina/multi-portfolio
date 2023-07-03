import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { LanguageContext } from '../components/LangContext.js';
import styles from './Minimalism.module.css';
import text from '../text.json';

export default function Minimalism() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <div className={styles.background} />
      <div className="whitespace" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 col-sm-2" />
          <div className="col-10 col-sm-8">
            <h1 className={styles.title}>Juan José Farina</h1>
            <h2 className={styles.subtitle}>{text[language]['title']}</h2>
            <div style={{
              display:'flex',
              justifyContent: 'center'
              }}>
            <svg className={styles.arrowDown} width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M 12 0 L 12 24" stroke="black" fill="none" />
              <path d="M 12 24 L 6 16 M 12 24 L 18 16" stroke="black" fill="none" />
            </svg>
            </div>
            <div className="whitespace" />
            <div className="whitespace" />
            <h2 className={styles.subtitle}>{text[language]['sections'][0]['title']}</h2>
            <p>{text[language]['sections'][0]['text'][0]}</p>
            <p>{text[language]['sections'][0]['text'][1]}</p>
            <p>{text[language]['sections'][0]['text'][2]}</p>
            <div className="whitespace" />
            <div className="whitespace" />
            <h2 className={styles.subtitle}>{text[language]['sections'][1]['title']}</h2>
            <ul>
              <li>{text[language]['sections'][1]['text'][0]}</li>
              <li>{text[language]['sections'][1]['text'][1]}</li>
              <li>{text[language]['sections'][1]['text'][2]}</li>
              <li>{text[language]['sections'][1]['text'][3]}</li>
              <li>{text[language]['sections'][1]['text'][4]}</li>
            </ul>
            <div className="whitespace" />
            <div className="whitespace" />
            <h2 className={styles.subtitle}>{text[language]['sections'][2]['title']}</h2>
            <details>
              <summary>{text[language]['sections'][2]['projects'][0]['title']}</summary>
                <div className={styles.projectDetails}>
                  <div>{text[language]['sections'][2]['projects'][0]['text']}</div>
                  <img alt="Inicio de Arte Numerológico" />
                </div>
            </details>
            <details>
              <summary>{text[language]['sections'][2]['projects'][1]['title']}</summary>
                <div className={styles.projectDetails}>
                  <div>{text[language]['sections'][2]['projects'][1]['text']}</div>
                  <img alt="Inicio de Academia Rosario Ballet" />
                </div>
            </details>
            <details>
              <summary>{text[language]['sections'][2]['projects'][2]['title']}</summary>
                <div className={styles.projectDetails}>
                  <div>{text[language]['sections'][2]['projects'][2]['text']}</div>
                  <img alt="Página de Replit" />
                </div>
            </details>
            <details>
              <summary>{text[language]['sections'][2]['projects'][3]['title']}</summary>
                <div className={styles.projectDetails}>
                  <div>{text[language]['sections'][2]['projects'][3]['text']}</div>
                  <img alt="Inicio de Little Lemon" />
                </div>
            </details>
            <details>
              <summary>{text[language]['sections'][2]['projects'][4]['title']}</summary>
                <div className={styles.projectDetails}>
                  <div>{text[language]['sections'][2]['projects'][4]['text']}</div>
                  <img alt="Página de CodePen" />
                </div>
            </details>
            <details>
              <summary>{text[language]['sections'][2]['projects'][5]['title']}</summary>
                <div className={styles.projectDetails}>
                  <div>{text[language]['sections'][2]['projects'][5]['text']}</div>
                  <img alt="Inicio de mi antiguo portfolio" />
                </div>
            </details>
            <div className="whitespace" />
            <div className="whitespace" />
            <h2 className={styles.subtitle}>{text[language]['sections'][3]['title']}</h2>
            <ul className={styles.contactList}>
              <li>
                <a href="https://linkedin.com/in/juanjosefarina" target="_blank" rel="noopener noreferrer" title="https://linkedin.com/in/juanjosefarina">
                  <FontAwesomeIcon icon={faLinkedin} className={styles.fab} />
                </a>
              </li>
              <li>
                <a href="https://github.com/juanjfarina" target="_blank" rel="noopener noreferrer" title="https://github.com/juanjfarina">
                  <FontAwesomeIcon icon={faGithubSquare} className={styles.fab} />
                </a>
              </li>
              <li>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=juanjosefarina.jjf@gmail.com" target="_blank" rel="noopener noreferrer" title="juanjosefarina.jjf@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className={styles.fab} />
                </a>
              </li>
            </ul>
            <div className="whitespace" />
            <div className="whitespace" />
          </div>
          <div className="col-1 col-sm-2" />
        </div>
      </div>
    </>
  )
}