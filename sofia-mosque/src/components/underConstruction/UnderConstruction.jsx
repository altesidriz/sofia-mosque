// components/UnderConstruction.jsx
import React from 'react';
import { useLang } from '../../context/LanguageContext';
import { FcHighPriority } from "react-icons/fc";

const UnderConstruction = () => {
  const { t } = useLang();

  return (
    <p style={{ fontSize: '1.8rem', textAlign: 'center', maxWidth: '800px', marginInline: 'auto', background:'black', color:'#ccc', padding: '15px' }}>
      <p><FcHighPriority size={45}/></p>
      {t('underConstruction')}
    </p>
  );
};

export default UnderConstruction;
