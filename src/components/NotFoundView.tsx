import { ArrowLeft, Compass } from 'lucide-react';

interface NotFoundViewProps {
  onNavigatePath: (path: string) => void;
}

export function NotFoundView({ onNavigatePath }: NotFoundViewProps) {
  return (
    <main className="flex min-h-[75vh] items-center bg-[#F8F6F0] px-6 pt-32 pb-24 lg:px-12">
      <div className="mx-auto max-w-2xl border border-[#E9E1D5] bg-[#FFFFFF] p-10 text-center sm:p-14">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-[#E9E1D5]/65 text-[#153247]">
          <Compass className="h-6 w-6" aria-hidden="true" />
        </div>

        <p className="text-xs font-medium tracking-[0.2em] text-[#4C7371]">404 · Page Not Found</p>

        <h1 className="mt-3 font-serif text-3xl font-semibold text-[#153247] sm:text-4xl">
          This Path Leads Off the Map.
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-[#303B40]/85 sm:text-base">
          The page you are looking for could not be found. Return to the AVIE homepage or explore
          our Indian and international travel guides below.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigatePath('/');
            }}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-[#6B9A98] px-6 py-2.5 text-sm font-medium text-[#153247] transition-colors hover:bg-[#153247] hover:text-[#FFFFFF]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to AVIE Home</span>
          </a>

          <a
            href="/destinations"
            onClick={(e) => {
              e.preventDefault();
              onNavigatePath('/destinations');
            }}
            className="inline-flex min-h-[44px] items-center rounded-sm border border-[#E9E1D5] px-6 py-2.5 text-sm font-medium text-[#153247] transition-colors hover:border-[#6B9A98]"
          >
            <span>Explore Destinations</span>
          </a>
        </div>
      </div>
    </main>
  );
}
