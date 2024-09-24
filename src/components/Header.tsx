import Link from 'next/link';

export function Header() {
  return (
    <div className="flex flex-row justify-end absolute w-full">
      <div className="flex flex-row mr-24">
        <Link href="/">
          <div className="m-3 p-2 rounded-md hover:scale-110 ease-in-out duration-100 hover:cursor-pointer hover:shadow-md hover:font-semibold">
            <p>
              <span className="text-teal-600 font-semibold">01.</span> About
            </p>
          </div>
        </Link>
        <Link href="/blog">
          <div className="m-3 p-2 rounded-md hover:scale-110 ease-in-out duration-100 hover:cursor-pointer hover:shadow-md hover:font-semibold">
            <p>
              <span className="text-teal-600 font-semibold">02.</span> Blog
            </p>
          </div>
        </Link>

        <Link href="/projects">
          <div className="m-3 p-2 rounded-md hover:scale-110 ease-in-out duration-100 hover:cursor-pointer hover:shadow-md hover:font-semibold">
            <p>
              <span className="text-teal-600 font-semibold">03.</span> Projects
            </p>
          </div>
        </Link>

        <Link href="/contact">
          <div className="m-3 p-2 rounded-md hover:scale-110 ease-in-out duration-100 hover:cursor-pointer hover:shadow-md hover:font-semibold">
            <p>
              <span className="text-teal-600 font-semibold">04.</span> Contact
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
