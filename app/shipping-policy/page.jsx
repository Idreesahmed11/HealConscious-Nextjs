'use client';

import Link from 'next/link';
const healConsciousImage = '/assets/Transparent-heal-conscious-image.png';
const bannerImg = '/assets/banner-blog.jpg';

const ShippingPolicyPage = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-gray-800">
      
  
      <header className="w-full bg-[#eeeeee] py-2 px-6 md:px-16 lg:px-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <nav className="text-[10px] font-bold tracking-[0.25em] text-gray-400 mb-2 uppercase flex items-center gap-2 justify-center md:justify-start">
              <Link href="/" className="text-gray-500 hover:text-black transition-colors duration-200 no-underline">
                HOME
              </Link>
              <span className="text-black font-black text-[11px] -mt-px">I</span> 
              <span className="text-gray-500">SHIPPING POLICY</span>
            </nav>
            <h1 className="text-3xl md:text-[38px] lg:text-[44px] font-[900] text-gray-900 uppercase leading-none tracking-tight">
              SHIPPING POLICY
            </h1>
          </div>
          <div className="flex-1 w-full max-w-[400px] md:max-w-[450px]">
            <img src={healConsciousImage} alt="Heal Conscious Products" className="w-full h-auto drop-shadow-xl" />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        
        <p className="mb-10 text-[15px] text-gray-700 leading-relaxed">
          Thank you for shopping with <span className="font-bold text-black">HealConscious!</span> Here's everything you need to know about our shipping process:
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Processing Time</h2>
          <ul className="list-disc ml-5 space-y-3 text-gray-600 text-[14px] md:text-[15px]">
            <li>Orders are processed within <span className="font-bold text-black">1-3 business days</span> after payment confirmation.</li>
            <li>Orders placed on weekends or holidays will be processed the next business day.</li>
            <li>You will receive a shipping confirmation email once your order has been shipped.</li>
          </ul>
        </section>

    
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-2 text-gray-900">Shipping Methods & Delivery Times</h2>
          <p className="mb-6 text-[14px] text-gray-600">We offer the following shipping options for USA, UK, EU, MENA, and parts of Asia:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-[13px] md:text-[14px]">
              <thead>
                <tr className="bg-white">
                  <th className="border border-gray-200 p-4 text-left font-bold text-gray-700">Shipping Method</th>
                  <th className="border border-gray-200 p-4 text-left font-bold text-gray-700">Estimated Delivery Time</th>
                  <th className="border border-gray-200 p-4 text-left font-bold text-gray-700">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-200 p-4">Standard Shipping</td>
                  <td className="border border-gray-200 p-4">3-7 business days</td>
                  <td className="border border-gray-200 p-4">$10-40 (final price confirmed after order)</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-200 p-4">Express Shipping</td>
                  <td className="border border-gray-200 p-4">1-3 business days</td>
                  <td className="border border-gray-200 p-4">$10-40 (final price confirmed after order)</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-200 p-4 font-medium text-gray-800">International Shipping</td>
                  <td className="border border-gray-200 p-4">7-21 business days (varies by destination)</td>
                  <td className="border border-gray-200 p-4">
                    Contact <a href="mailto:internationalorder@healconscious.com" className="text-gray-800 font-bold hover:underline">internationalorder@healconscious.com</a> for details
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[12px] italic text-gray-400">Please note that delivery times may vary due to carrier delays, holidays, or customs clearance.</p>
        </section>

    
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Shipping Locations</h2>
          <ul className="list-disc ml-5 space-y-3 text-gray-600 text-[14px] md:text-[15px]">
            <li>We currently ship to USA, UK, EU, MENA, and parts of Asia.</li>
            <li>International customers are responsible for customs fees, duties, or taxes imposed by their country.</li>
          </ul>
        </section>

    
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Order Tracking</h2>
          <ul className="list-disc ml-5 space-y-3 text-gray-600 text-[14px] md:text-[15px]">
            <li>Once your order is shipped, you will receive a tracking number via email.</li>
            <li>You can track your order directly on our website or the carrier's website.</li>
          </ul>
        </section>

      
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Shipping Restrictions</h2>
          <ul className="list-disc ml-5 space-y-3 text-gray-600 text-[14px] md:text-[15px]">
            <li>We do not ship to PO Boxes or APO/FPO addresses.</li>
            <li>Certain products may have shipping restrictions due to legal or carrier limitations.</li>
          </ul>
        </section>

        
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Lost or Damaged Packages</h2>
          <ul className="list-disc ml-5 space-y-3 text-gray-600 text-[14px] md:text-[15px]">
            <li>If your package is lost or arrives damaged, please contact us within 3 days of delivery.</li>
            <li>We will work with the carrier to resolve the issue and ensure you receive your order or a replacement.</li>
          </ul>
        </section>

        
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Changes to Shipping Policy</h2>
          <ul className="list-disc ml-5 space-y-3 text-gray-600 text-[14px] md:text-[15px] mb-6">
            <li>We reserve the right to update this shipping policy at any time.</li>
            <li>Any changes will be posted on this page with an updated revision date.</li>
            <li>If you have any questions about your order or our shipping policy, please contact us at:</li>
          </ul>
          
          <div className="space-y-2 text-[14px] md:text-[15px]">
            <p className="text-gray-700">
              <span className="font-bold">Email:</span> <a href="mailto:contact@healconscious.com" className="hover:underline hover:text-blue-600 transition-all">contact@healconscious.com</a>
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Phone:</span> <a href="https://wa.me/13156549181" target="_blank" rel="noreferrer" className="hover:underline hover:text-green-600 transition-all">+1 (315) 654-9181 (WhatsApp)</a>
            </p>
          </div>
        </section>

      </main>

      
      <div className="fixed bottom-8 right-">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-black transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>


<div className="max-w-xs p-6 bg-white font-sans text-[#333] ml-1 lg:ml-16">
  
  
  <div className="mb-10 ">
    <h2 className="text-xl font-bold mb-4 tracking-tight uppercase left-1.5">Categories</h2>
    <div className="flex items-center text-gray-600 hover:text-black cursor-pointer group">
      <span className="text-sm mr-2">»</span>
      <span className="text-[15px]">Uncategorized</span>
      <span className="text-gray-400 ml-1 text-sm">(1)</span>
    </div>
  </div>

  
  <div className="mb-10">
    <h2 className="text-xl font-bold mb-4 tracking-tight uppercase">Popular Post</h2>
    <div className="space-y-2">
      <h3 className="font-bold text-lg hover:text-blue-600 cursor-pointer transition-colors">
        Hello world!
      </h3>
      <div className="flex items-center text-gray-400 text-[11px] uppercase tracking-widest font-medium">
        <span className="mr-1">👤</span>
        <span>Heal Conscious</span>
      </div>
    </div>
  </div>


  <div className="mb-10">
    <h2 className="text-xl font-bold mb-4 tracking-tight uppercase">Recent Comments</h2>
  </div>

  
  <div className="mt-10">
    <a 
      href="https://bodycenter.wpmudev.host/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative block w-full aspect-[3/4] overflow-hidden group rounded-sm shadow-md"
    >
      <img 
        src={bannerImg} 
        alt="Custom Block"
        className="absolute inset-0 w-full h-full m-l object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 border-[12px] border-transparent group-hover:border-white/20 transition-all duration-500">
        <h3 className="text-white text-3xl font-bold uppercase tracking-tighter leading-none text-center drop-shadow-lg">
          CUSTOM<br />BLOCK
        </h3>
      </div>
    </a>
  </div>

</div>
    </div>
  );
};

export default ShippingPolicyPage;
