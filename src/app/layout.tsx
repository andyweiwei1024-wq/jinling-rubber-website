import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
}

// Root layout - only provides global styles and font
// The [lang]/layout.tsx handles the actual HTML structure with proper lang/dir attributes
export default function RootLayout({ children }: LayoutProps) {
  // Return children directly - the [lang]/layout.tsx will wrap with proper html/body
  return children;
}
