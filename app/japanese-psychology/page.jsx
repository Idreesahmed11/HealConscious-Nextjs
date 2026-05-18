import React from 'react';
import Link from 'next/link';
const heroImage = "/assets/Transparent-heal-conscious-image.png";;
const wisdomImg = "/assets/Careox_The-Wisdom-of-Japanese-Life-Psychology-300x225.webp";;

const JapanesePsychologySection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full font-sans  ">

      
      <div className="bg-[#E9E9E9] py-6 lg:py-10 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
          <div className="z-10 text-left">
            <div className="flex items-center gap-2 mb-4 text-[13px] font-bold tracking-tight">
              <button
                onClick={() => navigate('/')}
                className="text-black uppercase hover:text-[#4db8c0] transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
              >
                Home
              </button>
              <span className="text-gray-400">|</span>
              <span className="text-black uppercase">Japanese Life Psychology</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black uppercase text-black tracking-tighter">
              Japanese Life Psychology
            </h1>
          </div>
          <div className="mt-8 lg:mt-0 flex justify-end items-center max-w-full lg:max-w-[60%]">
            <img src={heroImage} alt="Careox Assets"  className="w-full h-auto object-contain max-h-[200px] lg:max-h-[250px]" />
          </div>
        </div>
      </div>
        <div className="h-10 md:h-16 bg-white" />

    
      <div className="bg-white py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-5">
                What is Japanese Life Psychology?
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                In the modern World, many of us feel caught in a relentless cycle of the hustle, the constant stream of digital information, and the pervasive feeling of{" "}
                <strong>"cultural future shock."</strong> We are disconnected from our bodies, our purpose, and the present moment, which is leading to burnout, anxiety, and deep dissatisfaction.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                But what if the path to peace wasn't through faster apps or more complicated routines but through timeless wisdom?
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                For centuries, Japanese culture has cultivated a profound philosophy rooted in balance, acceptance, and continuous, small improvements. This is the essence of{" "}
                <strong>Japanese Life Psychology,</strong>a philosophy that offers a complete framework for aligning your mind, body, and spirit.
              </p>
            </div>
            <div className="flex-shrink-0 w-full lg:w-[300px]">
              <img src={wisdomImg} alt="Japanese Life Psychology" className="w-full h-auto rounded-sm object-cover shadow-sm" />
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-white py-10 ">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">
                Benefits of Japanese Psychology
              </h2>
              <ul className="space-y-4 text-[15px] text-gray-700">
                <li className="flex gap-2">
                  <span className="mt-1 text-gray-400">•</span>
                  <p><strong>Kaizen & Neuroplasticity</strong> :Small and consistent steps rewire the brain and build lasting habits.</p>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-gray-400">•</span>
                  <p><strong>Shinrin-yoku & Somatic Therapy</strong> :Nature-based sensory awareness calms the nervous system and reduces stress.</p>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-gray-400">•</span>
                  <p><strong>Wabi-Sabi & CBT</strong>: Shifts perfectionism into acceptance, fostering resilience and self-compassion.</p>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-gray-400">•</span>
                  <p><strong>Holistic Resilience</strong> :These practices together strengthen emotional balance and long-term psychological health.</p>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">
                Your Integrated Path to Harmony
              </h2>
              <p className="text-[15px] text-gray-700 leading-relaxed mb-4">
                You don't have to study Japanese philosophy for years to achieve this balance.{" "}
                <strong>Careox</strong> was created to translate the abstract wisdom of Japanese Life Psychology into{" "}
                <strong>a tangible, 4-week self-healing program</strong> that fits your busy life.
              </p>
              <p className="text-[15px] text-gray-700 leading-relaxed mb-4">
                Careox acts as the bridge, ensuring you move from <em>understanding</em> these principles to <em>living</em> them.
              </p>
              <p className="text-[15px] font-bold text-gray-800 mb-4">
                How Careox Integrates Japanese Wisdom into Your Daily Practice:
              </p>
              <p className="text-[15px] text-gray-700 leading-relaxed mb-3">
                <span className="font-bold">» Kaizen-Driven Structure:</span> Our entire 4-week program is built on incremental improvement. We never ask for radical change, only small, consistent steps designed to engage neuroplasticity and minimize overwhelm.
              </p>
              <p className="text-[15px] text-gray-700 leading-relaxed mb-3">
                <span className="font-bold">» Wabi-Sabi & Kintsugi Healing:</span> Careox integrates techniques like Emotional Freedom and Somatic Experiencing to gently process trauma, helping you accept your past and integrate it as part of your golden, resilient future.
              </p>
              <p className="text-[15px] text-gray-700 leading-relaxed mb-4">
                <span className="font-bold">» Ikigai Focus:</span> The Careox journaling and reflection prompts are specifically engineered to guide you through the process of clarifying your values and purpose, turning your sense of aimlessness into clear, purpose-driven action.
              </p>
              <p className="text-[15px] text-gray-700 leading-relaxed">
                Careox provides the structure and the proven therapeutic tools (including NLP and Biofeedback) to ensure that the ancient wisdom of Japanese Life Psychology truly <strong>rewires your brain</strong> for lasting peace.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
            The Pillars of Japanese Balance: Timeless Concepts for Modern Life
          </h2>
          <p className="text-[15px] text-gray-700 leading-relaxed mb-10">
            At the heart of this philosophy are five powerful, actionable concepts that fundamentally shift your relationship with work, self, and the world.
          </p>

          <div className="mb-10">
            <h3 className="text-[16px] font-bold text-black mb-3">1. Ikigai (生き甲斐): The Joy of Purpose</h3>
            <p className="text-[15px] text-gray-700 leading-relaxed mb-3">
              Translated as "a reason for being," Ikigai is the deep, innate sense of fulfillment that comes from engaging with life. It is often visualized as the intersection of four core areas:
            </p>
            <ul className="text-[15px] text-gray-700 space-y-1 mb-4 ml-2">
              <li>What you love</li>
              <li>What you are good at</li>
              <li>What the world needs</li>
              <li>What you can be paid for</li>
            </ul>
            <p className="text-[15px] text-gray-700 leading-relaxed">
              For hustle-loving generation constantly searching for "meaning" and career satisfaction, Ikigai provides a focused and holistic map. It shifts the emphasis from financial success to integrated and sustainable joy.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-[16px] font-bold text-black mb-3">2. Wabi-Sabi (侘寂): The Beauty of Imperfection</h3>
            <p className="text-[15px] text-gray-700 leading-relaxed">
           Wabi-Sabi is an aesthetic and philosophical concept that celebrates the beauty of things that are imperfect, impermanent, and incomplete. It is about appreciating the natural cycle of growth and decay and finding elegance in simplicity.</p>
            <p className="text-[15px] text-gray-700 leading-relaxed">Wabi-Sabi is the ultimate counter to perfectionism and the curated “highlight reel” culture of social media. It fosters self-compassion and acceptance by reframing flaws as character and history.</p>
          </div>

          <div className="mb-10">
            <h3 className="text-[16px] font-bold text-black mb-3">3. Kaizen (改善): Continuous, Incremental Improvement</h3>
            <p className="text-[15px] text-gray-700 leading-relaxed">
            Kaizen translates to “change for the better” or “continuous improvement.” It is the principle that significant goals are achieved not through massive, radical overhauls, but through consistent, small, manageable steps.</p>
              <p className="text-[15px] text-gray-700 leading-relaxed">This approach is indispensable for rewiring habits and managing stress. Instead of failing at a massive New Year’s resolution, Kaizen encourages you to take a “one-minute action” every day. This consistency builds momentum and reduces the fear of failure.</p>
          </div>

          <div className="mb-10">
            <h3 className="text-[16px] font-bold text-black mb-3">4. Shinrin-yoku (森林浴): Forest Bathing and Stress Relief</h3>
            <p className="text-[15px] text-gray-700 leading-relaxed">Often translated as “forest bathing,” this is the practice of simply being calm and quiet among the trees, connecting with nature using all five senses. It is not about hiking or exercise but it is about mindful immersion.</p>
          <p className="text-[15px] text-gray-700 leading-relaxed">Backed by science, Shinrin-yoku lowers the stress hormone, reduces blood pressure, and improves immune function. It is a necessary physical antidote to the screen time overload that defines modern anxiety.</p>
          </div>

        </div>
      </div>

      
      <div className="bg-white py-16 border-t border-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
            Ready to Begin Your Self-Healing Journey?
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            This is an opportunity to move beyond the hustle culture and discover the quiet power of balance, acceptance, and purpose
          </p>
          <button
            className="inline-block bg-[#4db8c0] hover:bg-[#3aa4ac] text-white text-[13px] font-bold tracking-widest uppercase px-10 py-3 transition-colors duration-200 no-underline"
            style={{ textDecoration: 'none' }}
          >
            DOWNLOAD YOUR FREE IKAGI WORKSHEET HERE
          </button>
        </div>
      </div>

      
      <div className="bg-white py-16 border-t border-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
            Start Your Careox Healing Journey
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-3 max-w-2xl mx-auto">
            The principles are clear, and the science is sound. All that's left is for you to take the first step.
          </p>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-3 max-w-2xl mx-auto">
            <strong>Careox</strong> is ready to guide you from feeling overwhelmed and disconnected to living a life of profound presence and purpose.
          </p>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Click to explore the 4-week program and begin building your path to balanced living today.
          </p>
          <button
            className="inline-block bg-[#4db8c0] hover:bg-[#3aa4ac] text-white text-[13px] font-bold tracking-widest uppercase px-10 py-3 transition-colors duration-200 no-underline"
            style={{ textDecoration: 'none' }}
          >
            START YOUR CAREOX PROGRAM
          </button>
        </div>
      </div>

    </div>
  );
};

export default JapanesePsychologySection;

