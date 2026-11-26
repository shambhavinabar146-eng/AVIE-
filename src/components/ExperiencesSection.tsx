import { ArrowRight } from 'lucide-react';
import { EXPERIENCES, type ExperienceCategory } from '../data/travelData';
import { TravelImage } from './TravelImage';

interface ExperiencesSectionProps {
  onSelectExperience: (experience: ExperienceCategory) => void;
}

export function ExperiencesSection({ onSelectExperience }: ExperiencesSectionProps) {
  return (
    <section
      id="experiences"
      aria-labelledby="experiences-heading"
      className="bg-[#153247] py-24 text-[#FFFFFF] lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-6 border-b border-[#FFFFFF]/15 pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[#E9E1D5]">
              Travel Experiences
            </p>
            <h2
              id="experiences-heading"
              className="font-serif text-[clamp(2rem,3.3vw,3rem)] leading-[1.15] font-semibold text-[#FFFFFF]"
            >
              Travel Your Way.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm leading-relaxed text-[#E9E1D5]/90 sm:text-base">
              Whether you prefer luxury sanctuaries, outdoor mountain adventure, smart budget
              exploration, or deep cultural immersion, AVIE matches every travel mood to thoughtful
              destinations across India and abroad.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {EXPERIENCES.map((experience) => (
            <article
              key={experience.id}
              className="group flex h-full flex-col overflow-hidden border border-[#FFFFFF]/15 bg-[#1C3E57] transition-colors duration-300 hover:border-[#6B9A98]"
            >
              <div
                onClick={() => onSelectExperience(experience)}
                className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden bg-[#153247]"
              >
                <TravelImage
                  src={experience.image}
                  alt={experience.imageAlt}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  fallbackTitle={experience.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-8">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-[0.14em] text-[#E9E1D5]/85">
                    <span>{experience.subtitle}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{experience.indicativeRange}</span>
                  </div>

                  <h3 className="mt-2 font-serif text-2xl font-semibold text-[#FFFFFF] sm:text-3xl">
                    {experience.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#F8F6F0]/85 sm:text-base">
                    {experience.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-[#FFFFFF]/12 pt-5">
                  <button
                    type="button"
                    onClick={() => onSelectExperience(experience)}
                    className="group/btn inline-flex min-h-[42px] shrink-0 whitespace-nowrap items-center gap-2 rounded-sm bg-[#6B9A98] px-5 py-2.5 text-sm font-medium text-[#153247] transition-colors duration-200 hover:bg-[#E9E1D5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9E1D5]"
                  >
                    <span>Explore More</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
