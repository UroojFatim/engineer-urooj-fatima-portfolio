import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    company: 'AItek Solutions',
    role: 'Full Stack Developer',
    year: '2025',
    period: 'Feb 2025 – Apr 2026',
    location: 'Remote, USA',
    current: false,
    bullets: [
      'Worked on development and customisation of web and software systems for real-world business use',
      'Built and customised White-Label CRM with Twilio integration (calling, SMS, communication workflows)',
      'Developed Wolf of Arches SaaS platform serving 50+ business users, reducing on boarding time by 40%',
      'Architect Chair Track clinic system handling 500+ monthly appointments with automated scheduling',
      'Implemented RBAC across 3 enterprise apps securing data for 200+ users with 99.9% up-time',
      'Developed and maintained AceOfAesthetics web platform',
      'Worked with React, Next.js, Tailwind CSS, APIs, and full-stack architecture',
      'Collaborating with team on scalable and user-focused solutions'
    ],
    stack: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'JWT', 'Vercel', 'Twilio', 'Tailwind CSS', 'Express.js', 'REST APIs','SAS']
  },
  {
    company: 'Neplen (UAE)',
    role: 'MERN Stack Developer',
    year: '2024',
    period: 'Aug 2024 – Jun 2025',
    location: 'Remote',
    current: false,
    bullets: [
      'Built SaaS dashboard for used electronics with dynamic pricing algorithm and product condition assessment',
      'Developed admin/vendor panels handling 200+ daily product listings with role-based auth'
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Vercel']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24 mx-auto max-w-container-max px-4 py-16 sm:px-6 sm:py-20 md:px-10">
      <div className="mb-10 text-center sm:mb-16">
        <span className="section-eyebrow text-secondary">Career Path</span>
        <h2 className="section-heading">Work Experience</h2>
      </div>

      <div className="relative mx-auto ">
        {/* Git-log spine, draws in from the top as the section scrolls into view */}
        <ScrollReveal
          variant="draw"
          threshold={0.05}
          className="absolute left-[4px] top-1 bottom-1 hidden w-px bg-outline-variant md:block"
          aria-hidden="true"
        />

        <div className="space-y-12 sm:space-y-14 md:space-y-16">
          {experiences.map((item, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div className="relative md:pl-12">
                {/* Commit dot on the spine */}
                <span
                  className="absolute left-[-1px] top-1.5 hidden h-2.5 w-2.5 rounded-full border-2 border-primary bg-background md:block"
                  aria-hidden="true"
                />
                {item.current && (
                  <span
                    className="absolute left-[-1px] top-1.5 hidden h-2.5 w-2.5 animate-ping rounded-full bg-primary/50 md:block"
                    aria-hidden="true"
                  />
                )}

                <div className="flex flex-col gap-4 sm:gap-6 md:flex-row">
                  <div className="md:w-1/4">
                    <span
                      aria-hidden="true"
                      className="block select-none font-display text-5xl font-bold italic leading-none text-transparent sm:text-6xl"
                      style={{ WebkitTextStroke: '1.5px rgb(var(--color-primary) / 0.35)' }}
                    >
                      {item.year}
                    </span>
                    <div className="mt-3 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">{item.period}</div>
                    <div className="mt-2 text-xs font-medium text-on-surface-variant">{item.location}</div>
                    {item.current && (
                      <span className="mt-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-secondary">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
                        Current
                      </span>
                    )}
                  </div>
                  <div className="glass-card hover-glow rounded-md p-6 sm:p-8 md:w-3/4">
                    <h3 className="text-headline-md font-bold font-display text-on-surface">{item.role}</h3>
                    <div className="mb-5 mt-1 font-bold text-primary sm:mb-6">{item.company}</div>

                    <ul className="space-y-3 pl-5 text-sm leading-relaxed text-on-surface-variant">
                      {item.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="list-disc">{bullet}</li>
                      ))}
                    </ul>

                    <div className="skill-badges mt-6">
                      {item.stack.map((tech, techIndex) => (
                        <span key={techIndex} className="skill-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
