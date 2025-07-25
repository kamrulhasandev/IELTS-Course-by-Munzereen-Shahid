import { FaCheck } from "react-icons/fa6";
export type PointerValue = {
  color: string;
  icon: string;
  id: string;
  text: string;
};

export type PointerProps = {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: PointerValue[];
};

const WhatYouLearn = ({ pointer }: { pointer: PointerProps }) => {
  console.log(pointer);
  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold leading-[30px] text-black mb-4">
        {pointer.name}
      </h2>
      <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border border-gray-300 p-6 md:grid-cols-2 md:gap-8">
        {pointer.values.map((item: PointerValue) => (
          <div key={item.id} className="flex items-start gap-4">
            <div className="min-w-[20px] text-[#76a1f9]">
              <FaCheck />
            </div>
            <div>
              <p className="text-black text-lg">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatYouLearn;
