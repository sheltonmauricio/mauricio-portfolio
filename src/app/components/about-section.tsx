interface AboutSectionProps {
  dict: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
}

export default function AboutSection({ dict }: AboutSectionProps) {
  return (
    <section id="about" className="w-full py-20 border-b border-secondary/30 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <h2 className="text-3xl font-bold font-sans text-text tracking-tight flex items-center gap-3">
          <span className="text-primary font-mono text-2xl">01.</span> {dict.title}
        </h2>
        <p className="text-accent leading-relaxed font-sans text-lg">
          {dict.p1}
        </p>
        <p className="text-accent leading-relaxed font-sans text-lg">
          {dict.p2}
        </p>
        <p className="text-accent leading-relaxed font-sans text-lg">
          {dict.p3}
        </p>
      </div>
    </section>
  );
}