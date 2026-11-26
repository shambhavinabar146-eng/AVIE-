import { ArrowRight } from 'lucide-react';
import { TRAVEL_STORIES, type TravelStory } from '../data/travelData';
import { TravelImage } from './TravelImage';

interface StoriesSectionProps {
  onSelectStory: (story: TravelStory) => void;
}

export function StoriesSection({ onSelectStory }: StoriesSectionProps) {
  return (
    <section
      id="stories"
      aria-labelledby="stories-heading"
      className="bg-[#FFFFFF] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-[#E9E1D5] pb-10 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[#4C7371]">
              Travel Stories
            </p>
            <h2
              id="stories-heading"
              className="font-serif text-[clamp(2rem,3.3vw,3rem)] leading-[1.15] font-semibold text-[#153247]"
            >
              Stories That Take You Places.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#303B40]/80 sm:text-base">
            Thoughtful reflections, destination notes, and practical planning guides written for
            Indian travellers exploring India and the world.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {TRAVEL_STORIES.map((story) => (
            <article
              key={story.id}
              className="group flex h-full flex-col border border-[#E9E1D5] bg-[#F8F6F0]/45 transition-colors duration-300 hover:border-[#6B9A98]"
            >
              <a
                href={`/travel-stories/${story.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectStory(story);
                }}
                aria-label={`Read article: ${story.title}`}
                className="relative block aspect-[4/3] w-full overflow-hidden bg-[#E9E1D5]"
              >
                <TravelImage
                  src={story.image}
                  alt={story.imageAlt}
                  fallbackTitle={story.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </a>

              <div className="flex flex-1 flex-col justify-between p-7">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#303B40]/70">
                    <span className="font-medium text-[#4C7371]">{story.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{story.readTime}</span>
                  </div>

                  <h3 className="mt-3 font-serif text-2xl leading-snug font-semibold text-[#153247]">
                    {story.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#303B40]/85">{story.excerpt}</p>
                </div>

                <div className="mt-6 border-t border-[#E9E1D5] pt-5">
                  <a
                    href={`/travel-stories/${story.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectStory(story);
                    }}
                    className="group/btn inline-flex min-h-[42px] shrink-0 whitespace-nowrap items-center gap-2 rounded-sm bg-[#6B9A98] px-5 py-2.5 text-sm font-medium text-[#153247] transition-colors duration-200 hover:bg-[#153247] hover:text-[#FFFFFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153247]"
                  >
                    <span>Read More</span>
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
