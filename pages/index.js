"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingCart, PhoneCall, Globe, BadgeCheck, Gift } from "lucide-react";
import Link from "next/link";
import Head from "next/head";

export default function ParagNamkeen() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-[#ffe8cc] via-[#ffd699] to-[#ffcc66] text-gray-900 font-serif">
      <Head>
        <title>Parag Namkeen - Export-Grade Indian Snacks</title>
        <meta name="description" content="Authentic Indian namkeen, farsan, and snacks designed for global markets." />
        <meta name="keywords" content="Indian snacks export, Namkeen UAE, Farsan distributor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section className="py-32 text-center">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-6xl font-bold text-orange-800">
          Parag Namkeen & Sweets
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 text-xl text-orange-900">
          Global-ready snacks with vibrant Indian flavors.
        </motion.p>
      </section>
    </main>
  );
}
