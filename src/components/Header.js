import React, { useContext } from 'react';
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
        <li>{text[language]['header'][0]}</li>
        <li>{text[language]['header'][1]}</li>
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