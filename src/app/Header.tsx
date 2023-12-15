import Link from 'next/link';

export function Header() {
  return (
    <div className="w-1/2 mx-[25%] h-16 flex flex-row items-center justify-between my-3 text-primary">
      <div className="text-4xl font-semibold">P.I.E.D.A.R</div>
      <div className="flex flex-row">
        <Link href="/" className="mx-3 hover:bg-teritary py-2 px-3 rounded-md ease-in duration-75">
          <span className="text-orange-400">01. </span>About
        </Link>
        <Link href="/projects" className="mx-3 hover:bg-teritary py-2 px-3 rounded-md ease-in duration-75">
          <span className="text-orange-400">02. </span>Projects
        </Link>
        <Link href="/blog" className="mx-3 hover:bg-teritary py-2 px-3 rounded-md ease-in duration-75">
          <span className="text-orange-400">03. </span>Blog
        </Link>
        <Link href="/contact" className="mx-3 hover:bg-teritary py-2 px-3 rounded-md ease-in duration-75">
          <span className="text-orange-400">04. </span>Contact
        </Link>
      </div>
    </div>
  );
}
