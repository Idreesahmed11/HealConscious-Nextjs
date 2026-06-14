'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const JapaneseImg = '/assets/Japanese-Psychology-PNG-100x100.png';
const SomaticImg = '/assets/Somatic-Experience-PNG-100x100.png';
const SpiritualPsychImg = '/assets/Spiritual-Psychology-PNG-100x100.png';
const SpiritualTapImg = '/assets/Spiritual-Tapping-PNG-100x100.png';
const EmotionalFreedomImg = '/assets/Emotional-Freendom-PNG-100x100.png';
const SportsPsychImg = '/assets/Sports-Psychology-PNG-1-100x100.png';
const BioFeedbackImg = '/assets/Bio-Feedback-PNG-100x100.png';
const NLPImg = '/assets/Neurolinguistic-Programming-PNG-100x100.png';
const TimeManagementImg = '/assets/Time-Management-PNG-1-100x100.png';
const CognitiveImg = '/assets/Cognitive-Behaviors-Therapy-PNG-100x100.png';
const EmotionalQImg = '/assets/Emotional-Quotient-Management-PNG-100x100.png';
const YogaImg = '/assets/yoga-excercise-png-1-100x100.png';

const services = [
  { label: "Japanese Psychology", path: "/japanese-psychology", img: JapaneseImg },
  { label: "Somatic Experience", path: "/somatic-experience", img: SomaticImg },
  { label: "Integrated Yoga Exercise", path: "/integrated-yoga-exercise", img: YogaImg },
  { label: "Spiritual Psychology", path: "/spiritual-psychology", img: SpiritualPsychImg },
  { label: "Spiritual Tapping", path: "/spiritual-tapping", img: SpiritualTapImg },
  { label: "Emotional Freedom", path: "/emotional-freedom", img: EmotionalFreedomImg },
  { label: "Sports Psychology", path: "/sports-psychology", img: SportsPsychImg },
  { label: "Bio Feedback", path: "/bio-feedback", img: BioFeedbackImg },
  { label: "Neurolinguistic Programming", path: "/neurolinguistic-programming", img: NLPImg },
  { label: "Time Management", path: "/time-management", img: TimeManagementImg },
  { label: "Cognitive Behaviour Therapy", path: "/cognitive-behaviour-therapy", img: CognitiveImg },
  { label: "Emotional Quotient Management", path: "/emotional-quotient-management", img: EmotionalQImg },
];

const ServiceSectionComponent = () => {
  const router = useRouter();

  return (
    <div className="bg-white py-[60px] px-5 max-[768px]:py-10">

      <div
        className="
          grid grid-cols-6 gap-x-5 gap-y-10 max-w-[1200px] mx-auto
          max-[1024px]:grid-cols-4
          max-[768px]:flex max-[768px]:flex-col max-[768px]:items-center max-[768px]:gap-7
        "
      >
        {services.map((service) => (
          <div
            key={service.path}
            className="flex flex-col items-center text-center cursor-pointer max-[768px]:w-full max-[768px]:max-w-[160px]"
            onClick={() => router.push(service.path)}
          >
            <div className="w-[100px] h-[100px] flex items-center justify-center">
              <Image
                src={service.img}
                alt={service.label}
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-black text-sm mt-2 leading-snug max-[768px]:text-[13px]">
              {service.label}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ServiceSectionComponent;
