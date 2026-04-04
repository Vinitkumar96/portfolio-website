import { stackItems } from "@/data";
import { SectionCard } from "@/components/ui/section";

const Stack = () => {
  return (
    <SectionCard className="mb-4 py-3">
      <div className="flex justify-center items-center flex-wrap">
        {stackItems.map((item, index) => (
          <div
            key={index}
            className="m-0.5 md:my-1 py-1.5 flex cursor-pointer items-center justify-center  md:gap-2  rounded-xl border border-dashed border-neutral-600/60 bg-neutral-300/10 p-1 px-2 transition-all hover:border-neutral-900 dark:bg-neutral-900/30 dark:hover:border-neutral-500"
          >
            {item.icon}
            <p className="text-[12px] font-mono pl-0.5">{item.name}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default Stack;
