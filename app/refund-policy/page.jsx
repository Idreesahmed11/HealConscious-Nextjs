import React from 'react';
import Link from 'next/link';
import healConsciousImage from '../assets/Transparent-heal-conscious-image.png';


export default function RefundPolicy() {
  return (
    <div className="w-full bg-gray-50">
      
      <header className="w-full bg-[#E5E5E5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between h-auto md:h-[220px] py-6 md:py-0">
          
          
          <div className="flex-1 text-center md:text-left z-10">
            <nav className="flex items-center justify-center md:justify-start gap-2 mb-4 font-bold text-[12px] md:text-[14px]">
              <Link href="/" className="text-black hover:text-gray-600 transition-colors no-underline uppercase tracking-wider">
                Home
              </Link>
              <span className="text-black font-light">|</span>
              <span className="text-black uppercase tracking-wider">
                Refund and Returns Policy
              </span>
            </nav>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-[900] text-black uppercase tracking-tight leading-[1]">
              Refund and Returns Policy
            </h1>
          </div>

  
          <div className="flex-1 w-full h-full relative mt-4 md:mt-0">
            <img 
              src={healConsciousImage} 
              alt="Careox Connect" 
              className="w-full h-auto md:h-full object-contain object-right-bottom md:scale-105"
            />
          </div>

        </div>
      </header>
  
<section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
  <div className="max-w-5xl mx-auto text-gray-800">

    
    <h2 className="text-xl md:text-2xl font-bold mb-4">Overview</h2>

    <p className="mb-4">
      Our refund and returns policy states that <span className="font-semibold">all sales are final</span>. No refunds will be issued. However, exchanges for damaged deliveries are accepted within <span className="font-semibold">30 days</span> of purchase. If 30 days have passed since your purchase, we are unable to offer an exchange.
    </p>

    <p className="mb-4">
      To be eligible for an exchange, your item must be unused, in the same condition as received, and in its original packaging (for example, Careox packaging).
    </p>

    <p className="mb-6">
      To complete your exchange, a receipt or proof of purchase is required. Please do not send your purchase back to the manufacturer. To initiate an exchange, contact us at exchanges@healconscious.com.
    </p>


    <h2 className="text-xl md:text-2xl font-bold mb-4">
      Situations Where Exchanges Are Not Granted
    </h2>

    <ul className="list-disc pl-6 mb-6 space-y-2">
      <li>Obvious signs of use</li>
      <li>Items not in original condition, damaged, or missing parts for reasons not due to our error</li>
      <li>Items returned more than 30 days after delivery</li>
    </ul>


    <h2 className="text-xl md:text-2xl font-bold mb-4">Exchanges</h2>

    <p className="mb-4">
      Once your returned item is received and inspected, we will notify you via email that we have received it. We will also inform you whether your exchange request has been approved or rejected.
    </p>

    <p className="mb-6">
      If approved, your exchange will be processed. If applicable, a credit for shipping may be applied to your original method of payment within a certain number of days.
    </p>

  
    <h2 className="text-xl md:text-2xl font-bold mb-4">
      Late or Missing Exchanges
    </h2>

    <p className="mb-3">
      If you have not received your exchange:
    </p>

    <ul className="list-disc pl-6 mb-4 space-y-2">
      <li>Please contact us via email or phone</li>
      <li>Then contact your credit card or payment provider, as processing times may vary</li>
    </ul>

    <p className="mb-6">
      If you have completed all of the above steps and still have not received your exchange, please contact us at exchanges@healconscious.com.
    </p>


    <h2 className="text-xl md:text-2xl font-bold mb-4">Sale Items</h2>

      <p className="mb-6">
   All physical items, including sale items (excluding digital downloads), are eligible for exchange.
    </p>


    <h2 className="text-xl md:text-2xl font-bold mb-4">Exchanges for Defective or Damaged Items</h2>

      <p className="mb-6">
  We only replace items if they are defective or damaged. If you need to exchange an item for the same product, please email us at exchanges@healconscious.com. Return instructions and the shipping address will be provided based on your geolocation.

    </p>
    <p className="mb-6">Please inspect your order upon receipt and contact us immediately if the item is defective, damaged, or incorrect so we can evaluate the issue and resolve it promptly.</p>


    <h2 className="text-xl md:text-2xl font-bold mb-4">Shipping Returns</h2>

      <p className="mb-6">For returns within the United States, please mail your product to: </p>

      <p className="mb-6">
    
1505 Sawyer Street <br />
Houston, Texas 77007 <br />
United States of America
</p>

<br />
  <p className="mb-6">You are responsible for paying your own shipping costs for returning your item. Shipping costs are non-refundable.</p>
   <p className="mb-6">The time required for an exchanged product to reach you may vary depending on your location. </p>
    <p className="mb-6">For higher-value items, we recommend using a trackable shipping service or purchasing shipping insurance. We do not guarantee receipt of returned items.

 </p>

  <h2 className="text-xl md:text-2xl font-bold mb-4">Need Help?
</h2>

      <p className="mb-6">If you have questions related to refunds or exchanges, please contact us at exchanges@healconscious.com. </p>



    
  </div>
</section>
      

    </div>
  );
}
