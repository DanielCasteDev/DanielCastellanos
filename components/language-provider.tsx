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
    'profile.intro': 'Full-stack developer with expertise in cutting-edge web technologies and high-performance system architectures.',
    'experience.title': 'Work Experience',
    'experience.company': 'Tecnosol SA de CV',
    'experience.role': 'Software Engineer',
    'skills.title': 'Skills',
    'skills.languages': 'Programming Languages',
    'skills.web': 'Web Technologies',
    'skills.databases': 'Databases',
    'skills.mobile': 'Mobile Development',
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
    'projects.title': 'Projects',
    'projects.project1': 'Real-Time Weather App',
    'projects.project1Description': 'This project presents a real-time weather page designed to deliver up-to-the-minute weather information. Using a weather API, it displays details such as temperature, humidity, and forecasts for various locations.',
    'projects.project2': 'Portfolio Showcase',
    'projects.project2Description': 'This project is a portfolio to showcase personal and professional projects, including descriptions, technologies used, and links to repositories and live demos.',
    'projects.project3': 'Order and User Management System',
    'projects.project3Description': 'This project manages orders, payments, and user administration, providing an efficient system for business operations and user engagement.',
    'about.title': 'About Me',
    'about.description': `I am a Software Engineering student with a TSU degree in
      Multiplatform Applications. I have experience in software
      development and creating applications for different platforms.
      I am looking for opportunities to apply my knowledge and skills
      in a dynamic environment and contribute to innovative projects.`,
  },
  es: {
    'nav.home': 'Inicio',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    'profile.title': 'Ingeniero de Software',
    'profile.intro': 'Desarrollador full-stack con experiencia en tecnologías web de vanguardia y en arquitecturas de sistemas de alto rendimiento.',
    'experience.title': 'Experiencia Laboral',
    'experience.company': 'Tecnosol SA de CV',
    'experience.role': 'Ingeniero de Software',
    'skills.title': 'Habilidades',
    'skills.languages': 'Lenguajes de Programación',
    'skills.web': 'Tecnologías Web',
    'skills.databases': 'Bases de Datos',
    'skills.mobile': 'Desarrollo Móvil',
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
    'projects.title': 'Proyectos',
    'projects.project1': 'Aplicación de Clima en Tiempo Real',
    'projects.project1Description': 'Este proyecto ofrece una página de clima en tiempo real, diseñada para proporcionar información meteorológica actualizada al instante. Usando una API de clima, el sistema muestra detalles como temperatura, humedad y previsión meteorológica en diferentes ubicaciones.',
    'projects.project2': 'Portafolio Personal',
    'projects.project2Description': 'Este proyecto es un portafolio para mostrar proyectos personales y profesionales, incluyendo descripciones, tecnologías usadas y enlaces a repositorios y demostraciones en vivo.',
    'projects.project3': 'Sistema de Gestión de Pedidos y Usuarios',
    'projects.project3Description': 'Este proyecto gestiona pedidos, pagos y administración de usuarios, proporcionando un sistema eficiente para operaciones empresariales y participación de usuarios.',
    'about.title': 'Acerca de Mí',
    'about.description': `Soy estudiante de Ingeniería en Software con un título de TSU
      en Aplicaciones Multiplataforma. Tengo experiencia en desarrollo
      de software y en la creación de aplicaciones para diferentes
      plataformas. Busco oportunidades para aplicar mis conocimientos
      y habilidades en un entorno dinámico y contribuir a proyectos
      innovadores.`,
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