import { getHomePageData } from "@/ApiQuery";
import BookTheSession from "@/components/Sections/BookSession";
import GallerySection from "@/components/Sections/GallerySection";
import HeroSection from "@/components/Sections/HeroSection";
import Testimonials from "@/components/Sections/Testimonials";
import TrendingSession from "@/components/Sections/TrendingSession";

export default async function Home() {
  const data = await getHomePageData();
  const {session, trendingSession,banner1,banner2,gallery, testmonial} = data
console.log(data)
  return (
    <main className="w-full overflow-x-hidden flex flex-col items-center">
      <HeroSection />
      <BookTheSession sessionData={session} />
      <TrendingSession trendingSessionData={trendingSession} banner1={banner1} banner2={banner2} />
      <GallerySection galleryData={gallery} />
      <Testimonials testimonialData={testmonial} />
    </main>
  );
}
