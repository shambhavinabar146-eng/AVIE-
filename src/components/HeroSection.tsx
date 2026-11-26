import { ArrowRight } from 'lucide-react';
import { HERO_IMAGE } from '../data/travelData';
import { TravelImage } from './TravelImage';

interface HeroSectionProps {
  onNavigatePath: (path: string) => void;
}

export function HeroSection({ onNavigatePath }: HeroSectionProps) {
  return (
    <section
      id="home"
      aria-label="AVIE Travel Introduction"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#153247]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-hero-zoom h-full w-full">
          <TravelImage
            src={HERO_IMAGE}
            alt="Aerial view of a turquoise coastal lagoon and green cliffs at golden hour"
            loading="eager"
            sizes="100vw"
            fallbackTitle="AVIE — We Wander Together"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-[#153247]/55" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pt-28 pb-20 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-medium tracking-[0.2em] text-[#E9E1D5]">
            We Wander Together.
          </p>

          <h1 className="font-serif text-[clamp(2.35rem,4.8vw,4.25rem)] leading-[1.1] font-semibold tracking-tight text-[#FFFFFF]">
            Discover More. Experience More. Wander Together.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed font-light text-[#F8F6F0]/95 sm:text-lg">
            From breathtaking landscapes to unforgettable cultural experiences, discover destinations
            that bring people closer and create stories worth sharing.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/destinations"
              onClick={(e) => {
                e.preventDefault();
                onNavigatePath('/destinations');
              }}
              className="group inline-flex min-h-[48px] shrink-0 whitespace-nowrap items-center gap-2.5 rounded-sm bg-[#6B9A98] px-7 py-3.5 text-sm font-medium tracking-wide text-[#153247] transition-colors duration-200 hover:bg-[#E9E1D5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9E1D5]"
            >
              <span>Explore Destinations</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                onNavigatePath('/about');
              }}
              className="inline-flex min-h-[48px] shrink-0 whitespace-nowrap items-center rounded-sm border border-[#F8F6F0]/75 bg-[#153247]/35 px-7 py-3.5 text-sm font-medium tracking-wide text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FFFFFF] hover:text-[#153247] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9E1D5]"
            >
              Discover Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
