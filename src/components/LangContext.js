import React, { createContext, useState } from 'react';

// Create the LanguageContext
const LanguageContext = createContext();

// Create the LanguageProvider component
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('español');

  // Function to toggle the language
  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'english' ? 'español' : 'english');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };