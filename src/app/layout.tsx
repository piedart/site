import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ThemeProvider } from 'next-themes';

// const code = Space_Grotesk({
//   subsets: ['latin'],
//   display: 'swap',
// });

const font = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Toby Chambers',
  description: 'My Personal Site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <main className="h-screen w-screen flex flex-col justify-between">
            <div className="flex flex-col">
              <Header />
              <div className="">{children}</div>
              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
