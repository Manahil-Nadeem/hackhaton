import Image from 'next/image';

export default function Home() {
  const products = [
    {
      name: "The Poplar suede sofa",
      price: 99.0,
      image: "/1234.png?height=375&width=630",
    },
    {
      name: "The Dandy chair",
      price: 99.0,
      image: "/Sofa.png?height=357&width=305",
    },
    {
      name: "The Dandy chair",
      price: 99.0,
      image: "/H12.png?height=375&width=305",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <main className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-4 p-44 bg-white">
        <section className="w-[619px] h-[477px] bg-[#006D77] rounded-lg overflow-hidden shadow-lg">
          <div className="h-full p-8 flex flex-col justify-center items-center text-center">
            <h1 className="text-white text-4xl font-medium mb-6">
              About Us - Comforty
            </h1>
            <p className="text-white text-lg mb-8 leading-relaxed max-w-md">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-sm transition-colors">
              View collection
            </button>
          </div>
        </section>
        <section className="w-[672px] h-[477px] bg-white rounded-lg flex items-center justify-center">
          <Image
            src="/chair2.png"
            alt="White wooden chair"
            width={475}
            height={300}
            className="object-contain"
          />
        </section>
      </main>

      {/* Features Section */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
          What Makes Our Brand Different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-start p-6 hover:shadow-lg transition-shadow rounded-lg">
            <div className="w-12 h-12 mb-4 text-teal-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-teal-600">
              Next day as standard
            </h3>
            <p className="text-teal-600">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start p-6 hover:shadow-lg transition-shadow rounded-lg">
            <div className="w-12 h-12 mb-4 text-teal-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-teal-600">
              Made by true artisans
            </h3>
            <p className="text-teal-600">
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start p-6 hover:shadow-lg transition-shadow rounded-lg">
            <div className="w-12 h-12 mb-4 text-teal-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-teal-600">
              Unbeatable prices
            </h3>
            <p className="text-teal-600">
              For our materials and quality, you won&apos;t find better prices
              anywhere
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-start p-6 hover:shadow-lg transition-shadow rounded-lg">
            <div className="w-12 h-12 mb-4 text-teal-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-teal-600">
              Recycled packaging
            </h3>
            <p className="text-teal-600">
              We use 100% recycled materials to ensure our footprint is more
              manageable
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Our Popular Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {products.map((product, index) => (
            <div key={product.name} className="group relative">
              {/* Product Image */}
              <div className="relative w-full h-[375px] flex items-center justify-center overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={product.name === "The Poplar suede sofa" ? 630 : 305}
                  height={375}
                  className="group-hover:scale-105 transition-transform duration-300 object-cover"
                  priority={index === 0}
                />
              </div>
              {/* Product Info */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-500 text-base">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}