import CheckList from "@/components/CheckList/CheckList";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import MediaGallery from "@/components/MediaGallery/MediaGallery";
import { fetchProductData } from "@/services/api";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function Page({ params }: PageProps) {
  const { lang: routeLang } = await params;
  const lang = routeLang === "bn" ? "bn" : "en";

  const data = await fetchProductData(lang);
  return (
    <>
      <Header lang={lang} />
      <main className="mt-16 relative">
        <HeroSection data={data.data} />

        <div className="max-w-6xl mx-auto px-4 mt-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3 w-full">
              <div className="bg-gray-100 h-[200vh] rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Left Side Content Placeholder</p>
              </div>
            </div>

            {/* fixed */}
            <div className="md:w-1/3 w-full relative">
              <div className="w-full md:max-w-[330px] lg:max-w-[400px] mx-auto absolute right-0 -top-[300px] bg-white p-1 border border-gray-300">
                <MediaGallery data={data.data.media} />
                <CheckList data={data.data.checklist} cta={data.data.cta_text} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
