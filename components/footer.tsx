'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from './language-provider';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/DanielCasteDev"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground/80"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground/80"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:danielcaste.dev@gmail.com"
            className="transition-colors hover:text-foreground/80"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}