
import Image from "next/image";
import Link from "next/link";
import Stack from "@/components/comonent/stack";
import Project from "@/components/comonent/project";
import Social from "@/components/comonent/social"
import FooterVinit from "@/components/comonent/footerVinit";
import { FlipWords } from "@/components/ui/flip-words";


const words = ["Engineer", "Fullstack dev", "Web dev", "Mobile dev", "devops"];

const page = () => {
  return (
    <div className=" w-full min-h-screen pt-6 instrument-serif max-md:p-1 pb-0">
      <div className=" w-full border-y-2 border-neutral-800 border-dashed   ">
        <div className=" relative max-w-2xl mx-auto  py-18 text-center instrument-serif text-2xl  bg-dots my-2">
          <p className="brightness-200 absolute top-[40%] left-[50%] ">
            wasupppp ?
          </p>
        </div>
      </div>


      {/* top section */}
      <div className="max-w-2xl mx-auto border-x-2 border-neutral-800 border-dashed  py-6 px-4">
        <div className=" bg-neutral-900/20 border-x  rounded-2xl border-neutral-600/70 p-6  border-t border-t-neutral-600/40">
          <div className="flex flex-col md:flex-row">
            <div className=" bg-neutral-900 flex-1 border border-border rounded-[12px] p-[4px] cursor-pointer hover:brightness-90 transition duration-300 max-md:w-fit">
              <Image
                src="/v.png"
                width={80}
                height={80}
                alt="vinit pic"
                className="rounded-[12px]  md:w-full grayscale  hover:rotate-3 transition-all duration-200 "
              />
            </div>

            <div className="flex-5 pt-2 md:pt-0 md:pl-4  flex-col  ">
              <h1 className="text-3xl font-semibold  instrument-serif mb-0.5 flex items-center gap-2  ">
                Vinit kumar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="text-blue-500 mt-1"
                >
                  <title>Verified</title>
                  <path
                    d="m17.999,10c0-1.097-.567-2.113-1.465-2.707.215-1.054-.103-2.174-.878-2.95-.775-.776-1.896-1.094-2.95-.878-.593-.897-1.609-1.464-2.706-1.464s-2.113.567-2.706,1.464c-1.053-.216-2.174.102-2.95.878s-1.093,1.896-.878,2.949c-.897.593-1.465,1.61-1.465,2.707s.567,2.113,1.465,2.707c-.215,1.054.103,2.174.878,2.95s1.898,1.092,2.95.878c.593.897,1.609,1.464,2.706,1.464s2.113-.568,2.706-1.465c1.059.214,2.176-.103,2.95-.878.776-.776,1.094-1.896.878-2.95.897-.593,1.465-1.609,1.465-2.707Zm-4.218-1.875l-4,5c-.178.222-.442.358-.726.374-.019,0-.037.001-.056.001-.265,0-.52-.105-.707-.293l-2-2c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l1.21,1.21,3.302-4.127c.347-.43.975-.502,1.406-.156.431.345.501.974.156,1.405Z"
                    strokeWidth="0"
                    fill="currentColor"
                  ></path>
                </svg>
              </h1>
              <div className="text-xl  text-neutral-300   ">
                <FlipWords words={words} />
              </div>
              <p className="text-sm text-neutral-400   font-mono ">
                I build and ship products at high speed, putting in the hours to
                turn ideas into working software
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tools section */}
      <div className="w-full border-t-2 border-dashed">
      <div className="max-w-2xl mx-auto border-x-2 border-neutral-800 border-dashed   pb-1 pt-6 px-4">
        <div className=" mb-10 ">
          <h1 className="text-xl instrument-serif mb-2 ml-4">
            Tools I Tinker With
          </h1>
          <Stack />
          <div className="text-xl">
            <p className="instrument-serif mb-2 ml-4">Socials connect</p>
            <Social/>
          </div>
        </div>
      </div>
      </div>

      {/* projects section */}

      <div className=" w-full border-y-2 border-neutral-800 border-dashed    ">
        <div className="max-w-2xl mx-auto border-x-2 border-neutral-800 border-dashed py-6 px-4">
          <div className="flex justify-between items-center px-4 py-3 mb-2 border-t-2 border-dashed ">
            <h1 className="text-2xl font-bold instrument-serif">Projects</h1>
            <Link href={"/proj"}>
              <div className="flex gap-2">
                <p className="text-sm cursor-pointer text-neutral-400 hover:text-neutral-100 transition-all font-mono bg-neutral-900 px-3 rounded-sm py-1.5 ">
                  View more{" "}
                </p>
              </div>
            </Link>
          </div>

          <Project />
        </div>
      </div>

      <FooterVinit/>
    </div>
  );
};

export default page;
