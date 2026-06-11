import TestimonialCard from '@/components/TestimonialCard';

const testimonials = [
  {
    name: 'Karthikeyan R.',
    city: 'Trichy',
    event: 'Wedding',
    rating: 5,
    tamilQuote: 'சாரா கேட்டரிங் எங்கள் கல்யாணத்தை மறக்க முடியாத ஒன்றாக மாற்றியது. பிரியாணி அருமை!',
    englishQuote: 'Sara Catering made our wedding unforgettable. The biryani was outstanding!',
  },
  {
    name: 'Meenakshi S.',
    city: 'Pudukkottai',
    event: 'Reception',
    rating: 5,
    tamilQuote: 'புஃபே அமைப்பு மிகவும் நன்றாக இருந்தது. அனைத்து விருந்தினர்களும் பாராட்டினர்.',
    englishQuote: 'The buffet setup was excellent. All guests praised the food quality.',
  },
  {
    name: 'Selvam M.',
    city: 'Thanjavur',
    event: 'Birthday',
    rating: 4.5,
    tamilQuote: 'குழந்தை பிறந்தநாளுக்கு சிறந்த சேவை. நேரத்தில் வந்து சுவையான உணவு வழங்கினர்.',
    englishQuote: 'Great service for the birthday party. On time delivery and delicious food.',
  },
  {
    name: 'Kavitha P.',
    city: 'Madurai',
    event: 'House Warming',
    rating: 5,
    tamilQuote: 'கிரகப்பிரவேசத்திற்கு அற்புதமான சமையல். பாரம்பரிய சுவை அப்படியே இருந்தது.',
    englishQuote: 'Wonderful cooking for our house warming. The traditional taste was authentic.',
  },
  {
    name: 'Murugan K.',
    city: 'Trichy',
    event: 'Corporate Event',
    rating: 4.5,
    tamilQuote: 'அலுவலக விருந்துக்கு தொழில்முறை சேவை. 200 பேருக்கு சமைத்தனர், அனைவரும் மகிழ்ந்தனர்.',
    englishQuote: 'Professional service for our office party. Cooked for 200 people, everyone enjoyed.',
  },
  {
    name: 'Priya V.',
    city: 'Pudukkottai',
    event: 'Wedding',
    rating: 5,
    tamilQuote: 'எங்கள் நிச்சயதார்த்தத்திற்கு பிரியாணி மற்றும் இனிப்புகள் மிகவும் சுவையாக இருந்தன.',
    englishQuote: 'The biryani and sweets for our engagement were incredibly delicious.',
  },
];

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      <section className="py-16 px-4 text-center">
        <p className="text-gold text-sm uppercase tracking-widest mb-2">Testimonials</p>
        <h1 className="font-heading text-4xl md:text-5xl text-text-primary mb-4">What Our Clients Say</h1>
        <p className="text-text-muted max-w-xl mx-auto">Real feedback from families across Tamil Nadu who trusted us with their celebrations.</p>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </section>
    </div>
  );
}
