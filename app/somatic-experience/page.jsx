'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import heroImage from "../assets/Transparent-heal-conscious-image.png";
import Trauma from "../assets/Somatic-Healing-for-Trauma-Stress-380x380.webp";

const SomanticExperience = () => {
  

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
              <span className="text-black uppercase">Somatic Experiencing</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black uppercase text-black tracking-tighter">
              Somatic Experiencing
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
                Why Stress Gets Trapped in Your Nervous System?
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                You've tried to <em>think</em> your way out of stress, anxiety, or past trauma but the symptoms persist like chronic tension, a racing heart, digestive issues, or suddenly feeling overwhelmed. This is your body's natural, protective response to the threat of the{" "}
                <strong>"fight and flight response"</strong> that couldn't fully reveal itself during the original event.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                <strong>Somatic Experiencing (SE)</strong> pioneered by <strong>Dr. Peter A. Levine</strong>, is the bottom-up approach that addresses this root cause. It operates on the principle that trauma is an experience stored in your physiology.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                In simple terms, SE helps your body complete the natural self-protective responses that were interrupted, restoring your nervous system's natural ability to regulate itself.
              </p>
            </div>
            <div className="flex-shrink-0 w-full lg:w-[340px] ">
              <img
                src={Trauma}
                alt="Somatic Healing for Trauma"
                className="w-full h-auto rounded-sm object-cover shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-white py-10 ">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">

        
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">
                Core Benefits of Practicing SE
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-5">
                While Somatic Experiencing is typically done with a practitioner, Careox translates its core, powerful techniques into safe, guided exercises for your daily life to help you build tolerance and gently release tension. When you integrate Careox's Somatic Experiencing tools, you begin to experience relief not just emotionally, but physically:
              </p>
              <ol className="space-y-4 text-[15px] text-gray-700 list-decimal list-outside ml-5">
                <li>
                  <p><strong>Release of Chronic Tension:</strong> Address physical symptoms like muscle pain, sleep disruption, and digestive concerns rooted in past <strong>stress</strong> and trauma.</p>
                </li>
                <li>
                  <p><strong>Emotional Regulation:</strong> Reduce <strong>emotional reactivity</strong> and impulsivity by teaching your nervous system to move safely between high and low energy states.</p>
                </li>
                <li>
                  <p><strong>Increased Resilience:</strong> Develop <strong>resourcing</strong> skills by identifying and strengthening internal sources of stability and safety to cope with triggers in real-time.</p>
                </li>
              </ol>
              <p className="text-[15px] text-gray-700 leading-relaxed mt-5">
                <strong>Heightened Body Awareness:</strong> Learn to track and interpret your body's signals with curiosity, allowing you to stop repressing uncomfortable sensations and start <em>processing</em> them.
              </p>
            </div>

        
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">
                How Careox Integrates Somatic Techniques
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-5">
                Careox uses a smart, targeted approach that integrates <strong>somatic therapy</strong> principles with other mental health tools:
              </p>
              <div className="space-y-4 text-[15px] text-gray-700">
                <p>
                  <span className="font-bold">» Gentle Titration:</span> We break down uncomfortable physical sensations into small, manageable parts, working gradually to avoid <strong>re-traumatization</strong>.
                </p>
                <p>
                  <span className="font-bold">» Active Grounding & Resourcing:</span> Daily exercises guide you to identify and strengthen <strong>internal and external resources</strong> and sensations, memories, or places of safety to maintain a sense of stability.
                </p>
                <p>
                  <span className="font-bold">» Non-Verbal Release:</span> Focused exercises utilize small, intuitive movements and specialized <strong>breathwork</strong> to facilitate the release of the "frozen" survival energy, acknowledging the body's wisdom.
                </p>
                <p>
                  <span className="font-bold">» Integrative Healing:</span> These SE principles are seamlessly combined with our other pillars, like journaling and emotional freedom techniques, ensuring you address the connection between <strong>Sensation, Affect, and Meaning</strong>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

  
      <div className="bg-white py-12 ">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
            The Scientific Shift From Mind to Sensation
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
            Unlike traditional "top-down" talk therapy which starts with thoughts, Somatic Experiencing uses a <strong>"body-first" approach</strong>.
          </p>
          <p className="text-gray-700 text-[15px] leading-relaxed mb-5">
            Research confirms that there's a profound connection between the body and brain in trauma recovery:
          </p>
          <div className="space-y-3 text-[15px] text-gray-700">
            <p>
              <span className="font-bold">» Regulating the Nervous System</span>: SE helps calm subcortical brain networks that keep the "threat alarm" stuck in one position, reducing chronic stress and dysregulation.
            </p>
            <p>
              <span className="font-bold">» The Power of GABA</span>: By guiding your attention to internal sensations (<strong>interoception</strong> and <strong>proprioception</strong>), SE helps restore balance and facilitate the natural calm.
            </p>
            <p>
              <span className="font-bold">» Evidence-Backed Relief</span> : <strong>Randomized controlled trials</strong> confirm SE's ability to ease PTSD, anxiety, and trauma-related chronic pain with lasting results.
            </p>
          </div>
        </div>
      </div>

    
      <div className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
            Your Next Step
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
You don’t have to carry the weight of your past forever. Careox provides the tools to help your body complete its natural healing process, restoring balance and creating a new baseline of calm.
          </p>
          <button
            className="bg-[#4db8c0] hover:bg-[#3aa4ac] text-white text-[13px] font-bold tracking-widest uppercase px-10 py-3 transition-colors duration-200"
          >
            RECLAIM YOUR NERVOUS SYSTEM GET. GET CAREOX TODAY 
          </button>
        </div>
      </div>

    </div>
  );
};

export default SomanticExperience;

