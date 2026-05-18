"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";


import storeImg from "@/assets/Transparent-heal-conscious-image.png";
import img1 from "@/assets/careox-mental-health-guide-program.png";
import img2 from "@/assets/Careox-Integrated-Printable-Page-Heal-Conscious-1536x1113.png";
import img3 from "@/assets/careox-journal-front.png";


const storeImg = "/images/store-hero.png";
const img1 = "/images/careox-mental-health-guide-program.png";
const img2 = "/images/careox-printable-calendar.png";
const img3 = "/images/careox-journal-front.png";

const StoreProducts = [
  {
    id: 1,
    slug: "careox-4-week-mental-health-fortification-program",
    image: img1,
    title: "Careox | 4 week mental health fortification program",
    price: 199.0,
    rating: 4.5,
    reviews: 12,
    popularity: 3,
    latest: new Date("2024-03-01"),
    description:
      "A comprehensive 4-week mental health fortification program designed to build resilience and well-being.",
  },
  {
    id: 2,
    slug: "careox-program-printable-calendar",
    image: img2,
    title: "Careox Program Printable Calendar",
    price: 15.0,
    rating: 4.2,
    reviews: 8,
    popularity: 2,
    latest: new Date("2024-05-01"),
    description:
      "A beautiful printable calendar to track your Careox program journey day by day.",
  },
  {
    id: 3,
    slug: "journal-mental-healthcare-leather-journal",
    image: img3,
    title: "Vintage Leather Wellness Journal | 380 Pages",
    price: 99.0,
    rating: 4.8,
    reviews: 25,
    popularity: 1,
    latest: new Date("2024-02-01"),
    description:
      "A premium 380-page vintage leather wellness journal for your daily reflections and mental health notes.",
  },
];

const sortOptions = [
  { label: "Default sorting", value: "default" },
  { label: "Sort by popularity", value: "popularity" },
  { label: "Sort by average rating", value: "rating" },
  { label: "Sort by latest", value: "latest" },
  { label: "Sort by price: low to high", value: "price_asc" },
  { label: "Sort by price: high to low", value: "price_desc" },
];

function ProductCard({ product }) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setAdded(true);
  };

  const handleViewCart = (e) => {
    e.stopPropagation();
    router.push("/cart");
  };

  const handleWish = (e) => {
    e.stopPropagation();
    setWished(!wished);
  };

  
  const handleCardClick = () => {
    router.push(`/product/${product.slug}`);
  };

  return (
    <div className="flex flex-col cursor-pointer group" onClick={handleCardClick}>
      <div
        className="relative overflow-hidden rounded-lg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        
        <div
          className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          
          <button
            onClick={handleWish}
            className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:scale-110 transition"
            title="Add to wishlist"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill={wished ? "#e24b4a" : "none"}
              stroke={wished ? "#e24b4a" : "#555"}
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          
          <button
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/product/${product.slug}`);
            }}
            className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:scale-110 transition"
            title="Quick view"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>

          {/* Share */}
          <button
            onClick={(e) => e.stopPropagation()}
            className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:scale-110 transition"
            title="Share"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-2">
        <p className="text-sm text-gray-700 leading-snug group-hover:text-gray-900">
          {product.title}
        </p>
        <p className="text-base font-black text-gray-900">${product.price.toFixed(2)}</p>

        {!added ? (
          <button
            onClick={handleAddToCart}
            className="mt-1 w-full border border-gray-300 rounded-md py-2 text-sm font-medium text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200"
          >
            ADD TO CART
          </button>
        ) : (
          <button
            onClick={handleViewCart}
            className="mt-1 w-full border border-gray-900 rounded-md py-2 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
          >
            VIEW CART →
          </button>
        )}
      </div>
    </div>
  );
}

export default function Store() {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("default");
  const [sortOpen, setSortOpen] = useState(false);
  const router = useRouter();

  const getSorted = () => {
    const list = [...StoreProducts];
    switch (sortBy) {
      case "popularity": return list.sort((a, b) => a.popularity - b.popularity);
      case "rating":     return list.sort((a, b) => b.rating - a.rating);
      case "latest":     return list.sort((a, b) => b.latest - a.latest);
      case "price_asc":  return list.sort((a, b) => a.price - b.price);
      case "price_desc": return list.sort((a, b) => b.price - a.price);
      default:           return list;
    }
  };

  const sorted = getSorted();
  const currentLabel = sortOptions.find((o) => o.value === sortBy)?.label || "Default sorting";

  return (
    <div className="w-full bg-white">
    
      <div
        className="bg-[#eeede9] w-full flex items-center justify-around px-4 sm:px-8 md:px-14 overflow-hidden"
        style={{ minHeight: "140px" }}
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-xs tracking-widest">
            <Link href="/" className="font-black text-sm text-black uppercase no-underline">
              HOME
            </Link>
            <span className="text-gray-400">|</span>
            <span className="text-gray-500 uppercase">STORE</span>
          </div>
          <h1 className="text-4xl font-black uppercase text-black">STORE</h1>
        </div>
        <div className="flex items-center self-stretch">
          <img src={storeImg} alt="Store products" className="h-44 w-auto object-contain" />
        </div>
      </div>

    
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-8">
        
        <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
                viewMode === "grid"
                  ? "bg-gray-900 border-gray-900 text-white"
                  : "border-gray-300 text-gray-500 hover:border-gray-500"
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                <rect x="1" y="1" width="6" height="6" rx="1" />
                <rect x="9" y="1" width="6" height="6" rx="1" />
                <rect x="1" y="9" width="6" height="6" rx="1" />
                <rect x="9" y="9" width="6" height="6" rx="1" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
                viewMode === "list"
                  ? "bg-gray-900 border-gray-900 text-white"
                  : "border-gray-300 text-gray-500 hover:border-gray-500"
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                <rect x="1" y="2" width="14" height="2" rx="1" />
                <rect x="1" y="7" width="14" height="2" rx="1" />
                <rect x="1" y="12" width="14" height="2" rx="1" />
              </svg>
            </button>
          </div>

      
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 text-sm text-gray-700 bg-white hover:border-gray-500 transition-colors min-w-[180px] justify-between"
            >
              <span>{currentLabel}</span>
              <svg
                className={`w-4 h-4 transition-transform ${sortOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded shadow-lg z-30 min-w-[220px]">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
                      sortBy === opt.value ? "bg-gray-900 text-white" : "text-gray-700"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

    
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
              : "flex flex-col gap-6"
          }
        >
          {sorted.map((product) =>
            viewMode === "grid" ? (
              <ProductCard key={product.id} product={product} />
            ) : (
              <div
                key={product.id}
                className="flex gap-5 items-center border-b border-gray-100 pb-6 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors"
                onClick={() => router.push(`/product/${product.slug}`)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-28 h-28 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold text-gray-800">{product.title}</p>
                  <p className="text-base font-black text-gray-900">${product.price.toFixed(2)}</p>
                  <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>
                </div>
              </div>
            )
          )}
        </div>

        <p className="mt-8 text-sm text-gray-500 border-t border-gray-100 pt-4">
          Showing all {StoreProducts.length} results
        </p>
      </section>
    </div>
  );
}
