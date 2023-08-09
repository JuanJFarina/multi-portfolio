import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { LanguageContext } from '../components/LangContext.jsx';
import styles from './Minimalism.module.css';
import text from '../text.json';
import fundwave from '../assets/Fundwave.png';
import artenum from '../assets/Artenum.jpg';
import arb from '../assets/Arb.jpeg';
import meta from '../assets/Meta.jpeg';

export default function Minimalism() {
  const { language } = useContext(LanguageContext);
  const images = [fundwave, artenum, arb, meta];
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
            <p className={styles.proposition}>{text[language]['proposition']}</p>
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
            {
              text[language]['sections'][0]['text'].map(element => {
                return (
                  <p className={styles.about}>{element}</p>
                )
              })
            }
            <div className="whitespace" />
            <div className="whitespace" />
            <h2 className={styles.subtitle}>{text[language]['sections'][1]['title']}</h2>
            <ul>
              {
                text[language]['sections'][1]['text'].map(element => {
                  return (
                    <li>{element}</li>
                  )
                })
              }
            </ul>
            <div className="whitespace" />
            <div className="whitespace" />
            <h2 className={styles.subtitle}>{text[language]['sections'][2]['title']}</h2>
            {
              text[language]['sections'][2]['projects'].map((element, index) => {
                return (
                  <details>
                    <summary>{element['title']}</summary>
                      <div className={styles.projectDetails}>
                        <div>{element['text']}</div>
                        <img src={images[index]} alt={element['title']} />
                      </div>
                  </details>
                )
              })
            }
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
              <li>
                <a href={language === 'english' ? 
                    'https://docs.google.com/document/d/15zYYc_d1gcCBmfVd-C04rti5hQeozUA5MVOWW5wIuFg' : 
                    'https://docs.google.com/document/d/1t0XsHuD0eFICOpTSdF-RpfdonKiLfLnz1B_bdWJqc1s'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.cv}>CV</span>
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