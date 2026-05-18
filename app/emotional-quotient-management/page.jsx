import React from 'react';
import Link from 'next/link';
const heroImage = "/assets/Transparent-heal-conscious-image.png";;
const eqMainImg = "/assets/Emotional-Intelligence-EQ-Management-with-Careox-300x225.webp";;


const sciencePoints = [
  'Better mental health outcomes (lower stress, anxiety, and depression).',
  'Stronger resilience in trauma recovery.',
  'More fulfilling relationships and workplace success.',
];

const benefits = [
  {
    title: 'Clarity',
    desc: 'You gain a deeper understanding of your emotions and feel more in control of your inner world.',
  },
  {
    title: 'Regulation',
    desc: 'You learn to find calm in the moment and respond in ways that truly support your well-being.',
  },
  {
    title: 'Connection',
    desc: 'You nurture empathy and create more meaningful, lasting relationships.',
  },
  {
    title: 'Resilience',
    desc: 'You recover from setbacks with steadiness and renewed strength.',
  },
  {
    title: 'Growth',
    desc: 'You expand your confidence, creativity, and sense of personal fulfillment.',
  },
];

const coreComponents = [
  {
    title: 'Self-Awareness',
    desc: 'Recognizing emotions in real time and knowing how they affect your thoughts, body, and actions.',
  },
  {
    title: 'Self-Regulation',
    desc: 'Pausing before reacting, calming impulses, and choosing balanced responses.',
  },
  {
    title: 'Motivation',
    desc: 'Using emotions as energy for personal growth, persistence, and goal achievement.',
  },
  {
    title: 'Empathy',
    desc: 'Sensing what others feel and responding with understanding and compassion.',
  },
  {
    title: 'Social Skills',
    desc: 'Communicating clearly, resolving conflicts, and building long-term trust.',
  },
];

const pauseSteps = [
  {
    title: 'Notice',
    desc: 'Identify what emotion is surfacing in your body.',
  },
  {
    title: 'Name',
    desc: 'Label it ("anger," "fear," "sadness," "excitement").',
  },
  {
    title: 'Navigate',
    desc: 'Choose a response aligned with your values, not your impulse.',
  },
];

const careoxApproach = [
  {
    title: 'Somatic Awareness',
    desc: 'We begin by helping you notice how emotions manifest physically through body tension, posture, or shifts in breathing so you can recognize them before they take over.',
  },
  {
    title: 'Mindful Journaling',
    desc: 'Daily guided reflections reveal emotional triggers and recurring patterns, giving you clarity on what drives your responses.',
  },
  {
    title: 'Breathwork & Grounding',
    desc: 'In moments of stress, we teach calming techniques that regulate the nervous system and bring you back to balance.',
  },
  {
    title: 'Scenario Practice',
    desc: 'Through role-play and guided exercises, you strengthen empathy, improve communication, and rehearse constructive responses to real-life challenges.',
  },
];

const EmotionalIntelligence = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full font-sans antialiased text-gray-800">

      <div className="bg-[#E9E9E9] py-8 lg:py-12 overflow-hidden">
        <div className=".max-w-[1200px] mx-auto px-5 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div className="z-10 text-left">
            <div className="flex items-center flex-wrap gap-2 mb-4 text-[12px] font-bold tracking-wide uppercase">
              <button
                onClick={() => navigate('/')}
                className="text-black hover:text-[#4db8c0] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer"
              >
                Home
              </button>
              <span className="text-gray-400">|</span>
              <span className="text-black">Emotional Quotient Management</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-black tracking-tighter leading-none">
              Emotional Quotient Management
            </h1>
          </div>

        
          <div className="w-full lg:w-auto flex justify-center lg:justify-end items-center lg:max-w-[55%]">
            <img
              src={heroImage}
              alt="Careox Assets"
              className="w-full h-auto object-contain max-h-[200px] lg:max-h-[250px]"
            />
          </div>
        </div>
      </div>

      <div className="h-10 md:h-16 bg-white" />

      <div className="w-full bg-white pb-0 px-4 sm:px-6 md:px-8">
        <div className="max-w-1200px mx-auto">

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-14">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-black text-black mb-4 leading-snug">
                What is Emotional Intelligence?
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                Emotional Intelligence is the ability to recognize, understand, and manage emotions
                in yourself and others. It goes beyond IQ by focusing on{' '}
                <em>how</em> you process feelings, communicate under pressure, and build meaningful
                relationships.
              </p>
              <p className="text-gray-700 text-[15px] font-bold mb-3">
                Science confirms that people with higher EQ experience:
              </p>
              <ul className="space-y-2 text-gray-700 text-[15px]">
                {sciencePoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-500 font-bold mt-0.5 .flex-shrink-0">»</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 flex lg:items-start">
              <img
                src={eqMainImg}
                alt="Emotional Intelligence"
                className="w-full max-w-[320px] .lg:max-w-[360px] h-auto object-cover rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-14">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-black text-black mb-5 leading-snug">
                Benefits of Practicing EQ with Careox
              </h2>
              <ul className="space-y-4 text-gray-700 text-[15px]">
                {benefits.map(({ title, desc }, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className=".mt-[7px] .w-[6px] .h-[6px] rounded-full bg-gray-700 .flex-shrink-0" />
                    <span>
                      <strong className="text-black">{title}</strong> :{desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-black text-black mb-5 leading-snug">
                The 5 Core Components of EQ
              </h2>
              <ul className="space-y-3 text-gray-700 text-[15px]">
                {coreComponents.map(({ title, desc }, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-500 font-bold mt-0.5 .flex-shrink-0">»</span>
                    <span>
                      <strong className="text-black">{title}</strong> – {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-14">
            <div className="flex-1 hidden lg:block" />
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-black text-black mb-4 leading-snug">
                Practical Framework: The 3-Step Pause
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
                When emotions rise, try this structured EQ exercise:
              </p>
              <ul className="space-y-2 text-gray-700 text-[15px] mb-4">
                {pauseSteps.map(({ title, desc }, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-500 font-bold mt-0.5 .flex-shrink-0">»</span>
                    <span>
                      <strong className="text-black">{title}</strong> – {desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                This quick practice reduces reactivity and builds lasting emotional balance.
              </p>
            </div>
          </div>

          <div className="mb-14">
            <h2 className="text-xl sm:text-2xl font-black text-black mb-4 leading-snug">
              Careox Approach to EQ Development
            </h2>
            <p className="text-gray-700 text-[15px] leading-relaxed mb-5">
              With Careox, emotional intelligence is not seen as a fixed trait but as a skill that
              grows through consistent practice. We integrate neuroscience, somatic therapy, and
              mindfulness into every step of EQ training. Here is how it is woven into careox core theme:
            </p>
            <ul className="space-y-3 text-gray-700 text-[15px]">
              {careoxApproach.map(({ title, desc }, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gray-500 font-bold mt-0.5 .flex-shrink-0">»</span>
                  <span>
                    <strong className="text-black">{title}</strong> :{desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="w-full bg-white py-14 px-4 sm:px-6 md:px-8">
        <div className=".max-w-[860px] mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-black text-black mb-5">
            What to do next?
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed mb-10 .max-w-[720px] mx-auto">
            At Careox, healing starts with small, intentional steps. Whether you want to manage
            stress, strengthen resilience, or deepen your emotional intelligence, our
            science-backed programs guide you from overwhelm to balance.
          </p>
          <button
            onClick={() => window.open('#', '_blank')}
            className="
              inline-block bg-[#4db8c0] hover:bg-[#3da8b0] active:bg-[#2d98a0]
              text-white text-[13px] font-bold uppercase tracking-widest
              px-8 sm:px-12 py-4
              border-2 border-[#4db8c0] hover:border-[#3da8b0]
              transition-colors duration-200
              cursor-pointer
            "
          >
            Get Careox Today
          </button>
        </div>
      </div>

    </div>
  );
};

export default EmotionalIntelligence;
