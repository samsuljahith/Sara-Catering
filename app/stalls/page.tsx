'use client';
import { useState } from 'react';
import { stallItems } from '@/data/stalls';

const categories = [
  'All',
  'Drink Stall',
  'Snack Stall',
  'Live Food Stall',
  'Sweet Stall',
  'Dessert Stall',
  'Traditional Snack',
  'Traditional Feast',
  'Fun Stall',
  'Non-Veg Food Stall',
];

export default function StallsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? stallItems
    : stallItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 px-4 text-center">
        <p className="text-gold text-sm uppercase tracking-widest mb-2">Event Stalls</p>
        <h1 className="font-heading text-4xl md:text-5xl text-text-primary mb-4">Stall Setup Services</h1>
        <p className="text-text-muted max-w-xl mx-auto">We don&apos;t just cater food — we set up complete stalls for your event. From live food counters to fun activity stalls, we handle it all.</p>
      </section>

      {/* Stalls List */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gold text-background'
                    : 'bg-surface border border-border text-text-muted hover:border-gold/50 hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="text-center text-text-muted text-sm mb-6">{filtered.length} stalls available</p>

          {/* List */}
          <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {filtered.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-background/50 transition-colors"
                >
                  <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="text-text-primary text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 mt-6 text-sm text-text-muted">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span> Veg
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> Non-Veg
            </span>
          </div>

          {/* Custom Note */}
          <div className="bg-surface border border-gold/30 rounded-xl p-5 mt-10 text-center">
            <p className="text-gold font-medium mb-1">🎪 Need a custom stall?</p>
            <p className="text-text-muted text-sm">If you want any stall that&apos;s not listed here, just let us know — we&apos;ll arrange it for your event!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
