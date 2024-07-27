import '../components/globals.css';
// Import the VT323 font from @next/font/google
import { VT323 as VT323Font } from '@next/font/google';

const vt323 = VT323Font({ subsets: ['latin'], weight: ['400'] }); // You can specify the subset as per your requirements

export const metadata = {
  title: 'FightHub.io',
  description: 'FightHub.io. A site to load fighter databases, records, and latest fight news.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={vt323.className}>{children}</body>
      
    </html>
  );
}


