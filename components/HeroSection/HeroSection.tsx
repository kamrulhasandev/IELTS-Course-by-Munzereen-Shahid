import Image from "next/image";
import MediaGallery from "../MediaGallery/MediaGallery";

interface HeroSectionProps {
  heroContent: {
    title: string;
    description: string;
  };
  data: Medium[];
}

type Medium = {
  id?: string | number;
  name: string;
  resource_type: "image" | "video";
  resource_value: string;
  thumbnail_url?: string;
};

export default function HeroSection({ heroContent, data }: HeroSectionProps) {
  return (
    <div className="bg-[url('/hero-bg.jpeg')] bg-cover bg-center min-h-[300px] w-full flex items-center px-3">
      <div className="max-w-6xl mx-auto">
        <div className="md:max-w-[calc(100%-440px)] space-y-2">
          <div className="md:hidden">
            <MediaGallery data={data} />
          </div>
          <h1 className="text-white font-semibold text-4xl">
            {heroContent.title}
          </h1>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 text-white">
            <Image src="/rating.jfif" width={100} height={20} alt="rating" />
            <span>(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</span>
          </div>
          <div
            className="text-gray-400"
            dangerouslySetInnerHTML={{ __html: heroContent.description }}
          />
        </div>
      </div>
    </div>
  );
}
