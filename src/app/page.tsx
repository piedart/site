import { Source_Code_Pro } from 'next/font/google';
import { Footer } from '../components/Footer';
const code = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <div className="snap-y scroll-smooth h-screen overflow-y-auto snap-mandatory">
      <div className="h-screen flex flex-col align-middle items-center snap-center section-1">
        <div className="typewriter mt-[30vh] m-5">
          <h1 className="font-bold text-4xl ">
            Hi, I'm <span className="text-teal-600">Toby</span> - an Aspiring Computer Science Student
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="bg-teal-600 px-4 py-2 rounded-md mr-6 landing-btn">
            <p className="font-bold text-lg ">Download CV</p>
          </div>
          <div className="bg-gray-400 px-4 py-2 rounded-md">
            <p className="font-semibold text-lg ">Read Blog</p>
          </div>
        </div>
      </div>

      <div className="section-2-bg"></div>

      <div className="h-screen flex flex-col align-middle items-center snap-center section-2 px-[20%] pt-[10vh]">
        <div className="w-full flex flex-col items-start">
          <h2 className="text-teal-600 font-bold text-5xl py-[50px]">Education</h2>
          <div className="flex flex-row w-full">
            <div className="w-[10%] flex flex-col items-center">
              <div className="rounded-full w-[20px] h-[20px] bg-white shadow-2xl shadow-black">
                <div className="rounded-full w-[12px] h-[12px] bg-teal-600 m-[4px]"></div>
              </div>
              <div className="h-[80vh] w-[1px] bg-gray-200"></div>
            </div>
            <ul className="px-[10%] w-fit">
              <li>
                <div className="my-10">
                  <h3 className="font-bold text-lg ">The College of Richard Collyer, 2023 - Present</h3>
                  <ul>
                    <li>A Level Further Maths - A &#40;Predicted&#41;</li>
                    <li>A Level Maths - A* &#40;Predicted&#41;</li>
                    <li>A Level Physics - A* &#40;Predicted&#41;</li>
                    <li>A Level Politics - A* &#40;Predicted&#41;</li>
                  </ul>
                </div>
                <div className="my-10">
                  <h3 className="font-bold text-lg ">The Weald Community School & Sixth Form, 2018 - 2023</h3>
                  <ul>
                    <li>GCSE Mathematics - 9</li>
                    <li>GCSE English Language - 9</li>
                    <li>GCSE English Literature - 8</li>
                    <li>GCSE Physics - 9</li>
                    <li>GCSE Chemistry - 9</li>
                    <li>GCSE Biology - 9</li>
                    <li>GCSE Geography - 9</li>
                    <li>GCSE History - 9</li>
                    <li>GCSE Business Studies - 9</li>
                    <li>GCSE Religious Studies - 9</li>
                    <li>Level 2 BTEC Music Technology - D*</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="h-screen flex flex-col align-middle items-center snap-center section-3 px-[20%] pt-[10vh]">
        <div className="w-full flex flex-col items-start">
          <h2 className="text-teal-600 font-bold text-5xl py-[50px]">Work Experience</h2>
          <div className="flex flex-row w-full">
            <div className="w-[10%] flex flex-col items-center">
              <div className="rounded-full w-[20px] h-[20px] bg-white shadow-2xl shadow-black">
                <div className="rounded-full w-[12px] h-[12px] bg-teal-600 m-[4px]"></div>
              </div>
              <div className="h-[80vh] w-[1px] bg-gray-200"></div>
            </div>
            <ul className="px-[10%] w-fit">
              <li>
                <div className="my-10">
                  <h3 className="font-bold text-lg ">Aurora Fireworks, 2022 - Present</h3>
                  <ul>
                    <li>Pyrotechnician, as part of this I am working towards my BPA firers licence.</li>
                  </ul>
                </div>
                <div className="my-10">
                  <h3 className="font-bold text-lg ">Breathe HR, June 2024</h3>
                  <ul>
                    <li>Work Experience, I spent a week at Breathe HR, learning about the software industry.</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" h-screen flex  align-middle items-center snap-center section-4 px-[20%] pt-[10vh] flex-col justify-between">
        <div className="w-full flex flex-col items-start">
          <h2 className="text-teal-600 font-bold text-5xl py-[50px]">Skills</h2>
          <div className="flex flex-row flex-wrap w-full">
            <div className="w-52 h-28 bg-teal-600 rounded-lg flex flex-row items-center justify-center m-5">
              <h3 className="font-semibold text-xl">Javascript</h3>
            </div>
            <div className="w-52 h-28 bg-teal-600 rounded-lg flex flex-row items-center justify-center m-5">
              <h3 className="font-semibold text-xl">Typescript</h3>
            </div>
            <div className="w-52 h-28 bg-teal-600 rounded-lg flex flex-row items-center justify-center m-5">
              <h3 className="font-semibold text-xl">HTML</h3>
            </div>
            <div className="w-52 h-28 bg-teal-600 rounded-lg flex flex-row items-center justify-center m-5">
              <h3 className="font-semibold text-xl">CSS</h3>
            </div>
            <div className="w-52 h-28 bg-teal-600 rounded-lg flex flex-row items-center justify-center m-5">
              <h3 className="font-semibold text-xl">C</h3>
            </div>
            <div className="w-52 h-28 bg-teal-600 rounded-lg flex flex-row items-center justify-center m-5">
              <h3 className="font-semibold text-xl">React.JS</h3>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
