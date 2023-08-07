import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../components/LangContext.jsx';
import ScrollComp from '../components/ScrollComp.jsx';
import text from '../text.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './MicroInteractions.module.css';
import { motion } from 'framer-motion';
import fundwave from '../assets/Fundwave.png';
import artenum from '../assets/Artenum.jpg';
import arb from '../assets/Arb.jpeg';
import meta from '../assets/Meta.jpeg';

function rays () {
  if(window.location.pathname === '/microInteractions') {
    let background = document.getElementById('animatedBg');
    let ray = document.createElement('div');
    let wid = Math.random() * 20;
    let heig = wid * 20;
    let x = Math.random() * 80;
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

export default function MicroInteractions() {
  const { language, isInter, setInter } = useContext(LanguageContext);
  const images = [fundwave, artenum, arb, meta];

  useEffect(() => {
    if(!isInter) {
      setInterval(rays, 2000);
      setInter(true);
    }
  }, [isInter]);

  const toggleCard = (e) => {
    const element = e.currentTarget;
    if (element.classList.contains(styles.active)) {
      element.classList.remove(styles.active);
      element.classList.add(styles.deactive);
    }
    else {
      element.classList.remove(styles.deactive);
      element.classList.add(styles.active);
    }
  };

  return (
    <>
      <div id='animatedBg' className={styles.background} />
      <div className="whitespace" />
      <div className={styles.contenedor}>
        <h1 className={styles.name}>Juan José Farina</h1>
        <h2 className={styles.title}>{text[language]['title']}</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className={styles.arrows}
        >
          <svg className={styles.arrowDown} width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M 12 0 L 12 24" stroke="#eeeeee" fill="none" />
            <path d="M 12 24 L 6 16 M 12 24 L 18 16" stroke="#eeeeee" fill="none" />
          </svg>
        </motion.div>
      </div>
      <div className="whitespace" />
      <div className="whitespace" />
      <ScrollComp
        variants={{
          hidden: { opacity: 0, transform: 'scale(0)' },
          visible: { opacity: 1, transform: 'scale(1.5)', transition: { duration: 1 } }
        }}
      >
        <p className={styles.hero}>
          {text[language]['proposition']}
        </p>
      </ScrollComp>
      <div className="whitespace" />
      <div className="whitespace" />
      <ScrollComp
        variants={{
          hidden: { opacity: 0, transform: 'scale(0.5)', translate: '-500px 0px' },
          visible: { opacity: 1, transform: 'scale(1)', translate: '0px 0px', transition: { duration: 1 } }
        }}
      >
        <h2 className={styles.heading}>{text[language]['sections'][0]['title']}</h2>
        <div className={styles.card} onClick={toggleCard}>
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
      </ScrollComp>
      <div className="whitespace" />
      <div className="whitespace" />
      <ScrollComp
        variants={{
          hidden: { opacity: 0, transform: 'scale(0.5)', translate: '500px 0px' },
          visible: { opacity: 1, transform: 'scale(1)', translate: '0px 0px', transition: { duration: 1 } }
        }}
      >
        <h2 className={styles.heading}>{text[language]['sections'][1]['title']}</h2>
        <div className={styles.card} onClick={toggleCard}>
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
      </ScrollComp>
      <div className="whitespace" />
      <div className="whitespace" />
      <ScrollComp
        variants={{
          hidden: { opacity: 0, transform: 'scale(0.5)', translate: '-500px 0px' },
          visible: { opacity: 1, transform: 'scale(1)', translate: '0px 0px', transition: { duration: 1 } }
        }}
      >
        <h2 className={styles.heading}>{text[language]['sections'][2]['title']}</h2>
        <div className={styles.card} onClick={toggleCard}>
          {
            text[language]['sections'][2]['projects'].map((element, index) => {
              return (
                <>
                  <h6>{element['title']}</h6>
                  <div style={{width:'70%'}}>{element['text']}</div>
                  <img src={images[index]} alt={element['title']} />
                </>
              )
            })
          }
        </div>
      </ScrollComp>
      <div className="whitespace" />
      <div className="whitespace" />
      <ScrollComp
        variants={{
          hidden: { opacity: 0, transform: 'scale(0.5)', translate: '500px 0px' },
          visible: { opacity: 1, transform: 'scale(1)', translate: '0px 0px', transition: { duration: 1 } }
        }}
      >
        <h2 className={styles.heading}>{text[language]['sections'][3]['title']}</h2>
        <div className={styles.contact} onClick={toggleCard}>
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
      </ScrollComp>
      <div className="whitespace" />
      <div className="whitespace" />
    </>
  )
}