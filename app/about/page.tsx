export default function AboutPage() {
  const values = [
    { icon: '🌿', title: 'Fresh Ingredients', desc: 'Locally sourced vegetables, meats and spices — never frozen.' },
    { icon: '📜', title: 'Traditional Recipes', desc: 'Time-tested family recipes passed down through generations.' },
    { icon: '🧼', title: 'Hygiene Certified', desc: 'Clean kitchen practices and food safety at every step.' },
    { icon: '⏰', title: 'On-time Delivery', desc: 'Punctual setup so your event starts without any delays.' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 px-4 text-center">
        <p className="text-gold text-sm uppercase tracking-widest mb-2">About Us</p>
        <h1 className="font-heading text-4xl md:text-5xl text-text-primary mb-4">Our Story</h1>
      </section>

      {/* Story */}
      <section className="px-4 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-text-muted text-lg leading-relaxed">
            Sara Catering has been serving authentic Tamil Nadu cuisine for over 15 years. Based in Trichy, we specialize in traditional Kalyana Virundhu, Biryani catering, and full-service event catering across Tamil Nadu. Our team of experienced cooks uses fresh, locally-sourced ingredients and time-tested recipes to bring the true flavours of Tamil Nadu to every plate.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-16 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl text-text-primary text-center mb-10">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-background border border-border rounded-xl p-6 text-center">
                <span className="text-3xl mb-3 block">{v.icon}</span>
                <h3 className="font-heading text-lg text-text-primary mb-2">{v.title}</h3>
                <p className="text-text-muted text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="font-heading text-3xl text-gold">800+</p>
            <p className="text-text-muted text-sm mt-1">Happy Families</p>
          </div>
          <div>
            <p className="font-heading text-3xl text-gold">300+</p>
            <p className="text-text-muted text-sm mt-1">Events Catered</p>
          </div>
          <div>
            <p className="font-heading text-3xl text-gold">15+</p>
            <p className="text-text-muted text-sm mt-1">Years Experience</p>
          </div>
          <div>
            <p className="font-heading text-3xl text-gold">20+</p>
            <p className="text-text-muted text-sm mt-1">Expert Staff</p>
          </div>
        </div>
      </section>
    </div>
  );
}
