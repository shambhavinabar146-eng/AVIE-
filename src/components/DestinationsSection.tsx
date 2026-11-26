import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  DESTINATIONS,
  type Destination,
  type DestinationScope,
} from '../data/travelData';
import { TravelImage } from './TravelImage';

interface DestinationsSectionProps {
  onSelectDestination: (destination: Destination) => void;
}

const FILTERS: { id: DestinationScope; label: string }[] = [
  { id: 'all', label: 'All Destinations' },
  { id: 'india', label: 'India' },
  { id: 'international', label: 'International' },
];

export function DestinationsSection({ onSelectDestination }: DestinationsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<DestinationScope>('all');

  const visibleDestinations =
    activeFilter === 'all'
      ? DESTINATIONS
      : DESTINATIONS.filter((dest) => dest.scope === activeFilter);

  return (
    <section
      id="destinations"
      aria-labelledby="destinations-heading"
      className="bg-[#FFFFFF] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-8 border-b border-[#E9E1D5] pb-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[#4C7371]">
              Explore Destinations
            </p>
            <h2
              id="destinations-heading"
              className="font-serif text-[clamp(2rem,3.3vw,3rem)] leading-[1.15] font-semibold text-[#153247]"
            >
              Find Your Next Somewhere.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#303B40]/85 sm:text-base">
              Every destination has a story. Discover places across India—such as Rajasthan, Kerala,
              Goa, Kashmir, Himachal Pradesh, and Meghalaya—alongside international favourites
              including Bali, Switzerland, the Maldives, Japan, and Paris.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter destinations by India or International"
            className="flex flex-wrap items-center gap-1.5 rounded-sm bg-[#F8F6F0] p-1.5"
          >
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`min-h-[40px] shrink-0 whitespace-nowrap rounded-sm px-4 py-2 text-xs font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153247] sm:text-sm ${
                    isActive
                      ? 'bg-[#153247] text-[#FFFFFF]'
                      : 'text-[#303B40]/80 hover:bg-[#E9E1D5]/60 hover:text-[#153247]'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {visibleDestinations.map((destination) => (
            <article
              key={destination.id}
              className="group flex h-full flex-col border border-[#E9E1D5] bg-[#F8F6F0]/45 transition-colors duration-300 hover:border-[#6B9A98]"
            >
              <a
                href={`/destinations/${destination.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectDestination(destination);
                }}
                aria-label={`Explore ${destination.name}, ${destination.country}`}
                className="relative block aspect-[4/3] w-full overflow-hidden bg-[#E9E1D5]"
              >
                <TravelImage
                  src={destination.image}
                  alt={destination.imageAlt}
                  fallbackTitle={`${destination.name}, ${destination.country}`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </a>

              <div className="flex flex-1 flex-col justify-between p-7">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-[#4C7371]">
                    <span>{destination.country}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums text-[#303B40]/70">
                      {destination.indicativeBudget}
                    </span>
                  </div>

                  <h3 className="mt-2 font-serif text-2xl font-semibold text-[#153247]">
                    {destination.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#303B40]/85">
                    {destination.shortDescription}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#E9E1D5] pt-5">
                  <a
                    href={`/destinations/${destination.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectDestination(destination);
                    }}
                    className="group/btn inline-flex min-h-[42px] shrink-0 whitespace-nowrap items-center gap-2 rounded-sm bg-[#6B9A98] px-5 py-2.5 text-sm font-medium text-[#153247] transition-colors duration-200 hover:bg-[#153247] hover:text-[#FFFFFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153247]"
                  >
                    <span>Explore Destination</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
