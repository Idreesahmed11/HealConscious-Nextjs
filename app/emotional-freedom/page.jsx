import React from 'react';
import Link from 'next/link';
const heroImage = "/assets/Transparent-heal-conscious-image.png";;
const emotionalFreedomImg = "/assets/emotional-freedom.png";;

const EmotionalFreedom = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full font-sans">


      <div className="bg-[#E9E9E9] py-16 lg:py-24 relative overflow-hidden">
        <div className=".max-w-[1200px] mx-auto px-10 flex flex-col lg:flex-row items-center justify-between">
          <div className="z-10 text-left">
            <div className="flex items-center gap-2 mb- text-[13px] font-bold tracking-tight">
              <button
                onClick={() => navigate('/')}
                className="text-black uppercase hover:text-[#4db8c0] transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
              >
                Home
              </button>
              <span className="text-gray-400">|</span>
              <span className="text-black uppercase">Emotional Freedom & Careox</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black uppercase text-black tracking-tighter">
              Emotional Freedom & Careox
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
        <div className=".max-w-[1200px] mx-auto">

        
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-14">

            
            <div className="flex-1">
              <h2 className="text-2xl font-black text-black mb-4">
                What is Emotional Freedom?
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                Emotional Freedom refers to the ability to recognize, process, and release
                emotional blockages or unresolved experiences that shape our thoughts and
                behaviors. Rooted in psychology and energy-based therapies like EFT
                (Emotional Freedom Techniques), this approach combines cognitive reframing
                with physical or mindful practices to reduce stress and emotional intensity.
                Stuck emotions often manifest as anxiety, stress, or self-sabotage. Emotional
                freedom helps liberate the mind from these patterns.
              </p>
            </div>

          
            <div className="flex-1 flex  lg: items-start">
              <img
                src={emotionalFreedomImg}
                alt="Emotional Freedom"
                className="w-full max-w-[320px] .lg:max-w-[360px] h-auto object-cover rounded-md"
              />
            </div>
          </div>

          
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-14">

            
            <div className="flex-1">
              <h2 className="text-2xl font-black text-black mb-4">
                Benefits of Emotional Freedom in Careox
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                Emotional regulation principles incorporated in Careox bring you the following benefits:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 text-[15px]">
                <li>Reduces anxiety and stress.</li>
                <li>Better self-control and emotional regulation.</li>
                <li>Increases resilience against setbacks.</li>
                <li>Clearer decision-making (less clouded by unresolved emotions).</li>
                <li>Healthier relationships through improved empathy and communication</li>
              </ul>
            </div>

            
            <div className="flex-1 space-y-10">

    
              <div>
                <h2 className="text-2xl font-black text-black mb-3">
                  How Careox Uses Emotional Freedom
                </h2>
                <p className="text-[15px] font-bold text-gray-900 mb-2">
                  Careox blends thought-pattern restructuring with emotional release exercises.
                </p>
                <p className="text-gray-700 text-[15px] leading-relaxed">
                  Journaling, guided meditations, and tapping techniques are introduced to help
                  participants recognize triggers and shift perspectives. Emotional awareness is
                  paired with other practices like Somatic Experiencing (body-based healing) for
                  deeper integration.
                </p>
              </div>

              
              <div>
                <h2 className="text-2xl font-black text-black mb-3">
                  The Psychology Behind It
                </h2>
                <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                  Based on the Cognitive-Emotional Loop:<br />
                  Thoughts influence emotions → emotions influence behaviors.
                </p>

                
                <p className="text-[15px] font-bold text-gray-900 mb-2">
                  By addressing the root emotional triggers, Careox helps participants:
                </p>
                <p className="text-gray-700 text-[15px] leading-relaxed mb-1">
                  » Reduce amygdala overactivation (stress response).
                </p>
                <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                  » Build new neural pathways that reinforce calm and positive thinking.
                </p>

          
                <p className="text-gray-700 text-[15px] leading-relaxed">
                  <span className="font-bold text-black">Neuroimaging studies</span>{' '}
                  show that emotional reframing can reduce activity in the brain's fear center,
                  the amygdala, while strengthening prefrontal control
                </p>
              </div>

            </div>
          </div>

        
          <div className="mb-14">
            <h2 className="text-2xl font-black text-black mb-4">
              Scientific Backing
            </h2>
            <div className="space-y-3 text-gray-700 text-[15px] leading-relaxed">
              <p>
                »&nbsp; Science shows that Emotional Freedom practices really work, not just in theory,
                but in real lives too. In one{' '}
                <span className="font-bold text-black underline cursor-pointer">large study</span>,
                people practicing EFT saw their stress hormone (cortisol) drop by over a third while
                their mood and immune function improved.
              </p>
              <p>
                »&nbsp;{' '}
                <span className="font-bold text-black underline cursor-pointer">In clinics</span>{' '}
                where EFT was compared with traditional CBT therapy, 90% of people improved with EFT
                in just 3 sessions compared to 63% who improved with CBT after 15 sessions.
              </p>
              <p>
                »&nbsp; A review of{' '}
                <span className="font-bold text-black underline cursor-pointer">multiple studies</span>{' '}
                revealed that EFT brought major reductions in anxiety and depression symptoms, showing
                it's more than a quick fix.
              </p>
              <p>
                »&nbsp; In essence, Emotional Freedom helps calm the brain, allowing the body to release
                stress, and the mind to feel lighter. That's why it's a cornerstone of Careox.
              </p>
            </div>
          </div>

    
          <div className="text-center py-10 px-4">
            <h2 className="text-2xl font-black text-black mb-4">
              What's Next?
            </h2>
            <p className="text-gray-700 text-[15px] leading-relaxed max-w-[700px] mx-auto mb-8">
              Emotional Freedom is one of the vital tools used in the Careox journey for clearing
              the mental "emotional clutter" creating space for new patterns like NLP, EQ management,
              etc to take root.
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

export default EmotionalFreedom;

