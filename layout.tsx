import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Press_Start_2P, VT323, Share_Tech_Mono } from 'next/font/google';
import '../styles/tailwind.css';

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-arcade',
  display: 'swap',
});

const vt323 = VT323({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-heading',
  display: 'swap',
});

const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-body',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'ChesCraft — Creative Design & Virtual Assistant Services',
  description: 'Francesca Elleine Perea offers graphic design, web design, video editing, and virtual assistant services for creatives and small businesses in the Philippines.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly < { children: React.ReactNode } > ) {
  return (
    <html
      lang="en"
      className={`${pressStart2P.variable} ${vt323.variable} ${shareTechMono.variable}`}
      suppressHydrationWarning
    >
      <body className={shareTechMono.className}>
        {children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fchescraft5079back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.19" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}