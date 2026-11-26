import { ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../seo/seoConfig';

interface FaqSectionProps {
  onNavigatePath: (path: string) => void;
}

export function FaqSection({ onNavigatePath }: FaqSectionProps) {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-[#F8F6F0] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="max-w-2xl border-b border-[#E9E1D5] pb-10">
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[#4C7371]">
            Travel Answers
          </p>
          <h2
            id="faq-heading"
            className="font-serif text-[clamp(2rem,3.3vw,3rem)] leading-[1.15] font-semibold text-[#153247]"
          >
            Frequently Asked Questions About AVIE &amp; Travel.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#303B40]/85 sm:text-base">
            Direct answers for Indian travellers exploring domestic escapes, international journeys,
            and how AVIE helps inspire your next trip.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.id}
              className="flex h-full flex-col justify-between border border-[#E9E1D5] bg-[#FFFFFF] p-8"
            >
              <div>
                <h3 className="font-serif text-xl leading-snug font-semibold text-[#153247]">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-[1.75] text-[#303B40]/90">
                  {item.answer}
                </p>
              </div>

              {item.relatedPath && item.relatedLabel && (
                <div className="mt-6 border-t border-[#E9E1D5] pt-4">
                  <a
                    href={item.relatedPath}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigatePath(item.relatedPath!);
                    }}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#4C7371] transition-colors hover:text-[#153247]"
                  >
                    <span>{item.relatedLabel}</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
