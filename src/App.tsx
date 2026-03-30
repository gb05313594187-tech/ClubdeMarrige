import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/sections/Footer';

// Bölümler (Dizin yapına göre importlar)
import { Hero } from '@/sections/Hero';
import { Categories } from '@/sections/Categories';
import { FeaturedVendors } from '@/sections/FeaturedVendors';
import { Inspiration } from '@/sections/Inspiration';
import { WeddingPlanner } from '@/sections/WeddingPlanner';
import { Testimonials } from '@/sections/Testimonials';
import { Statistics } from '@/sections/Statistics';
import { Blog } from '@/sections/Blog';
import { Newsletter } from '@/sections/Newsletter';

// Sayfalar - Lazy Load (Hata payını sıfıra indirmek için)
const AuthPage = lazy(() => import('./pages/AuthPage'));
const BusinessPage = lazy(() => import('./pages/BusinessPage'));

import './i18n';

// Ana Sayfa Bileşeni
const HomePage = () => (
  <main>
    <Hero />
    <Categories />
    <FeaturedVendors />
    <Inspiration />
    <WeddingPlanner />
    <Testimonials />
    <Statistics />
    <Blog />
    <Newsletter />
  </main>
);

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center font-playfair text-[#C5A059]">Yükleniyor...</div>}>
        <div className="min-h-screen bg-white">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthPage mode="login" />} />
            <Route path="/register" element={<AuthPage mode="register" />} />
            <Route path="/business" element={<BusinessPage />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}
