'use client';

import { usePathname, useRouter } from 'next/navigation';

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();

  if (!pathname) return null;

  // No GitHub Pages, o pathname é: /nome-do-repo/pt/about
  // Localmente é: /pt/about
  const segments = pathname.split('/').filter(Boolean);

  // Verifica se o primeiro segmento é o nome do repo (produção) ou o idioma
  const isProdPath = segments[0] && !['pt', 'en'].includes(segments[0]);
  const langIndex = isProdPath ? 1 : 0;
  
  const currentLang = segments[langIndex] || 'en';

  const switchLanguage = (newLang: 'pt' | 'en') => {
    const newSegments = [...segments];
    newSegments[langIndex] = newLang;
    
    // O router.push do Next.js já insere o basePath automaticamente, 
    // por isso removemos o nome do repo antes de empurrar a nova rota
    if (isProdPath) {
      newSegments.shift();
    }
    
    router.push('/' + newSegments.join('/'));
  };

  return (
    <div className="flex items-center gap-1 p-0.5 bg-secondary rounded-xl border border-accent/10 w-max font-mono text-sm">
      <button
        onClick={() => switchLanguage('pt')}
        className={`px-3 py-0.5 rounded-lg transition-all duration-200 ${
          currentLang === 'pt'
            ? 'bg-primary text-background'
            : 'text-text hover:text-primary-hover'
        }`}
      >
        pt
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-0.5 rounded-lg transition-all duration-200 ${
          currentLang === 'en'
            ? 'bg-primary text-background'
            : 'text-text hover:text-primary-hover'
        }`}
      >
        en
      </button>
    </div>
  );
}

export default LanguageSwitcher;