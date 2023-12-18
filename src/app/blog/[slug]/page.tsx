import { readFileSync } from 'fs';
import { components } from '@/components/mdx-remote';
import { compileMDX } from 'next-mdx-remote/rsc';

export default async function RemoteMdxPage() {
  // const mdxText: string = readFileSync('http://tobyc.uk/posts/microservice-discord-bots.mdx').toString();
  const mdxText: string = readFileSync('http://tobyc.uk/posts/microservice-discord-bots.mdx').toString();

  const { content, frontmatter } = await compileMDX<{ title: string; date: Date }>({
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
      </div>
      {content}
    </div>
  );
}
