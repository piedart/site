import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { Header } from './Header';
import { Footer } from './Footer';
const code = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
});
export const metadata: Metadata = {
  title: 'Toby Chambers',
  description: 'My Personal Site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={code.className}>
        <main className="h-screen w-screen flex flex-col justify-between">
          <div>
            <Header />
            <div className="w-5/6 md:w-2/3 mx-auto xl:w-1/2 mt-[50px] text-primary">{children}</div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
