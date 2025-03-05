// pages/services.tsx
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesHeader from '@/components/ServicesHeader';
import BusinessDevelopment from '@/components/BusinessDevelopment';

export default function Services() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Leftfield - Services</title>
        <meta name="description" content="Leftfield's Business Development and Trade services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <ServicesHeader />
      <BusinessDevelopment />
      <Footer />
    </div>
  );
}