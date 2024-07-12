import Link from 'next/link';

export default function blog() {
  return (
    <div className="flex flex-col items-center">
      <div className="my-5">
        <h2 className="text-3xl font-bold">Blog</h2>
        <h3 className="font-light text-md my-6">
          Over the years I&apos;ve had the... pleasure... to start - and abandon - many projects, ranging from compiler to API
          wrappers. Whilst many of these projects have been swiftly abandoned after I immediately lose interest, they have all helped
          shape and sculpt me as a software engineer.
        </h3>
      </div>
      <div className="w-full h-[0.5px] bg-primary bg-opacity-80 mb-14"></div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full rounded-lg p-5 hover:scale-105 hover:bg-tertiary ease-in duration-100 hover:cursor-pointer">
          <div className="w-1/3 mr-16">
            <h3 className="font-bold">December 15th 2023</h3>
          </div>
          <Link className="w-fit" href="/blog/microservice-discord-bots">
            <h3 className="font-bold text-2xl mb-6 text-primary">Microservice Discord Bots</h3>
            <p className="font-light text-sm">
              In recent years the Discord platform has been exploding in popularity - generating opportunities to develop truly amazing
              apps using its world-class API. Traditional frameworks have taken a centralised approach - with apps lacking scalability
              and adaptability. This post looks at the potential alternatives, and their benefits.
            </p>
            <div className="flex flex-row align-middle items-center mt-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px" className="mr-2">
                <path
                  fill="#fb923c"
                  d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"
                />
              </svg>
              <h4 className="font-light">
                <span className="font-semibold text-sm">Read Time: </span>10 minutes
              </h4>
            </div>
            <div className="flex flex-row mt-5">
              <div className="px-2 py-1 mr-3 border-orange-400 border-[1px] text-orange-400 rounded-lg ease-in duration-150 hover:bg-orange-400 hover:text-secondary hover:cursor-pointer">
                Networking
              </div>
              <div className="px-2 py-1 mr-3 border-orange-400 border-[1px] text-orange-400 rounded-lg ease-in duration-150 hover:bg-orange-400 hover:text-secondary hover:cursor-pointer">
                Typescript
              </div>
              <div className="px-2 py-1 mr-3 border-orange-400 border-[1px] text-orange-400 rounded-lg ease-in duration-150 hover:bg-orange-400 hover:text-secondary hover:cursor-pointer">
                Discord
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
