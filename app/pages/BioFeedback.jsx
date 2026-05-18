'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
const heroImage = '/assets/Transparent-heal-conscious-image.png';;
const biofeedbackImg = '/assets/biofeedback-300x225.webp';;

const Biofeedback = () => {
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
              <span className="text-black uppercase">Biofeedback & Careox</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black uppercase text-black tracking-tighter">
           Biofeedback & Careox
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

  
      <div className="w-full bg-white pb-12 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">

          
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-14">
            <div className="flex-1">
              <h2 className="text-2xl font-black text-black mb-4">
                What is Biofeedback?
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                Biofeedback is a mind-body technique that helps you "listen in" to your body's
                signals, such as heart rate, breathing, or muscle tension, and eventually learn to
                control them. Think of it as{' '}
                <span className="font-bold text-black">a mirror for your inner world</span>
                . It gives you insight into your body's signals, empowering control over stress,
                pain, and overall well-being.
              </p>
            </div>
            <div className="flex-1 flex  lg: items-start">
              <img
                src={biofeedbackImg}
                alt="Biofeedback"
                className="w-full max-w-[320px] lg:max-w-[360px] h-auto object-cover rounded-md"
              />
            </div>
          </div>

      
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-14">

            
            <div className="flex-1">
              <h2 className="text-2xl font-black text-black mb-4">
                Benefits of Biofeedback
              </h2>
              <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 text-[15px]">
                <li>Reduced Stress & Anxiety</li>
                <li>Better Sleep Quality</li>
                <li>Sharper Focus & Energy Level</li>
                <li>Stronger Mind-Body Connection</li>
                <li>More Control Over Emotional Responses</li>
              </ul>
            </div>

            
            <div className="flex-1 space-y-10">

              <div>
                <h2 className="text-2xl font-black text-black mb-4">
                  How Careox Uses It
                </h2>
                <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                  Careox adapts biofeedback-inspired methods without machines, using guided
                  practices to help you:
                </p>
                <div className="space-y-3 text-gray-700 text-[15px]">
                  <p>» Notice how stress shows up in your body (tightness in the chest, racing thoughts, shallow breath)</p>
                  <p>» Train yourself to slow your breath and relax muscles</p>
                  <p>» Build awareness of the mind-body balance daily</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black text-black mb-3">
                  Why It Works?
                </h2>
                <p className="text-gray-700 text-[15px] leading-relaxed">
                  When you learn to control your breathing and heart rate, you're actually calming
                  your{' '}
                  <span className="font-bold text-black">nervous system</span>
                  . This lowers stress hormones, improves focus, and strengthens emotional resilience.
                </p>
              </div>

            </div>
          </div>

        
          <div className="mb-14">
            <h2 className="text-2xl font-black text-black mb-5">
              Scientific Backing
            </h2>
            <div className="space-y-3 text-gray-700 text-[15px] leading-relaxed">
              <p>
                » Biofeedback has been shown to{' '}
                <span className="font-bold text-black">reduce anxiety and improve mood</span>{' '}
                in multiple{' '}
                <span className="font-bold text-black underline cursor-pointer">studies</span>
                . Breathing-based biofeedback reduced anxiety related to tests and boosted
                overall well-being in students.
              </p>
              <p>
                » Heart rate variability (HRV) training, a form of biofeedback, helps the body
                bounce back from stress faster{' '}
                <span className="font-bold text-black">(Frontiers in Psychology)</span>.
              </p>
              <p>
                »{' '}
                <span className="font-bold text-black underline cursor-pointer">Evidence</span>{' '}
                shows that biofeedback improves sleep and reduces physical symptoms, like tension headaches.
              </p>
            </div>
          </div>

        
          <div className="text-center py-10 px-4">
            <h2 className="text-2xl font-black text-black mb-4">
              What s Next?
            </h2>
            <p className="text-gray-700 text-[15px] leading-relaxed max-w-[760px] mx-auto mb-8">
              With Careox, biofeedback-inspired practices give you{' '}
              <span className="font-bold text-black">real-time awareness and control</span>{' '}
              of your inner world. Rather than letting stress control , you learn to respond
              with calm and to guide your body back to balance gently.
            </p>
            <button className="bg-[#4db8c0] hover:bg-[#3aa5ad] text-white font-bold text-[13px] uppercase tracking-widest px-10 py-4 transition-colors duration-200">
              GET CAREOX TODAY
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Biofeedback;

