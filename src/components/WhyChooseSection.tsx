import { Compass, Globe, Heart, Map } from 'lucide-react';
import { WHY_CHOOSE_AVIE, type WhyChooseItem } from '../data/travelData';

function PillarIcon({ name }: { name: WhyChooseItem['iconName'] }) {
  const iconClass = 'h-6 w-6 text-[#153247]';
  switch (name) {
    case 'compass':
      return <Compass className={iconClass} aria-hidden="true" />;
    case 'globe':
      return <Globe className={iconClass} aria-hidden="true" />;
    case 'map':
      return <Map className={iconClass} aria-hidden="true" />;
    case 'heart':
      return <Heart className={iconClass} aria-hidden="true" />;
  }
}

export function WhyChooseSection() {
  return (
    <section
      id="why-avie"
      aria-labelledby="why-avie-heading"
      className="bg-[#F8F6F0] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[#4C7371]">
              Why Choose AVIE
            </p>
            <h2
              id="why-avie-heading"
              className="font-serif text-[clamp(2rem,3.2vw,2.9rem)] leading-[1.15] font-semibold text-[#153247]"
            >
              Every Journey Deserves Something Special.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#303B40]/85">
              We focus on authentic places, thoughtful pacing, and clear seasonal guidance so every
              journey feels calm, purposeful, and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
            {WHY_CHOOSE_AVIE.map((item) => (
              <div
                key={item.id}
                className="flex h-full flex-col justify-between border border-[#E9E1D5] bg-[#FFFFFF] p-8 transition-colors duration-200 hover:border-[#6B9A98]"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#E9E1D5]/65">
                    <PillarIcon name={item.iconName} />
                  </div>

                  <h3 className="mt-7 font-serif text-xl font-semibold text-[#153247]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#303B40]/85">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
