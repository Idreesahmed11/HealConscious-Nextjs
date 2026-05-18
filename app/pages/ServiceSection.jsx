'use client';

import { useRouter } from "next/navigation";
import "./ServicesSection.css";

const JapaneseImg = '/assets/Japanese-Psychology-PNG-100x100.png';;
const SomaticImg = '/assets/Somatic-Experience-PNG-100x100.png';;
const SpiritualPsychImg = '/assets/Spiritual-Psychology-PNG-100x100.png';;
const SpiritualTapImg = '/assets/Spiritual-Tapping-PNG-100x100.png';;
const EmotionalFreedomImg = '/assets/Emotional-Freendom-PNG-100x100.png';;
const SportsPsychImg = '/assets/Sports-Psychology-PNG-1-100x100.png';;
const BioFeedbackImg = '/assets/Bio-Feedback-PNG-100x100.png';;
const NLPImg = '/assets/Neurolinguistic-Programming-PNG-100x100.png';;
const TimeManagementImg = '/assets/Time-Management-PNG-1-100x100.png';;
const CognitiveImg = '/assets/Cognitive-Behaviors-Therapy-PNG-100x100.png';;
const EmotionalQImg = '/assets/Emotional-Quotient-Management-PNG-100x100.png';;
const YogaImg = '/assets/yoga-excercise-png-1-100x100.png';;

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

const ServicesSection = () => {
  const router = useRouter();

  return (
    <div className="services-wrapper">
      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.path}
            className="service-item"
            onClick={() => router.push(service.path)}
          >
            <div className="service-circle">
              <img src={service.img} alt={service.label} />
            </div>
            <p className="service-label">{service.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
