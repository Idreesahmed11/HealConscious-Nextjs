'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const carebox = '/assets/healconscious-carebox-home-banner-row-1-1-2-300x275.webp';
const careoxLogo = '/assets/Careox-Connect-Login-Screen-Mobile-App-234x300.png';

const InfoSectionComponent = () => {
  const router = useRouter();

  return (
    <section
      className="
        flex flex-nowrap justify-between items-center
        px-5 py-10 bg-white gap-10
        max-[900px]:flex-col
      "
    >

      
      <div
        className="
          flex flex-col gap-5 basis-1/2 justify-center items-center
          md:flex-row
          max-[600px]:flex-col max-[600px]:items-center
        "
      >

      
        <div className="flex flex-col items-center w-full max-w-[380px] max-[600px]:max-w-[90%]">
          <h2 className="text-2xl font-bold text-center px-2 pb-3">
            GET THE CAREOX<br />PROGRAM
          </h2>
          <div
            className="w-full cursor-pointer overflow-hidden"
            onClick={() => router.push('/product/careox-4-week-mental-health-fortification-program')}
          >
            <Image
              src={carebox}
              alt="Careox Program"
              width={300}
              height={275}
              className="w-full h-[320px] object-cover rounded-none border-none outline-none block"
            />
          </div>
        </div>

    
        <div className="flex flex-col items-center w-full max-w-[380px] max-[600px]:max-w-[90%]">
          <h2 className="text-2xl font-bold text-center px-2 pb-3">
            SIGN UP ON CONNECT<br />APP
          </h2>
          <div
            className="w-full cursor-pointer overflow-hidden"
            onClick={() => router.push('/connect')}
          >
            <Image
              src={careoxLogo}
              alt="Connect App"
              width={234}
              height={300}
              className="w-full h-[320px] object-cover rounded-none border-none outline-none block"
            />
          </div>
        </div>

      </div>

    
      <div
        className="
          basis-1/2 flex flex-col justify-center
          px-5 py-5 w-full max-w-full
          max-[900px]:flex-[1_1_100%]
        "
      >
        <p className="text-base font-medium mb-1">How it works?</p>
        <h2 className="text-2xl sm:text-4xl font-medium mb-3">What is Careox?</h2>

        <div className="flex flex-col gap-3 text-sm font-medium leading-relaxed text-[#4f4f4f]">
          <p>
            Careox is a 4-week reset for your mental well-being, combining daily
            mindfulness exercises, journaling prompts, and expert-led strategies to help
            you break free from stress and past struggles.
          </p>
          <p>
            The mental health fortification program includes easy daily tasks that ensure clarity
            and structure empowering you to cultivate lasting happiness through a
            holistic approach, making mental health care simple, accessible, and deeply personal.
          </p>
          <p>
            Our mental health squad helps you navigate through the program and your
            mental health lifestyle revamp through Connect mobile app to ensure you get
            the best out of Careox.
          </p>
        </div>

        <button
          onClick={() => router.push('/careox')}
          className="mt-5 self-start px-5 py-2 bg-[#0b102c] text-white text-sm font-semibold cursor-pointer"
        >
          Read More
        </button>
      </div>

    </section>
  );
};

export default InfoSectionComponent;
