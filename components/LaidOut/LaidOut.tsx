import Image from "next/image";

export type LaidOutValue = {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
};

export type LaidOutProps = {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: LaidOutValue[];
};

const LaidOut = ({ laidOut }: { laidOut: LaidOutProps }) => {
  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold leading-[30px] text-black mb-4">
        {laidOut.name}
      </h2>
      <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
        {laidOut.values.map((item: LaidOutValue) => (
          <div key={item.id} className="flex items-start gap-4">
            <div className="min-w-[36px]">
              <Image
                src={item.icon}
                width={36}
                height={36}
                alt="icon"
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-[18px] font-medium leading-[26px] text-white">
                {item.title}
              </h2>
              <h2 className="text-[14px] font-normal leading-[22px] text-[#9CA3AF]">
                {item.subtitle}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaidOut;
