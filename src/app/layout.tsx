import type {Metadata} from 'next';
import './globals.css';
import Script from 'next/script';
import { FirebaseProvider } from '@/firebase/provider';

export const metadata: Metadata = {
  title: 'Estratégia Chinesa',
  description: 'Descubra o gatilho mais certeiro do mercado',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="https://static.hotmart.com/css/hotmart-fb.min.css" />
      </head>
      <body className="font-body antialiased">
        <FirebaseProvider>
          {children}
        </FirebaseProvider>
        <Script src="https://static.hotmart.com/checkout/widget.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
