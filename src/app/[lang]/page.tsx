import { getDictionary } from '@/dictionaries/get-dictionary';
import Navbar from '@/app/components/navbar';
import AboutSection from '@/app/components/about-section';
import ToolsSection from '../components/tools-sections';
import ProjectsSection from '../components/projects-section';
import ContactSection from '../components/contact-section';
import HeroSection from '../components/hero-section';

interface PageProps {
  params: Promise<{ lang: 'pt' | 'en' }>;
}

export async function generateStaticParams() {
  return [{ lang: 'pt' }, { lang: 'en' }];
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar lang={lang} dict={dict.nav} />
      <HeroSection dict={dict.hero} lang={lang} />
      <AboutSection dict={dict.about} />
      <ToolsSection dict={dict.tools} />
      <ProjectsSection dict={dict.projects} />
      <ContactSection dict={dict.contact} />

      <footer className="w-full py-6 text-center text-sm text-accent/40 border-t border-secondary/40 mt-12">
        <p>© {new Date().getFullYear()} Shelton Mauricio</p>
      </footer>
    </>
  );
}