import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from './LangContext.js';
import text from '../text.json';

export default function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const handleLanguageToggle = () => {
    toggleLanguage();
  };

  return (
    <header>
      <ul>
        <li>
          <Link to="/multi-portfolio" style={{ textDecoration: 'none', color: 'inherit' }}>{text[language]['header'][0]}</Link>
        </li>
        <li>
          <Link to="/flatDesign" style={{ textDecoration: 'none', color: 'inherit' }}>{text[language]['header'][1]}</Link>
        </li>
        <li>{text[language]['header'][2]}</li>
        <li>{text[language]['header'][3]}</li>
        <li className="switch-container">
          <input type="checkbox" id="language-switch" onChange={handleLanguageToggle} checked={language === 'english'} />
          <label htmlFor="language-switch"></label>
        </li>
      </ul>
    </header>
  )
}