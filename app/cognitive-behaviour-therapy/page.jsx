import React from 'react';
import Link from 'next/link';
const heroImage = "/assets/Transparent-heal-conscious-image.png";;
const cbtImg = "/assets/Practical-CBT-Tools-for-Anxiety-Stress-with-Careox-1-300x225.webp";;


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
    result: 'Self-critical thoughts are replaced with constructive self-talk and practical self-belief.',
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
    title: 'The "Thought Reframing Cycle":',
    desc: 'Our core tool walks you step-by-step to catch unhelpful thoughts, challenge its truth, and replace it with a response that supports your growth.',
  },
  {
    title: 'Journaling & Biofeedback:',
    desc: (
      <>
        You effortlessly track thought patterns to see <em>exactly</em> which beliefs trigger{' '}
        <strong className="text-black">stress</strong> or calmness. Awareness is the first step to freedom.
      </>
    ),
  },
  {
    title: 'Emotional Freedom Techniques (EFT):',
    desc: (
      <>
        We blend CBT with EFT to release the emotional charge that keeps negative thoughts alive,
        ensuring the change isn't just logical, but <strong className="text-black">felt</strong>.
      </>
    ),
  },
];

const additionalBullets = [
 
  {
    title: 'Building Emotional Intelligence (EQ):',
    desc: (
      <>
        You learn to evaluate thoughts not just logically but with self-awareness and{' '}
        <strong className="text-black">compassion</strong> leading to better{' '}
        <strong className="text-black">emotional regulation</strong>.
      </>
    ),
  },
];


const CBT = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full font-sans antialiased text-gray-800">

      
      <div className="bg-[#E9E9E9] py-14 lg:py-24 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">

      
          <div className="z-10 text-left">
            <div className="flex items-center flex-wrap gap-2 mb-4 text-[12px] font-bold tracking-wide uppercase">
              <button
                onClick={() => navigate('/')}
                className="text-black hover:text-[#4db8c0] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer"
              >
                Home
              </button>
              <span className="text-gray-400">|</span>
              <span className="text-black">Cognitive Behavioral Therapy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-black tracking-tighter leading-none">
            Cognitive Behavioral Therapy
            </h1>
          </div>

        
          <div className="w-full lg:w-auto flex justify-center lg:justify-end items-center lg:max-w-[55%]">
            <img
              src={heroImage}
              alt="Careox Assets"
              className="w-full h-auto object-contain max-h-[200px] lg:max-h-[250px]"
            />
          </div>
        </div>
      </div>

    
      <div className="h-10 md:h-16 bg-white" />

      
      <div className="w-full bg-white pb-0 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">

        
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-14">

        
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-black text-black mb-4 leading-snug">
                Are You Stuck in a Loop of Overthinking and Self-Doubt?
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
                You know the feeling of the smallest worries spiraling into a worst-case scenario in
                your head. You're exhausted from overthinking, and it feels impossible to break free
                from the same stress and anxiety-driven reactions.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
                This isn't a lack of willpower, it's a deeply wired pattern.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                <strong className="text-black">Cognitive Behavioral Therapy (CBT)</strong> is an
                evidence-based approach designed to change this. It proves your{' '}
                <strong className="text-black">thoughts, feelings, and behaviors</strong> are
                interconnected. By identifying the negative patterns that hold you back, you learn
                how to respond differently to stress, anxiety, and self-doubt.
              </p>
            </div>

            
            <div className="flex-1 flex  lg: items-start">
              <img
                src={cbtImg}
                alt="CBT Tools"
                className="w-full max-w-[320px] lg:max-w-[360px] h-auto object-cover rounded-md"
              />
            </div>
          </div>

          
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-14">

        
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-black text-black mb-4 leading-snug">
                Why Careox is the Best Way to Practice CBT
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
                CBT shouldn't feel like a textbook. Careox takes these powerful, proven concepts
                and weaves them into{' '}
                <strong className="text-black">simple, practical tools</strong> you can use right now.
                Careox doesn't just teach you CBT but makes it second nature.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                Here's how Careox integrates CBT for maximum, real-world impact:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-4 text-gray-700 text-[15px]">
                {howList.map(({ title, desc }, i) => (
                  <li key={i}>
                    <strong className="text-black">{title}</strong> {desc}
                  </li>
                ))}
              </ul>
            </div>

            
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-black text-black mb-3 leading-snug">
                What You'll Gain:
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-5">
                Careox makes practicing CBT consistent, leading to measurable results in your life.
                With every session, you're building lasting mental resilience.
              </p>

            
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full border-collapse text-[15px]">
                  <thead>
                    <tr className="border border-gray-300 bg-gray-50">
                      <th className="px-4 py-3 text-left font-bold text-black w-[42%]">Benefit</th>
                      <th className="px-4 py-3 text-left font-bold text-black border-l border-gray-300">
                        Result in Your Life
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {gains.map(({ benefit, result }, i) => (
                      <tr key={i} className="border border-gray-300">
                        <td className="px-4 py-3 font-bold text-black align-top">{benefit}</td>
                        <td className="px-4 py-3 text-gray-700 border-l border-gray-300 align-top">
                          {result}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              
              <div className="sm:hidden space-y-3">
                {gains.map(({ benefit, result }, i) => (
                  <div key={i} className="border border-gray-300 rounded-md overflow-hidden">
                    <div className="bg-gray-50 px-4 py-2 font-bold text-black text-[15px]">
                      {benefit}
                    </div>
                    <div className="px-4 py-3 text-gray-700 text-[14px] leading-relaxed">
                      {result}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
          <div className="mb-14">
            <ul className="list-disc list-outside pl-5 space-y-4 text-gray-700 text-[15px]">
              {additionalBullets.map(({ title, desc }, i) => (
                <li key={i}>
                  <strong className="text-black">{title}</strong> {desc}
                </li>
              ))}
            </ul>
          </div>

        
          <div className="mb-14">
            <h2 className="text-xl sm:text-2xl font-black text-black mb-4">
              The Science Behind CBT
            </h2>
            <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
              Your brain is wired for familiarity. If you've spent years repeating negative loops,
              those pathways become the default. A single negative thought can quickly spark fear,
              fueling <strong className="text-black">anxiety</strong> and leading to avoidance
              behaviors that keep you trapped.
            </p>
            <p className=".text-gray-700 text-[15px] leading-relaxed mb-3 font-bold text-black">
              CBT interrupts this cycle.
            </p>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              It teaches you how to catch those unhelpful thoughts,{' '}
              <strong className="text-black">question their accuracy</strong>, and shift how you
              interpret situations. Researchers call this{' '}
              <strong className="text-black">
                "cognitive restructuring" — a way of creating new, supportive neural pathways
              </strong>{' '}
              that bring balance and clarity.
            </p>
          </div>

        </div>
      </div>

      
      <div className="w-full bg-white py-14 px-4 sm:px-6 md:px-8">
        <div className="max-w-[860px] mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-black text-black mb-5">
            What's Next?
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed mb-10 max-w-[720px] mx-auto">
            Careox is more than a tool to rewire your brain. If you have any questions after 4
            weeks, you can always connect with our psychologists over the{' '}
            <strong className="text-black">Connect app</strong>. CBT is one of the{' '}
            <strong className="text-black">12 science-backed pillars</strong> we use, combined
            with methods like somatic experiencing, time management and more to reshape how you
            think, feel, and live.
          </p>
          <button
            onClick={() => window.open('#', '_blank')}
            className="
              inline-block bg-[#4db8c0] hover:bg-[#3da8b0] active:bg-[#2d98a0]
              text-white text-[13px] font-bold uppercase tracking-widest
              px-8 sm:px-12 py-4
              border-2 border-[#4db8c0] hover:border-[#3da8b0]
              transition-colors duration-200
              cursor-pointer
            "
          >
            Reframe Your Mind. Get Careox Today
          </button>
        </div>
      </div>

    </div>
  );
};

export default CBT;

