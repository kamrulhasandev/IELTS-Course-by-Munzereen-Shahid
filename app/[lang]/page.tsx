/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckList from "@/components/CheckList/CheckList";
import CourseDetails from "@/components/CourseDetails/CourseDetails";
import FeaturesExplanations from "@/components/FeaturesExplanations/FeaturesExplanations";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import Instructor from "@/components/Instructor/Instructor";
import LaidOut from "@/components/LaidOut/LaidOut";
import MediaGallery from "@/components/MediaGallery/MediaGallery";
import WhatYouLearn from "@/components/WhatYouLearn/WhatYouLearn";
import { fetchProductData } from "@/services/api";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function Page({ params }: PageProps) {
  const { lang: routeLang } = await params;
  const lang = routeLang === "bn" ? "bn" : "en";

  const data = await fetchProductData(lang);

  const sectionMap = Object.fromEntries(
    data.data.sections.map((s: any) => [s.type, s])
  );

  const instructorData = sectionMap["instructors"];
  const laidOutData = sectionMap["features"];
  const pointerData = sectionMap["pointers"];
  const exclusiveFeatureData = sectionMap["feature_explanations"];
  const aboutData = sectionMap["about"];

  return (
    <>
      <Header lang={lang} />
      <main className="mt-16 relative">
        <HeroSection heroContent={data.data} data={data.data.media} />
        <div className="md:hidden">
          <CheckList data={data.data.checklist} cta={data.data.cta_text} />
        </div>

        <div className="max-w-6xl mx-auto  mt-10 px-3">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3 w-full">
              <div className="">
                <div>
                  <Instructor instructor={instructorData} />
                  <LaidOut laidOut={laidOutData} />
                  <WhatYouLearn pointer={pointerData} />
                  <FeaturesExplanations features={exclusiveFeatureData} />
                  <CourseDetails about={aboutData} />
                </div>
              </div>
            </div>

            <div className="md:w-1/3 w-full relative hidden md:block ">
              <div className="w-full md:max-w-[330px] lg:max-w-[400px] mx-auto absolute right-0 -top-[300px] bg-white p-1 border border-gray-300">
                <MediaGallery data={data.data.media} />
                <CheckList
                  data={data.data.checklist}
                  cta={data.data.cta_text}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
