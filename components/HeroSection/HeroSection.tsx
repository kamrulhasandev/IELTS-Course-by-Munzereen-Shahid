import Image from "next/image";

interface HeroSectionProps {
  data: {
    title: string;
    description: string;
  };
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <div className="bg-[url('/hero-bg.jpeg')] bg-cover bg-center min-h-[300px] w-full flex items-center">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-[calc(100%-440px)] space-y-2">
          <h1 className="text-white font-semibold text-4xl">{data.title}</h1>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 text-white">
            <Image src="/rating.jfif" width={100} height={20} alt="rating" />
            <span>(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</span>
          </div>
          <div
            className="text-gray-400"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>
      </div>
    </div>
  );
}
