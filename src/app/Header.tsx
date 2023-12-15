import Link from 'next/link';

export function Header() {
  return (
    <div className="w-1/2 mx-[25%] h-16 flex flex-row items-center justify-between my-3 text-primary">
      <div className="text-4xl font-semibold">P.I.E.D.A.R</div>
      <div className="flex flex-row">
        <Link href="/about" className="mx-3 hover:bg-teritary py-2 px-3 rounded-md ease-in duration-75">
          About
        </Link>
        <Link href="/projects" className="mx-3 hover:bg-teritary py-2 px-3 rounded-md ease-in duration-75">
          Projects
        </Link>
        <Link href="/blog" className="mx-3 hover:bg-teritary py-2 px-3 rounded-md ease-in duration-75">
          Blog
        </Link>
        <Link href="/contact" className="mx-3 hover:bg-teritary py-2 px-3 rounded-md ease-in duration-75">
          Contact
        </Link>
      </div>
    </div>
  );
}
