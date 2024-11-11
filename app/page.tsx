'use client';

import { useLanguage } from '@/components/language-provider';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SiJavascript, SiPhp,SiCss3, SiKotlin, SiCplusplus, SiReact, SiNodedotjs,SiExpress,SiLaravel, SiVite, SiNextdotjs, SiMysql, SiMongodb, SiPostgresql,SiGithub,SiSwift,SiAndroidstudio,SiGit,SiCpanel,SiTailwindcss}  from "react-icons/si";
import { AiOutlineFilePdf,AiOutlineArrowRight } from "react-icons/ai"; // Importar icono de descarga
import { FaJava } from 'react-icons/fa'; // Asegúrate de importar el icono de Java

const CV_LINK = "../public/cv.pdf"; 

import {
  Code2,
  Globe,
  Mail,
  Phone,
  GraduationCap,
  Database,
  Github,
  Linkedin,
  Smartphone
} from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="container px-4 py-8 mx-auto max-w-6xl">
<motion.section
  initial="hidden"
  animate="show"
  variants={container}
  className="mb-48 text-center"  // Aumenté el mb-48 para más espacio en la primera sección
>
  <motion.div variants={item} className="relative w-40 h-40 mx-auto mb-12">
    <Image
      src="/yo.jpg" // Ruta a la imagen en la carpeta public
      alt="Daniel Castellanos"
      width={160}
      height={160}
      className="rounded-full shadow-lg border-4 border-primary/10"
    />
  </motion.div>
  <motion.h1 variants={item} className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
    Daniel Castellanos
  </motion.h1>
  <motion.h2 variants={item} className="text-3xl font-semibold mb-8 text-muted-foreground">
    {t('profile.title')}
  </motion.h2>
  <motion.p variants={item} className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
    {t('profile.intro')}
  </motion.p>
  <motion.div variants={item} className="flex justify-center gap-6 mt-10">
    <a href="https://github.com/DanielCasteDev" target="_blank" rel="noopener noreferrer"
      className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
      <Github className="w-7 h-7" />
    </a>
    <a href="https://linkedin.com/in/DanielCastellanos2904" target="_blank" rel="noopener noreferrer"
      className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
      <Linkedin className="w-7 h-7" />
    </a>
    <a 
      href="/cv.pdf" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
    >
      <AiOutlineFilePdf className="w-7 h-7" />
    </a>
  </motion.div>
</motion.section>

<motion.section
  initial="hidden"
  animate="show"
  variants={container}
  className="mt-32 text-center"  // Aumenté el mt-32 para mover la segunda sección más abajo
>
  <motion.h2 variants={item} className="text-4xl font-bold mb-10 bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
    {t('about.title')}
  </motion.h2>
  <motion.p variants={item} className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
    {t('about.description')}
  </motion.p>
</motion.section>


      <motion.section
  variants={container}
  initial="hidden"
  animate="show"
  className="mb-20"
>
  <motion.h2 variants={item} className="text-3xl font-bold mb-8 text-center">
    {t('skills.title')}
  </motion.h2>
  <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-4 gap-8">

{/* Programming Languages Card */}
<Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-primary/5">
  <div className="flex items-center mb-6">
    <Code2 className="w-8 h-8 mr-4 text-primary" />
    <h3 className="text-xl font-semibold">{t('skills.languages')}</h3>
  </div>
  <div className="flex flex-wrap gap-2">
    <Badge variant="secondary" className="px-3 py-1"><SiJavascript className="inline mr-2" />JavaScript</Badge>
    <Badge variant="secondary" className="px-3 py-1"><SiPhp className="inline mr-2" />PHP</Badge>
    <Badge variant="secondary" className="px-3 py-1"><SiKotlin className="inline mr-2" />Kotlin</Badge>
    <Badge variant="secondary" className="px-3 py-1"><SiCplusplus className="inline mr-2" />C++</Badge>
    <Badge variant="secondary" className="px-3 py-1"><FaJava className="inline mr-2" />Java</Badge>
  </div>
</Card>

{/* Web Technologies Card */}
<Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-primary/5">
  <div className="flex items-center mb-6">
    <Globe className="w-8 h-8 mr-4 text-primary" />
    <h3 className="text-xl font-semibold">{t('skills.web')}</h3>
  </div>
  <div className="flex flex-wrap gap-2">
    <Badge variant="secondary" className="px-3 py-1"><SiReact className="inline mr-2" />React.js</Badge>
    <Badge variant="secondary" className="px-3 py-1"><SiLaravel className="inline mr-2" />Laravel</Badge>
    <Badge variant="secondary" className="px-3 py-1"><SiVite className="inline mr-2" />Vite</Badge>
    <Badge variant="secondary" className="px-3 py-1"><SiNextdotjs className="inline mr-2" />Next.js</Badge>
    <Badge variant="secondary" className="px-3 py-1"><SiExpress className="inline mr-2" />Express.js</Badge>
    <Badge variant="secondary" className="px-3 py-1"><SiNodedotjs className="inline mr-2" />Node.js</Badge>
    <Badge variant="secondary" className="px-3 py-1"><SiGithub className="inline mr-2" />GitHub</Badge>
    <Badge variant="secondary" className="px-3 py-1"><SiGit className="inline mr-2" />Git</Badge>
    <Badge variant="secondary" className="px-3 py-1"><SiCpanel className="inline mr-2" />cPanel</Badge>
  </div>
</Card>

{/* Mobile Development Card */}
<Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-primary/5">
  <div className="flex items-center mb-6">
    <Smartphone className="w-8 h-8 mr-4 text-primary" />
    <h3 className="text-xl font-semibold">{t('skills.mobile')}</h3>
  </div>
  <div className="flex flex-wrap gap-2">
    <Badge variant="secondary" className="px-3 py-1"><SiAndroidstudio className="inline mr-2" />Android Studio</Badge>
    <Badge variant="secondary" className="px-3 py-1"><SiSwift className="inline mr-2" />Swift</Badge>
  </div>
</Card>

{/* Databases Card */}
<Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-primary/5">
  <div className="flex items-center mb-6">
    <Database className="w-8 h-8 mr-4 text-primary" />
    <h3 className="text-xl font-semibold">{t('skills.databases')}</h3>
  </div>
  <div className="flex flex-wrap gap-2">
    <Badge variant="secondary" className="px-3 py-1"><SiMysql className="inline mr-2" />MySQL</Badge>
    <Badge variant="secondary" className="px-3 py-1"><SiMongodb className="inline mr-2" />MongoDB</Badge>
    <Badge variant="secondary" className="px-3 py-1"><SiPostgresql className="inline mr-2" />PostgreSQL</Badge>
  </div>
</Card>

</motion.div>

</motion.section>



      <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="mb-20"
    >
      <motion.h2 variants={item} className="text-3xl font-bold mb-8 text-center">
        {t('experience.title')}
      </motion.h2>
      <motion.div variants={item}>
        <Card className="p-8 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-2">{t('experience.company')}</h3>
          <p className="text-muted-foreground mb-6">{t('experience.role')}</p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 rounded-full bg-primary mr-4" />
              <span>{t('experience.description1')}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 rounded-full bg-primary mr-4" />
              <span>{t('experience.description2')}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 rounded-full bg-primary mr-4" />
              <span>{t('experience.description3')}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 rounded-full bg-primary mr-4" />
              <span>{t('experience.description4')}</span>
            </li>
          </ul>
        </Card>
      </motion.div>
    </motion.section>

    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="mb-20"
    >
      <motion.h2 variants={item} className="text-3xl font-bold mb-8 text-center">
        {t('projects.title')}
      </motion.h2>
      <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Project 1 Card */}
        <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-primary/5">
        <img 
    src="/clima.png" 
    alt="Imagen del Proyecto 1" 
    className="w-full h-48 object-cover mb-6 rounded-lg"
  />
          <div className="flex items-center mb-6">
            <Code2 className="w-8 h-8 mr-4 text-primary" />
            <h3 className="text-xl font-semibold">{t('projects.project1')}</h3>
          </div>
          <p className="text-sm text-gray-500 mb-4">{t('projects.project1Description')}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="px-3 py-1">
              <SiReact className="inline mr-2" />React
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <SiTailwindcss className="inline mr-2" />Tailwind CSS
            </Badge>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/DanielCasteDev/clima.git" target="_blank" rel="noopener noreferrer">
              <SiGithub className="w-6 h-6 text-primary hover:text-primary/80 transition-colors" />
            </a>
            <a href="https://clima-roan-chi.vercel.app/" target="_blank" rel="noopener noreferrer">
              <AiOutlineArrowRight className="w-6 h-6 text-primary hover:text-primary/80 transition-colors" />
            </a>
          </div>
        </Card>

        {/* Project 2 Card */}
<Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-primary/5">
  <img 
    src="/hash.png" 
    alt="Imagen del Proyecto 2" 
    className="w-full h-48 object-cover mb-6 rounded-lg"
  />
  <div className="flex items-center mb-6">
    <Code2 className="w-8 h-8 mr-4 text-primary" />
    <h3 className="text-xl font-semibold">{t('projects.project2')}</h3>
  </div>
  <p className="text-sm text-gray-500 mb-4">{t('projects.project2Description')}</p>
  <div className="flex flex-wrap gap-2 mb-4">
    <Badge variant="secondary" className="px-3 py-1">
      <SiExpress className="inline mr-2" />Express
    </Badge>
    <Badge variant="secondary" className="px-3 py-1">
      <SiReact className="inline mr-2" />React
    </Badge>
    <Badge variant="secondary" className="px-3 py-1">
      <SiCss3 className="inline mr-2" />CSS
    </Badge>
  </div>
  <div className="flex gap-4">
    <a href="https://github.com/DanielCasteDev/apimongo.git" target="_blank" rel="noopener noreferrer">
      <SiGithub className="w-6 h-6 text-primary hover:text-primary/80 transition-colors" />
    </a>
    <a href="https://no-blue-eight.vercel.app/" target="_blank" rel="noopener noreferrer">
      <AiOutlineArrowRight className="w-6 h-6 text-primary hover:text-primary/80 transition-colors" />
    </a>
  </div>
</Card>

        {/* Project 3 Card */}
        <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-primary/5">
        <img 
    src="/tecnosol.png" 
    alt="Imagen del Proyecto 3" 
    className="w-full h-48 object-cover mb-6 rounded-lg"
  />
          <div className="flex items-center mb-6">
            <Code2 className="w-8 h-8 mr-4 text-primary" />
            <h3 className="text-xl font-semibold">{t('projects.project3')}</h3>
          </div>
          <p className="text-sm text-gray-500 mb-4">{t('projects.project3Description')}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="px-3 py-1">
              <SiExpress className="inline mr-2" />Express
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <SiMysql className="inline mr-2" />MySQL
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <SiReact className="inline mr-2" />React
            </Badge>
          </div>
        </Card>

      </motion.div>
    </motion.section>

      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="mb-20"
      >
        <motion.h2 variants={item} className="text-3xl font-bold mb-8 text-center">
          {t('contact.title')}
        </motion.h2>
        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-primary/5">
            <div className="flex items-center">
              <Mail className="w-8 h-8 mr-4 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">{t('contact.email')}</h3>
                <a href="mailto:danielcaste.dev@gmail.com" 
                   className="text-blue-500 hover:text-blue-600 transition-colors">
                  danielcaste.dev@gmail.com
                </a>
              </div>
            </div>
          </Card>
          <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-primary/5">
            <div className="flex items-center">
              <Phone className="w-8 h-8 mr-4 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">{t('contact.phone')}</h3>
                <a href="tel:+523332426490" 
                   className="text-blue-500 hover:text-blue-600 transition-colors">
                  33 324264902
                </a>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.section>
    </div>
  );
}

