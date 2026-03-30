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

// Sayfalar - Lazy Load (Hata payını azaltmak için)
const AuthPage = lazy(() => import('./pages/AuthPage'));
const BusinessPage = lazy(() => import('./pages/BusinessPage'));

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

// Yükleme Ekranı (Fallback)
const LoadingScreen = () => (
  <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center font-playfair text-[#C5A059] text-xl">
    Yükleniyor...
  </div>
);

/**
 * App Bileşeni
 * Projenin ana yönlendirme (routing) yapısını kurar.
 */
export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <div className="min-h-screen bg-white">
          {/* Her sayfada görünmesi gereken menü */}
          <Navigation />
          
          <Routes>
            {/* Ana Sayfa */}
            <Route path="/" element={<HomePage />} />
            
            {/* Giriş Yap Sayfası */}
            <Route 
              path="/login" 
              element={<AuthPage mode="login" />} 
            />
            
            {/* Kayıt Ol Sayfası */}
            <Route 
              path="/register" 
              element={<AuthPage mode="register" />} 
            />
            
            {/* Firmalar İçin / Kurumsal Sayfa */}
            <Route 
              path="/business" 
              element={<BusinessPage />} 
            />
            
            {/* 404 veya Hatalı URL Durumunda Ana Sayfaya Dön */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          {/* Her sayfada görünmesi gereken alt bilgi alanı */}
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}
