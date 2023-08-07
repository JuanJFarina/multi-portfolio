import React, { createContext, useState } from 'react';

// Create the LanguageContext
const LanguageContext = createContext();

// Create the LanguageProvider component
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('español');
  const [isInter, setIsInter] = useState(false);

  // Function to toggle the language
  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'english' ? 'español' : 'english');
  };

  const setInter = () => {
    setIsInter(true);
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isInter, setInter }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };