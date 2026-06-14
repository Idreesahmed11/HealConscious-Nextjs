'use client';
import { useState } from "react";


const connectBannerSilver = '/assets/connect_banner_silver.webp';
const logoImg = '/assets/9f17a347086dbea18bd10f4bfbe5f1ec.jpg';
const communityPhoto1 = '/assets/9f17a347086dbea18bd10f4bfbe5f1ec.jpg';
const communityPhoto2 = '/assets/b27521b53cc9106020c55932bc16500e.jpg';
const communityPhoto3 = '/assets/a8112f0a5b1b7ea67dee9681dcc30c64.jpg';
const communityPhoto4 = '/assets/592eaab648b008138c9d7e1cdea7b76c.jpg';
const undefineddefault = '/assets/undefined-default.png';
const Photo = '/assets/b27521b53cc9106020c55932bc16500e.jpg';
const Photo5 = '/assets/a8112f0a5b1b7ea67dee9681dcc30c64.jpg';
const communityPhoto6 = '/assets/592eaab648b008138c9d7e1cdea7b76c.jpg';



const latestMembers = [
  { initials: "L",  color: "#60a5fa", name: "Layla Hassan", bio: "Wellness coach & mindfulness advocate.", posts: 34,  followers: 128 },
  { initials: "S",  color: "#4ade80", name: "Sara Khan",    bio: "Yoga instructor.",                         posts: 21,  followers: 89  },
  { initials: "H",  color: "#a855f7", name: "Hassan Ali",   bio: "Holistic therapist.",                      posts: 57,  followers: 203 },
  { initials: "Y",  color: "#f472b6", name: "Yara M",       bio: "Artist and healer.",                       posts: 12,  followers: 67  },
  { initials: "S",  color: "#22c55e", name: "Sofia R",      bio: "Nutritionist.",                            posts: 44,  followers: 156 },
  { initials: "A",  color: "#34d399", name: "Amina B",      bio: "Sound healing practitioner.",              posts: 29,  followers: 112 },
  { initials: "C",  color: "#94a3b8", name: "Clara T",      bio: "Breathwork facilitator.",                  posts: 18,  followers: 74  },
  { initials: "C",  color: "#8b8b4e", name: "Caleb O",      bio: "Life coach.",                              posts: 63,  followers: 241 },
  { initials: "OM", color: "#0d9488", name: "Omar M",       bio: "Reiki master.",                            posts: 88,  followers: 317 },
  { initials: "J",  color: "#818cf8", name: "Jasmine L",    bio: "Psychotherapist.",                         posts: 51,  followers: 189 },
  { initials: "Y",  color: "#c4b5fd", name: "Yusuf D",      bio: "Herbalist.",                               posts: 37,  followers: 143 },
  { initials: "O",  color: "#c084fc", name: "Olivia N",     bio: "Conscious living blogger.",                posts: 26,  followers: 98  },
];

const communityPhotos = [
  { id: 1, src: communityPhoto1, label: "Heal Conscious", action: "uploaded a new avatar",    time: "1 year ago"   },
  { id: 2, src: communityPhoto2, label: "Sara Khan",      action: "shared a community moment", time: "8 months ago" },
  { id: 3, src: communityPhoto3, label: "Hassan Ali",     action: "posted a new photo",        time: "6 months ago" },
  { id: 4, src: communityPhoto4, label: "Yara M",         action: "added a gallery image",     time: "3 months ago" },
];

const navTabs = ["Stream", "About", "Blog", "Followers", "Groups", "Photos", "Files", "Events"];



const ShareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5"  r="3"/><circle cx="6"  cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <line x1="8.59"  y1="13.51" x2="15.42" y2="17.49"/>
    <line x1="15.41" y1="6.51"  x2="8.59"  y2="10.49"/>
  </svg>
);

const CommentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const VerifiedIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd"/>
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500">
    <path d="M12 1L9 5H4v5l-4 3 4 3v5h5l3 4 3-4h5v-5l4-3-4-3V5h-5l-3-4z"/>
  </svg>
);

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);



interface Member {
  initials: string;
  color: string;
  name: string;
  bio: string;
  posts: number;
  followers: number;
}

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="w-full bg-gray-100 mt-6">
      <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
        <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-gray-700 transition-colors">Terms of Service</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-gray-700 transition-colors">T&amp;C Healing Ambassador</a>
        </nav>
      </div>
      <div className="px-4 sm:px-6 py-5 flex items-start justify-between relative">
        <div className="pr-14 sm:pr-0">
          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500 mb-1">
            <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-gray-700 transition-colors">Terms of Service</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-gray-700 transition-colors">T&amp;C Healing Ambassador</a>
          </nav>
          <p className="text-xs text-gray-400">All rights reserved | Heal Conscious Inc.</p>
        </div>
        <button
          onClick={scrollToTop}
          className="absolute right-4 sm:right-6 bottom-5 w-11 h-11 rounded-full bg-indigo-500 hover:bg-indigo-600 active:scale-95 flex items-center justify-center shadow-md transition-all"
          aria-label="Scroll to top"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12V4M4 8l4-4 4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </footer>
  );
}

function MemberAvatar({ member, onClick }: { member: Member; onClick: (m: Member) => void }) {
  return (
    <div
      onClick={() => onClick(member)}
      title={member.name}
      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs cursor-pointer hover:scale-110 hover:opacity-90 transition-all shadow-sm select-none"
      style={{ background: member.color }}
    >
      {member.initials}
    </div>
  );
}

function MemberModal({ member, onClose }: { member: Member | null; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("Stream");
  if (!member) return null;
  const username = member.name.toLowerCase().replace(" ", "");
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-5" onClick={onClose}>
      <div
        className="bg-[#eef0f5] w-full max-w-[960px] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        style={{ maxHeight: "92vh" }}
        onClick={e => e.stopPropagation()}
      >
        <div className="relative w-full overflow-hidden shrink-0" style={{ height: "clamp(130px,20vw,250px)" }}>
          <img src={undefineddefault} className="absolute inset-0 w-full h-full object-cover" alt="Banner" />
          <button onClick={onClose} className="absolute top-3 right-3 z-10 w-7 h-7 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center text-sm font-bold transition">✕</button>
        </div>
        <div className="bg-white px-4 sm:px-6 flex items-end gap-3 shrink-0" style={{ marginTop: "-36px" }}>
          <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg border-[3px] border-white shrink-0" style={{ background: member.color }}>
            {member.initials}
          </div>
          <div className="pb-2 min-w-0">
            <p className="font-semibold text-gray-800 text-sm sm:text-base truncate">{username}</p>
          </div>
        </div>
        <div className="bg-white border-b border-gray-200 px-2 sm:px-4 overflow-x-auto shrink-0">
          <div className="flex min-w-max">
            {navTabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 sm:px-4 py-3 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-3 p-3 overflow-y-auto flex-1 min-h-0">
          <aside className="hidden md:block w-[165px] shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-3 text-xs">
              <p className="font-semibold text-gray-800 mb-1.5">Online Members</p>
              <p className="text-gray-400">No online members</p>
            </div>
          </aside>
          <main className="flex-1 flex flex-col gap-3">
            <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-2.5 text-xs text-gray-500">No posts found.</div>
            <div className="bg-white rounded-xl shadow-sm p-3">
              <p className="text-xs font-semibold text-gray-700 mb-1">About</p>
              <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

interface PhotoItem {
  id: number;
  src: string;
  label: string;
  action: string;
  time: string;
}

function Lightbox({ index, onClose, onNav }: { index: number | null; onClose: () => void; onNav: (dir: number) => void }) {
  if (index === null) return null;
  const photo: PhotoItem = communityPhotos[index];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3" onClick={onClose}>
      <div className="flex flex-col md:flex-row w-full max-w-[900px] bg-white rounded-xl overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="flex-1 bg-black flex items-center justify-center relative min-h-[300px]">
          <img src={photo.src} className="max-w-full max-h-full object-contain" alt="Gallery" />
          <button onClick={() => onNav(-1)} className="absolute left-2 text-white text-4xl p-2 opacity-50 hover:opacity-100">‹</button>
          <button onClick={() => onNav(1)}  className="absolute right-2 text-white text-4xl p-2 opacity-50 hover:opacity-100">›</button>
        </div>
        <div className="w-full md:w-[300px] p-4 flex flex-col justify-between">
          <div>
            <div className="flex gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                <img src={photo.src} className="w-full h-full object-cover" alt={photo.label} />
              </div>
              <div>
                <p className="text-sm font-bold">{photo.label}</p>
                <p className="text-xs text-gray-400">{photo.time}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 italic">&ldquo;{photo.action}&rdquo;</p>
          </div>
          <button onClick={onClose} className="mt-4 w-full py-2 bg-gray-100 rounded text-sm font-medium">Close</button>
        </div>
      </div>
    </div>
  );
}



function ArticleBottomSection({ onBack }: { onBack: () => void }) {
  const [username, setUsername] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="mt-10 border-t border-gray-200 pt-8">
      {/* Author */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-7 h-7 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            <img src={logoImg} alt="Heal Conscious" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm text-gray-700">
            About the author:{" "}
            <a href="#" className="text-blue-600 hover:underline font-medium">Heal Conscious</a>
            <span className="ml-1 text-green-500 text-xs">●</span>
          </span>
        </div>
        <p className="text-xs text-gray-400 ml-9">Tell us something about yourself.</p>
      </div>

      
      <div className="mb-8 text-xs text-gray-500">
        <span className="mr-1">Category:</span>
        <a href="#" className="text-blue-500 hover:underline mr-2">KnowledgeBase</a>
        <span className="mr-1">Tags:</span>
        {["#journaling", "#mentalhealth", "#healing", "#traumarecovery", "#mentalwellbeing"].map(tag => (
          <a key={tag} href="#" className="text-blue-500 hover:underline mr-1">{tag}</a>
        ))}
      </div>


      <h2 className="text-xl font-bold text-gray-900 mb-4">Share Your Thoughts</h2>

  
      <div className="rounded-xl overflow-hidden shadow-md relative mb-6">
        <div className="w-full relative overflow-hidden">
          <img src={connectBannerSilver} alt="Connect Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 from-black/70 via-black/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
          <div>
            <h3 className="text-white font-bold text-xl tracking-tight">Connect</h3>
            <p className="text-gray-200 text-sm">Plug into a collective healing experience.</p>
          </div>
          <button className="bg-[#3dbf9e] hover:bg-[#33a888] text-white font-bold text-sm px-5 py-2 rounded-full shadow-lg transition-all active:scale-95 whitespace-nowrap">
            Join us now, it&apos;s free!
          </button>
        </div>
      </div>

      
      <div className="mb-2">
        <div className="flex flex-col sm:flex-row gap-3 mb-2">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Username or Email"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-50 outline-none transition-all"
            />
          </div>
          <button className="bg-[#4a6cf7] hover:bg-[#3b5de7] text-white font-bold px-8 py-2.5 rounded-lg transition-all shadow-md text-sm whitespace-nowrap">
            Login
          </button>
        </div>
        <div className="flex items-center justify-between px-1">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} className="w-4 h-4 accent-blue-600" />
            <span className="text-xs text-gray-600">Remember Me</span>
          </label>
          <div className="flex gap-3 text-xs font-medium text-blue-600">
            <a href="#" className="hover:underline">Register</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>
        </div>
      </div>

  
      <div className="mt-8 border-t border-gray-100 pt-6">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">Comments</h3>
        <p className="text-sm text-gray-400">No comments yet</p>
      </div>


      <div className="mt-8 border-t border-gray-100 pt-6">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-all font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Previous
        </button>
      </div>
    </div>
  );
}



function ArticlePage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#eef0f5] flex flex-col">
      <div className="flex-1 py-10 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <img src={logoImg} alt="Heal Conscious" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <p className="font-semibold text-gray-900 flex items-center gap-1 text-sm">
                Heal Conscious <span className="text-yellow-400">🟡</span>
              </p>
              <p className="text-xs text-gray-400">1 year ago</p>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 leading-tight py-1 px-3">
            How To Use Journaling As A Self-Reflective Healing Tool
          </h1>
          <p className="text-xs text-gray-400 mb-4 py-1 px-3">August 6, 2024 (updated May 11, 2025) Published by Abeer</p>

          {[
            "Have you ever felt like your mind is a cluttered attic – filled with dusty boxes of forgotten thoughts, emotions, and memories? It's easy to let these boxes pile up over time, creating a sense of overwhelm and confusion. Through journaling, you can have a safe space to process these feelings, bring clarity to your thoughts, and begin a journey of healing and growth.",
            "For most people, pouring your deepest, darkest thoughts and feelings onto paper can seem intimidating at first, but it's precisely in this vulnerability that the true power of journaling lies. Just like talking to someone about your feelings, journaling allows you to process your emotions, gain clarity, and find relief. The only difference is, your journal is always available, never interrupts, and certainly never judges.",
          ].map((p, i) => (
            <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 py-1 px-3">{p}</p>
          ))}

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 mt-6 py-1 px-3">Why You Need To Start Journaling</h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 py-1 px-3">
            Your journal acts like a mirror that reflects what&apos;s happening inside your mind, what you feel, think, and experience. Journaling allows you to explore the deepest parts of your conscious (and sometimes, even the subconscious) mind and identify your emotions, triggers, and behaviors. This simple practice of writing down your everyday thoughts and feelings can be incredibly therapeutic and boost your overall mental and emotional well-being.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 py-1 px-3">Some benefits of regular journaling are listed below:</p>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 mt-6 py-1 px-3">Release Pent-Up Emotions</h3>
          <p className="text-center italic text-gray-700 font-medium mb-4 py-1 px-3">&ldquo;If you want to let it go, you have to let it out.&rdquo;</p>
          {[
            "Our brains are active 24/7, constantly processing information and churning out thoughts, like \"Am I good enough for this?\", \"What if this goes wrong?\", \"I'm so frustrated with my life right now.\" These thoughts can get overwhelming and you'll find yourself wishing for some sort of break. Journaling offers a much-needed escape, providing a safe outlet for you to unload these thoughts and release pent-up emotions.",
            "Similar to talking to your best friend after a long day, journaling can be a way to vent out your frustrations, fears, anger, and sadness. Sometimes, writing down negative thoughts or worries can even help get them out of your head. Once they're on paper, they may feel less overwhelming, and you're able to take a second look and process them more objectively.",
          ].map((p, i) => (
            <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 py-1 px-3">{p}</p>
          ))}

          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6 py-1 px-3">Reduce Stress</h3>
          {[
            "When you write about the stressful events in your life or the thoughts that keep you up at night, you're essentially releasing them to the outside world. This can make you feel lighter and less burdened, ultimately reducing stress and anxiety. As a stress management tool, journaling works best when it is done consistently.",
            "Unlike other stress management techniques, like walking, gardening, or working out, journaling is a low-maintenance activity – making it perfect for people of all ages and fitness levels. All you need is a pen and paper (or a digital writing platform) and you're set to work through the pain, traumas, and negativity and find relief.",
          ].map((p, i) => (
            <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 py-1 px-3">{p}</p>
          ))}

          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6 py-1 px-3">Increase Self-Awareness</h3>
          <p className="text-center italic text-gray-700 font-medium mb-3">&ldquo;Not until we are lost do we begin to understand ourselves.&rdquo; – Henry David Thoreau</p>
          {[
            "Can you say that you're truly aware of yourself – your strengths, weaknesses, attitudes, behaviors, and personality traits? Are you aware of what triggers you to get annoyed or makes you happy? Being self-aware means that you're able to recognize and understand your own emotions and the impact they have on others.",
            "Through journal writing, you can identify patterns, triggers, and recurring themes, which can lead to a deeper understanding of how you respond to different situations and why you react the way you do. By reviewing your past journal entries, you can pinpoint your emotional triggers and become more aware of your own positive and negative behaviors. This increased self-awareness can help you make more informed, thoughtful decisions and become more confident with who you are as a person.",
          ].map((p, i) => (
            <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 py-1 px-3">{p}</p>
          ))}

          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6 py-1 px-3">Helps With Setting Goals</h3>
          {[
            "According to a study conducted by Dr. Gail Matthews at Dominican University of California, those who wrote down their goals accomplished significantly more than those who did not write their goals. Whether it's finding a new job, making a specific amount of money, or dropping a few pounds, writing down your goals can make them feel more \"real\" and keep you motivated to achieve them.",
            "Journaling essentially acts like a personal coach that keeps you in check and tracks your progress. It helps you break down larger, long-term goals into smaller, actionable steps, giving you a clear path to follow. Through journaling, you can also prioritize your goals and focus your energy on the ones that matter to you the most. Doing this on a regular basis can truly transform your life.",
          ].map((p, i) => (
            <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 py-1 px-3">{p}</p>
          ))}

          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6 py-1 px-3">Healing And Trauma Recovery</h3>
          <p className="text-center italic text-gray-700 font-medium mb-3">&ldquo;Take a moment and rest. Your body, mind, and soul need time to bandage up the wounds.&rdquo;</p>
          {[
            "Suppressing or repressing emotions and avoiding traumatic memories are all coping mechanisms to protect oneself from the full impact of these painful events. Since journaling provides a safe space to express and release intense emotions associated with trauma, you can actually process what happened and how you feel about it.",
            "Many therapists often recommend journaling about traumatic experiences as a way to externalize the trauma – making it something that exists outside of you rather than something you carry internally. This creates a psychological distance between you and the traumatic experience, giving you a sense of control over it and reducing its power.",
            "Of course, healing works differently for everyone, but writing about your pain can help you make sense of it and eventually move forward. By reflecting on your past experiences, you can conduct your own retrospective inspection, beginning a journey of healing and trauma recovery.",
          ].map((p, i) => (
            <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 py-1 px-3">{p}</p>
          ))}

          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6 py-1 px-3">The Neuroscience Behind Journaling</h3>
          {[
            "While journaling sounds like a simple act of putting pen to paper, it's a scientifically backed practice that influences our brain in profound ways.",
            "Put simply, our brains are composed of three parts: the brain stem, the limbic system, and the cortex. Out of these, the limbic system, specifically the amygdala, is responsible for processing emotions, particularly fear, stress, and anxiety, and activating the body's \"fight, flight, or freeze\" response. When you start journaling and 'releasing' those emotions, the amygdala calms down and regulates your emotional responses. This reduces the intensity of all those negative emotions – fear, stress, anxiety, or aggression.",
            "The act of writing, especially when it involves introspection and reflection, also stimulates the prefrontal cortex – or the brain's \"command center.\" This area of the brain is more involved in cognitive processing, problem-solving, and decision-making, all of which are enhanced through regular journaling.",
          ].map((p, i) => (
            <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 py-1 px-3">{p}</p>
          ))}

          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6 py-1 px-3">How To Start Journaling For Mental Healthcare</h3>
          {[
            "Many people hesitate to start journaling because they fear that they're not a good writer or they don't know what to write about. Some people are reluctant to relive their traumatic experiences while others complain that they don't have the time to journal. While all of these concerns are valid, overcoming these resistances is the first step to start journaling.",
            "Take a piece of paper and a pen. Ask yourself, \"What's holding you back from expressing how you really feel?\", \"What are you afraid to feel?\"",
            "Write down the answer to these questions in your journal without overthinking or overcomplicating it. Don't hold back. Write down exactly what comes to your mind. Get everything out of your system because only then you can go to the next step and begin healing.",
          ].map((p, i) => (
            <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 py-1 px-3">{p}</p>
          ))}

          <p className="text-center italic text-gray-700 font-medium mb-3">&ldquo;The only rule of journaling is that there are no rules.&rdquo;</p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 py-1 px-3">
            There is no right or wrong way to journal, but sometimes we just need a little push to get started. Here are some tips to help you start journaling:
          </p>

          {[
            {
              title: "Choose Your Journal",
              paras: [
                "The first step in starting journal writing is to pick a notebook or digital platform that resonates with you and inspires you to write. Consider the size, style, and overall aesthetic of the journal. Choose something that motivates you to pick it up every day and write.",
                "If notebooks are not your thing, explore digital journaling apps. Most of them have clean interfaces and come with customizable templates. Experiment with different options to find the perfect fit. You could even open up a blank doc on your laptop and start typing away.",
              ],
            },
            {
              title: "Write Every Day",
              paras: [
                "Like all other habits, consistency is key when it comes to journaling. Writing every day can help you establish a consistent journaling routine. Set aside a specific time, even if it's only 15 to 20 minutes daily, dedicated to journaling and write whatever comes to mind.",
                "Select a time of day that works best for you. This could be early morning before starting your day, evenings before you sleep, or any other period that fits your schedule. Even if you can't dedicate 20 minutes, any amount of time is beneficial – just pick up the pen and start writing. Over time, this consistent practice will help you develop a deeper connection with your thoughts and feelings.",
              ],
            },
            {
              title: "Start Small",
              paras: ["Once you start getting into the habit of journaling, don't feel pressured to fill pages with deep thoughts from the beginning. Start with short, simple entries about your day, your feelings, or anything that comes to mind. As you become more comfortable, you'll naturally find yourself writing more extensively."],
            },
            {
              title: "Write Freely",
              paras: [
                "Don't overthink or hold yourself back when writing. Silence your inner critic — the voice that repeatedly wants you to correct your mistakes or censor yourself — and write freely. Be honest with yourself and pour out your raw emotions of anger, disgust, sadness, lust, fear, or anything that arises onto the pages.",
                "Remember, your journal is a safe space for raw, unfiltered, and uncensored thoughts and feelings. Feel free to explore the darkest corners of your mind without fear of judgment or criticism.",
              ],
            },
          ].map(({ title, paras }) => (
            <div key={title}>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-4 py-1 px-3">{title}</h3>
              {paras.map((p, i) => (
                <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 py-1 px-3">{p}</p>
              ))}
            </div>
          ))}

          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-4 py-1 px-3">Use Journaling Prompts</h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 py-1 px-3">
            If you find yourself getting stuck or struggling to write anything, you can use journaling prompts. Journal prompts are essentially open-ended questions or statements that can jumpstart your writing. These prompts can help you overcome writer&apos;s block by exploring certain emotions and topics.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 py-1 px-3">
            Journaling prompts can be as simple as &ldquo;What are you grateful for today?&rdquo; or &ldquo;How do you feel about yourself today, at this moment?&rdquo; Some prompts can push you to focus on your personal challenges or face your fears.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 py-1 px-3">Examples of journal prompts for self-reflective healing include:</p>
          <ul className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 py-1 px-3 list-disc list-inside space-y-1">
            {[
              "What's something you need to let go of?",
              "What parts of your life have been affected most by your pain?",
              "Describe a moment of peace and tranquility you experienced recently.",
              "What could you do to make a positive difference in your own life?",
              "Describe your ideal self. What steps can you take to move closer to this vision?",
              "Who are some people who taught you about unconditional love when you were at your lowest point?",
              "What are some anger and frustrations you're holding onto?",
              "What brings you joy and fulfillment in life?",
              "Describe a person who has had a significant impact on your life. What qualities do you admire in them?",
            ].map(prompt => <li key={prompt}>{prompt}</li>)}
          </ul>

          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-4 py-1 px-3">Find Your Unique Journaling Style</h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 py-1 px-3">
            All of us have been through different experiences which is why it&apos;s important to find a journaling approach that suits your individual needs. There&apos;s no one-size-fits-all approach and you can experiment with different styles and formats to find what works best. Here are some popular journaling styles:
          </p>

          {[
            {
              title: "Stream Of Consciousness",
              paras: [
                "Stream Of Consciousness (SOC) journaling is a technique that involves writing down whatever comes to mind without any filter or structure. It's like capturing the raw, unedited content of your thoughts and letting them flow on the pages of your journal. Write down whatever comes to your mind, no matter how random or jumbled it may seem.",
                "Set a timer for 10 to 20 minutes, find a peaceful spot, and write your thoughts and feelings without editing or filtering them. Don't pause to think or correct your mistakes and keep writing till the timer goes off. SOC journaling is a great way to clear your mind and get to know yourself better.",
              ],
            },
            {
              title: "Gratitude Journaling",
              paras: [
                "Gratitude journaling is a simple yet powerful practice for improving your mental well-being. A gratitude journal is a space where you regularly record things you're thankful for. This can be as simple as a good day with your friends or a comforting hug from your mom.",
                "The key is to focus on the positives, the simple joys that otherwise get lost in the hustle and bustle of daily life. By intentionally focusing on the positive aspects of your life, you shift your attention away from negativity and cultivate a greater sense of appreciation.",
              ],
            },
            {
              title: "Self-Reflection Journaling",
              paras: [
                "Self-reflection journaling is a practice of introspective writing that involves examining your thoughts, feelings, experiences, and behaviors. It allows you to process your day-to-day events, your reactions to them, and the emotions they elicit.",
                "Take time out every day, even if it's five minutes, to sit and reflect on your day. This will help you gain a deeper understanding of your thoughts which can further help identify recurring patterns and triggers. It's like having a conversation with yourself, where you explore your inner world and gain deeper self-awareness.",
              ],
            },
          ].map(({ title, paras }) => (
            <div key={title}>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-4 py-1 px-3">{title}</h3>
              {paras.map((p, i) => (
                <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 py-1 px-3">{p}</p>
              ))}
            </div>
          ))}

          <ArticleBottomSection onBack={onBack} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ArticlePage2({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#eef0f5] flex flex-col">
      <div className="flex-1 py-10 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 leading-tight py-1 px-3">
            How to Remain Clear, Calm and Objective When Under Pressure
          </h1>
          <p className="text-xs text-gray-400 mb-2 py-1 px-3">August 6, 2024 (updated August 6, 2024) Published by Talmud Bah</p>

          {[
            "Sometimes it can be a challenge to get things done, when under no pressure at all…",
            "But when you have a lot on your plate, it's easy to feel overwhelmed.",
          ].map((p, i) => (
            <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-2 py-1 px-3">{p}</p>
          ))}

          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-2 py-1 px-3">The pressures we have take many forms</p>

          {[
            "Work pressures, long hours, deadlines to meet, new projects to manage",
            "Work/life balance, by the time you get home, you feel emotionally, mentally, and physically drained with no energy for the people you care about",
            "Managing a house, a family, supporting everyone and meeting emotional expectations",
            "Studying, revising, pressure of exams, trying to find a job. The pressures we face vary, depending on who we are and what stage we are at, in the journey of life…",
          ].map((item, i) => (
            <p key={i} className="text-xs text-gray-400 mb-2 py-1 px-3">• {item}</p>
          ))}

          {[
            "But how do we ensure that we actually meet our objectives and do the things we need to do? Here are a few suggestions that could help…",
            "The eye of the eagle:",
            "First take a 'bird's eye view' at all the things going on in your life and list them, e.g.:",
            "Family, friends, partner, work, university etc.",
            "If it helps you could write them down, to get it out of your head and give you a visual focus.",
            "Top three:",
            "Then prioritize three things that you need to deal with or complete in the near future.",
            "Top of the list:",
          ].map((p, i) => (
            <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-2 py-1 px-3">{p}</p>
          ))}

          {[
            "Now look at your top pick in detail.",
            "What is it that needs to be done and why?",
            "When does it need to be done by?",
            "What steps do you need to take to make it happen?",
            "Sometimes it can be helpful to give yourself a deadline/date to complete your prioritised task.",
          ].map((item, i) => (
            <p key={i} className="text-xs text-gray-600 mb-2 py-1 px-3">• {item}</p>
          ))}

          {[
            "You can work through the rest of your top three using this method, then repeat the process again with the other areas of your life, you feel need attention.",
            "The importance of slowing down and taking small steps. When we think about all the things we need to do at once, it all just becomes a monstrous mass of pressure, stress, and tension but…",
            "If we can slow down, breath and remember that the things we have in our lives are there because we chose them, we can then break them up and look at them one by one, step by step.",
            "I hope this has been helpful.",
          ].map((p, i) => (
            <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-2 py-1 px-3">{p}</p>
          ))}

          <ArticleBottomSection onBack={onBack} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ArticlePage3({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#eef0f5] flex flex-col">
      <div className="flex-1 py-10 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <img src={logoImg} alt="Heal Conscious" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <p className="font-semibold text-gray-900 flex items-center gap-1 text-sm">
                Heal Conscious <span className="text-yellow-400">🟡</span>
              </p>
              <p className="text-xs text-gray-400">1 year ago</p>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 leading-tight py-1 px-3">
            &ldquo;Toxic Positivity: The Hidden Struggle Behind a Chronic Smile&rdquo;
          </h1>
          <p className="text-xs text-gray-400 mb-4 py-1 px-3">August 6, 2024 Published by Lena</p>
          <p className="text-gray-700 font-medium text-sm sm:text-base mb-6 py-1 px-3">
            &ldquo;Toxic Positivity: The Hidden Struggle Behind a Chronic Smile&rdquo;
          </p>

          {[
            "For as long as I can remember, I've always tried to see the good in things and people, choosing to describe the glass as half full and finding lessons even in challenging situations. Yet, despite my optimistic outlook, I still struggle with chronic illness, and sometimes it's incredibly tough.",
            "Toxic positivity often sounds like phrases such as, \"It could be worse,\" \"At least you don't have cancer,\" \"It's not that bad, just think positive,\" or \"Don't make a big deal out of this.\" While these comments may come from a place of good intentions, they aren't the solution to someone's pain.",
            "When people share their pain, they often just want someone to listen. Telling them to \"be more positive\" can invalidate their feelings, making it seem as if their suffering isn't real or significant, as if they don't have the right to express their struggles. This can even lead to people avoiding seeking professional help, believing their pain isn't serious enough or feeling guilty for not being \"strong enough.\"",
            "In our culture of relentless positivity, we often praise those who suppress their emotions and put on a brave face during tough times. When someone does open up, we may respond with well-meaning but harmful advice to just stay positive, as if that alone could make everything better.",
            "However, experiencing negative emotions is a natural part of life. Allowing yourself to fully feel these emotions can actually help them pass more quickly. Instead of pushing positivity, offer support and understanding. You can say things like, \"I'm sorry to hear what you're going through. How can I help?\" or \"I know you're going through a tough time, but I believe in you.\" Even acknowledging their effort with, \"I know it's difficult, but you're doing a great job handling this,\" can make a world of difference.",
            "You have a full spectrum of emotions, and it's important to surround yourself with people who support and respect that.",
          ].map((p, i) => (
            <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 py-1 px-3">{p}</p>
          ))}

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 italic font-medium py-1 px-3">
            &ldquo;Have you experienced toxic positivity when dealing with challenges? How did it make you feel, and how did you cope?&rdquo;
          </p>
          <p className="text-gray-700 text-sm py-1 px-3">With love, Lena</p>

          <ArticleBottomSection onBack={onBack} />
        </div>
      </div>
      <Footer />
    </div>
  );
}


interface PostCardProps {
  avatarSrc: string;
  authorName: string;
  badge?: "verified" | "star";
  action: string;
  timeAgo: string;
  hasLink?: boolean;
  children: React.ReactNode;
}

function PostCard({ avatarSrc, authorName, badge, action, timeAgo, hasLink, children }: PostCardProps) {
  return (
    <section className="w-full">
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
        <div className="p-4 md:p-5 flex items-start gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-black flex-shrink-0 border border-gray-100 shadow-sm">
            <img src={avatarSrc} alt={authorName} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-x-2">
              <h3 className="text-[#333] font-bold text-base md:text-lg hover:text-blue-600 cursor-pointer">{authorName}</h3>
              {badge === "verified" && <VerifiedIcon />}
              {badge === "star" && <StarIcon />}
              <span className="text-gray-500 text-sm">{action}</span>
            </div>
            <p className="text-gray-400 text-xs mt-0.5 flex items-center gap-1">
              {timeAgo}
              {hasLink && <LinkIcon />}
            </p>
          </div>
        </div>
        {children}
        <div className="flex justify-end border-b border-gray-100 p-3 px-6">
          <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 text-sm font-semibold transition-all">
            <ShareIcon />Share
          </button>
        </div>
        <div className="p-4 px-6 flex items-center gap-3">
          <LockIcon />
          <p className="text-gray-500 text-sm">
            <span className="text-blue-600 font-medium hover:underline cursor-pointer">Register</span>{" "}or{" "}
            <span className="text-blue-600 font-medium hover:underline cursor-pointer">Login</span>{" "}to react or comment.
          </p>
        </div>
      </div>
    </section>
  );
}

interface ArticleCardProps {
  title: string;
  excerpt: string;
  onReadMore: () => void;
}

function ArticleCard({ title, excerpt, onReadMore }: ArticleCardProps) {
  return (
    <div className="mx-4 mb-4 border border-gray-200 rounded-xl overflow-hidden">
      <div className="p-4">
        <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">{title}</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          {excerpt}{" "}
          <button onClick={onReadMore} className="text-blue-600 hover:underline font-medium">Continue reading</button>
        </p>
      </div>
      <div className="border-t border-gray-100 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="thumb" className="w-7 h-7 rounded object-cover" />
          <span className="text-xs text-gray-500 font-medium">Connect | Heal Conscious...</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <button className="flex items-center gap-1 hover:text-gray-600 transition-colors"><CommentIcon /><span className="text-xs">0</span></button>
          <button className="hover:text-gray-600 transition-colors"><ShareIcon /></button>
        </div>
      </div>
    </div>
  );
}



export default function PagetwoComponent() {
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername]     = useState("");
  const [lightboxIndex, setLightboxIndex]   = useState<number | null>(null);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [showArticle,  setShowArticle]  = useState(false);
  const [showArticle2, setShowArticle2] = useState(false);
  const [showArticle3, setShowArticle3] = useState(false);

  if (showArticle)  return <ArticlePage  onBack={() => setShowArticle(false)} />;
  if (showArticle2) return <ArticlePage2 onBack={() => setShowArticle2(false)} />;
  if (showArticle3) return <ArticlePage3 onBack={() => setShowArticle3(false)} />;

  return (
    <div className="min-h-screen bg-[#eef0f5] flex flex-col">
      <div className="flex-1 flex items-start justify-center py-6 px-4">
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-6">

          {/* LEFT SIDEBAR */}
          <aside className="hidden lg:block w-[200px] shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-4 sticky top-6">
              <h2 className="font-semibold text-gray-800 text-sm mb-2">Online Members</h2>
              <p className="text-gray-400 text-xs">No online members</p>
            </div>
          </aside>

    
          <main className="flex-1 flex flex-col gap-6">

          
            <div className="rounded-2xl overflow-hidden shadow-md relative group">
              <div className="w-full relative overflow-hidden h-[200px] sm:h-[300px]">
                <img
                  src={connectBannerSilver}
                  alt="Connect Banner"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-white font-bold text-2xl tracking-tight">Connect</h1>
                  <p className="text-gray-200 text-sm">Plug into a collective healing experience.</p>
                </div>
                <button className="bg-[#3dbf9e] hover:bg-[#33a888] text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-lg transition-all active:scale-95">
                  Join us now, it&apos;s free!
                </button>
              </div>
            </div>

            
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-500 ml-1">Username</label>
                  <input
                    type="text"
                    placeholder="Username or Email"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all outline-none"
                  />
                </div>
                <button className="bg-[#4a6cf7] hover:bg-[#3b5de7] text-white font-bold py-3 rounded-xl transition-all shadow-lg">
                  Login
                </button>
              </div>
              <div className="mt-4 flex justify-between items-center text-sm px-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} className="w-4 h-4 accent-blue-600" />
                  <span className="text-gray-600">Remember Me</span>
                </label>
                <div className="flex gap-3 font-medium text-blue-600">
                  <a href="#">Register</a>
                  <span className="text-gray-300">|</span>
                  <a href="#">Forgot Password?</a>
                </div>
              </div>
            </div>

  
            <PostCard avatarSrc={logoImg} authorName="Heal Conscious" badge="verified" action="uploaded a new avatar" timeAgo="1 year ago">
              <div className="bg-white w-full aspect-video md:h-[400px] flex justify-center items-center p-8">
                <img src={logoImg} alt="Heal Conscious Logo" className="max-w-full max-h-full object-contain scale-110" />
              </div>
            </PostCard>

            <PostCard avatarSrc={logoImg} authorName="Sana Fatima" badge="verified" action="uploaded a new avatar" timeAgo="1 year ago">
              <div className="bg-white w-full aspect-video md:h-[400px] flex justify-center items-center p-8">
                <img src={Photo} alt="Photo" className="max-w-full max-h-full object-contain scale-110" />
              </div>
            </PostCard>

      
            <PostCard avatarSrc={logoImg} authorName="Heal Conscious" badge="star" action="wrote a new post" timeAgo="1 year ago" hasLink>
              <ArticleCard
                title="How To Use Journaling As A Self-Reflective Healing Tool"
                excerpt="Have you ever felt like your mind is a cluttered attic – filled with dusty boxes of forgotten thoughts, emotions, and memories? It's easy to let these boxes pile up over time, creating a sense of overwhelm and confusion. Through journaling, you can have a safe space to process these feelings, bring clarity to your ..."
                onReadMore={() => setShowArticle(true)}
              />
            </PostCard>

            <PostCard avatarSrc={logoImg} authorName="Heal Conscious" badge="star" action="wrote a new post" timeAgo="1 year ago" hasLink>
              <ArticleCard
                title="How to Remain Clear, Calm and Objective When Under Pressure"
                excerpt="Sometimes it can be a challenge to get things done, when under no pressure at all... But when you have a lot on your plate, it's easy to feel overwhelmed. The pressures we have take many forms • Work pressures, long hours, deadlines to meet, new projects to manage • Work/life balance, by the time ..."
                onReadMore={() => setShowArticle2(true)}
              />
            </PostCard>

            <PostCard avatarSrc={logoImg} authorName="Heal Conscious" badge="star" action="wrote a new post" timeAgo="1 year ago" hasLink>
              <ArticleCard
                title='"Toxic Positivity: The Hidden Struggle Behind a Chronic Smile"'
                excerpt='"Toxic Positivity: The Hidden Struggle Behind a Chronic Smile" For as long as I can remember, I ve always tried to see the good in things and people, choosing to describe the glass as half full and finding lessons even in challenging situations. Yet, despite my optimistic outlook, I still struggle with chronic illness, and sometimes …'
                onReadMore={() => setShowArticle3(true)}
              />
            </PostCard>

      
            <PostCard avatarSrc={Photo5} authorName="Talmud Bah" badge="verified" action="uploaded a new avatar" timeAgo="1 year ago">
              <div className="bg-white w-full aspect-video md:h-[400px] flex justify-center items-center p-8">
                <img src={Photo5} alt="Talmud Bah" className="max-w-full max-h-full object-contain scale-110" />
              </div>
            </PostCard>

            <PostCard avatarSrc={communityPhoto6} authorName="Lena Andres" badge="verified" action="uploaded a new avatar" timeAgo="1 year ago">
              <div className="bg-white w-full aspect-video md:h-[400px] flex justify-center items-center p-8">
                <img src={communityPhoto6} alt="Lena Andres" className="max-w-full max-h-full object-contain scale-110" />
              </div>
            </PostCard>

        
            <PostCard avatarSrc={logoImg} authorName="Heal Conscious" badge="star" action="wrote a new post" timeAgo="1 year ago" hasLink>
              <div className="mx-4 mb-4 border border-gray-200 rounded-xl overflow-hidden">
                <div className="p-4">
                  <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">Welcome to Connect</h2>
                  <p className="text-sm text-gray-600 leading-relaxed">Connect is your doorway into a collective healing experience. Plug in now!</p>
                </div>
                <div className="border-t border-gray-100 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={logoImg} alt="thumb" className="w-7 h-7 rounded object-cover" />
                    <span className="text-xs text-gray-500 font-medium">Connect | Heal Conscious...</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <button className="flex items-center gap-1 hover:text-gray-600 transition-colors"><CommentIcon /><span className="text-xs">0</span></button>
                    <button className="hover:text-gray-600 transition-colors"><ShareIcon /></button>
                  </div>
                </div>
              </div>
            </PostCard>

          </main>

    
          <aside className="w-full lg:w-[240px] flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <h6 className="font-bold text-gray-800 text-sm mb-2">Community Photos</h6>
              <div className="grid grid-cols-2 gap-2">
                {communityPhotos.map((photo, i) => (
                  <div
                    key={photo.id}
                    className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer shadow-sm border border-gray-50"
                    onClick={() => setLightboxIndex(i)}
                  >
                    <img src={photo.src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={photo.label} />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-5">
              <h6 className="font-bold text-gray-800 text-sm mb-4">Latest Members</h6>
              <div className="grid grid-cols-4 gap-3">
                {latestMembers.slice(0, 12).map((m, i) => (
                  <MemberAvatar key={i} member={m} onClick={setSelectedMember} />
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>

      <Footer />

      <Lightbox
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNav={(dir) => setLightboxIndex(i => i === null ? 0 : (i + dir + communityPhotos.length) % communityPhotos.length)}
      />
      <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  );
}