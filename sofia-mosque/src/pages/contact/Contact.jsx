import React, { useEffect, useState } from 'react';
import { useLang } from '../../context/LanguageContext';
import styles from './contact.module.css';
import Loader from '../../components/loader/Loader';

const Contact = () => {
  const { t } = useLang();
  const [form, setForm] = useState({ email: '', message: '' });
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!iframeLoaded) {
        setIframeLoaded(true);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [iframeLoaded]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t("contact.alert"));
    setForm({ email: '', message: '' });
  };

  return (
    <div className={styles.container}>


      <div className={styles.content}>
        <div className={styles.map}>
          {iframeLoaded ? <iframe
            title="mosque-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.1942786470368!2d23.319835076395837!3d42.699606913581896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa856f4acf41b3%3A0x8d40383a77e1364f!2sCentral%20Mosque%20of%20Sofia%20-%20Banya%20Bashi%20Mosque!5e0!3m2!1sen!2sbg!4v1745076099893!5m2!1sen!2sbg"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> : <Loader />}
        </div>


        <form className={styles.form} onSubmit={handleSubmit}>
        <h2>{t("contact.title")}</h2>
          <label>
            {t("contact.email")}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {t("contact.message")}
            <textarea
              name="message"
              placeholder=''
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </label>
          <button type="submit">{t("contact.submit")}</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
