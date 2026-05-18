'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
const heroImage = '/assets/Transparent-heal-conscious-image.png';;
const spiritualImg = '/assets/Spiritual-Psychology-300x225 (1).webp';;

const SpiritualPsychologySection = () => {
  const router = useRouter();

  return (
    <div className="w-full font-sans">

    
      <div className="bg-[#E9E9E9] py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
          <div className="z-10 text-left">
            <div className="flex items-center gap-2 mb-4 text-[13px] font-bold tracking-tight">
              <button
                onClick={() => router.push('/')}
                className="text-black uppercase hover:text-[#4db8c0] transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
              >
                Home
              </button>
              <span className="text-gray-400">|</span>
              <span className="text-black uppercase">Spiritual Psychology</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black uppercase text-black tracking-tighter">
              Spiritual Psychology
            </h1>
          </div>
          <div className="mt-8 lg:mt-0 flex justify-end items-center max-w-full lg:max-w-[60%]">
            <img
              src={heroImage}
              alt="Careox Assets"
              className="w-full h-auto object-contain max-h-[200px] lg:max-h-[250px]"
            />
          </div>
        </div>
      </div>

 <div className="h-10 md:h-16 bg-white" />
  
      <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-black mb-4">What is Spiritual Psychology?</h2>
          <p className="leading-relaxed">
            Spiritual Psychology is the practice of aligning mind, body, and soul in the
            healing process. Rather than treating thoughts in isolation, it honors the deeper
            layers of human experience including values, beliefs, energy, and purpose. By
            weaving together traditional Islamic and Chinese insights with contemporary
            therapeutic methods, it provides a pathway for healing that is both profound and
            practical.
          </p>
        </div>
        <div className="flex ">
          <img
            src={spiritualImg}
            alt="Spiritual Psychology"
            className="w-full max-w-sm h-auto object-contain rounded-md"
          />
        </div>
      </div>

       

  
      <div className="max-w-[1200px] mx-auto px-6 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-black mb-5">Core Benefits of Spiritual Psychology</h2>
          <ul className="list-disc pl-5 space-y-3 leading-relaxed">
            <li><strong>Inner Balance</strong> – Cultivates harmony between body, mind, and soul.</li>
            <li><strong>Resilience</strong> – Strengthens the ability to face life's challenges with patience and courage.</li>
            <li><strong>Emotional Regulation</strong> – Provides tools for calming overwhelming thoughts and feelings.</li>
            <li><strong>Deeper Meaning</strong> – Connects daily actions to values and purpose.</li>
            <li><strong>Wholeness</strong> – Encourages healing that integrates the spiritual and the psychological.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-black mb-4">How Careox integrates Spiritual Psychology</h2>
          <p className="leading-relaxed mb-4">
            Careox makes spiritual wisdom practical by embedding it into structured healing practices:
          </p>
          <div className="space-y-4 leading-relaxed">
            <p><span className="text-[#4db8c0] mr-2">»</span><strong>Guided Gratitude Reflections</strong> – Inspired by Islamic practice of <em>shukr</em>, Careox integrates structured gratitude journaling to shift perspective from scarcity to abundance.</p>
            <p><span className="text-[#4db8c0] mr-2">»</span><strong>Breath & Energy Balance</strong> – Drawing on Chinese <em>Qi Gong</em> principles, Careox incorporates mindful breathing techniques to regulate energy flow and reduce tension.</p>
            <p><span className="text-[#4db8c0] mr-2">»</span><strong>Integrated Therapy Tools</strong> – Combining traditional wisdom with modern methods like CBT and somatic awareness.</p>
            <p><span className="text-[#4db8c0] mr-2">»</span><strong>Kaizen Spiritual Growth</strong> – Encouraging small, consistent steps to bring sacred principles into daily routines.</p>
          </div>
        </div>
      </div>

  
      <div className="max-w-[1200px] mx-auto px-6 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div />
        <div>
          <h2 className="text-2xl font-black mb-4">Mini Practice: The Gratitude Breath</h2>
          <div className="space-y-2 leading-relaxed">
            <p><span className="mr-2">»</span> Sit quietly and place your hand on your heart.</p>
            <p><span className="mr-2">»</span> Inhale deeply, reflecting on one blessing you're thankful for.</p>
            <p><span className="mr-2">»</span> Exhale slowly, releasing stress with the thought: <em>"This moment is enough."</em></p>
            <p><span className="mr-2">»</span> Repeat for 2–3 minutes to shift your focus from pressure to presence.</p>
          </div>
        </div>
      </div>

  
      <div className="max-w-[1200px] mx-auto px-6 pb-12">
        <h2 className="text-3xl font-black mb-6">How It Works</h2>
        <div className="space-y-6 leading-relaxed">
          <p>
            <span className="mr-2">»</span>
            <strong>Islamic Wisdom:</strong> Islamic tradition emphasizes <em>tazkiyah al-nafs</em> (purification of the soul), mindfulness in prayer (<em>salah</em>), and gratitude as daily practices that strengthen emotional resilience. These principles mirror modern therapies by teaching emotional regulation, patience, and compassion as tools for psychological well-being.
          </p>
          <p>
            <span className="mr-2">»</span>
            <strong>Chinese Philosophy:</strong> Chinese wisdom, rooted in concepts like <em>Qi</em> (life energy) and balance between <em>yin</em> and <em>yang</em>, highlights harmony within the body and its connection to the environment. Practices such as breathwork and mindful movement align with today's somatic therapies, helping the nervous system reset and reduce stress.
          </p>
          <p>
            <span className="mr-2">»</span>
            <strong>Modern Therapeutic Integration:</strong> Contemporary psychology validates these traditions, showing that practices like gratitude journaling, body-focused mindfulness and value-based reflection support long-term emotional health. Together, they form a framework where ancient insights are supported by scientific validation.
          </p>
        </div>
      </div>

      
      <div className="w-full py-16 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl font-black mb-4">What's Next?</h2>
        <p className="max-w-2xl leading-relaxed text-gray-700 mb-8">
          You don't need years of study to bring the depth of spiritual psychology into your life.
          Careox integrates timeless Islamic and Chinese wisdom with modern therapeutic tools into
          a simple, 4-week self-healing program that supports balance, resilience, and inner peace.
        </p>
        <button
          onClick={() => router.push('/get-careox')}
          className="bg-[#4db8c0] hover:bg-[#3aa8b0] text-white font-bold tracking-widest uppercase px-5 py-4 transition-colors duration-200"
        >
          GET STARTED WITH CAREOX
        </button>
      </div>

    </div>
  );
};

export default SpiritualPsychologySection;

