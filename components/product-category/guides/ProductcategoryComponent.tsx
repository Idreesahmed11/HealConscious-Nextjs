"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    slug: "/careox-product",
    title: "CAREOX | 4 WEEK MENTAL HEALTH FORTIFICATION PROGRAM",
    price: 199.0,
    image: "/assets/careox-mental-health-guide-program.png",
    description:
      "Our self-help mental health guide is carefully curated and crafted by revered psychologist in their niche, and personal coaching and healing. The thematic guide is meant to help you through redefining yourself, in the reflection of who you truly are, helping you reach into the subconscious corners of mind.",
  },
];

const bestSellers = [
  {
    id: 1,
    slug: "/careox-product",
    title: "Careox | 4 week mental health fortification program",
    price: 199.0,
    image: "/assets/careox-mental-health-guide-program.png",
  },
  {
    id: 2,
    slug: "/product-leather-journal",
    title: "Vintage Leather Wellness Journal | 380 Pages",
    price: 99.0,
    image: "/assets/careox-journal-front.png",
  },
  {
    id: 3,
    slug: "/product-careox-calendar",
    title: "Careox Program Printable Calendar",
    price: 15.0,
    image: "/assets/Careox-Integrated-Printable-Page-Heal-Conscious-1536x1113.png",
  },
];

const EyeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CompareIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const GridIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const ListIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);

export default function ProductcategoryComponent() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [sort, setSort] = useState("default");
  const [priceRange, setPriceRange] = useState(200);
  const [addedId, setAddedId] = useState<number | null>(null);

  const handleAddToCart = (id: number) => {
    setAddedId(id);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-white font-sans">

  
      <div className="w-full bg-gray-100 relative overflow-hidden" style={{ minHeight: "200px" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex items-center justify-between gap-4">
          <div>
            <nav className="text-xs text-gray-500 flex items-center gap-2 mb-3 uppercase tracking-wider font-medium">
              <Link href="/" className="hover:text-gray-800 transition-colors">Home</Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-800">Guides</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 uppercase tracking-wide">Guides</h1>
          </div>

      
          <div className="hidden sm:block relative flex-shrink-0" style={{ width: "320px", height: "155px" }}>
            <svg
              className="absolute text-gray-400"
              style={{ top: 0, right: "140px", width: "100px", height: "80px" }}
              viewBox="0 0 100 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M10 10 Q50 5 80 40" strokeDasharray="5,4" />
              <path d="M70 35 L80 40 L72 48" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <img
              src="/assets/healconscious-carebox-home-banner-row-1-1-2-300x275.webp"
              alt="Careox guides"
              className="absolute right-0 bottom-0 h-full object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>

  
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col lg:flex-row gap-8">

        
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">

          
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Product Categories
            </h3>
            <ul className="space-y-2">
              {["Accessories", "Guides"].map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/product-category/${cat.toLowerCase()}`}
                    className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <span className="text-gray-400 text-xs">»»</span>
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

      
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Filter by Price
            </h3>
            <input
              type="range"
              min={0}
              max={300}
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-gray-900 mb-3"
            />
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Price: $190 — ${priceRange}</span>
              <button className="text-xs bg-gray-900 text-white px-3 py-1.5 rounded hover:bg-gray-700 transition-colors font-medium tracking-wider uppercase">
                Filter
              </button>
            </div>
          </div>

      
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Filter by Color
            </h3>
        
          </div>

          
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Filter by Size
            </h3>
            <div className="space-y-2">
              {[{ label: "Medium", count: 1 }, { label: "Small", count: 1 }].map((s) => (
                <label key={s.label} className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-3.5 h-3.5 accent-gray-900 cursor-pointer" />
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{s.label}</span>
                  </div>
                  <span className="text-xs text-gray-400">{s.count}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Best Seller */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Best Seller
            </h3>
            <div className="space-y-4">
              {bestSellers.map((item) => (
                <Link key={item.id} href={item.slug} className="flex items-center gap-3 group">
                  <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden bg-gray-50 border border-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-700 group-hover:text-gray-900 leading-snug line-clamp-2 transition-colors">
                      {item.title}
                    </p>
                    <p className="text-sm font-bold text-gray-900 mt-1">${item.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

 {/* Fitness Center Banner */}
<div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "8px", overflow: "hidden" }}>
  <img
    src="/assets/banner-woo-257x300.jpg"
    alt="Fitness Center"
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
  />
  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 16px" }}>
    <h3 style={{ color: "white", fontSize: "1.5rem", fontWeight: 900, textTransform: "uppercase", textAlign: "center", marginBottom: "16px" }}>
      FITNESS<br />CENTER
    </h3>
    <button style={{ background: "white", color: "#111", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", padding: "8px 20px", borderRadius: "9999px", border: "none", cursor: "pointer" }}>
      Read More
    </button>
  </div>
</div>
        </aside>

        {/* ════════ PRODUCTS AREA ════════ */}
        <div className="flex-1 min-w-0">

          {/* Toolbar */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded border transition-colors ${
                  viewMode === "grid"
                    ? "border-gray-900 text-gray-900 bg-gray-50"
                    : "border-gray-200 text-gray-400 hover:text-gray-600"
                }`}
              >
                <GridIcon />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded border transition-colors ${
                  viewMode === "list"
                    ? "border-gray-900 text-gray-900 bg-gray-50"
                    : "border-gray-200 text-gray-400 hover:text-gray-600"
                }`}
              >
                <ListIcon />
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="hidden sm:inline">Sort by:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-700 outline-none focus:border-gray-500 bg-white"
              >
                <option value="default">Default sorting</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Result count */}
          <p className="text-sm text-gray-500 mb-6">Showing the single result</p>

          {/* Products */}
          <div className={viewMode === "grid" ? "grid grid-cols-2 gap-6" : "flex flex-col gap-6"}>
            {products.map((product) => (
              <div
                key={product.id}
                className={`flex ${viewMode === "list" ? "flex-col sm:flex-row gap-4 sm:gap-6" : "flex-col"} border-b border-gray-100 pb-6`}
              >
                {/* Image */}
                <Link
                  href={product.slug}
                  className={`flex-shrink-0 block overflow-hidden rounded-lg bg-gray-50 border border-gray-100 ${
                    viewMode === "list" ? "w-full sm:w-48 h-48 sm:h-36" : "w-full aspect-video mb-4"
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                {/* Info */}
                <div className="flex-1 flex flex-col">
                  <Link href={product.slug}>
                    <h2 className="text-sm font-bold text-gray-800 hover:text-gray-600 transition-colors mb-2 leading-snug">
                      {product.title}
                    </h2>
                  </Link>

                  <p className="text-lg font-bold text-gray-900 mb-2">${product.price.toFixed(2)}</p>

                  {viewMode === "list" && (
                    <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-3">
                      {product.description}
                    </p>
                  )}

                  <p className="text-xs text-gray-400 italic mb-1">
                    Shipping takes from 3 to 25 days depending on your location
                  </p>
                  <p className="text-xs text-gray-400 mb-1">
                    Read our{" "}
                    <Link href="#" className="underline hover:text-gray-700">shipping policy here</Link>{" "}
                    before you make the purchase.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">
                    Read our{" "}
                    <Link href="#" className="underline hover:text-gray-700">refund and exchange policy here</Link>{" "}
                    before you make the purchase.
                  </p>

                  {/* Add to cart + wishlist */}
                  <div className="flex flex-wrap items-center gap-3 mt-auto">
                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className={`px-5 py-2 rounded text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                        addedId === product.id
                          ? "bg-green-600 text-white border-green-600"
                          : "bg-white text-gray-800 border-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900"
                      }`}
                    >
                      {addedId === product.id ? "✓ Added" : "Add to Cart"}
                    </button>

                    <Link
                      href={product.slug}
                      className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 transition-colors"
                    >
                      <HeartIcon />
                      <span>Add to wishlist</span>
                    </Link>
                  </div>

                  {/* Compare & Quick view */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      title="Compare"
                      className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-700 transition-colors border border-gray-200 rounded p-1.5"
                    >
                      <CompareIcon />
                    </button>
                    <button
                      title="Quick view"
                      className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-700 transition-colors border border-gray-200 rounded p-1.5"
                    >
                      <EyeIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
