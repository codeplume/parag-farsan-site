import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Parag Namkeen & Sweets</title>
        <meta name="description" content="Authentic Indian Farsan for Global Tastebuds" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-yellow-100 to-white text-gray-900 font-sans">
        <header className="bg-yellow-200 shadow-md px-8 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Parag Namkeen & Sweets</h1>
          <nav className="space-x-6 text-lg font-medium">
            <a href="#products" className="hover:text-yellow-700 transition">Products</a>
            <a href="#about" className="hover:text-yellow-700 transition">About</a>
            <a href="#contact" className="hover:text-yellow-700 transition">Contact</a>
            <a href="#blog" className="hover:text-yellow-700 transition">Blog</a>
          </nav>
        </header>
        <section className="h-[60vh] flex items-center justify-center bg-yellow-50 text-center">
          <div>
            <h2 className="text-5xl font-extrabold mb-4">Authentic Indian Farsan for Global Tastebuds</h2>
            <p className="text-xl text-gray-700">Gathiya, Ratlami Sev, Teekha Meetha & more, crafted for export markets</p>
          </div>
        </section>
      </main>
    </>
  );
}