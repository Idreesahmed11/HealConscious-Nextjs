'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const storeImg = '/assets/Transparent-heal-conscious-image.png';
const img1     = '/assets/careox-mental-health-guide-program.png';
const img2     = '/assets/Careox-Integrated-Printable-Page-Heal-Conscious-1536x1113.png';
const img3     = '/assets/careox-journal-front.png';

const StoreProducts = [
  {
    id: 1,
    slug: 'product-fortification-program',
    image: img1,
    title: 'Careox | 4 Week Mental Health Fortification Program',
    price: 199.0,
    rating: 4.5,
    reviews: 12,
    popularity: 3,
    latest: new Date('2024-03-01'),
    description:
      'A comprehensive 4-week mental health fortification program designed to build resilience and well-being.',
  },
  {
    id: 2,
    slug: 'product-careox-calendar',
    image: img2,
    title: 'Careox Program Printable Calendar',
    price: 15.0,
    rating: 4.2,
    reviews: 8,
    popularity: 2,
    latest: new Date('2024-05-01'),
    description:
      'A beautiful printable calendar to track your Careox program journey day by day.',
  },
  {
    id: 3,
    slug: 'product-leather-journal',
    image: img3,
    title: 'Vintage Leather Wellness Journal | 380 Pages',
    price: 99.0,
    rating: 4.8,
    reviews: 25,
    popularity: 1,
    latest: new Date('2024-02-01'),
    description:
      'A premium 380-page vintage leather wellness journal for your daily reflections and mental health notes.',
  },
];

const sortOptions = [
  { label: 'Default sorting',            value: 'default'    },
  { label: 'Sort by popularity',         value: 'popularity' },
  { label: 'Sort by average rating',     value: 'rating'     },
  { label: 'Sort by latest',             value: 'latest'     },
  { label: 'Sort by price: low to high', value: 'price_asc'  },
  { label: 'Sort by price: high to low', value: 'price_desc' },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="12" height="12" viewBox="0 0 24 24"
          fill={star <= Math.round(rating) ? '#f59e0b' : 'none'}
          stroke="#f59e0b" strokeWidth="2">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
      <span className="text-[11px] text-gray-400 ml-1">({rating})</span>
    </div>
  );
}

interface Product {
  id: number;
  slug: string;
  image: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  popularity: number;
  latest: Date;
  description: string;
}

function ProductCard({ product, listMode = false }: { product: Product; listMode?: boolean }) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const [wished,  setWished]  = useState(false);
  const [added,   setAdded]   = useState(false);

  if (listMode) {
    return (
      <div
        onClick={() => router.push(`/${product.slug}`)}
        className="flex gap-5 items-center border-b border-gray-100 p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <img src={product.image} alt={product.title} className="w-28 h-28 object-cover rounded-lg flex-shrink-0" />
        <div className="flex flex-col gap-1.5">
          <p className="text-sm font-semibold text-gray-800">{product.title}</p>
          <StarRating rating={product.rating} />
          <p className="text-base font-black text-gray-900">${product.price.toFixed(2)}</p>
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{product.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col cursor-pointer"
      onClick={() => router.push(`/${product.slug}`)}
    >
      <div
        className="relative overflow-hidden rounded-xl"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={product.image} alt={product.title}
          className={`w-full h-60 object-cover transition-transform duration-300 ${hovered ? 'scale-105' : 'scale-100'}`}
        />
        <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={(e) => { e.stopPropagation(); setWished(!wished); }}
            className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
          >
            <svg width="16" height="16" viewBox="0 0 24 24"
              fill={wished ? '#e24b4a' : 'none'} stroke={wished ? '#e24b4a' : '#555'} strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); router.push(`/${product.slug}`); }}
            className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
            </svg>
          </button>
          <button
            onClick={(e) => e.stopPropagation()}
            className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
              <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <p className="text-sm text-gray-600 leading-snug hover:text-gray-900 transition-colors">{product.title}</p>
        <StarRating rating={product.rating} />
        <p className="text-base font-black text-gray-900">${product.price.toFixed(2)}</p>
        {!added ? (
          <button
            onClick={(e) => { e.stopPropagation(); setAdded(true); }}
            className="mt-1 w-full border border-gray-300 rounded-md py-2.5 text-xs font-semibold tracking-widest text-gray-600 bg-white hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200"
          >
            ADD TO CART
          </button>
        ) : (
          <button
            onClick={(e) => { e.stopPropagation(); router.push('/cart'); }}
            className="mt-1 w-full border border-gray-900 rounded-md py-2.5 text-xs font-semibold tracking-widest text-gray-900 bg-white hover:bg-gray-900 hover:text-white transition-all duration-200"
          >
            VIEW CART →
          </button>
        )}
      </div>
    </div>
  );
}

export default function StoreComponent() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy,   setSortBy]   = useState('default');
  const [sortOpen, setSortOpen] = useState(false);

  const getSorted = (): Product[] => {
    const list = [...StoreProducts];
    switch (sortBy) {
      case 'popularity': return list.sort((a, b) => a.popularity - b.popularity);
      case 'rating':     return list.sort((a, b) => b.rating - a.rating);
      case 'latest':     return list.sort((a, b) => b.latest.getTime() - a.latest.getTime());
      case 'price_asc':  return list.sort((a, b) => a.price - b.price);
      case 'price_desc': return list.sort((a, b) => b.price - a.price);
      default:           return list;
    }
  };

  const sorted       = getSorted();
  const currentLabel = sortOptions.find((o) => o.value === sortBy)?.label ?? 'Default sorting';

  return (
    <div className="w-full bg-white">
      <div className="w-full bg-[#eeede9] flex items-center justify-between px-[clamp(1rem,5vw,3.5rem)] min-h-[140px] overflow-hidden">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-xs tracking-widest">
            <Link href="/" className="font-black text-[13px] text-gray-900 no-underline hover:underline">HOME</Link>
            <span className="text-gray-400">|</span>
            <span className="text-gray-500 uppercase">Store</span>
          </div>
          <h1 className="text-[clamp(2rem,5vw,2.5rem)] font-black text-gray-900 m-0 uppercase tracking-wider">STORE</h1>
        </div>
        <img src={storeImg} alt="Store" className="h-[clamp(100px,18vw,176px)] w-auto object-contain" />
      </div>

      <section className="w-full max-w-[1200px] mx-auto px-[clamp(1rem,4vw,2rem)] py-[clamp(1.5rem,4vw,2.5rem)]">
        <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4 flex-wrap gap-3">
          <div className="flex gap-2">
            <button onClick={() => setViewMode('grid')}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${viewMode === 'grid' ? 'bg-gray-900 border-gray-900 text-white' : 'bg-white border-gray-300 text-gray-400 hover:border-gray-500'}`}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <rect x="1" y="1" width="6" height="6" rx="1" /><rect x="9" y="1" width="6" height="6" rx="1" />
                <rect x="1" y="9" width="6" height="6" rx="1" /><rect x="9" y="9" width="6" height="6" rx="1" />
              </svg>
            </button>
            <button onClick={() => setViewMode('list')}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${viewMode === 'list' ? 'bg-gray-900 border-gray-900 text-white' : 'bg-white border-gray-300 text-gray-400 hover:border-gray-500'}`}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <rect x="1" y="2" width="14" height="2" rx="1" /><rect x="1" y="7" width="14" height="2" rx="1" />
                <rect x="1" y="12" width="14" height="2" rx="1" />
              </svg>
            </button>
          </div>
          <div className="relative">
            <button onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center justify-between gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-600 bg-white min-w-[200px] hover:border-gray-500 transition-colors">
              <span>{currentLabel}</span>
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                className={`transition-transform duration-200 ${sortOpen ? 'rotate-180' : 'rotate-0'}`}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-50 min-w-[220px] overflow-hidden">
                {sortOptions.map((opt) => (
                  <button key={opt.value} onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${sortBy === opt.value ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-10">
            {sorted.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {sorted.map((product) => <ProductCard key={product.id} product={product} listMode />)}
          </div>
        )}

        <p className="mt-8 text-sm text-gray-400 border-t border-gray-100 pt-4">
          Showing all {StoreProducts.length} results
        </p>
      </section>
    </div>
  );
}
