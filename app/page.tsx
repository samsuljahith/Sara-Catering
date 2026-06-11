import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import FoodCard from '@/components/FoodCard';
import TestimonialCard from '@/components/TestimonialCard';

const services = [
  { icon: '💍', tamilName: 'கல்யாண விருந்து', englishName: 'Wedding Catering', description: 'Traditional banana leaf meals and biryani for your special day.' },
  { icon: '🎊', tamilName: 'நிச்சயதார்த்தம்', englishName: 'Reception Catering', description: 'Grand buffet spreads for wedding receptions and celebrations.' },
  { icon: '🌸', tamilName: 'மஞ்சள் நீராட்டு விழா', englishName: 'Puberty Ceremony', description: 'Traditional Tamil meals and sweet dishes for the occasion.' },
  { icon: '👶', tamilName: 'தொடக்கு விழா', englishName: 'Naming / Ear Piercing', description: 'Intimate ceremony catering for family functions.' },
  { icon: '🎂', tamilName: 'பிறந்த நாள் விழா', englishName: 'Birthday Party', description: 'Fun menus for birthday celebrations of all ages.' },
  { icon: '🏠', tamilName: 'கிரகப் பிரவேசம்', englishName: 'House Warming', description: 'Traditional meals to bless your new home.' },
  { icon: '💼', tamilName: 'அலுவலக விருந்து', englishName: 'Corporate Events', description: 'Professional catering for office gatherings.' },
  { icon: '🍽️', tamilName: 'பஃபே விருந்து', englishName: 'Buffet Setup', description: 'Veg and Non-Veg buffet for any event size.' },
];

const featuredDishes = [
  { name: 'Chicken Biryani', tamilName: 'சிக்கன் பிரியாணி', description: 'Aromatic dum-style biryani with tender chicken and fragrant spices.', image: '/chicken-biryani.png', isVeg: false, isStarDish: true },
  { name: 'Mutton Biryani', tamilName: 'மட்டன் பிரியாணி', description: 'Slow-cooked mutton biryani with rich masala and saffron rice.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/330px-%22Hyderabadi_Dum_Biryani%22.jpg', isVeg: false, isStarDish: true },
  { name: 'Kalyana Saapadu', tamilName: 'கல்யாண சாப்பாடு', description: 'Full traditional banana leaf meal with sambar, rasam, kootu and more.', image: '/veg-biryani.png', isVeg: true },
  { name: 'Payasam', tamilName: 'பாயசம்', description: 'Traditional South Indian milk pudding with vermicelli and nuts.', image: 'https://www.crazymasalafood.com/wp-content/images/gothampu-payasam.jpg', isVeg: true },
];

const testimonials = [
  { name: 'Karthikeyan S.', city: 'Trichy', event: 'Wedding', rating: 5, tamilQuote: 'சாரா கேட்டரிங் எங்கள் கல்யாணத்தை மறக்க முடியாத ஒன்றாக மாற்றியது. பிரியாணி அருமை!', englishQuote: 'Sara Catering made our wedding unforgettable. The biryani was outstanding!' },
  { name: 'Meenakshi R.', city: 'Pudukkottai', event: 'Reception', rating: 5, tamilQuote: 'புஃபே அமைப்பு மிகவும் நன்றாக இருந்தது. அனைத்து விருந்தினர்களும் பாராட்டினர்.', englishQuote: 'The buffet setup was excellent. All guests praised the food quality.' },
  { name: 'Selvam M.', city: 'Thanjavur', event: 'Birthday', rating: 4.5, tamilQuote: 'குழந்தை பிறந்தநாளுக்கு சிறந்த சேவை. நேரத்தில் வந்து சுவையான உணவு வழங்கினர்.', englishQuote: 'Great service for the birthday party. On time delivery and delicious food.' },
];

const stats = [
  { value: '800+', label: 'Happy Families' },
  { value: '300+', label: 'Events Catered' },
  { value: '15+', label: 'Years Experience' },
  { value: '20+', label: 'Expert Staff' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-gold text-sm uppercase tracking-widest mb-4 font-medium">Welcome to Sara Catering</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-text-primary leading-tight mb-6">
            Authentic <span className="text-gold text-4xl md:text-6xl lg:text-7xl">Tamil Nadu</span> Flavours For Every Occasion
          </h1>
          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-8">
            From Kalyana Virundhu to Birthday Parties — Sara Catering brings the taste of home to your celebration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="bg-gold hover:bg-gold-hover text-background px-8 py-3 rounded-full font-semibold transition-colors">
              Book Your Event
            </Link>
            <Link href="/menu" className="border border-gold text-gold hover:bg-gold/10 px-8 py-3 rounded-full font-semibold transition-colors">
              Explore Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl md:text-4xl text-gold">{stat.value}</p>
              <p className="text-text-muted text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-sm uppercase tracking-widest mb-2">Our Services</p>
            <h2 className="font-heading text-3xl md:text-4xl text-text-primary">We Cater Every Celebration</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.englishName} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-sm uppercase tracking-widest mb-2">Signature Dishes</p>
            <h2 className="font-heading text-3xl md:text-4xl text-text-primary">Our Star Specialities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish) => (
              <FoodCard key={dish.name} {...dish} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-sm uppercase tracking-widest mb-2">Testimonials</p>
            <h2 className="font-heading text-3xl md:text-4xl text-text-primary">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-surface text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-text-primary mb-4">Ready to Book Your Event?</h2>
          <p className="text-text-muted mb-8">Get in touch today and let us handle the food while you enjoy your celebration.</p>
          <Link href="/booking" className="bg-gold hover:bg-gold-hover text-background px-8 py-3 rounded-full font-semibold transition-colors">
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
