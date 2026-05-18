import React from 'react';
import Link from 'next/link';
const heroImage = "/assets/Transparent-heal-conscious-image.png";;
const nlpImg = "/assets/nlp-300x225.webp";;

const NLP = () => {
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
              <span className="text-black uppercase">Neurolinguistic Programming</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black uppercase text-black tracking-tighter">
              Neurolinguistic Programming
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
                What is NLP?
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
                Neurolinguistic Programming (NLP) is a psychological approach that explores
                how language, thought patterns and behavior interact.
              </p>

      
              <div className="flex flex-col gap-4">
                <table className="w-full border-collapse text-[15px]">
                  <tbody>
                    <tr className="border border-gray-300">
                      <td className="px-4 py-4 font-bold text-black w-160px align-top">"Neuro"</td>
                      <td className="px-4 py-4 text-gray-700 border-l border-gray-300">
                        The way we process experiences through our nervous system.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full border-collapse text-[15px]">
                  <tbody>
                    <tr className="border border-gray-300">
                      <td className="px-4 py-4 font-bold text-black w-[160px] align-top">"Linguistic"</td>
                      <td className="px-4 py-4 text-gray-700 border-l border-gray-300">
                        The language we use to interpret and express those experiences.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full border-collapse text-[15px]">
                  <tbody>
                    <tr className="border border-gray-300">
                      <td className="px-4 py-4 font-bold text-black w-160px align-top">"Programming"</td>
                      <td className="px-4 py-4 text-gray-700 border-l border-gray-300">
                        The mental codes or habits that influence how we act.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

      
            <div className="flex-1 flex  lg: items-start">
              <img
                src={nlpImg}
                alt="NLP"
                className="w-full max-w-[320px] lg:max-w-[360px] h-auto object-cover rounded-md"
              />
            </div>
          </div>

        
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-14">

        
            <div className="flex-1">
              <h2 className="text-2xl font-black text-black mb-3">
                Benefits of NLP in Mental Health
              </h2>
              <p className="text-[15px] font-bold text-gray-900 mb-4">
                NLP within Careox offers the following benefits:
              </p>
              <div className="space-y-3 text-gray-700 text-[15px]">
                <p><span className="font-bold text-black">1.</span> Reduces anxiety and overthinking</p>
                <p><span className="font-bold text-black">2.</span> Promotes stronger self confidence and self talk</p>
                <p><span className="font-bold text-black">3.</span> Equios you with tools to overcome phobias or trauma related triggers</p>
                <p><span className="font-bold text-black">4.</span> Leads to better communication in relationships</p>
                <p><span className="font-bold text-black">5.</span> Shifts your mindset from reactive to proactive.</p>
              </div>
            </div>

            
            <div className="flex-1">
              <h2 className="text-2xl font-black text-black mb-4">
                The Psychology Behind NLP
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
                Research shows that much of human behavior is shaped by subconscious patterns.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                Our thoughts influence our feelings and our feelings drive our behavior.
              </p>
              <p className="text-[15px] font-bold text-gray-900 mb-3">
                NLP builds on this understanding by helping us:
              </p>
              <div className="space-y-2 text-gray-700 text-[15px] mb-4">
                <p>» Reframe or eliminate unhelpful thoughts.</p>
                <p>» Model/practice successful strategies.</p>
                <p>» Shift inner dialogues toward healthier narratives.</p>
              </div>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
                As these new patterns take root, the brain forms fresh neural pathways.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
                <span className="font-bold text-black">The result?</span>{' '}
                Less anxiety, more confidence, and greater resilience.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                In practice, NLP works like a mental software update for , rewriting old and
                outdated codes with healthier, effective codes for thinking, behaving and feeling.
              </p>
            </div>
          </div>

        
          <div className="mb-14">
            <h2 className="text-2xl font-black text-black mb-3">
              How Careox Integrates NLP
            </h2>
            <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
              At Careox, NLP is not taught in isolation. It is:
            </p>
            <div className="space-y-3 text-gray-700 text-[15px] mb-5">
              <p>
                »{' '}
                <span className="font-bold text-black">Blended with journaling (biofeedback)</span>
                {' '}→ for spotting recurring thought patterns.
              </p>
              <p>
                »{' '}
                <span className="font-bold text-black">Paired with emotional freedom techniques</span>
                {' '}→ for breaking the emotional charge of limiting beliefs.
              </p>
              <p>
                »{' '}
                <span className="font-bold text-black">Reinforced with time management and EQ strategies</span>
                {' '}→ for making positive reframes stick in daily life.
              </p>
            </div>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              Example: If you struggle with self-doubt, Careox guides you to recognize the limiting
              phrase ("I'll never get this right"), then{' '}
              <span className="italic">reframe it to</span>{' '}
              ("I'm still learning, and each step brings me closer").
            </p>
          </div>

          
          <div className="text-center py-10 px-4">
            <h2 className="text-2xl font-black text-black mb-4">
              Start Your Careox Journey
            </h2>
            <p className="text-gray-700 text-[15px] leading-relaxed max-w-[760px] mx-auto mb-8">
              NLP is just one of the{' '}
              <span className="font-bold text-black">12 science-backed pillars</span>{' '}
              of Careox. Combining it with sports psychology, somatic healing, and emotional
              freedom techniques all in one program designed for balance can lead to remarkable,
              life-changing results.
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

export default NLP;

