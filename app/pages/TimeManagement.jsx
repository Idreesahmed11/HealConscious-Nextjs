'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
const heroImage = '/assets/Transparent-heal-conscious-image.png';;
const timeManagementImg = '/assets/Time-Management-300x225.webp';;

const TimeManagement = () => {
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
              <span className="text-black uppercase">Time Management</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black uppercase text-black tracking-tighter">
              Time Management
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
                What is Time Management?
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                Time management is the process of consciously planning how you spend your
                hours so that you can use them more effectively. It often involves setting
                priorities, breaking tasks into smaller steps, and creating systems that reduce
                stress while boosting productivity.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                Most people are familiar with the basics like writing to-do lists, setting
                deadlines, or rewarding themselves after finishing tasks. These tools work but
                real time management goes beyond checklists.
              </p>
            </div>
            <div className="flex-1 flex  lg: items-start">
              <img
                src={timeManagementImg}
                alt="Time Management"
                className="w-full max-w-[320px] lg:max-w-[360px] h-auto object-cover rounded-md"
              />
            </div>
          </div>

    
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-14">

      
            <div className="flex-1">
              <h2 className="text-2xl font-black text-black mb-4">
                Benefits of Time Management in Mental Health
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
                Effective time management helps you be more productive and also impacts
                emotional well-being. When your days are structured with intention, your brain
                has less clutter to fight through and more energy to focus on what matters.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                With Careox's approach, the benefits include:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-3 text-gray-700 text-[15px]">
                <li>
                  <span className="font-bold text-black">Lower stress and anxiety:</span>{' '}
                  Clear priorities reduce the mental chaos of juggling too many tasks.
                </li>
                <li>
                  <span className="font-bold text-black">More focus and creativity:</span>{' '}
                  Less decision fatigue leaves room for deeper, more meaningful work.
                </li>
                <li>
                  <span className="font-bold text-black">Better resilience:</span>{' '}
                  Structured routines help you recover faster when life throws challenges your way.
                </li>
                <li>
                  <span className="font-bold text-black">Improved balance:</span>{' '}
                  With time set aside for work, rest, and relationships, your days feel steadier
                  and more fulfilling.
                </li>
              </ul>
            </div>

          
            <div className="flex-1">
              <h2 className="text-2xl font-black text-black mb-4">
                The Psychology Behind Time Management
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                The way we manage our time has a direct impact on how our brains function
                and how we feel day-to-day. Poor time management often leads to chronic
                stress, decision fatigue, and eventually burnout. When tasks pile up, the brain
                struggles to focus, leaving less energy for creativity and problem-solving.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                On the other hand, building structured time habits work like a support system for
                the mind. Having routines in place reduces the constant pressure of{' '}
                <span className="font-bold text-black">"what's next,"</span>{' '}
                which lowers stress and builds confidence.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                Psychologists often describe this as creating{' '}
                <span className="font-bold text-black">mental space</span>
                . When your schedule is clear and realistic, your brain isn't weighed down by clutter.
                It's freer to think, adapt, and handle challenges with calm focus.
              </p>
            </div>
          </div>

        
          <div className="text-center py-10 px-4">
            <h2 className="text-2xl font-black text-black mb-4">
              Reclaim Your Time with Careox
            </h2>
            <p className="text-gray-700 text-[15px] leading-relaxed max-w-[800px] mx-auto mb-8">
              Time management is just one of the 12 science-backed pillars of Careox. When
              combined with tools like emotional freedom techniques, sports psychology, and
              somatic healing, it becomes a foundation for mental clarity and resilience.
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

export default TimeManagement;

