import BookTheSession from '@/components/Sections/BookSession'
import GallerySection from '@/components/Sections/GallerySection'
import HeroSection from '@/components/Sections/HeroSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden flex flex-col items-center">
        <HeroSection />
        <BookTheSession />
        <GallerySection />
    </main>
  )
}
