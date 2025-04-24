import { createContext, useContext, useState } from "react";
import en from "../locales/en.json";
import bg from "../locales/bg.json";

const LanguageContext = createContext();

const translations = { en, bg };

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en"); // Default is EN

  const toggleLang = () => setLang(lang === "bg" ? "en" : "bg");

  const t = (key) => {
    const keys = key.split(".");
    return keys.reduce((obj, k) => obj?.[k], translations[lang]) || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
