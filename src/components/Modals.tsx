import { useEffect, type ReactNode } from 'react';
import {
  ArrowRight,
  Calendar,
  Compass,
  ExternalLink,
  IndianRupee,
  MapPin,
  X,
} from 'lucide-react';
import {
  DESTINATIONS,
  EXPERIENCES,
  TRAVEL_STORIES,
  type Destination,
  type ExperienceCategory,
  type TravelStory,
} from '../data/travelData';
import { TravelImage } from './TravelImage';

interface ModalShellProps {
  onClose: () => void;
  titleId: string;
  children: ReactNode;
}

function ModalShell({ onClose, titleId, children }: ModalShellProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#153247]/80 p-4 backdrop-blur-xs sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-sm bg-[#FFFFFF] text-[#303B40] shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="fixed top-6 right-6 z-20 flex h-11 w-11 items-center justify-center rounded-sm bg-[#153247] text-[#FFFFFF] shadow-md transition-colors hover:bg-[#6B9A98] hover:text-[#153247] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9E1D5] sm:absolute sm:top-4 sm:right-4"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        {children}
      </div>
    </div>
  );
}

interface DestinationModalProps {
  destination: Destination;
  onClose: () => void;
  onEnquire: (destinationLabel: string) => void;
  onSelectExperience: (experience: ExperienceCategory) => void;
}

export function DestinationModal({
  destination,
  onClose,
  onEnquire,
  onSelectExperience,
}: DestinationModalProps) {
  const relatedExp = EXPERIENCES.find((e) => e.id === destination.relatedExperienceId);

  return (
    <ModalShell onClose={onClose} titleId="dest-modal-title">
      <div className="aspect-[16/9] w-full overflow-hidden bg-[#153247]">
        <TravelImage
          src={destination.image}
          alt={destination.imageAlt}
          sizes="(max-width: 768px) 100vw, 768px"
          fallbackTitle={destination.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-8 sm:p-10">
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium tracking-wider text-[#4C7371]">
          <span>{destination.country}</span>
          <span aria-hidden="true">·</span>
          <span>{destination.scopeLabel}</span>
        </div>

        <h3
          id="dest-modal-title"
          className="mt-2 font-serif text-3xl font-semibold text-[#153247] sm:text-4xl"
        >
          {destination.name}
        </h3>

        <div className="mt-5 flex flex-wrap gap-6 border-y border-[#E9E1D5] py-3.5 text-xs text-[#303B40]/85 sm:text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#4C7371]" aria-hidden="true" />
            <span>Best Time to Visit: {destination.bestSeason}</span>
          </div>
          <div className="flex items-center gap-2">
            <IndianRupee className="h-4 w-4 text-[#4C7371]" aria-hidden="true" />
            <span className="tabular-nums">
              Indicative Trip Range: {destination.indicativeBudget}
            </span>
          </div>
        </div>

        <p className="mt-6 text-base leading-relaxed text-[#303B40]/90">
          {destination.editorialOverview}
        </p>

        <div className="mt-8">
          <h4 className="font-serif text-lg font-semibold text-[#153247]">
            Destination Highlights
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-[#303B40]/85">
            {destination.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#6B9A98]" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Internal & Official Outbound Links */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#E9E1D5] pt-5 text-xs sm:text-sm">
          {relatedExp && (
            <button
              type="button"
              onClick={() => onSelectExperience(relatedExp)}
              className="inline-flex items-center gap-1.5 font-medium text-[#4C7371] transition-colors hover:text-[#153247]"
            >
              <span>Travel Style: {relatedExp.title}</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          )}

          <a
            href={destination.officialTourismUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-[#153247] underline decoration-[#E9E1D5] underline-offset-4 transition-colors hover:text-[#4C7371]"
          >
            <span>{destination.officialTourismLabel}</span>
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-end gap-4 border-t border-[#E9E1D5] pt-6">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] rounded-sm px-5 py-2.5 text-sm font-medium text-[#303B40]/80 transition-colors hover:text-[#153247]"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => onEnquire(`${destination.name}, ${destination.country}`)}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-[#6B9A98] px-6 py-2.5 text-sm font-medium text-[#153247] transition-colors hover:bg-[#153247] hover:text-[#FFFFFF]"
          >
            <span>Enquire About {destination.name}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </ModalShell>
  );
}

interface ExperienceModalProps {
  experience: ExperienceCategory;
  onClose: () => void;
  onEnquire: (destinationLabel: string) => void;
  onSelectDestination: (destination: Destination) => void;
}

export function ExperienceModal({
  experience,
  onClose,
  onEnquire,
  onSelectDestination,
}: ExperienceModalProps) {
  const matchedDestinations = DESTINATIONS.filter((d) =>
    experience.featuredDestinationIds.includes(d.id),
  );

  return (
    <ModalShell onClose={onClose} titleId="exp-modal-title">
      <div className="aspect-[16/9] w-full overflow-hidden bg-[#153247]">
        <TravelImage
          src={experience.image}
          alt={experience.imageAlt}
          sizes="(max-width: 768px) 100vw, 768px"
          fallbackTitle={experience.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-8 sm:p-10">
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium tracking-[0.14em] text-[#4C7371]">
          <span>{experience.subtitle}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">{experience.indicativeRange}</span>
        </div>
        <h3
          id="exp-modal-title"
          className="mt-2 font-serif text-3xl font-semibold text-[#153247]"
        >
          {experience.title}
        </h3>

        <p className="mt-5 text-base leading-relaxed text-[#303B40]/90">
          {experience.longDescription}
        </p>

        <div className="mt-8 border-t border-[#E9E1D5] pt-6">
          <h4 className="font-serif text-lg font-semibold text-[#153247]">
            Explore Destinations Matching This Travel Style
          </h4>
          <div className="mt-4 space-y-2.5">
            {matchedDestinations.map((dest) => (
              <a
                key={dest.id}
                href={`/destinations/${dest.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectDestination(dest);
                }}
                className="flex items-center justify-between border border-[#E9E1D5] bg-[#F8F6F0]/60 px-4 py-3 text-sm text-[#153247] transition-colors hover:border-[#6B9A98] hover:bg-[#F8F6F0]"
              >
                <span className="flex items-center gap-2.5 font-medium">
                  <Compass className="h-4 w-4 shrink-0 text-[#6B9A98]" aria-hidden="true" />
                  <span>
                    {dest.name}, {dest.country}
                  </span>
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-[#4C7371]">
                  <span>View guide</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-end gap-4 border-t border-[#E9E1D5] pt-6">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] rounded-sm px-5 py-2.5 text-sm font-medium text-[#303B40]/80 transition-colors hover:text-[#153247]"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => onEnquire('Open to Inspiration')}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-[#6B9A98] px-6 py-2.5 text-sm font-medium text-[#153247] transition-colors hover:bg-[#153247] hover:text-[#FFFFFF]"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </ModalShell>
  );
}

interface StoryModalProps {
  story: TravelStory;
  onClose: () => void;
  onEnquire: (destinationLabel: string) => void;
  onSelectDestination: (destination: Destination) => void;
  onSelectStory: (story: TravelStory) => void;
}

export function StoryModal({
  story,
  onClose,
  onEnquire,
  onSelectDestination,
  onSelectStory,
}: StoryModalProps) {
  const relatedDestinations = DESTINATIONS.filter((d) =>
    story.relatedDestinationIds.includes(d.id),
  );
  const relatedStories = TRAVEL_STORIES.filter((s) =>
    story.relatedStoryIds.includes(s.id),
  );

  return (
    <ModalShell onClose={onClose} titleId="story-modal-title">
      <div className="aspect-[16/9] w-full overflow-hidden bg-[#153247]">
        <TravelImage
          src={story.image}
          alt={story.imageAlt}
          sizes="(max-width: 768px) 100vw, 768px"
          fallbackTitle={story.title}
          className="h-full w-full object-cover"
        />
      </div>

      <article className="p-8 sm:p-12">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#303B40]/70">
          <span className="font-medium text-[#4C7371]">{story.category}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">{story.readTime}</span>
        </div>

        <h3
          id="story-modal-title"
          className="mt-3 font-serif text-3xl leading-tight font-semibold text-[#153247] sm:text-4xl"
        >
          {story.title}
        </h3>

        <blockquote className="my-8 border-y border-[#E9E1D5] py-6 font-serif text-xl leading-relaxed italic text-[#153247]">
          &ldquo;{story.pullQuote}&rdquo;
        </blockquote>

        <div className="space-y-5 text-base leading-[1.8] text-[#303B40]/90">
          {story.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Internal Links to Featured Destinations */}
        {relatedDestinations.length > 0 && (
          <div className="mt-10 border-t border-[#E9E1D5] pt-6">
            <h4 className="font-serif text-lg font-semibold text-[#153247]">
              Destinations Mentioned in This Story
            </h4>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {relatedDestinations.map((dest) => (
                <a
                  key={dest.id}
                  href={`/destinations/${dest.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectDestination(dest);
                  }}
                  className="inline-flex items-center gap-1.5 font-medium text-[#4C7371] transition-colors hover:text-[#153247]"
                >
                  <span>
                    {dest.name}, {dest.country}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Internal Links to Related Travel Stories */}
        {relatedStories.length > 0 && (
          <div className="mt-8 border-t border-[#E9E1D5] pt-6">
            <h4 className="font-serif text-lg font-semibold text-[#153247]">
              Continue Reading on AVIE
            </h4>
            <ul className="mt-3 space-y-2.5 text-sm">
              {relatedStories.map((rel) => (
                <li key={rel.id}>
                  <a
                    href={`/travel-stories/${rel.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectStory(rel);
                    }}
                    className="inline-flex items-center gap-1.5 font-medium text-[#153247] transition-colors hover:text-[#4C7371]"
                  >
                    <span>{rel.title}</span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#E9E1D5] pt-6">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] rounded-sm px-4 py-2.5 text-sm font-medium text-[#303B40]/80 transition-colors hover:text-[#153247]"
          >
            Back to Stories
          </button>
          <button
            type="button"
            onClick={() => onEnquire('Open to Inspiration')}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-[#153247] px-6 py-2.5 text-sm font-medium text-[#FFFFFF] transition-colors hover:bg-[#6B9A98] hover:text-[#153247]"
          >
            <span>Share Your Travel Ideas</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </article>
    </ModalShell>
  );
}
