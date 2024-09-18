import { readFileSync } from 'fs';
import { components } from '@/components/mdx-remote';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';

export default async function RemoteMdxPage() {
  // const mdxText: string = readFileSync('http://tobyc.uk/posts/microservice-discord-bots.mdx').toString();
  const mdxText: string = readFileSync(path.join(process.cwd(), 'posts', 'microservice-discord-bots.mdx')).toString();

  const { content, frontmatter } = await compileMDX<{ title: string; date: Date; readTime: number }>({
    source: mdxText,
    options: { parseFrontmatter: true },
    components: components,
  });
  return (
    <div>
      <div className="flex flex-col align-middle items-center mb-20">
        <h2 className="text-gray-400">{frontmatter.date.toLocaleString('en-GB', { timeZone: 'UTC' })}</h2>
        <h1 className="text-4xl font-bold">{frontmatter.title}</h1>

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
        <div className="mt-5 flex flex-row align-middle items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px" className="mr-2">
            <path
              fill="#fb923c"
              d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"
            />
          </svg>
          <h2>Read Time:</h2>
          <h2 className="pl-2 font-light">{frontmatter.readTime} minutes</h2>
        </div>
      </div>

      <div className="flex flex-col">{content}</div>
    </div>
  );
}
