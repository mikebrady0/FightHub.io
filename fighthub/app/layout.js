import '../app/components/globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
// Import the VT323 font from @next/font/google
import { VT323 } from 'next/font/google';

const vt323 = VT323({ subsets: ['latin'], weight: '400',variable: '--font-vt323'}); // You can specify the subset as per your requirements

export const metadata = {
  title: 'FightHub.io',
  description: 'FightHub.io. A site to load fighter databases, records, and latest fight news.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={vt323.variable}>{children}</body>
      
    </html>
  );
}


