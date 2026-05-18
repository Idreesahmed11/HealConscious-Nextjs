import React from 'react';
import Link from 'next/link';
const heroImage = "/assets/Transparent-heal-conscious-image.png";;
const sportsPsychologyImg = "/assets/Sports-Psychology-300x225 (1).webp";;

const SportsPsychology = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full font-sans">

  
      <div className="bg-[#E9E9E9] py-2 lg:py-24 relative overflow-hidden">
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
              <span className="text-black uppercase">Sports Psychology</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black uppercase text-black tracking-tighter">
              Sports Psychology
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

      <div className="w-full bg-white py-12 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">

          
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-14">
            <div className="flex-1">
              <h2 className="text-2xl font-black text-black mb-4">
                What is Sports Psychology?
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                Sports psychology is the science of how thoughts and emotions affect performance.<br />
                It studies focus, motivation, confidence, and resilience not just for athletes, but
                for anyone who wants to thrive under pressure.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                At its core, sports psychology is about{' '}
                <span className="font-bold text-black">training your mind like a muscle,</span>{' '}
                and strengthening it with techniques that improve mental stamina and focus.
              </p>
            </div>
            <div className="flex-1 flex  items-start">
              <img
                src={sportsPsychologyImg}
                alt="Sports Psychology"
                className="w-full max-w-[320px] lg:max-w-[360px] h-auto object-cover rounded-md"
              />
            </div>
          </div>

          
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-14">
            <div className="flex-1">
              <h2 className="text-2xl font-black text-black mb-4">
                Benefits of Sports Psychology in Mental Health
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                Sports Psychology incorporated within Careox offers the following benefits:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 text-[15px]">
                <li>Boosts confidence and motivation.</li>
                <li>Improves focus and concentration.</li>
                <li>Builds resilience against stress and failure.</li>
                <li>Enhances emotional regulation under pressure.</li>
                <li>Supports discipline in achieving personal goals.</li>
              </ul>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-black text-black mb-4">
                How Careox Integrates Sports Psychology
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                At Careox, sports psychology techniques become tools for everyday life and we
                adapt proven techniques to everyday challenges, like :
              </p>
              <div className="space-y-3 text-gray-700 text-[15px] mb-6">
                <p>» Visualization before a tough meeting or exam.</p>
                <p>» Mental resilience training to manage stress and setbacks.</p>
                <p>» Mindfulness practices to sharpen focus and reduce overthinking.</p>
              </div>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                When paired with NLP, EQ management, and yoga, sports psychology becomes
                a powerful tool for building{' '}
                <span className="font-bold text-black">confidence, discipline, and balance</span>{' '}
                in your daily routine.
              </p>
            </div>
          </div>

      
          <div className="mb-14">
            <h2 className="text-2xl font-black text-black mb-5">
              The Psychology Behind It
            </h2>
            <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed mb-5">
              <p>
                »{' '}
                <span className="font-bold text-black">Visualization:</span>{' '}
                Imagining success before it happens primes the brain for achievement.
              </p>
              <p>
                »{' '}
                <span className="font-bold text-black">Goal Setting:</span>{' '}
                Clear, realistic goals boost motivation and direction.
              </p>
              <p>
                »{' '}
                <span className="font-bold text-black">Resilience Training:</span>{' '}
                Teaches how to bounce back quickly after setbacks.
              </p>
              <p>
                »{' '}
                <span className="font-bold text-black">Mindfulness:</span>{' '}
                Keeps attention in the present moment, reducing anxiety.
              </p>
            </div>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              These methods are backed by psychology and neuroscience, showing how mental rehearsal
              and structured focus improve both performance and well-being.
            </p>
          </div>

        
          <div className="text-center py-10 px-4">
            <h2 className="text-2xl font-black text-black mb-4">
              Start Your Careox Journey
            </h2>
            <p className="text-gray-700 text-[15px] leading-relaxed max-w-[700px] mx-auto mb-2">
              Sports psychology is just one of the{' '}
              <span className="font-bold text-black">12 science-backed pillars</span>{' '}
              in Careox.
            </p>
            <p className="text-gray-700 text-[15px] leading-relaxed max-w-[700px] mx-auto mb-8">
              Combined with NLP, EQ management, and somatic healing, it helps you perform at your
              best in work, relationships, and personal growth.
            </p>
            <button className="bg-[#4db8c0] hover:bg-[#3aa5ad] text-white font-bold text-[13px] uppercase tracking-widest px-14 py-4 transition-colors duration-200">
              TEXT ON THE BUTTON
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SportsPsychology;

