import Link from 'next/link';
import LanguageSwitcher from '@/app/components/language-switcher';

interface NavbarProps {
  lang: 'pt' | 'en';
  dict: {
    about: string;
    tools: string;
    projects: string;
    contact: string;
  };
}

const Navbar = ({ lang, dict }: NavbarProps) => {
  return (
    <header className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-secondary/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <Link 
          href={`/${lang}`} 
          className="font-mono font-bold text-lg text-text/80 tracking-wider hover:opacity-80 transition-opacity"
        >
          Maurício
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6 font-sans text-sm font-medium">
            <Link 
              href={`/${lang}#about`} 
              className="text-text/80 hover:text-primary transition-colors duration-200"
            >
              {dict.about}
            </Link>
            <Link 
              href={`/${lang}#tools`} 
              className="text-text/80 hover:text-primary transition-colors duration-200"
            >
              {dict.tools}
            </Link>
            <Link 
              href={`/${lang}#projects`} 
              className="text-text/80 hover:text-primary transition-colors duration-200"
            >
              {dict.projects}
            </Link>
            <Link 
              href={`/${lang}#contact`} 
              className="text-text/80 hover:text-primary transition-colors duration-200"
            >
              {dict.contact}
            </Link>
          </nav>

          <span className="hidden md:block w-px h-4 bg-secondary" />

          <LanguageSwitcher />
        </div>

      </div>
    </header>
  );
}

export default Navbar;