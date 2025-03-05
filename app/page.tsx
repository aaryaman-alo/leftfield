"use client"

// pages/index.tsx
import { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import TeamPreview from '@/components/TeamPreview';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Leftfield - We help you scale</title>
        <meta name="description" content="Leftfield is a growth company. We exist to help you scale." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <ServicesPreview />
      <TeamPreview />
      <Footer />
    </div>
  );
}