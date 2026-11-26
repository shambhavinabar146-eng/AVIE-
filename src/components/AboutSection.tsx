import { ArrowRight } from 'lucide-react';
import { ABOUT_IMAGE } from '../data/travelData';
import { TravelImage } from './TravelImage';

interface AboutSectionProps {
  onNavigatePath: (path: string) => void;
}

export function AboutSection({ onNavigatePath }: AboutSectionProps) {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-[#F8F6F0] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-sm border border-[#E9E1D5] bg-[#E9E1D5]/40">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <TravelImage
                  src={ABOUT_IMAGE}
                  alt="Two travellers standing on a sunlit stone terrace overlooking a calm coastal sea at sunset"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  fallbackTitle="Travel Is Better When Shared"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-6">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-[#4C7371]">
              About AVIE · India
            </p>

            <h2
              id="about-heading"
              className="font-serif text-[clamp(2rem,3.3vw,3rem)] leading-[1.15] font-semibold text-[#153247]"
            >
              Travel Is Better When Shared.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-[1.8] text-[#303B40]/90">
              <p>
                Born in India with an international outlook, AVIE is a travel and tourism brand
                built for explorers who value depth over haste. Travelling is about stepping into
                new rhythms, experiencing living cultures firsthand, and creating meaningful
                memories together.
              </p>
              <p>
                From mist-wrapped Himalayan valleys, coastal coves, and heritage palaces across
                India to tranquil island lagoons and cultural capitals abroad, we share authentic
                inspiration and clear guidance to help Indian travellers plan with confidence.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-[#E9E1D5] pt-6">
              <a
                href="/destinations"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigatePath('/destinations');
                }}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#153247] transition-colors hover:text-[#4C7371]"
              >
                <span>Browse India &amp; Global Destinations</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigatePath('/contact');
                }}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#4C7371] transition-colors hover:text-[#153247]"
              >
                <span>Connect With Our Team</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
