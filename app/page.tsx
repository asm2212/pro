import Hero from '@/components/Hero/Hero';
import LogoCloud from '@/components/LogoCloud/LogoCloud';
import { WavyBackgroundDemo } from '@/components/ui/WavyBackgroundDemo';
import AboutMe from '@/components/about-me/AboutMe';
import SecondQuote from '@/components/SecondQuote/SecondQuote';
import TheEnd from '@/components/TheEnd';
import { Footer } from '@/components/footer';
import FeaturedBlogs from '@/components/Blog/FeaturedBlogs';
import { unstable_noStore as noStore } from 'next/cache';
import Projects from '@/components/Projects/Projects';

export const dynamic = 'force-dynamic';
export const revalidate = 3600 * 12; 

export default function Home() {
  noStore();

  return (
    <main className="bg-transparent">
      <Hero />
      <LogoCloud />
      <WavyBackgroundDemo />
      <AboutMe />
      <Projects />
      <SecondQuote />
      <FeaturedBlogs />
      <TheEnd />
      <Footer />
    </main>
  );
}
