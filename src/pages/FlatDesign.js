import React, { useContext } from 'react';
import { LanguageContext } from '../components/LangContext.js';
import styles from './FlatDesign.module.css';
import text from '../text.json';

export default function FlatDesign() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <div className={styles.background} />
      <div className="whitespace" />
      <div>
        <div className={styles.contenedor}>
          <div className={styles.hero} />
          <h1 className={styles.title}>Juan José Farina</h1>
          <h2 className={styles.subtitle}>{text[language]['title']}</h2>
          <div className={styles.arrows}>
            <svg className={styles.arrowDown} width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M 12 0 L 12 24" stroke="black" fill="none" />
              <path d="M 12 24 L 6 16 M 12 24 L 18 16" stroke="black" fill="none" />
            </svg>
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
        <div className={styles.bg} style={{gridRow: '2 / span 1', marginBottom:'20px'}}>
          <h6>{text[language]['sections'][2]['projects'][0]['title']}</h6>
          <p>{text[language]['sections'][2]['projects'][0]['text']}</p>
          <img className={styles.projImg} alt="Inicio de Arte Numerológico" />
        </div>
        <div className={styles.bg} style={{gridRow: "3 / span 1", marginBottom:'20px'}}>
          <h6>{text[language]['sections'][2]['projects'][1]['title']}</h6>
          {text[language]['sections'][2]['projects'][1]['text']}
        </div>
        <div className={styles.bg} style={{gridRow: "4 / span 1", marginBottom:'20px'}}>
          <h6>{text[language]['sections'][2]['projects'][2]['title']}</h6>
          {text[language]['sections'][2]['projects'][2]['text']}
        </div>
        <div className={styles.bg} style={{gridRow: "5 / span 1", marginBottom:'20px'}}>
          <h6>{text[language]['sections'][2]['projects'][3]['title']}</h6>
          {text[language]['sections'][2]['projects'][3]['text']}
        </div>
        <div className={styles.bg} style={{gridRow: "6 / span 1", marginBottom:'20px'}}>
          <h6>{text[language]['sections'][2]['projects'][4]['title']}</h6>
          {text[language]['sections'][2]['projects'][4]['text']}
        </div>
        <div className={styles.bg} style={{gridRow: "7 / span 1", marginBottom:'20px'}}>
          <h6>{text[language]['sections'][2]['projects'][5]['title']}</h6>
          {text[language]['sections'][2]['projects'][5]['text']}
        </div>
      </div>
      <div className="whitespace" />
      <div className="whitespace" />
      <div className={styles.contenedor}>
        <h2 className={styles.contInf}>{text[language]['sections'][3]['title']}</h2>
        <div className={styles.bg}>
          <p>Linkedin</p><hr />
          <p>Github</p><hr />
          <p>Gmail</p>
        </div>
      </div>
      <div className="whitespace" />
      <div className="whitespace" />
    </>
  )
}