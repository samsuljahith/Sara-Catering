'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="py-16 px-4 text-center">
        <p className="text-gold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
        <h1 className="font-heading text-4xl md:text-5xl text-text-primary mb-4">Contact Us</h1>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-surface border border-border rounded-xl p-6 flex items-start gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <h3 className="text-text-primary font-medium">Phone</h3>
                <a href="tel:+919443419105" className="text-text-muted hover:text-gold transition-colors">+91 9443419105</a>
              </div>
            </div>
            <div className="bg-surface border border-border rounded-xl p-6 flex items-start gap-4">
              <span className="text-2xl">✉️</span>
              <div>
                <h3 className="text-text-primary font-medium">Email</h3>
                <a href="mailto:samsuljahith@gmail.com" className="text-text-muted hover:text-gold transition-colors">samsuljahith@gmail.com</a>
              </div>
            </div>
            <div className="bg-surface border border-border rounded-xl p-6 flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="text-text-primary font-medium">Address</h3>
                <p className="text-text-muted">Trichy, Tiruchirapalli District, Tamil Nadu, India</p>
              </div>
            </div>
            <div className="bg-surface border border-border rounded-xl p-6 flex items-start gap-4">
              <span className="text-2xl">💬</span>
              <div>
                <h3 className="text-text-primary font-medium">WhatsApp</h3>
                <a href="https://wa.me/919443419105" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-gold transition-colors">Chat with us</a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.42049825498!2d78.61534551640623!3d10.804972800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50f8f3851e3%3A0xd466ea38e16e9f5f!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sara Catering Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-10">
                <span className="text-5xl mb-4 block">✅</span>
                <h2 className="font-heading text-2xl text-gold mb-2">நன்றி!</h2>
                <p className="text-text-muted">Your message has been sent. We will reply soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-text-muted text-sm mb-2">Your Name *</label>
                  <input type="text" name="name" required className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:border-gold focus:outline-none" />
                </div>
                <div>
                  <label className="block text-text-muted text-sm mb-2">Email *</label>
                  <input type="email" name="email" required className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:border-gold focus:outline-none" />
                </div>
                <div>
                  <label className="block text-text-muted text-sm mb-2">Phone</label>
                  <input type="tel" name="phone" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:border-gold focus:outline-none" />
                </div>
                <div>
                  <label className="block text-text-muted text-sm mb-2">Message *</label>
                  <textarea name="message" rows={5} required className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:border-gold focus:outline-none resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-gold hover:bg-gold-hover text-background py-3 rounded-full font-semibold transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
