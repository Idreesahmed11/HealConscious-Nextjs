'use client';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';


const heroImage = '/assets/Transparent-heal-conscious-image.png';
const cbtImg = '/assets/Practical-CBT-Tools-for-Anxiety-Stress-with-Careox-1-300x225.webp';

const gains = [
  {
    benefit: 'Freedom from Anxiety',
    result: 'Negative thought loops lose their power, reducing constant worry and stress.',
  },
  {
    benefit: 'Better Emotional Control',
    result: (
      <>
        You learn to <strong className="text-black">respond</strong> instead of{' '}
        <strong className="text-black">react</strong> to challenges and triggers.
      </>
    ),
  },
  {
    benefit: 'Unbreakable Confidence',
    result:
      'Self-critical thoughts are replaced with constructive self-talk and practical self-belief.',
  },
  {
    benefit: 'Real-Time Resilience',
    result: (
      <>
        You get tools you can apply{' '}
        <em className="font-bold">immediately</em> in high-stress situations.
      </>
    ),
  },
];

const howList = [
  {
    icon: '◎',
    title: 'The "Thought Reframing Cycle"',
    desc: 'Our core tool walks you step-by-step to catch unhelpful thoughts, challenge their truth, and replace them with a response that supports your growth.',
  },
  {
    icon: '✦',
    title: 'Journaling & Biofeedback',
    desc: (
      <>
        You effortlessly track thought patterns to see <em>exactly</em> which beliefs trigger{' '}
        <strong className="text-black">stress</strong> or calmness. Awareness is the first step to
        freedom.
      </>
    ),
  },
  {
    icon: '◈',
    title: 'Emotional Freedom Techniques (EFT)',
    desc: (
      <>
        We blend CBT with EFT to release the emotional charge that keeps negative thoughts alive,
        ensuring the change isn't just logical, but{' '}
        <strong className="text-black">felt</strong>.
      </>
    ),
  },
  {
    icon: '⬡',
    title: 'Building Emotional Intelligence (EQ)',
    desc: (
      <>
        You learn to evaluate thoughts not just logically but with self-awareness and{' '}
        <strong className="text-black">compassion</strong> — leading to better{' '}
        <strong className="text-black">emotional regulation</strong>.
      </>
    ),
  },
];


const CognitiveComponent = () => {
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
              <span className="text-black">Cognitive Behavioral Therapy</span>
            </nav>

            <div className="w-10 h-[3px] bg-[#4db8c0] mb-4 rounded-full" />

            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black uppercase text-black tracking-tight leading-[1.1]">
              Cognitive<br />
              <span className="text-[#4db8c0]">Behavioral</span><br />
              Therapy
            </h1>

            <p className="mt-4 text-gray-600 text-[14px] leading-relaxed max-w-sm">
              Rewire negative thought patterns and build lasting mental resilience with evidence-based CBT tools.
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
            <SectionLabel>The Problem</SectionLabel>
            <h3 className="text-2xl sm:text-3xl font-black text-black mb-5 leading-snug">
              Are You Stuck in a Loop of Overthinking and Self-Doubt?
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
              You know the feeling — the smallest worries spiraling into a worst-case scenario in
              your head. You're exhausted from overthinking, and it feels impossible to break free
              from the same stress and anxiety-driven reactions.
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
              This isn't a lack of willpower. It's a deeply wired pattern.
            </p>
            <div className="border-l-4 border-[#4db8c0] pl-5 py-1">
              <p className="text-gray-700 text-[15px] leading-relaxed">
                <strong className="text-black">Cognitive Behavioral Therapy (CBT)</strong> is an
                evidence-based approach designed to change this. It proves your{' '}
                <strong className="text-black">thoughts, feelings, and behaviors</strong> are
                interconnected. By identifying the negative patterns that hold you back, you learn
                how to respond differently to stress, anxiety, and self-doubt.
              </p>
            </div>
          </div>

    
          <div className="flex-shrink-0 flex items-start justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 border-2 border-[#4db8c0]/30 rounded-lg -z-10" />
              <img
                src={cbtImg}
                alt="CBT Tools with Careox"
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
            <SectionLabel>Methodology</SectionLabel>
            <h3 className="text-2xl sm:text-3xl font-black text-black mb-4 leading-snug">
              Why Careox is the Best Way to Practise CBT
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              CBT shouldn't feel like a textbook. Careox takes these powerful, proven concepts and
              weaves them into{' '}
              <strong className="text-black">simple, practical tools</strong> you can use right now
              — making CBT second nature.
            </p>
            <ul className="space-y-5">
              {howList.map(({ icon, title, desc }, i) => (
                <li
                  key={i}
                  className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:border-[#4db8c0] hover:shadow-md transition-all duration-200"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#4db8c0]/10 flex items-center justify-center text-[#4db8c0] text-lg">
                    {icon}
                  </span>
                  <span className="text-[14px] text-gray-700 leading-relaxed">
                    <strong className="text-black font-bold block mb-0.5">{title}</strong>
                    {desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <SectionLabel>Outcomes</SectionLabel>
            <h3 className="text-2xl sm:text-3xl font-black text-black mb-3 leading-snug">
              What You'll Gain
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              Careox makes practising CBT consistent, leading to measurable results. With every
              session you're building lasting mental resilience.
            </p>

      
            <div className="hidden sm:block overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full border-collapse text-[14px]">
                <thead>
                  <tr className="bg-[#4db8c0]/10">
                    <th className="px-5 py-3 text-left font-black text-black w-[42%] text-[12px] uppercase tracking-wider">
                      Benefit
                    </th>
                    <th className="px-5 py-3 text-left font-black text-black border-l border-gray-200 text-[12px] uppercase tracking-wider">
                      Result in Your Life
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {gains.map(({ benefit, result }, i) => (
                    <tr
                      key={i}
                      className="border-t border-gray-200 hover:bg-[#4db8c0]/5 transition-colors duration-150"
                    >
                      <td className="px-5 py-4 font-bold text-black align-top text-[14px]">
                        {benefit}
                      </td>
                      <td className="px-5 py-4 text-gray-600 border-l border-gray-200 align-top text-[14px] leading-relaxed">
                        {result}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

        
            <div className="sm:hidden space-y-3">
              {gains.map(({ benefit, result }, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-[#4db8c0]/10 px-4 py-2 font-bold text-black text-[14px]">
                    {benefit}
                  </div>
                  <div className="px-4 py-3 text-gray-600 text-[14px] leading-relaxed">
                    {result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

    
        <section
          ref={(el) => addRef(el, 2)}
          className="transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(28px)' }}
        >
          <SectionLabel>The Science</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-black mb-5 leading-snug">
                The Science Behind CBT
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                Your brain is wired for familiarity. If you've spent years repeating negative loops,
                those pathways become the default. A single negative thought can quickly spark fear,
                fueling <strong className="text-black">anxiety</strong> and leading to avoidance
                behaviors that keep you trapped.
              </p>

          
              <div className="bg-[#4db8c0]/8 border border-[#4db8c0]/30 rounded-xl px-6 py-5">
                <p className="text-black font-black text-[15px] mb-2">CBT interrupts this cycle.</p>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  It teaches you how to catch unhelpful thoughts,{' '}
                  <strong className="text-black">question their accuracy</strong>, and shift how you
                  interpret situations — creating new, supportive neural pathways that bring balance
                  and clarity.
                </p>
              </div>
            </div>

      
            <div className="flex flex-col gap-4 justify-center">
              {[
                { label: 'Negative thought surfaces', color: 'bg-red-50 border-red-200 text-red-700' },
                { label: 'CBT catches & challenges it', color: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
                { label: 'New balanced response formed', color: 'bg-[#4db8c0]/10 border-[#4db8c0]/40 text-[#2d98a0]' },
                { label: 'New neural pathway reinforced', color: 'bg-green-50 border-green-200 text-green-700' },
              ].map(({ label, color }, i) => (
                <div key={i} className={`flex items-center gap-4 border rounded-xl px-5 py-4 ${color}`}>
                  <span className="font-black text-[11px] uppercase tracking-widest opacity-60">
                    Step {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-bold text-[14px]">{label}</span>
                  {i < 3 && (
                    <span className="ml-auto text-lg opacity-40">↓</span>
                  )}
                </div>
              ))}
            </div>
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
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-4">
            What's Next?
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed mb-10 max-w-[580px] mx-auto">
            Careox is more than a tool to rewire your brain. If you have any questions after 4
            weeks, you can always connect with our psychologists over the{' '}
            <strong className="text-black">Connect app</strong>. CBT is one of the{' '}
            <strong className="text-black">12 science-backed pillars</strong> we use — combined
            with somatic experiencing, time management and more — to reshape how you think, feel,
            and live.
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
            Reframe Your Mind — Get Careox Today
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

export default CognitiveComponent;
