interface ContactSectionProps {
  dict: {
    title: string;
    subtitle: string;
    cta_email: string;
    cta_linkedin: string;
  };
}

const ContactSection = ({ dict }: ContactSectionProps) => {
  const email = "shelton.mauricio.m@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/sheltonmauricio";

  return (
    <section id="contact" className="w-full py-24 scroll-mt-16 text-center">
      <div className="max-w-2xl mx-auto px-6 space-y-8">
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold font-sans text-text tracking-tight flex items-center justify-center gap-3">
            <span className="text-primary font-mono text-2xl">04.</span> {dict.title}
          </h2>
          <p className="text-accent font-sans text-base leading-relaxed">
            {dict.subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a 
            href={`mailto:${email}`}
            className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-background font-semibold font-sans px-8 py-3.5 rounded-xl transition-colors duration-200"
          >
            {dict.cta_email}
          </a>
          <a 
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-secondary/20 hover:bg-secondary/40 text-text/80 font-semibold font-sans px-8 py-3.5 rounded-xl border border-primary hover:border-primary-hover transition-colors duration-200"
          >
            {dict.cta_linkedin}
          </a>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;