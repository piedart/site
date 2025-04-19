import Link from 'next/link';

const projectsData = [
  {
    name: '@Fawkes.js',
    description:
      'Fawkes is a lightweight, yet expansive, API wrapper for the Discord API - aiming to be highly usable and to provide numerous helper functions.',
    stats: {
      stars: 1,
      forks: 0,
      language: 'Typescript',
    },
    href: 'https://github.com/fawkes-js',
  },
  {
    name: 'Graph Theory',
    description: "This is an online tool for emulating various algorithms, such as Prim's and Kruskal's",
    stats: {
      stars: 1,
      forks: 0,
      language: 'Typescript & HTML',
    },
    href: 'http://graph.tobyc.uk',
  },
  {
    name: 'Ritangle Challenge',
    description: 'I am currently taking part in the Ritangle challenge.',
    stats: {
      stars: 'N/A',
      forks: 'N/A',
      language: 'Typescript',
    },
    href: 'https://ritangle.mei.org.uk/',
  },
  {
    name: 'Project Euler',
    description: 'I regularly complete problems on Project Euler.',
    stats: {
      stars: 'N/A',
      forks: 'N/A',
      language: 'Javascript',
    },
    href: 'https://projecteuler.net/',
  },
];

export default function BlogPage() {
  return (
    <div className="w-screen px-[5%] lg:px-[20%] lg:pt-[10vh]h-screen  mt-[10vh]">
      <h2 className="text-primary font-bold text-5xl px-[5%]">Projects</h2>
      <div className="flex flex-wrap mt-32">
        {projectsData.map((project) => {
          return (
            <Link
              href={project.href}
              key={project.name}
              className=" w-full lg:w-[97.6%] xl:w-[47.6%] box-border m-[1.2%] h-48 border-primary rounded-xl border-2 hover:scale-105 hover:bg-stone-50 ease-in duration-100 hover:cursor-pointer"
            >
              <div className="m-6">
                <h3 className="font-bold my-1">{project.name}</h3>
                <h3 className="font-light text-sm text-gray-400">{project.description}</h3>
                <div className="flex flex-row my-5">
                  <div className="flex flex-row align-middle items-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="16" viewBox="0 0 512 512" width="16" className="mr-1">
                      <rect fill="#ebebff" height="512" rx="50" width="512" />
                      <rect fill="#ebebff" height="512" rx="50" width="512" />
                      <path
                        clip-rule="evenodd"
                        d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"
                        fill="#dd1d4a"
                        fillRule="evenodd"
                      />
                    </svg>
                    <h3 className="font-light text-sm">{project.stats.language}</h3>
                  </div>
                  <div className="flex flex-row align-middle items-center mr-3">
                    <svg height="16" width="16" className="mr-1">
                      <path
                        fill="#dd1d4a"
                        d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
                      ></path>
                    </svg>
                    <h3 className="font-light text-sm">{project.stats.forks}</h3>
                  </div>
                  <div className="flex flex-row align-middle items-center">
                    <svg height="16" viewBox="0 0 16 16" width="16" className="mr-1">
                      <path
                        fill="#dd1d4a"
                        d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"
                      ></path>
                    </svg>
                    <h3 className="font-light text-sm">{project.stats.stars}</h3>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
