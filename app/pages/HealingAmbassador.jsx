'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
const heroImage = '/assets/Transparent-heal-conscious-image.png';;
const img9f1 = '/assets/Heal-Conscious-Logo-150x150.png';;

const HealingAmbassador = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState({ username: '', password: '', remember: false });
  const [registerData, setRegisterData] = useState({ email: '', firstName: '', lastName: '', promote: 'Website/Blog', terms: false });

  return (
    <div className="w-full font-sans">

    
      <div className="bg-[#E9E9E9] py-3 lg:py-5 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
          <div className="z-10 text-left">
            <div className="flex items-center gap-2 mb-3 text-[13px] font-bold tracking-tight">
              <button
                onClick={() => router.push('/')}
                className="text-black uppercase hover:text-[#4db8c0] transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
              >
                Home
              </button>
              <span className="text-gray-400">|</span>
              <span className="text-black uppercase">Healing Ambassador</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black uppercase text-black tracking-tighter">
              Healing Ambassador
            </h1>
          </div>
          <div className="mt-4 lg:mt-0 flex justify-end items-center max-w-full lg:max-w-[60%]">
            <img src={heroImage} alt="Heal Conscious" className="w-full h-auto object-contain max-h-[160px] lg:max-h-[200px]" />
          </div>
        </div>
      </div>

  <div className="h-10 md:h-16 bg-white" />
      
      <div className="bg-white py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8">
            Healing Ambassador Program
          </h2>
          <div className="relative w-full rounded-xl overflow-hidden shadow-lg bg-black" style={{ aspectRatio: '16/9' }}>
            <div className="absolute top-3 left-3 z-20 flex items-center gap-2 bg-black bg-opacity-50 rounded-lg px-2 py-1">
              <img src={img9f1} alt="Heal Conscious Logo" className="h-8 w-auto object-contain" />
            </div>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/M2YhRZCnJq4?rel=0&modestbranding=1&controls=1"
              title="How to join the Healing Ambassador program?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Please read our Terms and Conditions before signing up.
          </p>
        </div>
      </div>

    
      <div className="bg-white pb-10 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Login</h2>
          <div className="border border-gray-300 rounded-md p-8 w-full">

            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-2">
                Username or email address <span className="text-red-500">*</span>
              </label>
              <input
                
                
                onChange={e => setLoginData({ ...loginData, username: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-gray-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-2 ">
                Password <span className="text-red-500">*</span>
              </label>
              <input 
                
                onChange={e => setLoginData({ ...loginData, password: e.target.value })}
                className="w-full  border border-gray-300 rounded-md px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-gray-500"
              />
            </div>

            <div className="flex items-center gap-4 mb-10 ">
              <label className="flex items-center gap-2 w text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={loginData.remember}
                  onChange={e => setLoginData({ ...loginData, remember: e.target.checked })}
                  className="w-4 h-"
                />
                Remember me
              </label>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-bold px-6 py-2 rounded-full transition-colors duration-200 tracking-wide">
                LOG IN
              </button>
            </div>

            <a href="#" className="text-sm text-blue-600 hover:underline">
              Lost your password?
            </a>

          </div>
        </div>
      </div>

      
      <div className="h-10 bg-white" />


      <div className="bg-white pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Register</h2>
          <div className="border border-gray-300 rounded-md p-8 w-full">

            <div className="mb-5">
              <label className="block text-sm text-gray-700 mb-2">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={registerData.email}
                onChange={e => setRegisterData({ ...registerData, email: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-gray-500"
              />
              <p className="text-xs text-gray-500 mt-2">A link to set a new password will be sent to your email address.</p>
            </div>

            <div className="mb-5">
              <label className="block text-sm text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={registerData.firstName}
                onChange={e => setRegisterData({ ...registerData, firstName: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-gray-500"
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm text-gray-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={registerData.lastName}
                onChange={e => setRegisterData({ ...registerData, lastName: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-gray-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-2">
                How will you promote our site? <span className="text-red-500">*</span>
              </label>
              <select
                value={registerData.promote}
                onChange={e => setRegisterData({ ...registerData, promote: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-gray-500"
              >
                <option>Website/Blog</option>
                <option>Social Media</option>
                <option>YouTube</option>
                <option>Email Marketing</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex items-start gap-2 mb-7">
              <input
                type="checkbox"
                checked={registerData.terms}
                onChange={e => setRegisterData({ ...registerData, terms: e.target.checked })}
                className="w-4 h-4 mt-0.5"
              />
              <label className="text-sm text-gray-700">
                Please read and accept our{' '}
                <a href="#" className="font-bold text-gray-900 hover:underline">Terms and Conditions</a>
                {' '}<span className="text-red-500">*</span>
              </label>
            </div>

            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-bold px-6 py-2 rounded-full transition-colors duration-200 tracking-wide">
              REGISTER
            </button>

          </div>
        </div>
      </div>

    </div>
  );
};

export default HealingAmbassador;
