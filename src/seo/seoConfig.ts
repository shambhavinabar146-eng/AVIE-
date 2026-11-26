export interface PageSeoMeta {
  path: string;
  title: string;
  description: string;
  breadcrumbName: string;
  sectionId?: string;
}

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
  relatedPath?: string;
  relatedLabel?: string;
}

export const SITE_ROUTES: Record<string, PageSeoMeta> = {
  '/': {
    path: '/',
    title: 'AVIE India | Domestic & International Travel Inspiration',
    description:
      'Explore India and global destinations with AVIE. Discover curated travel guides, cultural experiences, and budget to luxury ideas. Start your journey today.',
    breadcrumbName: 'Home',
    sectionId: 'home',
  },
  '/about': {
    path: '/about',
    title: 'About AVIE Travel | India-Based Travel Brand & Story',
    description:
      'Meet AVIE, an India-based travel brand celebrating culture, shared exploration, and meaningful journeys across India and abroad. Connect with our team today.',
    breadcrumbName: 'About AVIE',
    sectionId: 'about',
  },
  '/destinations': {
    path: '/destinations',
    title: 'India & International Travel Destinations | Explore AVIE',
    description:
      'Browse scenic travel destinations across India and abroad, from Rajasthan, Kerala, and Kashmir to Bali, Japan, and Switzerland. Find your next trip today.',
    breadcrumbName: 'Destinations',
    sectionId: 'destinations',
  },
  '/experiences': {
    path: '/experiences',
    title: 'Curated Travel Experiences | Luxury, Adventure & Culture',
    description:
      'Choose your travel style with AVIE: luxury escapes, Himalayan adventures, mindful budget trips, and cultural journeys for Indian travellers. Explore more now.',
    breadcrumbName: 'Experiences',
    sectionId: 'experiences',
  },
  '/travel-stories': {
    path: '/travel-stories',
    title: 'Travel Stories & Guides for Indian Travellers | AVIE',
    description:
      'Read original travel stories, hidden gem guides, and practical trip-planning advice for first-time and seasoned Indian travellers. Get inspired with AVIE now.',
    breadcrumbName: 'Travel Stories',
    sectionId: 'stories',
  },
  '/contact': {
    path: '/contact',
    title: 'Contact AVIE Travel | Plan Your Next Journey From India',
    description:
      'Have a destination in mind across India or abroad? Share your travel ideas with AVIE using our simple enquiry form during IST hours. Reach out to us today.',
    breadcrumbName: 'Contact Us',
    sectionId: 'contact',
  },
  '/faq': {
    path: '/faq',
    title: 'Travel FAQs for Indian Travellers | AVIE Travel Guide',
    description:
      'Find clear answers about AVIE, the best places to visit in India and abroad, how to choose your next destination, and how to connect with us in India.',
    breadcrumbName: 'Frequently Asked Questions',
    sectionId: 'faq',
  },
};

export const STORY_ROUTE_META: Record<string, PageSeoMeta> = {
  '/travel-stories/best-places-to-visit-in-india': {
    path: '/travel-stories/best-places-to-visit-in-india',
    title: '7 Beautiful Places to Visit Once in Your Life | AVIE',
    description:
      'Discover seven breathtaking places across India and the world, from Kashmir and Meghalaya to Kyoto and Switzerland. Read the full travel guide on AVIE now.',
    breadcrumbName: '7 Beautiful Places to Visit Once in Your Life',
    sectionId: 'stories',
  },
  '/travel-stories/hidden-gems-beyond-tourist-spots': {
    path: '/travel-stories/hidden-gems-beyond-tourist-spots',
    title: 'Hidden Gems Beyond Popular Tourist Spots | AVIE Guide',
    description:
      'Go beyond crowded landmarks to explore quiet valleys in Himachal, serene South Goa coves, and hidden canyon trails in Meghalaya. Read the guide on AVIE.',
    breadcrumbName: 'Beyond the Tourist Spots: Discover Hidden Gems',
    sectionId: 'stories',
  },
  '/travel-stories/first-time-travellers-guide': {
    path: '/travel-stories/first-time-travellers-guide',
    title: 'First-Time Traveller Guide for Indian Explorers | AVIE',
    description:
      'Learn how to choose seasons, estimate trip budgets in INR, and pack smartly for your first domestic or international journey. Read the full guide on AVIE.',
    breadcrumbName: "A First-Time Traveller's Guide to Exploring the World",
    sectionId: 'stories',
  },
};

export const FAQ_ITEMS: FaqEntry[] = [
  {
    id: 'what-is-avie',
    question: 'What is AVIE?',
    answer:
      'AVIE is an India-based travel and tourism brand built around the ethos "We Wander Together." It helps Indian travellers discover domestic and international destinations, explore travel styles from budget trips to luxury retreats, and gather practical travel inspiration without complex booking barriers.',
    relatedPath: '/about',
    relatedLabel: 'Read the AVIE story',
  },
  {
    id: 'destinations-offered',
    question: 'What travel destinations does AVIE offer?',
    answer:
      'AVIE highlights curated destinations across India and abroad. Domestic destinations include Rajasthan, Kerala, Goa, Kashmir, Himachal Pradesh, and Meghalaya, while international options feature Bali, Switzerland, the Maldives, Japan, and Paris.',
    relatedPath: '/destinations',
    relatedLabel: 'Browse all destinations',
  },
  {
    id: 'best-places-india',
    question: 'What are the best places to visit in India?',
    answer:
      'The best places to visit in India depend on the season and your travel interests: Rajasthan for palace heritage (October–March), Kerala for backwaters and misty tea hills (September–March), Goa for coastal relaxation (November–February), Kashmir and Himachal Pradesh for Himalayan valleys, and Meghalaya for emerald rivers and waterfalls (October–April).',
    relatedPath: '/destinations/rajasthan',
    relatedLabel: 'Explore Indian destinations',
  },
  {
    id: 'popular-international',
    question: 'What are some popular international travel destinations?',
    answer:
      'Popular international destinations for Indian travellers include Bali for lush terraces and island culture, the Maldives for serene coral lagoons close to India, Switzerland for scenic alpine lakes and railways, Japan for seasonal blossoms and historic Kyoto streets, and Paris for art, architecture, and riverside cafés.',
    relatedPath: '/destinations/bali',
    relatedLabel: 'Explore international destinations',
  },
  {
    id: 'how-to-contact',
    question: 'How can travellers contact AVIE?',
    answer:
      'Travellers can reach AVIE through the simple enquiry form in the Contact section by sharing their name, email address, destination of interest, and travel ideas. AVIE operates from India with consultation hours aligned to Indian Standard Time (IST), Monday to Saturday from 10:00 AM to 7:00 PM IST.',
    relatedPath: '/contact',
    relatedLabel: 'Open the enquiry form',
  },
  {
    id: 'choose-destination',
    question: 'How can I choose the right travel destination?',
    answer:
      'Start with three factors: your travel season, your preferred travel pace, and an indicative budget in Indian Rupees (₹). Choose nearby coastal or hill regions like Goa or Himachal Pradesh for ₹16,000–₹45,000 short breaks, or longer cultural and scenic escapes like Rajasthan, Bali, or Japan when planning a fuller itinerary.',
    relatedPath: '/travel-stories/first-time-travellers-guide',
    relatedLabel: "Read our first-time traveller's guide",
  },
];

function upsertMetaTag(attrName: 'name' | 'property', attrValue: string, content: string) {
  let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonicalLink(url: string) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

export function buildStructuredDataGraph(params: {
  origin: string;
  currentPath: string;
  breadcrumbs: { name: string; path: string }[];
  article?: {
    headline: string;
    description: string;
    image: string;
    url: string;
  };
}) {
  const { origin, breadcrumbs, article } = params;

  const organizationSchema = {
    '@type': 'TravelAgency',
    '@id': `${origin}/#organization`,
    name: 'AVIE',
    alternateName: 'AVIE Travel',
    slogan: 'We Wander Together.',
    description:
      'AVIE is an India-based travel and tourism brand inspiring Indian travellers across domestic and international destinations.',
    url: origin,
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    knowsAbout: [
      'Domestic travel in India',
      'International travel from India',
      'Cultural tourism',
      'Adventure travel',
      'Budget exploration',
      'Luxury escapes',
    ],
  };

  const faqSchema = {
    '@type': 'FAQPage',
    '@id': `${origin}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${origin}${crumb.path === '/' ? '/' : crumb.path}`,
    })),
  };

  const graph: Record<string, unknown>[] = [organizationSchema, faqSchema, breadcrumbSchema];

  if (article) {
    graph.push({
      '@type': 'Article',
      headline: article.headline,
      description: article.description,
      image: `${origin}${article.image}`,
      mainEntityOfPage: article.url,
      author: {
        '@type': 'Organization',
        name: 'AVIE',
      },
      publisher: {
        '@id': `${origin}/#organization`,
      },
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export function applyPageSeo(params: {
  meta: PageSeoMeta;
  breadcrumbs?: { name: string; path: string }[];
  article?: {
    headline: string;
    description: string;
    image: string;
  };
}) {
  const origin = window.location.origin;
  const canonicalUrl = `${origin}${params.meta.path === '/' ? '/' : params.meta.path}`;

  document.title = params.meta.title;
  upsertMetaTag('name', 'description', params.meta.description);
  upsertMetaTag('property', 'og:title', params.meta.title);
  upsertMetaTag('property', 'og:description', params.meta.description);
  upsertMetaTag('property', 'og:url', canonicalUrl);
  upsertMetaTag('name', 'twitter:title', params.meta.title);
  upsertMetaTag('name', 'twitter:description', params.meta.description);
  upsertCanonicalLink(canonicalUrl);

  const breadcrumbs = params.breadcrumbs ?? [
    { name: 'Home', path: '/' },
    ...(params.meta.path !== '/' ? [{ name: params.meta.breadcrumbName, path: params.meta.path }] : []),
  ];

  const jsonLd = buildStructuredDataGraph({
    origin,
    currentPath: params.meta.path,
    breadcrumbs,
    article: params.article ? { ...params.article, url: canonicalUrl } : undefined,
  });

  let script = document.getElementById('avie-structured-data') as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = 'avie-structured-data';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(jsonLd);
}
