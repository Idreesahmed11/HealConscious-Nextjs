// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const calendarImg = '/assets/Careox-Integrated-Printable-Page-Heal-Conscious-1536x1113.png';
// const journalImg = '/assets/careox-journal-front.png';
// const programImg = '/assets/careox-mental-health-guide-program.png';

// const products = [
//   {
//     id: "careox-calendar",
//     name: "Careox Program Printable Calendar",
//     price: "$15.00",
//     route: "/product/careox-program-printable-calendar",
//     img: calendarImg,
//   },
//   {
//     id: "leather-journal",
//     name: "Vintage Leather Wellness Journal | 380 Pages",
//     price: "$99.00",
//     route: "/product/journal-mental-healthcare-leather-journal",
//     img: journalImg,
//   },
//   {
//     id: "fortification-program",
//     name: "Careox | 4 week mental health fortification program",
//     price: "$199.00",
//     route: "/product/careox-4-week-mental-health-fortification-program",
//     img: programImg,
//   },
// ];

// const IconCompare = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
//     <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
//   </svg>
// );
// const IconHeart = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
//     <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//   </svg>
// );
// const IconEye = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
//     <circle cx="12" cy="12" r="3" />
//     <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
//   </svg>
// );

// function ProductCard({ product }) {
//   const [hovered, setHovered] = useState(false);
//   const router = useRouter();

//   return (
//     <div
//       onClick={() => router.push(product.route)}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="relative overflow-hidden rounded-[10px] bg-white cursor-pointer transition-shadow duration-200"
//       style={{
//         border: "0.5px solid #e0ddd8",
//         boxShadow: hovered ? "0 4px 16px rgba(0,0,0,0.08)" : "none",
//       }}
//     >
//       <div className="relative overflow-hidden bg-[#f5f0eb] h-[220px] md:h-[170px]">
//         {/* eslint-disable-next-line @next/next/no-img-element */}
//         <img
//           src={product.img}
//           alt={product.name}
//           className="w-full h-full object-cover block transition-transform duration-300"
//           style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
//         />

//         <div
//           className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-[10px] py-[8px] bg-white/95"
//           style={{
//             borderTop: "0.5px solid #e0ddd8",
//             opacity: hovered ? 1 : 0,
//             transform: hovered ? "translateY(0)" : "translateY(10px)",
//             transition: "opacity 0.22s ease, transform 0.22s ease",
//             pointerEvents: hovered ? "auto" : "none",
//           }}
//           onClick={(e) => e.stopPropagation()}
//         >
//           <button
//             onClick={(e) => { e.stopPropagation(); alert("Added to cart!"); }}
//             className="bg-white text-[#222] text-[11px] font-semibold px-[13px] py-[6px] rounded-[3px] tracking-[0.04em] cursor-pointer"
//             style={{ border: "1px solid #444" }}
//           >
//             ADD TO CART
//           </button>

//           <div className="flex gap-[10px] items-center">
//             {[
//               { Icon: IconCompare, title: "Compare" },
//               { Icon: IconHeart, title: "Add to Wishlist" },
//               { Icon: IconEye, title: "Quick View" },
//             ].map(({ Icon, title }) => (
//               <button
//                 key={title}
//                 title={title}
//                 onClick={(e) => e.stopPropagation()}
//                 className="bg-transparent border-none cursor-pointer text-[#888] flex items-center p-[2px] hover:text-[#222] transition-colors"
//               >
//                 <Icon />
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="px-[14px] py-[12px]">
//         <p className="text-[13px] text-[#333] text-center leading-[1.45] mb-[5px]">
//           {product.name}
//         </p>
//         <p className="text-[15px] font-bold text-[#111] text-center">
//           {product.price}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function HealConsciousSection() {
//   const router = useRouter();

//   return (
//     <div className="font-serif bg-white">
//       <div className="px-4 py-5 md:px-6 md:py-8">
//         <div className="flex flex-col lg:flex-row gap-6 items-start">

//           {/* Cards — mobile: 1 col, tablet: 2 col, desktop: 3 col */}
//           <div className="order-1 flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 w-full min-w-0">
//             {products.map((p) => (
//               <ProductCard key={p.id} product={p} />
//             ))}
//           </div>

//           {/* Text + Button */}
//           <div className="order-2 w-full lg:w-[220px] lg:flex-shrink-0">
//             <p className="hidden lg:block text-[11px] font-semibold text-[#888] tracking-[0.1em] uppercase mb-[6px]">
//               OUR PRODUCTS
//             </p>
//             <div className="flex lg:block items-center gap-5 flex-wrap">
//               <h2 className="flex-1 text-[18px] sm:text-[19px] lg:text-[22px] font-bold text-[#111] leading-[1.35] lg:mb-4">
//                 Your Mental Health, Our Priority – Shop Now
//               </h2>
//               <button
//                 onClick={() => router.push("/store")}
//                 className="flex-shrink-0 px-[22px] py-[9px] border border-[#333] bg-white text-[#222] text-[13px] font-medium rounded-[3px] cursor-pointer whitespace-nowrap hover:bg-[#f0f0f0] transition-colors"
//               >
//                 Start Here
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }