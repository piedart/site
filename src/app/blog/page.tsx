const blogs = [
  {
    title: 'Microservice Discord Bots',
    link: '/microservice-discord-bots',
    description:
      'Nullam non nisl sed sapien laoreet bibendum. Fusce placerat commodo eros, et aliquet orci faucibus id. Nam placerat orci sed nisi tempus, et dictum lectus egestas. Pellentesque rhoncus lectus sem, finibus tincidunt nibh feugiat at. Nunc et nisi vitae arcu egestas fermentum eu ac risus. Mauris accumsan dictum urna, id auctor nisl accumsan quis. Aenean a nisl risus. Proin auctor orci vitae turpis ullamcorper, in aliquam neque dignissim.',
    readTime: '10 minutes',
    date: 'December 15th 2023',
  },
  {
    title: 'Compiler Construction',
    link: '/compiler-construction',
    description:
      'Nullam non nisl sed sapien laoreet bibendum. Fusce placerat commodo eros, et aliquet orci faucibus id. Nam placerat orci sed nisi tempus, et dictum lectus egestas. Pellentesque rhoncus lectus sem, finibus tincidunt nibh feugiat at. Nunc et nisi vitae arcu egestas fermentum eu ac risus. Mauris accumsan dictum urna, id auctor nisl accumsan quis. Aenean a nisl risus. Proin auctor orci vitae turpis ullamcorper, in aliquam neque dignissim.',
    readTime: '10 minutes',
    date: 'December 15th 2023',
  },
  {
    title: 'Bitwise Operators',
    link: '/bitwise-operators',
    description:
      'Nullam non nisl sed sapien laoreet bibendum. Fusce placerat commodo eros, et aliquet orci faucibus id. Nam placerat orci sed nisi tempus, et dictum lectus egestas. Pellentesque rhoncus lectus sem, finibus tincidunt nibh feugiat at. Nunc et nisi vitae arcu egestas fermentum eu ac risus. Mauris accumsan dictum urna, id auctor nisl accumsan quis. Aenean a nisl risus. Proin auctor orci vitae turpis ullamcorper, in aliquam neque dignissim.',
    readTime: '10 minutes',
    date: 'December 15th 2023',
  },
  {
    title: 'Data Structures',
    link: '/data-structures',
    description:
      'Nullam non nisl sed sapien laoreet bibendum. Fusce placerat commodo eros, et aliquet orci faucibus id. Nam placerat orci sed nisi tempus, et dictum lectus egestas. Pellentesque rhoncus lectus sem, finibus tincidunt nibh feugiat at. Nunc et nisi vitae arcu egestas fermentum eu ac risus. Mauris accumsan dictum urna, id auctor nisl accumsan quis. Aenean a nisl risus. Proin auctor orci vitae turpis ullamcorper, in aliquam neque dignissim.',
    readTime: '10 minutes',
    date: 'December 15th 2023',
  },
];

export default function blog() {
  return (
    <div className="w-screen px-[20%] pt-[10vh] overflow-y-auto h-screen">
      <h2 className="text-teal-600 font-bold text-5xl">Blog</h2>

      <p className="text-lg my-3">If you have any questions or queries, please do contact me using any of the methods below.</p>
      <div className="flex flex-col mt-16">
        {blogs.map((blog) => {
          return (
            <div className=" my-5 flex flex-row w-full items-center ease-in-out duration-200 rounded-xl p-8 hover:cursor-pointer hover:bg-stone-50 hover:scale-105">
              <div className="h-full w-1/4">
                <h3 className="text-nowrap font-bold text-lg">{blog.date}</h3>
              </div>
              <div className="flex flex-col w-3/4">
                <h3 className="text-3xl text-teal-600 font-bold">{blog.title}</h3>
                <p>{blog.description}</p>
                <div className="flex flex-row items-center mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px" className="mr-2">
                    <path
                      fill="#0D9488"
                      d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"
                    ></path>
                  </svg>
                  <p className="text-lg">
                    <span className="text-teal-600 font-semibold mr-2">Read Time:</span>
                    {blog.readTime}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
