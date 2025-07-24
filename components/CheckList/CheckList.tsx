import Image from "next/image";
import type { FC } from "react";

type CheckListItem = {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
};

type CtaText = {
  name: string;
  value: string;
};

const CheckList: FC<{ data: CheckListItem[]; cta: CtaText }> = ({
  data,
  cta,
}) => {
  return (
    <div className="space-y-4 px-2 py-2">
      <div className="space-y-4">
        <span className="inline-block text-2xl font-semibold">৳1000</span>
        <button className="bg-[#1bab54] rounded w-full py-2 text-white cursor-pointer hover:bg-[#53a774]">
          {cta.name}
        </button>
      </div>

      <span className="block text-lg font-semibold text-gray-800 mb-2 pt-5 pb-2">
        এই কোর্সে যা থাকছে
      </span>

      <div className="space-y-2">
        {data.map((item) => (
          <div key={item.id} className="flex items-center space-x-3">
            <div className="w-6 h-6 min-w-[24px] min-h-[24px] rounded-full flex items-center justify-center text-white text-xs font-bold">
              <Image src={item.icon} height={25} width={25} alt="icon" />
            </div>
            <p className="text-gray-700 text-[16px]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckList;
