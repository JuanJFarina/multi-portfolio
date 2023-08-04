import React, { useContext } from 'react';
import { LanguageContext } from '../components/LangContext.js';
import ScrollComp from '../components/ScrollComp.js';
import text from '../text.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './MicroInteractions.module.css';
import { motion } from 'framer-motion';

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
    ray.style.left = (x + 5) + 'vw';
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

  if(!isInter) {
    setInterval(rays, 2000);
    setInter();
  }

  return (
    <>
      <div className={styles.background} />
      <div id='animatedBg' className={styles.animatedBg} />
      <div className="whitespace" />
      <div>
        <div className={styles.contenedor}>
          <h1 className={styles.name}>Juan José Farina</h1>
          <h2 className={styles.title}>{text[language]['title']}</h2>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.5, duration: 1}}
            className={styles.arrows}
          >
            <svg className={styles.arrowDown} width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M 12 0 L 12 24" stroke="black" fill="none" />
              <path d="M 12 24 L 6 16 M 12 24 L 18 16" stroke="black" fill="none" />
            </svg>
          </motion.div>
        </div>
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
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 1 }}
        className={styles.contenedor}
      >
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
      </motion.div>
      <div className="whitespace" />
      <div className="whitespace" />
    </>
  )
}