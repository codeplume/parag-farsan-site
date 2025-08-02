import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white text-gray-900 font-sans">
      <header className="bg-yellow-100 shadow-md px-8 py-5 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-tight">Parag Namkeen & Sweets</h1>
        <nav className="space-x-6 text-lg font-medium">
          <a href="#products" className="hover:text-yellow-600 transition">Products</a>
          <a href="#about" className="hover:text-yellow-600 transition">About</a>
          <a href="#contact" className="hover:text-yellow-600 transition">Contact</a>
          <a href="#blog" className="hover:text-yellow-600 transition">Blog</a>
        </nav>
      </header>

      <section className="relative h-[70vh] flex items-center justify-center bg-yellow-50">
        <Canvas className="absolute inset-0 z-0">
          {/* Add interactive 3D or floating animation here if desired */}
        </Canvas>
        <motion.div
          className="relative z-10 text-center bg-white/80 p-10 rounded-xl shadow-xl backdrop-blur"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold mb-4 leading-tight">Authentic Indian Farsan for Global Tastebuds</h2>
          <p className="text-xl text-gray-700">Gathiya, Ratlami Sev, Teekha Meetha & more, crafted for export markets</p>
        </motion.div>
      </section>

      <section id="products" className="px-10 py-16 bg-white">
        <h3 className="text-3xl font-semibold mb-12 text-center">Our Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {["Gathiya", "Ratlami Sev", "Teekha Meetha", "Papdi"].map((item, index) => (
            <motion.div
              key={index}
              className="bg-yellow-50 rounded-2xl shadow-lg hover:shadow-2xl transition p-6 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img src={`/images/${item.toLowerCase().replace(/ /g, '-')}.jpg`} alt={item} className="rounded-xl w-full h-40 object-cover mb-4" />
              <h4 className="text-xl font-bold mb-2">{item}</h4>
              <p className="text-gray-600">100g/200g packs & bulk export options. No palm oil. Halal-certified.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="px-10 py-20 bg-gradient-to-r from-yellow-100 to-yellow-50 text-center">
        <h3 className="text-3xl font-semibold mb-6">About Parag Namkeen & Sweets</h3>
        <p className="max-w-4xl mx-auto text-lg text-gray-800">From the heart of Vasai, Maharashtra, we’ve crafted traditional farsan snacks with love and precision for 15+ years. Now exporting authentic Indian tastes to UAE, Singapore, and beyond. Quality, hygiene, and legacy — all in one pack.</p>
      </section>

      <section id="blog" className="px-10 py-20 bg-white">
        <h3 className="text-3xl font-semibold mb-10 text-center">Latest Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[1, 2].map(post => (
            <motion.div key={post} className="border-l-4 border-yellow-400 pl-6 py-4 shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-bold mb-1">Why Indian Farsan is Trending in Global Markets</h4>
              <p className="text-sm text-gray-500 mb-1">July 2025</p>
              <p className="text-gray-700">How authentic Indian snacks like ours are winning global attention through clean labeling and nostalgia-driven flavors.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-10 py-20 bg-yellow-100 text-center">
        <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
        <p className="mb-4 text-lg">For business inquiries or distributor partnerships:</p>
        <p className="mb-2">📧 <a href="mailto:paragnamkeensweets@gmail.com" className="underline">paragnamkeensweets@gmail.com</a></p>
        <p className="mb-6">📞 +91 7715935649</p>
        <a href="https://wa.me/918128111191" className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-green-700">Chat on WhatsApp</a>
      </section>

      <footer className="bg-gray-900 text-white text-sm py-4 text-center">
        &copy; 2025 Parag Namkeen & Sweets. All rights reserved.
      </footer>
    </main>
  );
}