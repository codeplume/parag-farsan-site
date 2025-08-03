import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Parag Namkeen & Sweets</title>
        <meta name="description" content="Authentic Indian Farsan for Global Tastebuds" />
      </Head>
      <main className="bg-yellow-50 text-gray-900 font-sans scroll-smooth">
        <header className="bg-yellow-200 shadow px-6 py-4 sticky top-0 z-50">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Parag Namkeen & Sweets</h1>
            <nav className="space-x-4 text-sm sm:text-base">
              <a href="#products" className="hover:text-yellow-700">Products</a>
              <a href="#about" className="hover:text-yellow-700">About</a>
              <a href="#contact" className="hover:text-yellow-700">Contact</a>
              <a href="#blog" className="hover:text-yellow-700">Blog</a>
            </nav>
          </div>
        </header>

        <section className="h-[85vh] flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Authentic Indian Farsan for Global Tastebuds</h2>
          <p className="text-lg sm:text-xl max-w-2xl text-gray-700">Gathiya, Ratlami Sev, Teekha Meetha & more, crafted for export markets.</p>
        </section>

        <section id="products" className="py-20 px-6 bg-white">
          <h3 className="text-3xl font-semibold mb-6 text-center">Our Products</h3>
          <p className="max-w-3xl mx-auto text-center text-gray-700">
            We offer a wide range of crispy, flavorful Indian snacks ideal for the global palate. From spicy Ratlami Sev to melt-in-the-mouth Gathiya, every pack is crafted with export-grade quality and shelf stability in mind.
          </p>
        </section>

        <section id="about" className="py-20 px-6 bg-yellow-100">
          <h3 className="text-3xl font-semibold mb-6 text-center">About Us</h3>
          <p className="max-w-3xl mx-auto text-center text-gray-700">
            Parag Namkeen & Sweets is a legacy farsan manufacturer from India, blending tradition with innovation for export markets. We prioritize hygiene, flavor accuracy, and packaging compliance to deliver unmatched quality.
          </p>
        </section>

        <section id="contact" className="py-20 px-6 bg-white">
          <h3 className="text-3xl font-semibold mb-6 text-center">Contact Us</h3>
          <p className="text-center text-gray-700 mb-2">📞 +91-8128111191</p>
          <p className="text-center text-gray-700 mb-2">📧 info@paragfarsan.com</p>
          <p className="text-center"><a className="text-blue-600 hover:underline" href="https://wa.me/918128111191" target="_blank">Chat with us on WhatsApp</a></p>
        </section>

        <section id="blog" className="py-20 px-6 bg-yellow-100">
          <h3 className="text-3xl font-semibold mb-6 text-center">From Our Blog</h3>
          <p className="max-w-2xl mx-auto text-center text-gray-700">
            Stay tuned for packaging tips, export guides, and cultural insights as we expand our reach globally.
          </p>
        </section>

        <footer className="text-center py-6 text-sm bg-yellow-200">
          &copy; {new Date().getFullYear()} Parag Namkeen & Sweets. All rights reserved.
        </footer>
      </main>
    </>
  );
}