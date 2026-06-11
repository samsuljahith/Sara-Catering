import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Sara Catering - Authentic Tamil Nadu Flavours For Every Occasion',
  description: 'Professional catering services for weddings, corporate events, and private parties in Tamil Nadu. Specialists in Biryani, South Indian Thali & Kalyana Virundhu.',
  keywords: 'catering, wedding catering, biryani catering, Sara Catering, Tamil Nadu, Trichy, Kalyana Virundhu',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
