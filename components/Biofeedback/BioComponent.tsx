'use client';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';


const heroImage = '/assets/Transparent-heal-conscious-image.png';
const biofeedbackImg = '/assets/biofeedback-300x225.webp';


const benefits = [
  'Reduced Stress & Anxiety',
  'Better Sleep Quality',
  'Sharper Focus & Energy Level',
  'Stronger Mind-Body Connection',
  'More Control Over Emotional Responses',
];

const howCareoxUses = [
  'Notice how stress shows up in your body (tightness in the chest, racing thoughts, shallow breath)',
  'Train yourself to slow your breath and relax muscles',
  'Build awareness of the mind-body balance daily',
];

const sciencePoints = [
  <>
    Biofeedback has been shown to{' '}
    <strong className="text-black">reduce anxiety and improve mood</strong> in multiple studies.
    Breathing-based biofeedback reduced anxiety related to tests and boosted overall well-being in students.
  </>,
  <>
    Heart rate variability (HRV) training, a form of biofeedback, helps the body bounce back from
    stress faster <strong className="text-black">(Frontiers in Psychology)</strong>.
  </>,
  <>
    Evidence shows that biofeedback improves sleep and reduces physical symptoms, like tension headaches.
  </>,
];


const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4db8c0] mb-2">
    {children}
  </p>
);


const BioComponent = () => {
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
    sectionRefs.current.forEach((el) => el && observer.observe(el));
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
              <span className="text-black">Biofeedback & Careox</span>
            </nav>
            <div className="w-10 h-[3px] bg-[#4db8c0] mb-4 rounded-full" />
            <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black uppercase text-black tracking-tight leading-[1.1]">
              Biofeedback<br />
              <span className="text-[#4db8c0]">& Careox</span>
            </h3>
            <p className="mt-4 text-gray-600 text-[14px] leading-relaxed max-w-sm">
              Listen to your body&apos;s signals and learn to control them — no machines required.
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
          style={{ opacity: 0, transform: 'translateY(28px)' }}
        >
          <div className="flex-1 min-w-0">
            <SectionLabel>Overview</SectionLabel>
            <h3 className="text-2xl sm:text-3xl font-black text-black mb-5 leading-snug">
              What is Biofeedback?
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Biofeedback is a mind-body technique that helps you &ldquo;listen in&rdquo; to your body&apos;s
              signals, such as heart rate, breathing, or muscle tension, and eventually learn to
              control them. Think of it as{' '}
              <strong className="text-black">a mirror for your inner world</strong>. It gives you
              insight into your body&apos;s signals, empowering control over stress, pain, and overall
              well-being.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-start justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 border-2 border-[#4db8c0]/30 rounded-lg -z-10" />
              <img
                src={biofeedbackImg}
                alt="Biofeedback"
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
              Benefits of Biofeedback
            </h3>
            <ul className="space-y-3">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 text-[15px]">
                  <span className="w-2 h-2 rounded-full bg-[#4db8c0] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        
          <div className="space-y-10">
            <div>
              <SectionLabel>Methodology</SectionLabel>
              <h3 className="text-2xl sm:text-3xl font-black text-black mb-4 leading-snug">
                How Careox Uses It
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
                Careox adapts biofeedback-inspired methods without machines, using guided practices
                to help you:
              </p>
              <ul className="space-y-3">
                {howCareoxUses.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-[#4db8c0] hover:shadow-sm transition-all duration-200 text-gray-700 text-[14px] leading-relaxed"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4db8c0]/10 border border-[#4db8c0]/30 flex items-center justify-center text-[#4db8c0] font-black text-[10px]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-4 border-[#4db8c0] pl-5 py-1">
              <SectionLabel>Mechanism</SectionLabel>
              <h3 className="text-xl font-black text-black mb-3 leading-snug">
                Why It Works
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                When you learn to control your breathing and heart rate, you&apos;re actually calming
                your <strong className="text-black">nervous system</strong>. This lowers stress
                hormones, improves focus, and strengthens emotional resilience.
              </p>
            </div>
          </div>
        </section>


        <section
          ref={(el) => addRef(el, 2)}
          className="transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(28px)' }}
        >
          <SectionLabel>The Science</SectionLabel>
          <h3 className="text-2xl sm:text-3xl font-black text-black mb-8 leading-snug">
            Scientific Backing
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {sciencePoints.map((point, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 p-5 bg-white border border-gray-200 rounded-xl hover:border-[#4db8c0] hover:shadow-md transition-all duration-200"
              >
                <span className="w-8 h-8 rounded-full bg-[#4db8c0]/10 border border-[#4db8c0]/30 flex items-center justify-center text-[#4db8c0] font-black text-[11px] flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-gray-600 text-[14px] leading-relaxed">{point}</p>
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
          ref={(el) => addRef(el, 3)}
          className="max-w-[740px] mx-auto px-5 sm:px-8 py-16 text-center transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(28px)' }}
        >
          <div className="w-10 h-[3px] bg-[#4db8c0] mx-auto mb-5 rounded-full" />
          <h3 className="text-2xl sm:text-3xl font-black text-black mb-4">
            What&apos;s Next?
          </h3>
          <p className="text-gray-600 text-[15px] leading-relaxed mb-10 max-w-[580px] mx-auto">
            With Careox, biofeedback-inspired practices give you{' '}
            <strong className="text-black">real-time awareness and control</strong> of your inner
            world. Rather than letting stress control you, you learn to respond with calm and to
            guide your body back to balance gently.
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
export default function () {
  return <BioComponent />;
}
