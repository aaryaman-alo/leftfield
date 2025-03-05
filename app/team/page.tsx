"use client"

// pages/team.tsx
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamHeader from '@/components/TeamHeader';
import TeamMembers from '@/components/TeamMembers';

export default function Team() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Leftfield - Team</title>
        <meta name="description" content="Meet the Leftfield team of experienced professionals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <TeamHeader />
      <TeamMembers />
      <Footer />
    </div>
  );
}