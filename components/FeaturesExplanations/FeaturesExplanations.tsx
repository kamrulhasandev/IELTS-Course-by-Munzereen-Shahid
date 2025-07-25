import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
export type FeatureExplanationItem = {
  checklist: string[];
  file_type: "image" | "video";
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
};

export type FeatureExplanationProps = {
  type: "feature_explanations";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: FeatureExplanationItem[];
};

const FeaturesExplanations = ({
  features,
}: {
  features: FeatureExplanationProps;
}) => {
  console.log(features);
  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold leading-[30px] text-black mb-4">
        {features.name}
      </h2>
      <div className="mb-16 rounded-md border border-gray-300 p-6">
        {features.values.map((item: FeatureExplanationItem, index: number) => (
          <div key={item.id}>
            <div className="flex flex-col md:flex-row justify-between gap-4 pb-4">
              <div>
                <h2 className="text-[14px] font-[500px] leading-[30px] text-[#111827] md:text-[16px]">
                  {item.title}
                </h2>
                <div className="space-y-2">
                  {item.checklist.map((text, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <div className="min-w-[20px] text-[#76a1f9]">
                        <FaCheck />
                      </div>
                      <span className="text-[14px] font-normal leading-[24px] text-[#4B5563] md:text-[16px]">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Image
                  src={item.file_url}
                  height={200}
                  width={250}
                  alt="thumb"
                />
              </div>
            </div>

            {/* Only show <hr> if not last item */}
            {index < features.values.length - 1 && (
              <hr className="my-6 border-gray-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesExplanations;
