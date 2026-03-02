import { stackItems } from "@/data";
import { SectionCard } from "@/components/ui/section";

const Stack = () => {
  return (
    <SectionCard className="mb-4 py-1">
      <div className="flex justify-center items-center flex-wrap">
        {stackItems.map((item, index) => (
          <div
            key={index}
            className="bg-neutral-900/30 rounded-xl p-1 px-2 m-0.5 flex items-center justify-center gap-1 border cursor-pointer border-dashed hover:border-neutral-600 transition-all"
          >
            {item.icon}
            <p className="text-[12px] font-mono">{item.name}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default Stack;
