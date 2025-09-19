import React, { useState } from "react"; // <--- NOVIDADE: Importa useState
import { CgMenuGridO } from "react-icons/cg";
import { FiChevronDown } from "react-icons/fi"; // <--- NOVIDADE: Ícone de seta
import { useTranslation } from "react-i18next";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const { t, i18n } = useTranslation();

  // 1. ESTADO: Controla se o dropdown está aberto ou fechado
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Mapeamento dos idiomas (pode usar o nome completo ou abreviação)
  const languages = {
    pt: { code: "pt", label: "PT" },
    en: { code: "en", label: "EN" },
  };

  // Pega o idioma atual (ex: 'pt')
  const currentLanguage = languages[i18n.language] || languages.en;

  const changeLanguage = (lngCode) => {
    i18n.changeLanguage(lngCode);
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.navbar_container}>
      <div className={styles.title_names}>
        <h1 className={styles.title_name_mobile}>LG</h1>
        <div className={styles.text_title_desktop}>
          <h2>LUISGUILHERME</h2>
          <h3>{t("navbar.role")}</h3>
        </div>
      </div>

      <div className={styles.nav_links}>
        <a href="#home">{t("navbar.home")}</a>
        <a href="#about">{t("navbar.about")}</a>
        <a href="#projects">{t("navbar.projects")}</a>
        <a href="#skills">{t("navbar.skills")}</a>
        <a href="#contact">{t("navbar.contact")}</a>
      </div>

      <div className={styles.buttons}>
        <CgMenuGridO className={styles.menu_icon} />
        <div
          className={styles.language_selector}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className={styles.current_lang}>{currentLanguage.label}</span>
          <FiChevronDown className={styles.dropdown_icon} />

          {isDropdownOpen && (
            <div className={styles.dropdown_menu}>
              {Object.values(languages)
                .filter((lang) => lang.code !== currentLanguage.code)
                .map((lang) => (
                  <div
                    key={lang.code}
                    className={styles.dropdown_item}
                    onClick={(e) => {
                      e.stopPropagation();
                      changeLanguage(lang.code);
                    }}
                  >
                    {lang.label}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
