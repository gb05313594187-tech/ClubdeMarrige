import { Suspense } from 'react';
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

// Yeni Sayfalar
import AuthPage from '@/pages/AuthPage';
import BusinessPage from '@/pages/BusinessPage';

import './i18n';

// Ana Sayfa Bileşeni (Tüm sectionları buraya topladık)
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
      <Suspense fallback={<div className="min-h-screen bg-warm-white" />}>
        <div className="min-h-screen bg-warm-white">
          <Navigation />
          
          <Routes>
            {/* Ana Sayfa */}
            <Route path="/" element={<HomePage />} />
            
            {/* Giriş Yap Sayfası */}
            <Route path="/login" element={<AuthPage mode="login" />} />
            
            {/* Kayıt Ol Sayfası */}
            <Route path="/register" element={<AuthPage mode="register" />} />
            
            {/* Firmalar İçin Sayfası */}
            <Route path="/business" element={<BusinessPage />} />
          </Routes>

          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
