// components/mdx-remote.js
import { readFileSync } from 'fs';
import { MDXRemote, compileMDX } from 'next-mdx-remote/rsc';
import Image from 'next/image';

export const components = {
  h1: (props: any) => (
    <h1 {...props} className="text-3xl font-semibold">
      {props.children}
    </h1>
  ),
  h2: (props: any) => (
    <h2 {...props} className="text-2xl font-semibold mt-5">
      {props.children}
      <div className="bg-gray-400 opacity-50 w-full h-[1px] mt-2 mb-4"></div>
    </h2>
  ),
  h3: (props: any) => (
    <h3 {...props} className="text-xl font-semibold my-2">
      {props.children}
    </h3>
  ),
  h4: (props: any) => (
    <h4 {...props} className="text-lg font-semibold my-1">
      {props.children}
    </h4>
  ),
  ul: (props: any) => (
    <ul {...props} className="list-disc pl-8 my-2">
      {props.children}
    </ul>
  ),
  ol: (props: any) => (
    <ol {...props} className="list-decimal pl-12 my-2">
      {props.children}
    </ol>
  ),
  li: (props: any) => (
    <li {...props} className="pl-2">
      {props.children}
    </li>
  ),
  p: (props: any) => (
    <p {...props} className="font-light text-md my-5">
      {props.children}
    </p>
  ),
  code: (props: any) => (
    <code {...props} className="bg-tertiary rounded-md text-orange-400 text-sm p-1">
      {props.children}
    </code>
  ),
  img: (props: any) => <Image sizes="100vw" style={{ width: '100%', height: 'auto' }} {...props} />,
};
