  import Image from "next/image";
  import Link from "next/link";

  const newProducts = [
    {
      id: 1,
      name: "Careox Program Printable Calendar",
      price: "$15.00",
      image: "/assets/Careox-Integrated-Printable-Page-Heal-Conscious-1536x1113.png",
    },
    {
      id: 2,
      name: "Vintage Leather Wellness Journal | 380 Pages",
      price: "$99.00",
      image: "/assets/careox-journal-front.png",
    },
    {
      id: 3,
      name: "Careox | 4 week mental health fortification program",
      price: "$199.00",
      image: "/assets/careox-mental-health-guide-program.png",
    },
  ];

  export default function CartComponent() {
    return (
      <div className="min-h-screen bg-white font-sans">

        
        <div className="relative w-full bg-gray-100 overflow-hidden">
      
          <div className="absolute right-0 top-0 h-full w-1/3 flex items-center justify-end pr-8 opacity-80">
            <Image
              src="/assets/Transparent-heal-conscious-image.png"
              alt="Heal Conscious banner"
              width={300}
              height={160}
              className="object-contain"
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-8 py-10">
          
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <Link href="/" className="hover:text-gray-800 transition-colors">
                HOME
              </Link>
              <span className="text-gray-400">›</span>
              <span className="text-gray-700 font-medium">CART</span>
            </nav>

            <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">
              CART
            </h1>
          </div>
        </div>

      
        <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center">
        
          <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
            <span className="text-white text-2xl select-none">☹</span>
          </div>

          <p className="text-gray-500 text-sm mb-6">
            Your cart is currently empty!
          </p>

        
          <div className="flex gap-2 mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 inline-block" />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 inline-block" />
          </div>

          
          <h3 className="text-xl font-semibold text-gray-800 mb-8 w-full text-center">
            New in store
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {newProducts.map((product) => (
              <div key={product.id} className="flex flex-col items-center text-center group">
          
                <div className="w-full aspect-square bg-gray-50 overflow-hidden mb-3 rounded-sm border border-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

              
                <p className="text-sm text-gray-700 mb-1 leading-snug px-2 line-clamp-2">
                  {product.name}
                </p>

                
                <p className="text-sm font-semibold text-gray-900 mb-3">
                  {product.price}
                </p>

        
     <button style={{ color: '#ffffff', backgroundColor: '#111827' }} className="w-full text-xs font-semibold uppercase tracking-wider py-2 px-4 rounded-sm hover:bg-gray-700 transition-colors mb-2">
  Add to cart
</button>
          
                <button className="w-full border border-gray-300 text-gray-600 text-xs font-medium uppercase tracking-wider py-2 px-4 rounded-sm hover:bg-gray-50 transition-colors">
                  Compare
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
