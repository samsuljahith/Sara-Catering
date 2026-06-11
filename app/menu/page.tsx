'use client';
import { useState } from 'react';
import { menuItems } from '@/data/menu';

const tabs = [
  { key: 'main-dish-veg', label: 'Veg Main Dishes' },
  { key: 'main-dish-nonveg', label: 'Non-Veg Main Dishes' },
  { key: 'snack-veg', label: 'Veg Snacks' },
  { key: 'snack-nonveg', label: 'Non-Veg Snacks' },
  { key: 'sweet', label: 'Sweets' },
  { key: 'dessert', label: 'Desserts' },
  { key: 'chutney', label: 'Chutneys' },
];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('main-dish-veg');

  const filteredItems = menuItems.filter((item) => item.category === activeTab);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 px-4 text-center">
        <p className="text-gold text-sm uppercase tracking-widest mb-2">Our Menu</p>
        <h1 className="font-heading text-4xl md:text-5xl text-text-primary mb-4">Full Menu</h1>
        <p className="text-text-muted max-w-xl mx-auto">225+ authentic Tamil Nadu dishes for weddings, functions &amp; celebrations.</p>
      </section>

      {/* Tabs + List */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* Custom Cuisine Note */}
          <div className="bg-surface border border-gold/30 rounded-xl p-5 mb-10 text-center">
            <p className="text-gold font-medium mb-1">🍽️ Want something different?</p>
            <p className="text-text-muted text-sm">Even though we have 225+ South Indian dishes, if you want a specific cuisine — Italian, North Indian, Arabic, Chinese, or anything else — we will prepare it for you. Just let us know your requirements!</p>
          </div>
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? 'bg-gold text-background'
                    : 'bg-surface border border-border text-text-muted hover:border-gold/50 hover:text-gold'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="text-center text-text-muted text-sm mb-6">{filteredItems.length} items</p>

          {/* List */}
          <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {filteredItems.map((item) => (
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
        </div>
      </section>
    </div>
  );
}
