import React from 'react';
import Link from 'next/link';
const heroImage = "/assets/Transparent-heal-conscious-image.png";;
const yoga = "/assets/yoga-300x225.webp";;

const JapanesePsychologySection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full font-sans">

  
      <div className="bg-[#E9E9E9] py-16 lg:py-24 relative overflow-hidden">
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
              <span className="text-black uppercase">Yoga Exercises</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black uppercase text-black tracking-tighter">
              Yoga Exercises
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
          <h2 className="text-3xl font-black mb-4">What is Yoga?</h2>
          <p className="leading-relaxed mb-3">
            Yoga is an ancient holistic practice combining physical postures (<em>asanas</em>),
            conscious breathing (<em>pranayama</em>), and focused meditation. It isn't just about
            making limbs flexible and posing calmly but in fact a path that unites movement,
            breath, and attention.
          </p>
          <p className="leading-relaxed">
            In modern terms, yoga is a mind-body therapy. It helps you to slow down, pay
            attention, and reconnect with your internal signals when life's noise pulls you down.
          </p>
        </div>
        <div className="flex ">
          <img
            src={yoga}
            alt="Yoga"
            className="w-full max-w-sm h-auto object-contain rounded-md"
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-black mb-4">Benefits of Yoga</h2>
          <p className="leading-relaxed mb-3">
            Careox ensures you get the powerful, brain-remodeling benefits of yoga without
            needing a studio or hours of practice. We weave it seamlessly into your daily
            transformation.
          </p>
          <p className="font-bold mb-3">The Benefits You'll Feel</p>
          <ul className="list-disc pl-5 space-y-3 leading-relaxed">
            <li>
              Daily mini-yoga sessions (posture + breath + mindfulness) that match Careox's
              emotional freedom, journaling, and NLP tools.
            </li>
            <li>
              Yoga breathing practices before stressful moments to calm the nervous system.
            </li>
            <li>
              Body-awareness and somatic yoga for trauma release, especially when combined
              with the reflection exercises.
            </li>
            <li>
              Weekly skill layering starting with gentle breath and posture, moving toward
              more grounded awareness and mental recalibration.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-black mb-4">How Careox Integrates Yoga</h2>
          <p className="leading-relaxed mb-4">
            Careox integrates yoga with emotional freedom techniques and journaling to create
            powerful, tangible results:
          </p>
          <div className="space-y-4 leading-relaxed">
            <p>
              <span className="text-[#4db8c0] mr-2">»</span>
              <strong>Mental Clarity:</strong> Stop the racing thoughts and regain a sustained focus.
            </p>
            <p>
              <span className="text-[#4db8c0] mr-2">»</span>
              <strong>Stress Control:</strong> Cultivate calmer, more measured reactions when life
              inevitably pushes back.
            </p>
            <p>
              <span className="text-[#4db8c0] mr-2">»</span>
              <strong>Emotional Balance:</strong> Experience improved daily mood and a noticeable
              reduction in persistent anxiety.
            </p>
            <p>
              <span className="text-[#4db8c0] mr-2">»</span>
              <strong>Deeper Resilience:</strong> Retrain your nervous system to recover and{' '}
              <strong>bounce back faster</strong> after high-pressure events.
            </p>
          </div>
        </div>
      </div>

      
      <div className="max-w-[1200px] mx-auto px-6 pb-12 ">
        <h2 className="text-3xl font-black mb-4">The Science Behind Yoga</h2>
        <p className="leading-relaxed mb-4">Here's what recent studies have revealed:</p>
        <div className="space-y-3 leading-relaxed">
          <p>
            <span className="mr-2">»</span>
            Yoga practice leads to{' '}
            <strong>structural and functional changes in the brain</strong>, thickening of the
            cerebral cortex, larger hippocampus (memory center), improved connectivity in areas
            managing self-awareness and attention.
          </p>
          <p>
            <span className="mr-2">»</span>
            It elevates neurotransmitters like <strong>GABA</strong>, which help{' '}
            <span className="underline decoration-[#4db8c0]">calm nervous system</span>,
            hyperactivity, reducing anxiety and mood disturbances.
          </p>
          <p>
            <span className="mr-2">»</span>
            <strong>Practicing yoga</strong> improves executive functions (focus, decision-making,
            memory), reduces rumination and emotional reactivity and enhances body awareness.
          </p>
          <p>
            <span className="mr-2">»</span>
            Yoga helps in healing trauma such as in PTSD trials. Yoga interventions showed
            significant{' '}
            <span className="underline decoration-[#4db8c0]">reductions in anxiety</span>,
            depression, and stress symptoms over both short- and long-term follow-ups.
          </p>
        </div>
      </div>

  
      <div className="w-full py-16 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl font-black mb-4">What's Next?</h2>
        <p className="max-w-2xl leading-relaxed text-gray-700 mb-8">
          Emotional Freedom is one of the vital tools used in the Careox journey for clearing the
          mental "emotional clutter" creating space for new patterns like NLP, EQ management, etc
          to take root.
        </p>
        <button
          onClick={() => navigate('/get-careox')}
          className="bg-[#4db8c0] hover:bg-[#3aa8b0] text-white font-bold tracking-widest uppercase px-10 py-3 transition-colors duration-200"
        >
          GET CAREOX
        </button>
      </div>

    </div>
  );
};

export default JapanesePsychologySection;
