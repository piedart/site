import Image from 'next/image';
import { Source_Code_Pro } from 'next/font/google';

const code = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <div className="">
      <div>
        <h1 className="text-5xl font-semibold">Hi, I&apos;m Toby 👋,</h1>
      </div>
      <div className="my-10">
        <h3>
          I&apos;m a &quot;wannabe&quot; software engineer currently tinkering with projects spanning the computer science world.
          I&apos;m a wannabe software engineer currently tinkering with projects spanning the computer science world. I&apos;m a
          wannabe software engineer currently tinkering with projects spanning the computer science world.
        </h3>
      </div>
    </div>
  );
}
