import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import rehypeRaw from 'rehype-raw';
import { Footer } from '../../../components/Footer';
import remarkGfm from 'remark-gfm';

const markdownStyles = {};
const components = {
  img: (props: any) => <Image width="100px" style={{ width: 'auto', height: 'auto' }} {...props} alt="" />,
  h2: (props: any) => (
    <div className="my-3">
      <h2 className="text-3xl font-bold">{props.children}</h2>
      <div className="w-[80%] h-[1px] bg-stone-300 my-2"></div>
    </div>
  ),
  h3: (props: any) => <h3 className="text-2xl font-bold my-2 mt-6">{props.children}</h3>,
  h4: (props: any) => <h4 className="text-xl font-bold my-2 mt-6">{props.children}</h4>,
  p: (props: any) => <p className="my-2">{props.children}</p>,
  code: (props: any) => <code className="bg-stone-50 text-teal-600 p-[3px] rounded-md">{props.children}</code>,
  ul: (props: any) => <ul className="list-disc">{props.children}</ul>,
  li: (props: any) => <li className="my-1">{props.children}</li>,
};

export default async function blog({ params }: any) {
  const content = await import(`/posts/${params.slug}.mdx`);
  const data = matter(content.default);
  return (
    <div className="overflow-y-auto h-screen">
      <div className="w-[80%] mx-[10%] md:w-[70%] md:mx-[15%] lg:w-[60%] lg:mx-[20%] xl:w-[50%] xl:mx-[25%] mt-32">
        <div className="flex flex-col items-center mb-16">
          <h3 className="text-4xl font-bold text-center">{data.data.title}</h3>
          <div className="flex flex-row my-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px" className="mr-2">
              <path
                fill="#0D9488"
                d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"
              ></path>
            </svg>
            <p className="text-lg">
              <span className="text-teal-600 font-semibold mr-2">Read Time:</span>
              {data.data.readTime} minutes
            </p>
          </div>
        </div>
        <div id="blog-post" className="mb-64">
          <ReactMarkdown components={components} rehypePlugins={[rehypeRaw]} className="markdown" remarkPlugins={[remarkGfm]}>
            {data.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
