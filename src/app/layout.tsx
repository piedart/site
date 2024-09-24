import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '../components/Header';
import { ThemeProvider } from 'next-themes';

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
          <main className="h-screen w-screen">
            <div className="">
              <Header />
              <div className="">{children}</div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
