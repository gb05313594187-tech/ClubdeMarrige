import React from 'react';
import { useParams } from 'react-router-dom';

export default function CategoryDetailPage() {
  const { categorySlug } = useParams();

  // Slug'ı güzel bir başlığa çevirelim (Örn: dugun-mekanlari -> Düğün Mekanları)
  const categoryName = categorySlug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="min-h-screen bg-white pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-playfair font-bold text-[#2D2D2D] mb-8">
          {categoryName} <span className="text-[#D4A373]">Firmaları</span>
        </h1>
        
        {/* Burada firmaların listelendiği bir Grid olacak */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <p className="text-[#8E8E8E]">Bu kategorideki en iyi firmalar yakında burada listelenecek...</p>
        </div>
      </div>
    </div>
  );
}
