'use client';
import React from 'react';
import Link from 'next/link';
const healConsciousImage = '/assets/Transparent-heal-conscious-image.png';;
const bannerBlogImage = '/assets/banner-blog.jpg';;


export default function Terms() {
  return (
    <div className="w-full bg-gray-50 min-h-screen">


      <header className="w-full bg-[#E5E5E5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between h-auto md:h-[220px] py-6 md:py-0">

        
          <div className="flex-1 text-center md:text-left z-10">
            <nav className="flex items-center justify-center md:justify-start gap-2 mb-4 font-bold text-[12px] md:text-[14px]">
              <Link href="/" className="text-black hover:text-gray-600 transition-colors no-underline uppercase tracking-wider">
                Home
              </Link>
              <span className="text-black font-light">|</span>
              <span className="text-black uppercase tracking-wider">
                Terms of Service
              </span>
            </nav>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-tight leading-tight">
              Terms of Service
            </h1>
          </div>

          
          <div className="flex-1 w-full h-full relative mt-4 md:mt-0 flex justify-end">
            <img
              src={healConsciousImage}
              alt="Heal Conscious"
              className="w-full h-auto md:h-[220px] object-contain object-right-bottom"
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10">
        <div className="flex flex-col lg:flex-row gap-10">

        
          <main className="flex-1 min-w-0 text-gray-800 text-[15px] leading-relaxed">

            
            <section className="mb-6">
              <h2 className="text-xl font-bold text-black mb-3">1. Introduction</h2>
              <p className="mb-2">
                <strong>1.1 Acceptance of Terms:</strong> By accessing or using Heal Conscious's website
                (healconscious.com) and mobile application (Careox Connect) (collectively, "Services"), you agree
                to comply with and be bound by these Terms of Service ("Terms"). If you do not agree, you should
                not use our Services.
              </p>
              <p>
                <strong>1.2 Eligibility:</strong> You must be at least 18 years old or have the consent of a
                parent or guardian to use our Services.
              </p>
            </section>

            
            <section className="mb-6">
              <h2 className="text-xl font-bold text-black mb-3">2. Services Provided</h2>
              <p className="mb-2">
                <strong>2.1 Online Store:</strong> Our Services include an online store where you can purchase
                products. Your use of the store is governed by these Terms and our Privacy Policy.
              </p>
              <p className="mb-2">
                <strong>2.2 Community Section and Forums:</strong> We offer community features and forums where
                users can post content, participate in discussions, and interact with each other. User-generated
                content is subject to these Terms and our Community Guidelines.
              </p>
              <p>
                <strong>2.3 Affiliate Program:</strong> Our Affiliate Program allows users to earn commissions by
                promoting our products through unique tracking links. Participation is subject to these Terms and
                our Affiliate Program Agreement.
              </p>
            </section>

        
            <section className="mb-6">
              <h2 className="text-xl font-bold text-black mb-3">3. User Responsibilities</h2>
              <p className="mb-2">
                <strong>3.1 Account Security:</strong> You are responsible for maintaining the confidentiality of
                your account credentials and all activities under your account. Notify us immediately of
                unauthorized use.
              </p>
              <p className="mb-2">
                <strong>3.2 Prohibited Activities:</strong> You agree not to engage in unlawful, harmful, or
                fraudulent activities, including:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-[15px]">
                <li>Posting defamatory, obscene, or offensive content</li>
                <li>Impersonating another person or entity</li>
                <li>Violating intellectual property rights</li>
              </ul>
            </section>

          
            <section className="mb-6">
              <h2 className="text-xl font-bold text-black mb-3">4. User-Generated Content</h2>
              <p className="mb-2">
                <strong>4.1 Ownership:</strong> You retain ownership of content you post. By posting, you grant
                us a worldwide, royalty-free, non-exclusive license to use and display such content in connection
                with our Services.
              </p>
              <p>
                <strong>4.2 Responsibility:</strong> You are solely responsible for your content. We may remove
                content that violates these Terms.
              </p>
            </section>

            
            <section className="mb-6">
              <h2 className="text-xl font-bold text-black mb-3">5. Data Protection and Privacy</h2>
              <p className="mb-2">
                <strong>5.1 GDPR Compliance:</strong> EU residents' personal data is processed in accordance with
                GDPR, including rights to access, correction, deletion, and restriction.
              </p>
              <p className="mb-2">
                <strong>5.2 U.S. Privacy Laws:</strong> U.S. residents are protected under applicable laws
                including CCPA, with rights to access and deletion.
              </p>
              <p>
                <strong>5.3 Privacy Policy:</strong> By using our Services, you consent to the data practices
                outlined in our Privacy Policy.
              </p>
            </section>

            
            <section className="mb-6">
              <h2 className="text-xl font-bold text-black mb-3">6. Affiliate Program</h2>
              <p className="mb-2">
                <strong>6.1 Participation:</strong> Participation in the Healing Ambassador Program requires
                acceptance of the Healing Ambassador Program Agreement.
              </p>
              <p className="mb-2">
                <strong>6.2 Commission:</strong> Commissions are earned through qualified sales generated via
                affiliate links.
              </p>
              <p>
                <strong>6.3 Termination:</strong> We may terminate affiliate participation at any time for
                violations.
              </p>
            </section>

          
            <section className="mb-6">
              <h2 className="text-xl font-bold text-black mb-3">7. Intellectual Property</h2>
              <p className="mb-2">
                <strong>7.1 Ownership:</strong> All content, logos, graphics, and software are owned by Heal
                Conscious or its licensors.
              </p>
              <p>
                <strong>7.2 License:</strong> You are granted a limited, non-exclusive, non-transferable license
                for personal, non-commercial use only.
              </p>
            </section>

          
            <section className="mb-6">
              <h2 className="text-xl font-bold text-black mb-3">8. Dispute Resolution</h2>
              <p className="mb-2">
                <strong>8.1 Governing Law:</strong> These Terms are governed by the laws of Delaware, United
                States.
              </p>
              <p>
                <strong>8.2 Resolution:</strong> Disputes shall be resolved through mediation, arbitration, or
                legal proceedings in Delaware.
              </p>
            </section>

            
            <section className="mb-6">
              <h2 className="text-xl font-bold text-black mb-3">9. Limitation of Liability</h2>
              <p className="mb-2">
                <strong>9.1 Disclaimer:</strong> Services are provided "as is" without warranties of any kind.
              </p>
              <p>
                <strong>9.2 Limitation:</strong> We are not liable for indirect, incidental, or consequential
                damages to the fullest extent permitted by law.
              </p>
            </section>

          
            <section className="mb-6">
              <h2 className="text-xl font-bold text-black mb-3">10. Modifications</h2>
              <p>
                <strong>10.1 Changes:</strong> We may update these Terms at any time. Continued use constitutes
                acceptance.
              </p>
            </section>

          
            <section className="mb-6">
              <h2 className="text-xl font-bold text-black mb-3">11. Termination</h2>
              <p className="mb-2">
                <strong>11.1 Termination by You:</strong> You may terminate your account by contacting us.
              </p>
              <p>
                <strong>11.2 Termination by Us:</strong> We may suspend or terminate access for violations or
                other reasons.
              </p>
            </section>

            
            <section className="mb-6">
              <h2 className="text-xl font-bold text-black mb-3">12. Contact Information</h2>
              <p>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:terms@healconscious.com"
                  className="text-blue-600 hover:underline"
                >
                  terms@healconscious.com
                </a>
              </p>
            </section>

          </main>

          
          <aside className="w-full lg:w-[280px] xl:w-[300px] shrink-0 space-y-8">

        
            <div>
              <h3 className="text-base font-bold text-black uppercase tracking-widest mb-3 border-b border-gray-300 pb-2">
                CATEGORIES
              </h3>
              <ul className="space-y-1">
                <li className="flex items-center gap-1 text-[14px] text-gray-700 hover:text-black cursor-pointer">
                  <span className="text-gray-500">&raquo;</span>
                  <span>Uncategorized</span>
                  <span className="text-gray-400 ml-1">(1)</span>
                </li>
              </ul>
            </div>

      
            <div>
              <h3 className="text-base font-bold text-black uppercase tracking-widest mb-3 border-b border-gray-300 pb-2">
                POPULAR POST
              </h3>
              <div className="flex items-start gap-2">
                <div>
                  <p className="text-[14px] font-semibold text-black hover:underline cursor-pointer leading-snug">
                    Hello world!
                  </p>
                  <p className="text-[12px] text-gray-500 mt-1 flex items-center gap-1">
                    <span></span> HEAL CONSCIOUS
                  </p>
                </div>
              </div>
            </div>

            
            <div>
              <h3 className="text-base font-bold text-black uppercase tracking-widest mb-3 border-b border-gray-300 pb-2">
                RECENT COMMENTS
              </h3>
              <p className="text-[13px] text-gray-400 italic"></p>
            </div>

            
            <div>
              <a
                href="https://healconscious.com/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-sm cursor-pointer group"
              >
                <img
                  src={bannerBlogImage}
                  alt="Custom Block Banner"
                  className="w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white text-xl font-black uppercase leading-tight tracking-wide drop-shadow">
                      CUSTOM<br />BLOCK
                    </p>
                  </div>
                </div>
              </a>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}

