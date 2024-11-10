'use client';

import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'profile.title': 'Software Engineer',
    'profile.intro': 'Full-stack developer with expertise in web technologies and system architecture',
    'experience.title': 'Work Experience',
    'experience.company': 'Tecnosol SA de CV',
    'experience.role': 'Software Engineer',
    'skills.title': 'Skills',
    'skills.languages': 'Programming Languages',
    'skills.web': 'Web Technologies',
    'skills.databases': 'Databases',
    'contact.title': 'Contact',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'education.title': 'Education',
    'education.university': 'Universidad Tecnológica de la Zona Metropolitana de Guadalajara',
    'experience.description1': 'Created a comprehensive library management application',
    'experience.description2': 'Developed an order and payment management system',
    'experience.description3': 'Implemented a digital forms system',
    'experience.description4': 'Built a user management module with custom PDF generation',
    'download_cv.button': 'Download CV',
    'download_cv.text': 'Download CV',
    'projects.title' : 'Projects',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    'profile.title': 'Ingeniero de Software',
    'profile.intro': 'Desarrollador full-stack con experiencia en tecnologías web y arquitectura de sistemas',
    'experience.title': 'Experiencia Laboral',
    'experience.company': 'Tecnosol SA de CV',
    'experience.role': 'Ingeniero de Software',
    'skills.title': 'Habilidades',
    'skills.languages': 'Lenguajes de Programación',
    'skills.web': 'Tecnologías Web',
    'skills.databases': 'Bases de Datos',
    'contact.title': 'Contacto',
    'contact.email': 'Correo',
    'contact.phone': 'Teléfono',
    'education.title': 'Educación',
    'education.university': 'Universidad Tecnológica de la Zona Metropolitana de Guadalajara',
    'experience.description1': 'Creé una aplicación integral de gestión de bibliotecas',
    'experience.description2': 'Desarrollé un sistema de gestión de pedidos y pagos',
    'experience.description3': 'Implementé un sistema de formularios digitales',
    'experience.description4': 'Construí un módulo de gestión de usuarios con generación de PDF personalizada',
    'download_cv.button': 'Descargar CV',
    'download_cv.text': 'Descargar CV',
    'projects.title' : 'Proyectos',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};