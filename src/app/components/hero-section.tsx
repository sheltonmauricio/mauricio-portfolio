interface HeroSectionProps {
  dict: {
    title: string;
    subtitle: string;
    cta: string;
    cv: string;
  },
  lang: string;
}

const HeroSection = ({ dict, lang }: HeroSectionProps) => {
  return (
    <main className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-8 text-center">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl font-extrabold text-primary font-sans tracking-tight">
            {dict.title}
        </h1>
        <p className="text-xl text-accent font-sans">
            {dict.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
            href="#projects" 
            className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-background font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-center"
            >
                {dict.cta}
            </a>

            <a 
            href={`${process.env.NODE_ENV === 'production' ? '/mauricio-portfolio' : ''}/cv.pdf`} 
            download="shelton_mauricio-cv.pdf"
            className="w-full sm:w-auto bg-secondary/10 hover:bg-secondary/50 text-text/80 font-semibold px-6 py-3 rounded-lg border border-primary hover:border-primary-hover transition-colors duration-200 text-center"
            >
                {dict.cv}
            </a>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;