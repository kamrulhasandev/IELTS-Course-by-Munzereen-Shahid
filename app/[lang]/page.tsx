import Header from "@/components/Header/Header";
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
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-6 mt-16">
        <h1 className="text-3xl font-bold">{data.data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.data.description }} />
      </main>
    </>
  );
}
