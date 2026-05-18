import React from 'react';


import LogoSymbol from '../assets/Careox-Connect-Mobile-App-Screens-300x275.png'; 
import HeroDevicesImage from '../assets/healconscious-carebox-home-banner-row-1-1-2-300x275-DGHTNQbA.webp'; 
import ZombieBackgroundImage from '../assets/Emotional-Intelligence-EQ-Management-with-Careox-300x225.webp'; 
import firstImg from "../assets/first-wave-300x164.png";
import secondImg from "../assets/second-wave-300x168.png";
import thirdImg from "../assets/third-wave-300x166.png";
import futureImg from "../assets/Heal-Conscious-Future-Culture-Shock.jpg";
import img1 from "../assets/image_one-1-411x230.webp";
import img2 from "../assets/Heal-Conscious-Careox-Connect-Tablet-411x213.png";
import week1Img from "../assets/week1-300x292.png";
import week2Img from "../assets/week2-300x296.png";
import week3Img from "../assets/week3-296x300.png";
import week4Img from "../assets/week4-300x298.png";
import afterWeekImg from "../assets/image_three-237x300.webp";
import emotionalFreedomImg from "../assets/emotional-freedom-300x223.png";
import biofeedbackImg from "../assets/biofeedback-300x225.webp";
import nlpImg from "../assets/nlp-300x225.webp";
import timeManagementImg from "../assets/Time-Management-300x225.webp";
import eqManagementImg from "../assets/Emotional-Intelligence-EQ-Management-with-Careox-300x225 (1).webp";
import somaticImg from "../assets/Somatic-Healing-for-Trauma-Stress-300x225.webp";
import yogaImg from "../assets/yoga-300x225.webp";
import sportsPsychologyImg from "../assets/Sports-Psychology-300x225.webp";
import spiritualPsychologyImg from "../assets/Spiritual-Psychology-300x225.webp";
import spiritualTappingImg from "../assets/Careox_-Spiritual-Tapping-EFT-for-Stress-Relief-Inner-Peace-300x225.webp";
import japanesePsychologyImg from "../assets/Careox_The-Wisdom-of-Japanese-Life-Psychology-300x225.webp";
import cbtToolsImg from "../assets/Practical-CBT-Tools-for-Anxiety-Stress-with-Careox-300x225.webp";


const HealConsciousPage = () => {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans">

      <section className="bg-[#f2f2f2] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 py-12 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

            <div className="w-full lg:w-1/2 space-y-6">
              <nav className="text-xs font-bold tracking-[0.2em] flex items-center gap-3 text-gray-800">
                <span>HOME</span>
                <span className="text-gray-300 font-normal">|</span>
                <span className="text-gray-400">WHAT IS CAREOX?</span>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] text-[#1a1a1a]">
                WHAT IS CAREOX?
              </h1>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="flex flex-row items-center gap-1 w-full max-w-[600px]">
                <div className="w-1/2">
                  <img
                    src={HeroDevicesImage}
                    alt="Careox Devices"
                    className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="w-1/2">
                  <img
                    src={LogoSymbol}
                    alt="Careox Connect"
                    className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    
      <div className="py-10" />

      
      <section className="container mx-auto px-6 lg:px-20">
        <div className="relative w-full rounded-sm overflow-hidden min-h-[400px]">
          <div className="absolute inset-0 z-0">
            <img src={ZombieBackgroundImage} alt="Background Process" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 bg-gradient-to-r from-black/70 to-transparent"></div>
          </div>
          <div className="relative z-10 h-full flex items-center p-8 md:p-16 lg:p-24">
            <div className="max-w-4xl text-white space-y-6">
              <h3 className="text-xl md:text-2xl font-bold tracking-wide">The Thought Process</h3>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                We are Living The Third Wave of Culture Shock
              </h2>
              <div className="space-y-4 text-sm md:text-base lg:text-lg font-light leading-relaxed opacity-90">
                <p>Welcome to the realm of conscious self-healing. Living in the era of Alvin Toffler's third wave has much deeper impact than the social scientist himself could calculate.</p>
                <p>Truth be told he expressed it wholeheartedly that the time is upon us when meaning making perspectives will be lost amidst the social culture boosted by the revolutionary third wave.</p>
                <p>Toffler a hated man among contemporary social scientist and a revered advisors for as many as five state presidents classified human social development on the timeline into following categories on the timeline starting at the event horizon of the modern society as we know it today.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <div className="py-10" />

    
      <section className="history-section">
        <h2 className="history-title">The History</h2>
        <div className="history-cards">
          <div className="history-card">
            <h3>First Wave</h3>
            <img src={firstImg} alt="first wave" />
            <p>Starting with what is dubbed as the start of agricultural society, at different points in time (10,000 – 8,000 BCE) for different corners of the world, the first wave ended the neolithic hunter-gathered society and started shaping the modern society as we know it today.</p>
          </div>
          <div className="history-card">
            <h3>Second Wave</h3>
            <img src={secondImg} alt="second wave" />
            <p>The industrial revolution marked to have started in 1760 AD ushered the human society into a new era of socio-economic changes that paved way for the modern society that came to be after what we would like to call the Limbo period (1914 onwards) until the rise of computers, internet and the dot com bubble.</p>
          </div>
          <div className="history-card">
            <h3>Third Wave</h3>
            <img src={thirdImg} alt="third wave" />
            <p>Although Alvin Toffler marks the year 1950 AD as the start of third wave, the date cannot be unanimously applied to the planet as a whole. The Limbo period can be marked to start from 1914 AD up until the impact of computer, internet and dot com bubble hit the country or place in question.</p>
          </div>
        </div>
      </section>

    
      <div className="py-10" />

    
      <section className="container mx-auto px-6 lg:px-20">
        <div className="relative w-full rounded-sm overflow-hidden min-h-[400px]">
          <div className="absolute inset-0 z-0">
            <img src={futureImg} alt="Background Process" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 bg-gradient-to-r from-black/70 to-transparent"></div>
          </div>
          <div className="relative z-10 h-full flex items-center p-8 md:p-16 lg:p-24">
            <div className="max-w-4xl text-white space-y-6">
              <h3 className="text-xl md:text-2xl font-bold tracking-wide">The Thought Process</h3>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                We are Living The Third Wave of Culture Shock
              </h2>
              <div className="space-y-4 text-sm md:text-base lg:text-lg font-light leading-relaxed opacity-90">
                <p>Welcome to the realm of conscious self-healing. Living in the era of Alvin Toffler's third wave has much deeper impact than the social scientist himself could calculate.</p>
                <p>Truth be told he expressed it wholeheartedly that the time is upon us when meaning making perspectives will be lost amidst the social culture boosted by the revolutionary third wave.</p>
                <p>Toffler a hated man among contemporary social scientist and a revered advisors for as many as five state presidents classified human social development on the timeline into following categories on the timeline starting at the event horizon of the modern society as we know it today.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <div className="py-16 mt-5" />

  
      <section className="py-16 px-4 md:px-10 bg-white mt-10 ml-6 md:ml-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

          
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            <img src={img1} alt="solution" className="w-full rounded-xl object-cover" />
            <img src={img2} alt="careox box" className="w-full rounded-xl object-cover" />
          </div>

          
          <div className="w-full md:w-1/2 text-gray-700 flex flex-col justify-center gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">The Solution</h2>
              <p className="text-sm md:text-base leading-relaxed">
                Fret not, understanding the socio-cultural needs of human development and the social differences we have created a module that focuses on cultivating change from within, regardless of where you live, you can use the guide to step out of the daily life bubbles and recreate your self-image in your own true reflection.
              </p>
            </div>
            <div>
              <h2 className="text-base md:text-lg font-bold mb-3">
                Careox: mental healthcare in a box | 4 Week Guide to Happiness
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                Our self-help mental health guide is carefully curated and crafted by revered psychologist in their niche, and personal coaching and healing. The thematic guide is meant to help you through redefining yourself, in the reflection of who you truly are, helping you reach into the subconscious corners of mind. Things you have buried deep, the pain and trauma you carry every day amidst the deafening and blinding social burden after the culture shock planet earth and humanity as a whole is living through today.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">What's in week 1?</h2>
            <img src={week1Img} alt="Week 1" className="w-full rounded-2xl object-cover aspect-square" />
            <p className="text-sm text-gray-600 leading-relaxed">
              Week 1 – starts building your habits such as general placements and the most important habit to start journaling your daily pain points that would help you improve your mental healthcare and your basic mental wellbeing.
            </p>
          </div>

          <div className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">What's in week 2?</h2>
            <img src={week2Img} alt="Week 2" className="w-full rounded-2xl object-cover aspect-square" />
            <p className="text-sm text-gray-600 leading-relaxed">
              Week 2 – starts building your base ground work with physical and mental efforts and mental health and wellbeing focused activities that would help you keep up the processes for the coming week.
            </p>
          </div>

          <div className="flex flex-col gap-4">
         <h2 className="text-xl md:text-2xl font-bold text-gray-900">What's in week 3?</h2>
            <img src={week3Img} alt="Week 3" className="w-full rounded-2xl object-cover aspect-square" />
            <p className="text-sm text-gray-600 leading-relaxed">
              Week 3 – helps you place the final precursors before you can start rewiring your brain and carve a new identity for yourself using our Careox mental healthcare in a box as a tool that would allow you to rewire your brain.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">What's in week 4?</h2>
            <img src={week4Img} alt="Week 4" className="w-full rounded-2xl object-cover aspect-square" />
            <p className="text-sm text-gray-600 leading-relaxed">
              Week 4 – starts with your creating a new image of yourself while practising and performing your own brain rewiring you would also be able to look at things retrospectively since you started using the Careox program and beyond.
            </p>
          </div>

        </div>

      
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-16 pt-10 border-t border-gray-100">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What's After Week 4?</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              After 4 weeks; we are still here to answer your questions.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={afterWeekImg}
              alt="After Week 4"
              className="rounded-2xl"
              style={{ width: '237px', height: '300px', objectFit: 'cover' }}
            />
          </div>
        </div>

      
        <div className="max-w-4xl mx-auto text-center mt-20">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            The science behind Careox
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Careox offers a holistic approach to enhancing mental well-being by integrating a diverse range of techniques, including Emotional Freedom, Biofeedback, Neurolinguistic Programming (NLP), Time Management, Emotional Quotient (EQ) management, Somatic Experiencing, Yoga, Sports Psychology, Japanese Life Psychology, and Spiritual Tapping. By combining these methods, individuals can address their mental health's emotional, cognitive, and physical aspects, leading to a more balanced and fulfilling life.
          </p>
        </div>

      </section>

   
<section className="py-16 px-4 md:px-10 bg-white">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">

  
    <div className="flex flex-col items-center text-center gap-4">
      <img src={emotionalFreedomImg} alt="Emotional Freedom" className="object-cover" style={{ width: '340px', height: '240px' }} />
      <h3 className="text-lg md:text-xl font-bold text-gray-900">Emotional Freedom</h3>
      <p className="text-sm text-gray-600 leading-relaxed">Helps release emotional blocks and create healthier thought patterns, freeing you from old triggers</p>
    </div>

    
    <div className="flex flex-col items-center text-center gap-4">
      <img src={biofeedbackImg} alt="Biofeedback" className="object-cover" style={{ width: '340px', height: '240px' }} />
      <h3 className="text-lg md:text-xl font-bold text-gray-900">Biofeedback</h3>
      <p className="text-sm text-gray-600 leading-relaxed">Tracks your thoughts, feelings, and habits so you can spot patterns and regain balance</p>
    </div>

    <div className="flex flex-col items-center text-center gap-4">
      <img src={nlpImg} alt="NLP Neurolinguistic Programming" className="object-cover" style={{ width: '340px', height: '240px' }} />
      <h3 className="text-lg md:text-xl font-bold text-gray-900">NLP (Neurolinguistic Programming)</h3>
      <p className="text-sm text-gray-600 leading-relaxed">Rewires negative self-talk into empowering thoughts, boosting confidence and resilience.</p>
    </div>

    
    <div className="flex flex-col items-center text-center gap-4">
      <img src={timeManagementImg} alt="Time Management" className="object-cover" style={{ width: '340px', height: '240px' }} />
      <h3 className="text-lg md:text-xl font-bold text-gray-900">Time Management</h3>
      <p className="text-sm text-gray-600 leading-relaxed">Builds structure and balance in your day, reducing stress while improving focus and productivity.</p>
    </div>

    
    <div className="flex flex-col items-center text-center gap-4">
      <img src={eqManagementImg} alt="Emotional Quotient EQ Management" className="object-cover" style={{ width: '340px', height: '240px' }} />
      <h3 className="text-lg md:text-xl font-bold text-gray-900">Emotional Quotient (EQ) Management</h3>
      <p className="text-sm text-gray-600 leading-relaxed">Strengthens self-awareness, empathy, and emotional control for healthier relationships.</p>
    </div>

  
    <div className="flex flex-col items-center text-center gap-4">
      <img src={somaticImg} alt="Somatic Experiencing" className="object-cover" style={{ width: '340px', height: '240px' }} />
      <h3 className="text-lg md:text-xl font-bold text-gray-900">Somatic Experiencing</h3>
      <p className="text-sm text-gray-600 leading-relaxed">Uses body awareness to release stored stress and trauma, restoring calm and safety.</p>
    </div>

  </div>
  

<section className="py-16 px-4 md:px-10 bg-white">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">


    <div className="flex flex-col items-center text-center gap-4">
      <img src={yogaImg} alt="Yoga" className="object-cover" style={{ width: '340px', height: '240px' }} />
      <h3 className="text-lg md:text-xl font-bold text-gray-900">Yoga</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Combines breath, movement, and mindfulness to reduce stress and restore inner balance.
      </p>
    </div>


    <div className="flex flex-col items-center text-center gap-4">
      <img src={sportsPsychologyImg} alt="Sports Psychology" className="object-cover" style={{ width: '340px', height: '240px' }} />
      <h3 className="text-lg md:text-xl font-bold text-gray-900">Sports Psychology</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Applies mental performance techniques to build focus, resilience, and motivation in daily life.
      </p>
    </div>

    <div className="flex flex-col items-center text-center gap-4">
      <img src={spiritualPsychologyImg} alt="Spiritual Psychology" className="object-cover" style={{ width: '340px', height: '240px' }} />
      <h3 className="text-lg md:text-xl font-bold text-gray-900">Spiritual Psychology</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Connects inner purpose and meaning to everyday experiences for deeper personal growth.
      </p>
    </div>

    
    <div className="flex flex-col items-center text-center gap-4">
      <img src={spiritualTappingImg} alt="Spiritual Tapping EFT" className="object-cover" style={{ width: '340px', height: '240px' }} />
      <h3 className="text-lg md:text-xl font-bold text-gray-900">Spiritual Tapping (EFT)</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Uses tapping on energy points to release stress, anxiety, and emotional blockages for inner peace.
      </p>
    </div>

  
    <div className="flex flex-col items-center text-center gap-4">
      <img src={japanesePsychologyImg} alt="Japanese Life Psychology" className="object-cover" style={{ width: '340px', height: '240px' }} />
      <h3 className="text-lg md:text-xl font-bold text-gray-900">Japanese Life Psychology</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Draws on timeless Japanese wisdom to cultivate purpose, simplicity, and emotional wellbeing.
      </p>
    </div>

    
    <div className="flex flex-col items-center text-center gap-4">
      <img src={cbtToolsImg} alt="Practical CBT Tools" className="object-cover" style={{ width: '340px', height: '240px' }} />
      <h3 className="text-lg md:text-xl font-bold text-gray-900">Practical CBT Tools</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Provides cognitive behavioural techniques to manage anxiety and stress in practical everyday situations.
      </p>
    </div>

  </div>
</section>
</section>
    </div>
  );
};

export default HealConsciousPage;

