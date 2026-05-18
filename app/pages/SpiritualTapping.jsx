'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
const heroImage = '/assets/Transparent-heal-conscious-image.png';;
const tappingImg = '/assets/Careox_-Spiritual-Tapping-EFT-for-Stress-Relief-Inner-Peace-300x225 (1).webp';;

const SpiritualTappingSection = () => {
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
              <span className="text-black uppercase">Spiritual Tapping for Stress Relief & Inner Peace</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black uppercase text-black tracking-tighter">
              Spiritual Tapping for Stress Relief & Inner Peace
            </h1>
          </div>
          <div className="mt-8 lg:mt-0 flex justify-end items-center max-w-full lg:max-w-[60%]">
            <img
              src={heroImage}
              alt="Careox Assets"
              className="w-full h-auto object-contain max-h-[300px] lg:max-h-[400px]"
            />
          </div>
        </div>
      </div>

       <div className="h-10 md:h-16 bg-white" />

    
      <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-black mb-4">What is Spiritual Tapping?</h2>
          <p className="leading-relaxed">
            Spiritual Tapping, also known as Emotional Freedom Techniques (EFT), is a
            mind–body practice where gentle tapping on specific acupressure points calms
            the nervous system and releases stored emotional tension. It blends ancient
            Eastern healing with modern psychology, offering a powerful yet simple tool for
            emotional wellness.
          </p>
        </div>
        <div className="flex ">
          <img
            src={tappingImg}
            alt="Spiritual Tapping EFT"
            className="w-full max-w-sm h-auto object-contain rounded-md"
          />
        </div>
      </div>

  
      <div className="max-w-[1200px] mx-auto px-6 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-black mb-5">Core Benefits of Spiritual Tapping</h2>
          <ul className="list-disc pl-5 space-y-4 leading-relaxed">
            <li><strong>Stress Relief :</strong> Lowers anxiety and brings the nervous system into balance.</li>
            <li><strong>Emotional Clarity :</strong> Clears mental fog and reduces overwhelm.</li>
            <li><strong>Trauma Healing :</strong> Provides a gentle, body-first way to release stored emotional pain.</li>
            <li><strong>Inner Peace :</strong> Cultivates calmness and self-acceptance.</li>
          </ul>
          <p className="leading-relaxed mt-5">
            <strong>Spiritual Connection:</strong> Deepens awareness of the self and creates a sense of grounded alignment.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-black mb-5">How It Works</h2>
          <div className="space-y-6 leading-relaxed">
            <p>
              <span className="text-[#4db8c0] mr-2">»</span>
              <strong>Energy Pathways :</strong> Spiritual Tapping draws on the same principles as acupuncture, where the body is understood to carry energy through meridian lines. Stress, trauma, and unresolved emotions can disrupt this natural flow. By gently tapping on specific acupressure points, the energy system is stimulated in a way that restores balance and signals safety to both the body and mind.
            </p>
            <p>
              <span className="text-[#4db8c0] mr-2">»</span>
              <strong>Neuroscience Backing :</strong> Modern neuroscience has confirmed these effects. <strong>Clinical studies</strong> show that tapping reduces cortisol, the body's primary stress hormone, and helps activate the natural relaxation response. Brain imaging research also suggests that tapping calms overactive fear centers in the amygdala and improves communication between the stress response system and the higher cognitive regions that regulate thought and decision-making.
            </p>
          </div>
        </div>
      </div>

      
      <div className="max-w-[1200px] mx-auto px-6 pb-12">
        <h2 className="text-3xl font-black mb-3">Careox Approach to Spiritual Tapping</h2>
        <p className="leading-relaxed mb-4">
          With Careox, Spiritual Tapping is woven into a holistic healing framework. We use it
          as both a standalone practice and a supportive tool within other programs:
        </p>
        <div className="space-y-2 leading-relaxed">
          <p>
            <span className="text-[#4db8c0] mr-2">»</span>
            <strong>Guided Tapping Sessions</strong> :These tapping sessions target stress,
            anxiety, or limiting beliefs.
          </p>
          <p>
            <span className="text-[#4db8c0] mr-2">»</span>
            <strong>Somatic Integration</strong>: Linking tapping with body awareness so
            emotions can be felt and released, not just thought about.
          </p>
          <p>
            <span className="text-[#4db8c0] mr-2">»</span>
            <strong>Affirmation Alignment</strong> : Using affirmations rooted in
            self-compassion and conscious healing.
          </p>
          <p>
            <span className="text-[#4db8c0] mr-2">»</span>
            <strong>Kaizen Practice</strong> : Encouraging small, consistent tapping sessions
            to build long-term resilience.
          </p>
        </div>
      </div>

      
      <div className="max-w-[1200px] mx-auto px-6 pb-12">
        <h2 className="text-3xl font-black mb-5">Mini Practice: The Stress Reset Tap</h2>
        <div className="space-y-4 leading-relaxed">
          <p><span className="mr-2">»</span> Sit comfortably and take a deep breath.</p>
          <p>
            <span className="mr-2">»</span> Gently tap on the side of your hand while repeating:{' '}
            <em>"Even though I feel stressed, I choose to allow calm."</em>
          </p>
          <p>
            <span className="mr-2">»</span> Move through key points like eyebrow, side of eye,
            under eye, under nose, chin, collarbone and top of head while continuing the
            affirmation.
          </p>
          <p><span className="mr-2">»</span> Pause, breathe deeply, and notice how the body feels.</p>
        </div>
        <p className="mt-5 font-bold leading-relaxed">
          Just 2–3 minutes of tapping can shift emotional energy and bring clarity.
        </p>
      </div>

      
      <div className="w-full py-16 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl font-black mb-4">What to do Next?</h2>
        <p className="max-w-2xl leading-relaxed text-gray-700 mb-3">
          You don't need decades of energy practice or advanced training to experience the
          benefits of tapping. Careox makes this powerful healing tool accessible by blending
          it into a structured, 4-week self-healing program designed for modern life.
        </p>
        <p className="max-w-2xl leading-relaxed text-gray-700 mb-8">
          Your path to conscious healing begins today.
        </p>
        <button
          onClick={() => router.push('/get-careox')}
          className="bg-[#4db8c0] hover:bg-[#3aa8b0] text-white font-bold tracking-widest uppercase px-10 py-3 transition-colors duration-200"
        >
          GET STARTED WITH CAREOX
        </button>
      </div>

    </div>
  );
};

export default SpiritualTappingSection;
