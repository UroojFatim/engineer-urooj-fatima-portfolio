import { useEffect, useState } from 'react';
import ProfileImage from '../assets/ProfileImage.png';
import { FaCode, FaDatabase, FaReact } from 'react-icons/fa';
import TerminalCard from './TerminalCard';
import CornerMarks from './CornerMarks';
import BrowserBar from './BrowserBar';

const Hero = () => {
    const roles = [
        'Full Stack Developer',
        'MERN Stack Engineer',
        'AI App Builder',
        'SaaS Developer'
    ];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let typingSpeed = isDeleting ? 40 : 120;
        const current = index % roles.length;
        const fullText = roles[current];

        const timer = setTimeout(() => {
            setText(prev => isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1));
            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 900);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setIndex(prev => prev + 1);
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, index]);

    const stats = [
        { label: 'Projects', value: '5+' },
        { label: 'Users', value: '250+' },
        { label: 'Years Exp', value: '3+' },
        { label: 'CGPA', value: '3.5' },
    ];

    return (
        <section id="home" className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-20 md:px-10 lg:py-24">
            <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
                {/* Left Content */}
                <div className="min-w-0 text-center lg:text-left">
                    <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-outline-variant px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-widest text-on-surface-variant">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
                        Available for Opportunities
                    </span>

                    <div className="relative">
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -left-1 -top-9 hidden select-none font-display text-[7rem] font-bold italic text-transparent sm:-top-12 sm:block sm:text-[9rem] lg:-left-2 lg:-top-9 lg:text-[8rem] xl:-top-12 xl:text-[9rem]"
                            style={{ WebkitTextStroke: '1.5px rgb(var(--color-primary) / 0.5)' }}
                        >
                            UF
                        </span>

                        {/* Steps back down at lg because that's where the layout goes
                            two-column and the left column narrows — jumping straight
                            to the 64px size there was tight enough to risk wrapping
                            on ~1024px tablets; xl+ has room for it again. */}
                        <h1 className="relative text-display-xl-mobile font-display leading-tight text-on-surface md:text-display-xl lg:text-display-xl-mobile xl:text-display-xl">
                            Urooj Fatima
                        </h1>
                    </div>

                    <h2 className="mt-3 flex min-h-[1.4em] items-center justify-center gap-2 font-mono text-lg text-primary sm:text-2xl lg:justify-start">
                        <span className="text-on-surface-variant/50" aria-hidden="true">&gt;</span>
                        <span>{text}</span>
                        <span className="blinking-cursor text-primary">|</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-on-surface-variant sm:text-base lg:mx-0">
                        Full Stack Developer with 3+ years of production experience building scalable SaaS platforms, AI-driven applications, and e-commerce systems. Expertise in MERN stack, Next.js, TypeScript, Power Automate, and cloud-integrated architectures. Delivered 5+ live products serving 250+ active users across US and UAE clients.
                    </p>

                    <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="rounded-md border border-outline-variant p-4 text-center transition-colors hover:border-primary/40">
                                <div className="font-display text-headline-md font-semibold text-primary">{stat.value}</div>
                                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-on-surface-variant">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Right Visual — shown at every breakpoint; on mobile it stacks
                    under the copy and carries the portrait + code widget. */}
                <div className="relative mx-auto w-full max-w-md">
                    <div className="relative">
                        <div aria-hidden="true" className="absolute inset-0 translate-x-2 translate-y-2 rounded-xl border border-primary/30 bg-primary/5 sm:translate-x-4 sm:translate-y-4" />

                        <div className="group relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low shadow-soft">
                            <BrowserBar label="urooj.dev — profile.jpg" />
                            <div className="relative aspect-square p-3">
                                <div className="relative h-full w-full overflow-hidden rounded-lg">
                                    <img
                                        src={ProfileImage}
                                        alt="Urooj Fatima"
                                        decoding="async"
                                        fetchPriority="high"
                                        className="relative h-full w-full max-w-full object-cover"
                                    />
                                </div>
                                <CornerMarks active accent="primary" />

                                <div className="floating absolute left-5 top-5 z-20 rounded-md border border-outline-variant bg-surface px-3 py-2 shadow-soft" style={{ animationDelay: '0.2s' }}>
                                    <FaCode className="text-lg text-primary" />
                                </div>
                                <div className="floating absolute bottom-16 right-4 z-20 rounded-md border border-outline-variant bg-surface px-3 py-2 shadow-soft" style={{ animationDelay: '0.8s' }}>
                                    <FaDatabase className="text-lg text-secondary" />
                                </div>
                                <div className="floating absolute right-3 top-1/2 z-20 rounded-md border border-outline-variant bg-surface px-3 py-2 shadow-soft" style={{ animationDelay: '0.5s' }}>
                                    <FaReact className="text-lg text-tertiary" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
                        <span>Fig. 01 — Portrait</span>
                        <span>24.8607°N, 67.0011°E</span>
                    </div>

                    <div className="mt-6">
                        <TerminalCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
