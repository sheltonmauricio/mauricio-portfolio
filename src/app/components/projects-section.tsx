interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
}

interface ProjectsSectionProps {
  dict: {
    title: string;
    subtitle: string;
    view_code: string;
    items: ProjectItem[];
  };
}

const ProjectsSection = ({ dict }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="w-full py-20 border-b border-secondary/30 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        
        <div className="space-y-4 max-w-6xl">
          <h2 className="text-3xl font-bold font-sans text-text tracking-tight flex items-center gap-3">
            <span className="text-primary font-mono text-2xl">03.</span> {dict.title}
          </h2>
          <p className="text-accent font-sans text-base">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dict.items.map((project, index) => (
            <div 
              key={index}
              className="flex flex-col justify-between bg-secondary/10 border border-secondary/40 p-8 rounded-2xl backdrop-blur-sm group hover:border-primary/20 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-primary text-3xl font-mono">&lt;/&gt;</span>
                  
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-accent hover:text-primary border border-secondary p-1.5 px-3 rounded-md bg-background/50 transition-colors"
                  >
                    {dict.view_code} →
                  </a>
                </div>

                <h3 className="font-sans font-bold text-text text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-accent font-sans text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-secondary/30">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2.5 py-1 bg-secondary/30 border border-accent/5 rounded-md font-mono text-[11px] text-primary/90"
                  >
                    {tag}
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

export default ProjectsSection;