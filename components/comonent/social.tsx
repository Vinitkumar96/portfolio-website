import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Tooltip } from "../ui/tooltip-card";

const LinkedinCard = () => {
  return (
    <div>
      <img src="linkedin.png" alt="linkedin vinit" className="rounded-sm  " />
    </div>
  );
};

const GitCard = () => {
  return (
    <div>
      <img
        src="github.png"
        alt="github vinit"
        className="rounded-sm border-t-2 border-l-2 border-neutral-300"
      />
    </div>
  );
};

const LeetCard = () => {
  return (
    <div>
      <img
        src="let.png"
        alt="leetcode vinit"
        className="rounded-sm border-t-2 border-l-2 border-neutral-300"
      />
    </div>
  );
};

const Social = () => {
  return (
    <div className="font-serif text-neutral-300 flex bg-neutral-900/20 flex-wrap items-center md:space-x-6 space-x-3 justify-center rounded-lg border-x border-neutral-600/70 px-8   border-t border-t-neutral-600/40 mb-4 cursor-pointer ">
      
      <Tooltip content={<LinkedinCard />}>
        <a href="https://www.linkedin.com/in/vinit-kumar-b14421378/" target="_blank">
          <div className="flex text-sm items-center gap-1 group  px-4 py-2 ">
            <FaLinkedin color="#2B7FFF" /> Linkedin
          </div>
        </a>
      </Tooltip>

      <Tooltip
        content={<GitCard />}
      >
        <a href="https://github.com/Vinitkumar96"  target="_blank">
        <div className="flex text-sm items-center gap-1   px-4 py-2">
          <FaGithub color="#2B7FFF" /> Github
        </div>
        </a>
      </Tooltip>

      <Tooltip content={<LeetCard />}>
      <a href="https://leetcode.com/u/vinitkumar90/"  target="_blank">
        <div className="flex text-sm items-center gap-1  px-4 py-2">
          <SiLeetcode color="#2B7FFF" /> Leetcode
        </div>
        </a>
      </Tooltip>
    </div>
  );
};

export default Social;
