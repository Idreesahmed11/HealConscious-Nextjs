'use client';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';


const heroImage = '/assets/Transparent-heal-conscious-image.png';
const eqMainImg =
  '/assets/Emotional-Intelligence-EQ-Management-with-Careox-300x225.webp';

const sciencePoints = [
  'Better mental health outcomes (lower stress, anxiety, and depression).',
  'Stronger resilience in trauma recovery.',
  'More fulfilling relationships and workplace success.',
];

const benefits = [
  {
    title: 'Clarity',
    desc: 'You gain a deeper understanding of your emotions and feel more in control of your inner world.',
  },
  {
    title: 'Regulation',
    desc: 'You learn to find calm in the moment and respond in ways that truly support your well-being.',
  },
  {
    title: 'Connection',
    desc: 'You nurture empathy and create more meaningful, lasting relationships.',
  },
  {
    title: 'Resilience',
    desc: 'You recover from setbacks with steadiness and renewed strength.',
  },
  {
    title: 'Growth',
    desc: 'You expand your confidence, creativity, and sense of personal fulfillment.',
  },
];

const coreComponents = [
  {
    title: 'Self-Awareness',
    desc: 'Recognizing emotions in real time and knowing how they affect your thoughts, body, and actions.',
  },
  {
    title: 'Self-Regulation',
    desc: 'Pausing before reacting, calming impulses, and choosing balanced responses.',
  },
  {
    title: 'Motivation',
    desc: 'Using emotions as energy for personal growth, persistence, and goal achievement.',
  },
  {
    title: 'Empathy',
    desc: 'Sensing what others feel and responding with understanding and compassion.',
  },
  {
    title: 'Social Skills',
    desc: 'Communicating clearly, resolving conflicts, and building long-term trust.',
  },
];

const pauseSteps = [
  {
    step: '01',
    title: 'Notice',
    desc: 'Identify what emotion is surfacing in your body.',
  },
  {
    step: '02',
    title: 'Name',
    desc: 'Label it — "anger," "fear," "sadness," or "excitement."',
  },
  {
    step: '03',
    title: 'Navigate',
    desc: 'Choose a response aligned with your values, not your impulse.',
  },
];

const careoxApproach = [
  {
    icon: '◎',
    title: 'Somatic Awareness',
    desc: 'We begin by helping you notice how emotions manifest physically — through body tension, posture, or shifts in breathing — so you can recognize them before they take over.',
  },
  {
    icon: '✦',
    title: 'Mindful Journaling',
    desc: 'Daily guided reflections reveal emotional triggers and recurring patterns, giving you clarity on what drives your responses.',
  },
  {
    icon: '◈',
    title: 'Breathwork & Grounding',
    desc: 'In moments of stress, we teach calming techniques that regulate the nervous system and bring you back to balance.',
  },
  {
    icon: '⬡',
    title: 'Scenario Practice',
    desc: 'Through role-play and guided exercises, you strengthen empathy, improve communication, and rehearse constructive responses to real-life challenges.',
  },
];


const EmotionalIntelligenceComponent = () => {
  const router = useRouter();

  
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.12 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLElement | null, i: number) => {
    sectionRefs.current[i] = el;
  };

  return (
    <div className="w-full font-sans antialiased text-gray-800 overflow-x-hidden">

      
      <section className="relative bg-[#E9E9E9] overflow-hidden">
  
        <div
          className="pointer-events-none absolute -right-24 -top-24 w-[480px] h-[480px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #4db8c0 0%, transparent 70%)' }}
        />

        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-10 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
        
          <div className="z-10 text-left max-w-xl">
      
            <nav className="flex items-center flex-wrap gap-2 mb-5 text-[11px] font-bold tracking-widest uppercase text-gray-500">
              <button
                onClick={() => router.push('/')}
                className="hover:text-[#4db8c0] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer"
              >
                Home
              </button>
              <span className="text-gray-300">›</span>
              <span className="text-black">Emotional Quotient Management</span>
            </nav>

        
            <div className="w-10 h-[3px] bg-[#4db8c0] mb-4 rounded-full" />

            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black uppercase text-black tracking-tight leading-[1.1]">
              Emotional<br />
              <span className="text-[#4db8c0]">Quotient</span><br />
              Management
            </h1>

            <p className="mt-4 text-gray-600 text-[14px] leading-relaxed max-w-sm">
              Build the emotional skills that drive well-being, resilience, and meaningful connection.
            </p>
          </div>

    
          <div className="w-full lg:w-auto flex justify-center lg:justify-end items-center lg:max-w-[50%] z-10">
            <img
              src={heroImage}
              alt="Careox — Heal Consciously"
              className="w-full h-auto object-contain max-h-[220px] lg:max-h-[280px] drop-shadow-md"
            />
          </div>
        </div>
      </section>

      
      <div className="w-full h-px bg-gray-200" />

      
      <main className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-10 py-16 space-y-20">

        
        <section
          ref={(el) => addRef(el, 0)}
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(28px' }}
        >
      
          <div className="flex-1 min-w-0">
            <SectionLabel>Overview</SectionLabel>
            <h3 className="text-2xl sm:text-3xl font-black text-black mb-5 leading-snug">
              What is Emotional Intelligence?
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
              Emotional Intelligence is the ability to recognize, understand, and manage emotions
              in yourself and others. It goes beyond IQ by focusing on{' '}
              <em className="text-black not-italic font-semibold">how</em> you process feelings,
              communicate under pressure, and build meaningful relationships.
            </p>
            <p className="text-[13px] font-bold uppercase tracking-widest text-[#4db8c0] mb-3">
              Science confirms that people with higher EQ experience:
            </p>
            <ul className="space-y-3">
              {sciencePoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-[15px]">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#4db8c0] flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

        
          <div className="flex-shrink-0 flex items-start justify-center lg:justify-end">
            <div className="relative">
            
              <div className="absolute -inset-3 border-2 border-[#4db8c0]/30 rounded-lg -z-10" />
              <img
                src={eqMainImg}
                alt="Emotional Intelligence with Careox"
                className="w-full max-w-[300px] lg:max-w-[320px] h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        
        <section
          ref={(el) => addRef(el, 1)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(28px)' }}
        >
        
          <div>
            <SectionLabel>Outcomes</SectionLabel>
            <h3 className="text-2xl sm:text-3xl font-black text-black mb-6 leading-snug">
              Benefits of Practising EQ with Careox
            </h3>
            <ul className="space-y-5">
              {benefits.map(({ title, desc }, i) => (
                <li key={i} className="flex gap-4 items-start group">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4db8c0]/10 border border-[#4db8c0]/40
                               flex items-center justify-center text-[#4db8c0] font-black text-[11px] tracking-wider
                               group-hover:bg-[#4db8c0] group-hover:text-white transition-colors duration-200"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[15px] text-gray-700 leading-relaxed">
                    <strong className="text-black font-bold">{title}</strong>
                    {' — '}
                    {desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <SectionLabel>Framework</SectionLabel>
            <h3 className="text-2xl sm:text-3xl font-black text-black mb-6 leading-snug">
              The 5 Core Components of EQ
            </h3>
            <ul className="space-y-4">
              {coreComponents.map(({ title, desc }, i) => (
                <li key={i} className="border-l-2 border-[#4db8c0]/30 pl-4 hover:border-[#4db8c0] transition-colors duration-200">
                  <p className="text-[15px] text-gray-700 leading-relaxed">
                    <strong className="text-black font-bold">{title}</strong>
                    {' — '}
                    {desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        
        <section
          ref={(el) => addRef(el, 2)}
          className="transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(28px)' }}
        >
          <SectionLabel>Practice Tool</SectionLabel>
          <h3 className="text-2xl sm:text-3xl font-black text-black mb-3 leading-snug">
            Practical Framework: The 3-Step Pause
          </h3>
          <p className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-xl">
            When emotions rise, try this structured EQ exercise to reduce reactivity and build lasting emotional balance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pauseSteps.map(({ step, title, desc }) => (
              <div
                key={step}
                className="relative bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-[#4db8c0] hover:shadow-md transition-all duration-200 overflow-hidden group"
              >
                {/* large muted step number */}
                <span className="absolute right-4 top-3 text-[56px] font-black text-[#4db8c0]/10 leading-none select-none group-hover:text-[#4db8c0]/20 transition-colors">
                  {step}
                </span>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#4db8c0] mb-2">
                  Step {step}
                </p>
                <h3 className="text-lg font-black text-black mb-2">{title}</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        
        <section
          ref={(el) => addRef(el, 3)}
          className="transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(28px)' }}
        >
          <SectionLabel>Methodology</SectionLabel>
          <h3 className="text-2xl sm:text-3xl font-black text-black mb-3 leading-snug">
            Careox Approach to EQ Development
          </h3>
          <p className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-2xl">
            With Careox, emotional intelligence is not a fixed trait — it is a skill that grows through consistent practice.
            We integrate neuroscience, somatic therapy, and mindfulness into every step of EQ training.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {careoxApproach.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-5 p-6 bg-white border border-gray-200 rounded-xl hover:border-[#4db8c0] hover:shadow-md transition-all duration-200"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#4db8c0]/10 flex items-center justify-center text-[#4db8c0] text-xl">
                  {icon}
                </span>
                <div>
                  <h3 className="font-black text-black text-[15px] mb-1">{title}</h3>
                  <p className="text-gray-600 text-[14px] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

  
      <section className="relative overflow-hidden bg-[#f0fafb] border-t border-[#4db8c0]/20">
        
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-[0.07] rounded-full"
          style={{ background: 'radial-gradient(ellipse, #4db8c0 0%, transparent 70%)' }}
        />

        <div
          ref={(el) => addRef(el, 4)}
          className="max-w-[740px] mx-auto px-5 sm:px-8 py-16 text-center transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(28px)' }}
        >
          <div className="w-10 h-[3px] bg-[#4db8c0] mx-auto mb-5 rounded-full" />
          <h3 className="text-2xl sm:text-3xl font-black text-black mb-4">
            What to do next?
          </h3>
          <p className="text-gray-600 text-[15px] leading-relaxed mb-10 max-w-[580px] mx-auto">
            At Careox, healing starts with small, intentional steps. Whether you want to manage stress,
            strengthen resilience, or deepen your emotional intelligence, our science-backed programs
            guide you from overwhelm to balance.
          </p>
          <button
            onClick={() => window.open('#', '_blank')}
            className="
              inline-block bg-[#4db8c0] hover:bg-[#3da8b0] active:bg-[#2d98a0]
              text-white text-[12px] font-bold uppercase tracking-[0.2em]
              px-10 py-4
              transition-colors duration-200
              cursor-pointer rounded-sm
              shadow-lg shadow-[#4db8c0]/30 hover:shadow-[#4db8c0]/50
            "
          >
            Get Careox Today
          </button>
        </div>
      </section>

    </div>
  );
};


const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4db8c0] mb-2">
    {children}
  </p>
);

export default EmotionalIntelligenceComponent;
