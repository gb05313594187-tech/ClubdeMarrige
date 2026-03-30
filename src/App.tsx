import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/sections/Hero';
import { Categories } from '@/sections/Categories';
import { FeaturedVendors } from '@/sections/FeaturedVendors';
import { Inspiration } from '@/sections/Inspiration';
import { WeddingPlanner } from '@/sections/WeddingPlanner';
import { Testimonials } from '@/sections/Testimonials';
import { Statistics } from '@/sections/Statistics';
import { Blog } from '@/sections/Blog';
import { Newsletter } from '@/sections/Newsletter';
import { Footer } from '@/sections/Footer';

// Hataları önlemek için sayfaları lazy load ile çağırıyoruz
const AuthPage = lazy(() => import('@/pages/AuthPage'));
const BusinessPage = lazy(() => import('@/pages/BusinessPage'));

import './i18n';

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

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen bg-warm-white flex items-center justify-center">Yükleniyor...</div>}>
        <div className="min-h-screen bg-warm-white">
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

export default App;
