'use client';

import { usePathname, useRouter } from 'next/navigation';

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = pathname?.split('/')[1] || 'en';

  const switchLanguage = (newLang: 'pt' | 'en') => {
    if (!pathname) return;
    
    const segments = pathname.split('/');
    segments[1] = newLang;
    
    router.push(segments.join('/'));
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