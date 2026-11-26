import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigatePath: (path: string) => void;
}

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/destinations', label: 'Destinations' },
  { path: '/experiences', label: 'Experiences' },
  { path: '/travel-stories', label: 'Stories' },
  { path: '/contact', label: 'Contact' },
];

export function Navbar({ onNavigatePath }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string) => {
    setMobileOpen(false);
    onNavigatePath(path);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-40 transition-colors duration-300 ${
        isScrolled || mobileOpen
          ? 'bg-[#153247]/95 shadow-sm backdrop-blur-md'
          : 'bg-[#153247]/35 backdrop-blur-[2px]'
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-4 lg:gap-8 lg:px-12">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('/');
          }}
          className="shrink-0 whitespace-nowrap font-serif text-2xl font-semibold tracking-[0.14em] text-[#FFFFFF] transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E9E1D5]"
        >
          AVIE
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex lg:gap-8">
          {NAV_LINKS.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.path);
              }}
              className="group relative shrink-0 whitespace-nowrap py-1 text-sm font-normal tracking-wide text-[#F8F6F0]/90 transition-colors duration-200 hover:text-[#FFFFFF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E9E1D5]"
            >
              {item.label}
              <span
                aria-hidden="true"
                className="absolute right-0 bottom-0 left-0 h-px origin-left scale-x-0 bg-[#6B9A98] transition-transform duration-200 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/contact');
            }}
            className="hidden shrink-0 whitespace-nowrap rounded-sm bg-[#6B9A98] px-5 py-2.5 text-sm font-medium text-[#153247] transition-colors duration-200 hover:bg-[#E9E1D5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9E1D5] lg:inline-flex"
          >
            Explore With Us
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-[#FFFFFF] transition-colors hover:bg-[#FFFFFF]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9E1D5] lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#FFFFFF]/10 bg-[#153247] px-6 pt-3 pb-7 lg:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {NAV_LINKS.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.path);
                }}
                className="flex min-h-[44px] items-center border-b border-[#FFFFFF]/10 py-3 text-base font-normal text-[#F8F6F0] transition-colors hover:text-[#6B9A98]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/contact');
              }}
              className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center rounded-sm bg-[#6B9A98] px-6 py-3 text-sm font-medium text-[#153247] transition-colors hover:bg-[#E9E1D5]"
            >
              Explore With Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
