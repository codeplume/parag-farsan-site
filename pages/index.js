"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingCart, PhoneCall } from "lucide-react";
import Head from "next/head";

export default function ParagNamkeen() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-yellow-100 via-white to-orange-50 text-gray-900 font-serif">
      <Head>
        <title>Parag Namkeen - Export-Grade Indian Snacks</title>
        <meta name="description" content="Authentic Indian namkeen for export." />
        <meta name="keywords" content="Namkeen, Snacks, Export, India, UAE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section className="py-20 text-center">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-5xl font-bold text-orange-700">
          Parag Namkeen & Sweets
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-lg text-orange-800">
          Global-ready snacks crafted in India.
        </motion.p>
        <div className="mt-6 flex justify-center gap-4">
          <Button className="text-lg"><ShoppingCart className="inline mr-2" />Explore</Button>
          <Button className="text-lg"><PhoneCall className="inline mr-2" />Contact</Button>
        </div>
      </section>
    </main>
  );
}
