interface ToolsSectionProps {
  dict: {
    title: string;
    subtitle: string;
  };
}

const ToolsSection = ({ dict }: ToolsSectionProps) => {
  const toolCategories = [
    {
      name: "Languages",
      items: ["JavaScript", "TypeScript", "Java", "Python"]
    },
    {
      name: "Frontend & Mobile",
      items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Zustand", "React-Native" ]
    },
    {
      name: "Backend & Databases",
      items: ["Node.js", "Express", "Prisma", "Zod","REST APIs", "PostgreSQL", "MySQL"]
    },
    {
      name: "DevOps & Cloud",
      items: ["Docker", "Git", "GitHub", "GitHub Actions", "Linux", "Insomnia", "Postman"]
    }
  ];

  return (
    <section id="tools" className="w-full py-20 border-b border-secondary/30 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        
        <div className="space-y-4 max-w-6xl">
          <h2 className="text-3xl font-bold font-sans text-text tracking-tight flex items-center gap-3">
            <span className="text-primary font-mono text-2xl">02.</span> {dict.title}
          </h2>
          <p className="text-accent font-sans text-base">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {toolCategories.map((category) => (
            <div 
              key={category.name} 
              className="bg-secondary/10 border border-secondary/40 p-6 rounded-2xl backdrop-blur-sm space-y-4 hover:border-primary/20 transition-colors duration-200"
            >
              <h3 className="font-sans font-semibold text-primary text-lg border-b border-secondary/30 pb-2">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span 
                    key={item}
                    className="px-3 py-1.5 bg-secondary/30 border border-accent/5 rounded-lg font-mono text-xs text-text/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ToolsSection;