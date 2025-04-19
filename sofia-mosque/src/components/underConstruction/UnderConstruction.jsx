// components/UnderConstruction.jsx
import React from 'react';
import { useLang } from '../../context/LanguageContext';

const UnderConstruction = () => {
  const { t } = useLang();

  return (
    <p style={{ fontSize: '1.1rem', textAlign: 'center', marginTop: '2rem', maxWidth: '600px', marginInline: 'auto' }}>
      {t('underConstruction')}
    </p>
  );
};

export default UnderConstruction;
