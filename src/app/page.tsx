'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const browserLang = navigator.language.startsWith('pt') ? 'pt' : 'en';
    router.replace(`/${browserLang}`);
  }, [router]);

  return (
    <div className="min-h-screen bg-background text-text flex items-center justify-center font-sans">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-primary"></div>
    </div>
  );
}