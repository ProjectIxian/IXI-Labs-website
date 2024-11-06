import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Navbar from '@/app/Components/Navbar/Navbar';
import Footer from '@/app/Components/Footer/Footer';

const getPoppinsRegular = localFont({
  src: './fonts/Poppins-Regular.ttf',
  variable: '--font-poppins-regular',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'IXI Labs Website',
  description:
    'Building Centralized Solutions on a Decentralized Network. Delivering market ready solutions at a fraction of the cost.',
  openGraph: {
    title: 'IXI Labs - Building the Internet of Tomorrow',
    description:
      'Building Centralized Solutions on a Decentralized Network. Delivering market ready solutions at a fraction of the cost.',
    images: ['http://www.ixilabs.com/images/IXILabsOG.jpg'],
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
      </head>
      <body className={`${getPoppinsRegular.variable} `}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
