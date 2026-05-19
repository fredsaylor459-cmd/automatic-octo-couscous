import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata = {
  title: 'Bid Check Pro',
  description: 'Second-opinion contractor reviews that protect homeowners before they overpay.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
