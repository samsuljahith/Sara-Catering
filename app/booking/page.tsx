'use client';
import { useState } from 'react';

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [eventType, setEventType] = useState('');
  const [city, setCity] = useState('');
  const [venue, setVenue] = useState('');
  const [guestCount, setGuestCount] = useState('');

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

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <span className="text-5xl mb-4 block">✅</span>
          <h1 className="font-heading text-3xl text-gold mb-4">நன்றி!</h1>
          <p className="text-text-primary text-lg mb-2">உங்கள் பதிவு பெறப்பட்டது.</p>
          <p className="text-text-muted">விரைவில் தொடர்பு கொள்கிறோம்.</p>
          <p className="text-text-muted text-sm mt-4">(Your booking has been received. We will contact you soon.)</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="py-16 px-4 text-center">
        <p className="text-gold text-sm uppercase tracking-widest mb-2">Book Your Event</p>
        <h1 className="font-heading text-4xl md:text-5xl text-text-primary mb-4">Let Us Cater Your Celebration</h1>
        <p className="text-text-muted max-w-xl mx-auto">Fill in the details below and our team will get back to you within 24 hours.</p>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto bg-surface border border-border rounded-2xl p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="_subject" value="New Booking - Sara Catering" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-text-muted text-sm mb-2">Full Name *</label>
                <input type="text" name="name" required className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:border-gold focus:outline-none" />
              </div>
              <div>
                <label className="block text-text-muted text-sm mb-2">Phone Number *</label>
                <input type="tel" name="phone" required className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:border-gold focus:outline-none" />
              </div>
              <div>
                <label className="block text-text-muted text-sm mb-2">Email *</label>
                <input type="email" name="email" required className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:border-gold focus:outline-none" />
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-text-muted text-sm mb-2">Event Type *</label>
                <select
                  name={eventType === 'Other' ? '_event_type_select' : 'event_type'}
                  required={eventType !== 'Other'}
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:border-gold focus:outline-none"
                >
                  <option value="">Select Event Type</option>
                  <option value="Wedding">Wedding (Kalyana Virundhu)</option>
                  <option value="Reception">Reception (Nichayathartham)</option>
                  <option value="Puberty Ceremony">Puberty Ceremony</option>
                  <option value="Naming Ceremony">Naming / Ear Piercing</option>
                  <option value="Birthday">Birthday Party</option>
                  <option value="House Warming">House Warming</option>
                  <option value="Corporate">Corporate Event</option>
                  <option value="Buffet">Buffet Setup</option>
                  <option value="Other">Other</option>
                </select>
                {eventType === 'Other' && (
                  <input type="text" name="event_type" required placeholder="Please specify your event type" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:border-gold focus:outline-none mt-2" />
                )}
              </div>

              {/* City */}
              <div>
                <label className="block text-text-muted text-sm mb-2">City *</label>
                <select
                  name={city === 'Other' ? '_city_select' : 'city'}
                  required={city !== 'Other'}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:border-gold focus:outline-none"
                >
                  <option value="">Select City</option>
                  <option value="Trichy">Trichy</option>
                  <option value="Pudukkottai">Pudukkottai</option>
                  <option value="Thanjavur">Thanjavur</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Madurai">Madurai</option>
                  <option value="Other">Other</option>
                </select>
                {city === 'Other' && (
                  <input type="text" name="city" required placeholder="Please type your city" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:border-gold focus:outline-none mt-2" />
                )}
              </div>

              {/* Venue */}
              <div>
                <label className="block text-text-muted text-sm mb-2">Venue Type *</label>
                <select
                  name={venue === 'Other' ? '_venue_select' : 'venue'}
                  required={venue !== 'Other'}
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:border-gold focus:outline-none"
                >
                  <option value="">Select Venue</option>
                  <option value="Marriage Hall">Marriage Hall</option>
                  <option value="Kalyana Mandapam">Kalyana Mandapam</option>
                  <option value="Open Ground">Open Ground</option>
                  <option value="Home">Home</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Other">Other</option>
                </select>
                {venue === 'Other' && (
                  <input type="text" name="venue" required placeholder="Please type your venue" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:border-gold focus:outline-none mt-2" />
                )}
              </div>

              <div>
                <label className="block text-text-muted text-sm mb-2">Event Date *</label>
                <input
                  type="date"
                  name="event_date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  max={`${new Date().getFullYear() + 1}-12-31`}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-text-muted text-sm mb-2">Event Time *</label>
                <input
                  type="time"
                  name="event_time"
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-text-muted text-sm mb-2">Guest Count *</label>
                <select
                  name={guestCount === 'enter' ? '_guest_count_select' : 'guest_count'}
                  required={guestCount !== 'enter'}
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:border-gold focus:outline-none"
                >
                  <option value="">Select Count</option>
                  <option value="50-100">50-100</option>
                  <option value="100-200">100-200</option>
                  <option value="200-500">200-500</option>
                  <option value="500+">500+</option>
                  <option value="enter">Enter approx amount</option>
                </select>
                {guestCount === 'enter' && (
                  <input type="number" name="guest_count" required placeholder="Enter approximate guest count" min="1" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:border-gold focus:outline-none mt-2" />
                )}
              </div>
            </div>

            <div>
              <label className="block text-text-muted text-sm mb-2">Food Preference *</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-text-primary cursor-pointer">
                  <input type="radio" name="food_pref" value="Veg" required className="accent-gold" /> Veg
                </label>
                <label className="flex items-center gap-2 text-text-primary cursor-pointer">
                  <input type="radio" name="food_pref" value="Non-Veg" className="accent-gold" /> Non-Veg
                </label>
                <label className="flex items-center gap-2 text-text-primary cursor-pointer">
                  <input type="radio" name="food_pref" value="Both" className="accent-gold" /> Both
                </label>
              </div>
            </div>

            <div>
              <label className="block text-text-muted text-sm mb-2">Special Requests</label>
              <textarea name="special_requests" rows={4} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:border-gold focus:outline-none resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-gold hover:bg-gold-hover text-background py-3 rounded-full font-semibold text-lg transition-colors">
              Submit Booking
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
