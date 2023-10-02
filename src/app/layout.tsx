import { StoreProvider } from '@/redux/StoreProvider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import { Toaster } from 'react-hot-toast';
export const metadata: Metadata = {
  title: 'Nike Store',
  description: 'Nike Store adaptation in NextJS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StoreProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <body className={inter.className}>{children}</body>
      </StoreProvider>
    </html>
  );
}
