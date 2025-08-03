'use client';
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Sparkles, Phone, PackageCheck, IndianRupee } from "lucide-react";

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <main className="bg-gradient-to-b from-orange-50 to-white text-gray-800 font-sans">
      <header className="bg-white shadow sticky top-0 z-50 py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-600">Parag Namkeen</h1>
        <nav className="space-x-6 text-sm">
          <a href="#products" className="hover:text-orange-600">Products</a>
          <a href="#about" className="hover:text-orange-600">About</a>
          <a href="#contact" className="hover:text-orange-600">Contact</a>
        </nav>
      </header>

      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 py-16 bg-orange-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Export-Grade Indian Farsan
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Gathiya, Ratlami Sev, Teekha Meetha, Papdi & more. Now available globally — with export packaging, shelf-life stability & regulatory compliance.
          </p>
          <Button className="mt-6 text-white bg-orange-500 hover:bg-orange-600 rounded-xl px-6 py-2">
            View Products
          </Button>
        </motion.div>
      </section>

      <section id="products" className="px-6 py-20 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-12">Popular Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Gathiya", "Ratlami Sev", "Papdi"].map((name, i) => (
            <Card key={i} className="rounded-2xl shadow hover:shadow-lg transition">
              <CardContent className="p-4 flex flex-col items-center">
                <img
                  src={`/mockups/${name.toLowerCase().replace(/ /g, "")}.webp`}
                  alt={name}
                  className="h-40 object-contain rounded-xl mb-4"
                />
                <h4 className="text-xl font-bold text-orange-600">{name}</h4>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Export-ready, sealed foil pouches with 6-month shelf life and multilanguage labels.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="px-6 py-20 bg-orange-50">
        <h3 className="text-3xl font-semibold text-center mb-6">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: <PackageCheck className="w-8 h-8 text-orange-500" />, title: "Export Certified", desc: "FSSAI, IEC, Halal-ready & barcoded." },
            { icon: <Phone className="w-8 h-8 text-orange-500" />, title: "Fast Support", desc: "WhatsApp-based global support for buyers." },
            { icon: <IndianRupee className="w-8 h-8 text-orange-500" />, title: "Bulk Discounts", desc: "Tiered quotes for distributors & importers." },
            { icon: <Sparkles className="w-8 h-8 text-orange-500" />, title: "Festival Specials", desc: "Limited-edition packs for Diwali, Ramadan & more." },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow text-center">
              <div className="mb-3 flex justify-center">{item.icon}</div>
              <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 py-20 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-4">Contact & Inquiries</h3>
        <p className="text-gray-700 mb-2">📞 +91 81281 11191</p>
        <p className="text-gray-700 mb-4">📧 info@paragfarsan.com</p>
        <a
          href="https://wa.me/918128111191"
          className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-sm"
        >
          Chat on WhatsApp
        </a>
      </section>
    </main>
  );
}