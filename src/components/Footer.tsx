import { Clock, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { DESTINATIONS, type Destination } from '../data/travelData';

interface FooterProps {
  onNavigatePath: (path: string) => void;
  onSelectDestination: (destination: Destination) => void;
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9.8 18.5 11.4 12" />
      <path d="M10.8 14.3c.6.8 1.6 1.2 2.6 1 2-.4 3.1-2.5 2.7-4.5-.4-2-2.3-3.3-4.5-3.1-2.2.2-3.9 2-3.7 4.2.1.8.4 1.5.9 2" />
    </svg>
  );
}

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/destinations', label: 'Destinations' },
  { path: '/experiences', label: 'Experiences' },
  { path: '/travel-stories', label: 'Stories' },
  { path: '/faq', label: 'Travel FAQs' },
  { path: '/contact', label: 'Contact' },
];

export function Footer({ onNavigatePath, onSelectDestination }: FooterProps) {
  const footerDestinations = DESTINATIONS.slice(0, 8);

  return (
    <footer className="bg-[#153247] text-[#FFFFFF]">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigatePath('/');
              }}
              className="inline-block font-serif text-3xl font-semibold tracking-[0.14em] text-[#FFFFFF]"
            >
              AVIE
            </a>
            <p className="mt-2 text-xs font-medium tracking-[0.18em] text-[#E9E1D5]">
              We Wander Together.
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#F8F6F0]/80">
              An India-based travel and tourism brand inspiring travellers to explore remarkable
              Indian landscapes and unforgettable international destinations together.
            </p>

            <div className="mt-7 flex items-center gap-3" aria-label="Social media placeholders">
              <button
                type="button"
                onClick={() => onNavigatePath('/contact')}
                title="Instagram placeholder"
                aria-label="Instagram social placeholder"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#FFFFFF]/20 text-[#E9E1D5] transition-colors duration-200 hover:border-[#6B9A98] hover:bg-[#6B9A98] hover:text-[#153247] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9E1D5]"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigatePath('/contact')}
                title="Pinterest placeholder"
                aria-label="Pinterest social placeholder"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#FFFFFF]/20 text-[#E9E1D5] transition-colors duration-200 hover:border-[#6B9A98] hover:bg-[#6B9A98] hover:text-[#153247] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9E1D5]"
              >
                <PinterestIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigatePath('/contact')}
                title="YouTube placeholder"
                aria-label="YouTube social placeholder"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#FFFFFF]/20 text-[#E9E1D5] transition-colors duration-200 hover:border-[#6B9A98] hover:bg-[#6B9A98] hover:text-[#153247] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9E1D5]"
              >
                <Youtube className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-serif text-lg font-medium text-[#FFFFFF]">Navigation</h3>
            <ul className="mt-5 space-y-2.5 text-sm text-[#F8F6F0]/80">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigatePath(link.path);
                    }}
                    className="inline-block transition-colors duration-200 hover:text-[#E9E1D5]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg font-medium text-[#FFFFFF]">Destinations</h3>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 text-sm text-[#F8F6F0]/80 sm:grid-cols-2 lg:grid-cols-1">
              {footerDestinations.map((dest) => (
                <li key={dest.id}>
                  <a
                    href={`/destinations/${dest.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectDestination(dest);
                    }}
                    className="inline-block transition-colors duration-200 hover:text-[#E9E1D5]"
                  >
                    {dest.name}, {dest.country}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg font-medium text-[#FFFFFF]">Contact Info</h3>
            <ul className="mt-5 space-y-4 text-sm text-[#F8F6F0]/80">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#6B9A98]" aria-hidden="true" />
                <span>Email placeholder (India)</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#6B9A98]" aria-hidden="true" />
                <span className="tabular-nums">+91 XXXXX XXXXX (Placeholder)</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#6B9A98]" aria-hidden="true" />
                <span>City, State, India (Address Placeholder)</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#6B9A98]" aria-hidden="true" />
                <span className="tabular-nums">Mon – Sat · 10:00 AM – 7:00 PM IST</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[#FFFFFF]/12 pt-8 text-xs text-[#E9E1D5]/75 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} AVIE · India. Demonstration Travel Brand Website.</p>
          <p>We Wander Together.</p>
        </div>
      </div>
    </footer>
  );
}
