import ServiceCard from '@/components/ServiceCard';

const services = [
  { icon: '💍', tamilName: 'கல்யாண விருந்து', englishName: 'Wedding Catering', description: 'Traditional Kalyana Virundhu with authentic banana leaf meals and biryani for your special day.' },
  { icon: '🎊', tamilName: 'நிச்சயதார்த்தம்', englishName: 'Reception Catering', description: 'Grand buffet spreads with multi-cuisine options for wedding receptions and celebrations.' },
  { icon: '🌸', tamilName: 'மஞ்சள் நீராட்டு விழா', englishName: 'Puberty Ceremony', description: 'Manjal Neerattu Vizha catering with traditional Tamil meals and sweet dishes.' },
  { icon: '👶', tamilName: 'தொடக்கு விழா', englishName: 'Naming / Ear Piercing Ceremony', description: 'Intimate ceremony catering for naming ceremonies and ear piercing functions.' },
  { icon: '🎂', tamilName: 'பிறந்த நாள் விழா', englishName: 'Birthday Party Catering', description: 'Fun and festive menus for birthday celebrations of all ages and sizes.' },
  { icon: '🏠', tamilName: 'கிரகப் பிரவேசம்', englishName: 'House Warming', description: 'Gruha Pravesam catering with traditional meals to bless your new home.' },
  { icon: '💼', tamilName: 'அலுவலக விருந்து', englishName: 'Corporate Events', description: 'Professional catering for office parties, seminars, and corporate gatherings.' },
  { icon: '🍽️', tamilName: 'பஃபே விருந்து', englishName: 'Full Buffet Setup (Veg & Non-Veg)', description: 'Generous buffet spreads with diverse options to satisfy every guest at any event.' },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 px-4 text-center">
        <p className="text-gold text-sm uppercase tracking-widest mb-2">Our Services</p>
        <h1 className="font-heading text-4xl md:text-5xl text-text-primary mb-4">We Cater Every Celebration</h1>
        <p className="text-text-muted max-w-xl mx-auto">From intimate family functions to grand weddings — we bring the authentic taste of Tamil Nadu to your event.</p>
      </section>

      {/* Services Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.englishName} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
}
