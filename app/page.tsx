import Image from "next/image";
import Link from "next/link";
import { Stack, Projects, Social, Footer } from "@/components/sections";
import { FlipWords } from "@/components/ui/flip-words";
import { VerifiedIcon } from "@/components/icons";

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

            <div className="flex-5 pt-2 md:pt-0 md:pl-4 flex-col">
              <h1 className="text-3xl font-semibold instrument-serif  mb-0.5 flex items-center gap-2">
                Vinit kumar
                <VerifiedIcon className="mt-1" />
              </h1>
              <div className="text-[16px] pl-0.5  text-neutral-300   ">
                <FlipWords words={words} />
              </div>
              <p className="text-sm text-neutral-400 pl-0.5   font-mono ">
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
              <Social />
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
                {/* <p className="text-sm cursor-pointer text-neutral-400 hover:text-neutral-100 transition-all font-mono   "> */}
                  {/* View more{" "} */}
                  <p
                    className="relative inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm font-mono transition-colors group"
                  >
                    <span
                      className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity"
                      style={{backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 4px, currentcolor 4px, currentcolor 5px"}}
                    ></span>
                    <span className="absolute top-0 -left-[6px] -right-[6px] h-px bg-foreground/20 group-hover:bg-foreground/30 transition-colors"></span>
                    <span className="absolute bottom-0 -left-[6px] -right-[6px] h-px bg-foreground/20 group-hover:bg-foreground/30 transition-colors"></span>
                    <span className="absolute left-0 -top-[6px] -bottom-[6px] w-px bg-foreground/20 group-hover:bg-foreground/30 transition-colors"></span>
                    <span className="absolute right-0 -top-[6px] -bottom-[6px] w-px bg-foreground/20 group-hover:bg-foreground/30 transition-colors"></span>
                    <span className="relative">View More </span>
                  </p>
                {/* </p> */}
            </Link>
          </div>

          <Projects />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
