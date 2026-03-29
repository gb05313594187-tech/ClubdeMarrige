import { Suspense } from 'react';
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
import './i18n';

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-warm-white" />}>
      <div className="min-h-screen bg-warm-white">
        <Navigation />
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
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
