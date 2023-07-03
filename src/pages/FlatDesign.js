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
        <h2 className={styles.heading}>{text[language]['sections'][2]['title']}</h2>
        <div className={styles.bg}>
          <p>{text[language]['sections'][2]['projects'][0]['title']}: {text[language]['sections'][2]['projects'][0]['text']}</p><hr />
          <p>{text[language]['sections'][2]['projects'][1]['title']}: {text[language]['sections'][2]['projects'][1]['text']}</p><hr />
          <p>{text[language]['sections'][2]['projects'][2]['title']}: {text[language]['sections'][2]['projects'][2]['text']}</p><hr />
          <p>{text[language]['sections'][2]['projects'][3]['title']}: {text[language]['sections'][2]['projects'][3]['text']}</p><hr />
          <p>{text[language]['sections'][2]['projects'][4]['title']}: {text[language]['sections'][2]['projects'][4]['text']}</p><hr />
          <p>{text[language]['sections'][2]['projects'][5]['title']}: {text[language]['sections'][2]['projects'][5]['text']}</p>
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