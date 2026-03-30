import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Temel Bileşenler
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/sections/Footer';

// Bölümler (Ana Sayfa İçeriği)
import { Hero } from '@/sections/Hero';
import { Categories } from '@/sections/Categories';
import { FeaturedVendors } from '@/sections/FeaturedVendors';
import { Inspiration } from '@/sections/Inspiration';
import { WeddingPlanner } from '@/sections/WeddingPlanner';
import { Testimonials } from '@/sections/Testimonials';
import { Statistics } from '@/sections/Statistics';
import { Blog } from '@/sections/Blog';
import { Newsletter } from '@/sections/Newsletter';

// Sayfalar - Lazy Load
const AuthPage = lazy(() => import('./pages/AuthPage'));
const BusinessPage = lazy(() => import('./pages/BusinessPage'));
const CategoryDetailPage = lazy(() => import('./pages/CategoryDetailPage')); // EKLEDİK

// Dil Ayarları (i18n)
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

// Yükleme Ekranı
const LoadingScreen = () => (
  <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center font-playfair text-[#C5A059] text-xl">
    Yükleniyor...
  </div>
);

export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <div className="min-h-screen bg-white">
          <Navigation />
          
          <Routes>
            {/* Ana Sayfa */}
            <Route path="/" element={<HomePage />} />
            
            {/* Kategori Detay Sayfası - BU ROTA OLMADAN SAYFALAR AÇILMAZ */}
            <Route path="/kategoriler/:categorySlug" element={<CategoryDetailPage />} />
            
            {/* Giriş / Kayıt */}
            <Route path="/login" element={<AuthPage mode="login" />} />
            <Route path="/register" element={<AuthPage mode="register" />} />
            
            {/* Kurumsal */}
            <Route path="/business" element={<BusinessPage />} />
            
            {/* Hatalı URL'leri Ana Sayfaya Gönder */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}
