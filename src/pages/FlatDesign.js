import React, { useContext } from 'react';
import { LanguageContext } from '../components/LangContext.js';
import styles from './FlatDesign.module.css';
import text from '../text.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import fundwave from '../assets/Fundwave.png';
import artenum from '../assets/Artenum.jpg';
import arb from '../assets/Arb.jpeg';
import meta from '../assets/Meta.jpeg';

export default function FlatDesign() {
  const { language } = useContext(LanguageContext);
  const images = [fundwave, artenum, arb, meta];
  return (
    <>
      <div className={styles.background} />
      <div className="whitespace" />
      <div>
        <div className={styles.contenedor}>
          <div className={styles.hero} />
          <h1 className={styles.title}>Juan José Farina</h1>
          <h2 className={styles.subtitle}>{text[language]['title']}</h2>
          <p className={styles.proposition}>{text[language]['proposition']}</p>
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
          {
            text[language]['sections'][0]['text'].map((element, index) => {
              const isLastText = index === text[language]['sections'][0]['text'].length - 1;
              return (
                <>
                  <p>{element}</p>
                  {isLastText ? null : <hr />}
                </>
              )
            })
          }
        </div>
      </div>
      <div className="whitespace" />
      <div className="whitespace" />
      <div className={styles.contenedor}>
        <h2 className={styles.heading}>{text[language]['sections'][1]['title']}</h2>
        <div className={styles.bg}>
          {
            text[language]['sections'][1]['text'].map((element, index) => {
              const isLastText = index === text[language]['sections'][1]['text'].length - 1;
              return (
                <>
                  <p>{element}</p>
                  {isLastText ? null : <hr />}
                </>
              );
            })
          }
        </div>
      </div>
      <div className="whitespace" />
      <div className="whitespace" />
      <div className={styles.contenedor}>
        <div className={styles.contProj}>
          <h2 className={styles.projHead}>{text[language]['sections'][2]['title']}</h2>
        </div>
        {
          text[language]['sections'][2]['projects'].map((element, index) => {
            const gridRowValue = `${index + 2} / span 1`;
            return (
              <div className={styles.bg} style={{gridRow: gridRowValue, marginBottom:'100px'}}>
                <h6>{element['title']}</h6>
                <div style={{width:'70%'}}>{element['text']}</div>
                <img className={styles.projImg} src={images[index]} alt={element['title']} />
              </div>
            )
          })
        }
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
          <a href={language === 'english' ? 
              'https://docs.google.com/document/d/15zYYc_d1gcCBmfVd-C04rti5hQeozUA5MVOWW5wIuFg/edit?usp=sharing' : 
              'https://docs.google.com/document/d/1W3cvFpT9G2dwXy2f-hM9F3jNWCHuNo3N5vVbtPI_h9E/edit?usp=sharing'
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.cv}>CV</div>
          </a>
        </div>
      </div>
      <div className="whitespace" />
      <div className="whitespace" />
    </>
  )
}