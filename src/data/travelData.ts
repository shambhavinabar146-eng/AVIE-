export type DestinationScope = 'all' | 'india' | 'international';

export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  scope: Exclude<DestinationScope, 'all'>;
  scopeLabel: string;
  bestSeason: string;
  indicativeBudget: string;
  shortDescription: string;
  editorialOverview: string;
  highlights: string[];
  relatedExperienceId: string;
  officialTourismUrl: string;
  officialTourismLabel: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  imageAlt: string;
}

export interface ExperienceCategory {
  id: string;
  title: string;
  subtitle: string;
  indicativeRange: string;
  description: string;
  longDescription: string;
  featuredDestinationIds: string[];
  image: string;
  imageAlt: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: 'compass' | 'globe' | 'map' | 'heart';
}

export interface TravelStory {
  id: string;
  slug: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  pullQuote: string;
  content: string[];
  relatedDestinationIds: string[];
  relatedStoryIds: string[];
}

export const HERO_IMAGE = '/src/assets/images/avie-tropical-lagoon-hero.jpg';
export const ABOUT_IMAGE = '/src/assets/images/avie-shared-travel-sunset.jpg';

export const DESTINATIONS: Destination[] = [
  {
    id: 'rajasthan',
    slug: 'rajasthan',
    name: 'Rajasthan',
    country: 'India',
    scope: 'india',
    scopeLabel: 'India',
    bestSeason: 'October – March',
    indicativeBudget: '₹28,000 – ₹75,000',
    shortDescription:
      'Warm sandstone palaces, tranquil lakeside courtyards, textile ateliers, and living desert heritage.',
    editorialOverview:
      'From Udaipur’s shimmering lakeside palaces to Jaipur’s hand-block printing workshops and Jodhpur’s historic lanes, Rajasthan welcomes travellers with extraordinary architecture, vibrant artistry, and warm hospitality.',
    highlights: [
      'Golden hour views across Lake Pichola and carved sandstone courtyards',
      'Visits with master textile, block-print, and ceramic artisans',
      'Flavorful regional cuisine and folk traditions under desert skies',
    ],
    relatedExperienceId: 'cultural-journeys',
    officialTourismUrl: 'https://www.tourism.rajasthan.gov.in/',
    officialTourismLabel: 'Official Rajasthan Tourism Portal',
    seoTitle: 'Rajasthan Travel Guide & Heritage Places | AVIE India',
    seoDescription:
      'Discover sandstone palaces, lakeside cities, and desert craft heritage in Rajasthan, India. Plan your cultural journey from October to March with AVIE.',
    image: '/src/assets/images/rajasthan-cultural-tourism.jpg',
    imageAlt: 'Traditional sandstone palace balconies overlooking a calm lake at golden hour in Rajasthan, India',
  },
  {
    id: 'kerala',
    slug: 'kerala',
    name: 'Kerala',
    country: 'India',
    scope: 'india',
    scopeLabel: 'India',
    bestSeason: 'September – March',
    indicativeBudget: '₹24,000 – ₹60,000',
    shortDescription:
      'Palm-fringed emerald backwaters, misty tea plantations in Munnar, and unhurried coastal evenings.',
    editorialOverview:
      'Known affectionately as God’s Own Country, Kerala moves to a gentle, restorative rhythm. Drift past coconut groves along Alleppey’s canals, wake amid cool spice-scented hills, and experience welcoming South Indian culinary traditions.',
    highlights: [
      'Quiet backwater journeys aboard traditional wooden kettuvallam boats',
      'Morning walks through rolling misty tea estates in Munnar',
      'Historic spice markets and heritage lanes in Fort Kochi',
    ],
    relatedExperienceId: 'luxury-escapes',
    officialTourismUrl: 'https://www.keralatourism.org/',
    officialTourismLabel: 'Official Kerala Tourism Website',
    seoTitle: 'Kerala Backwaters & Hill Travel Guide | AVIE India',
    seoDescription:
      'Explore palm-lined backwaters in Alleppey, misty tea estates in Munnar, and coastal Fort Kochi in Kerala, India. Discover seasonal travel tips with AVIE.',
    image: '/src/assets/images/kerala-backwaters-india.jpg',
    imageAlt: 'Wooden houseboat gliding along palm-lined emerald backwaters in Kerala, India',
  },
  {
    id: 'goa',
    slug: 'goa',
    name: 'Goa',
    country: 'India',
    scope: 'india',
    scopeLabel: 'India',
    bestSeason: 'November – February',
    indicativeBudget: '₹18,000 – ₹50,000',
    shortDescription:
      'Sunlit golden coves, heritage Latin quarters, swaying palms, and relaxed coastal dining by the Arabian Sea.',
    editorialOverview:
      'Beyond its lively shores, Goa holds serene southern beaches, centuries-old whitewashed chapels, spice farms, and vibrant neighbourhood cafés where slow coastal mornings stretch effortlessly into golden sunsets.',
    highlights: [
      'Quiet sunset walks along palm-framed coves in South Goa',
      'Heritage architecture strolls through Fontainhas in Panaji',
      'Fresh coastal flavours and laid-back seaside mornings',
    ],
    relatedExperienceId: 'budget-exploration',
    officialTourismUrl: 'https://goa-tourism.com/',
    officialTourismLabel: 'Official Goa Tourism Website',
    seoTitle: 'Goa Beaches & Coastal Heritage Guide | AVIE India',
    seoDescription:
      'Uncover serene South Goa coves, Panaji heritage lanes, and relaxed seaside cafés in Goa, India. Find budget-friendly travel ideas from ₹18,000 on AVIE.',
    image: '/src/assets/images/goa-beach-sunset-india.jpg',
    imageAlt: 'Curved sandy beach framed by coconut palms and gentle waves at sunset in South Goa, India',
  },
  {
    id: 'kashmir',
    slug: 'kashmir',
    name: 'Kashmir',
    country: 'India',
    scope: 'india',
    scopeLabel: 'India',
    bestSeason: 'April – October & Winter Snow',
    indicativeBudget: '₹30,000 – ₹70,000',
    shortDescription:
      'Mirror-still Dal Lake mornings, alpine meadows in Gulmarg, and warm hospitality cradled by Himalayan peaks.',
    editorialOverview:
      'Kashmir feels timeless in every season—whether gliding past floating gardens on a wooden shikara at sunrise, wandering pine-scented valleys in Pahalgam, or watching snow settle quietly across high mountain ridges.',
    highlights: [
      'Sunrise shikara rides across the calm waters of Dal Lake, Srinagar',
      'Alpine meadow walks through Gulmarg and Pahalgam valleys',
      'Handwoven pashmina craft traditions and steaming kahwa hospitality',
    ],
    relatedExperienceId: 'cultural-journeys',
    officialTourismUrl: 'https://www.incredibleindia.gov.in/',
    officialTourismLabel: 'Official Incredible India Portal',
    seoTitle: 'Kashmir Dal Lake & Valley Travel Guide | AVIE India',
    seoDescription:
      'Experience sunrise shikara rides on Dal Lake, Gulmarg meadows, and Himalayan valleys in Kashmir, India. Explore seasonal highlights and budgets with AVIE.',
    image: '/src/assets/images/kashmir-dal-lake-india.jpg',
    imageAlt: 'Wooden shikara boat gliding across calm Dal Lake reflecting snowy Himalayan peaks in Kashmir',
  },
  {
    id: 'himachal-pradesh',
    slug: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    country: 'India',
    scope: 'india',
    scopeLabel: 'India',
    bestSeason: 'March – June & September – December',
    indicativeBudget: '₹16,000 – ₹45,000',
    shortDescription:
      'Deodar cedar forests, tranquil mountain hamlets, apple orchards, and sweeping Himalayan passes.',
    editorialOverview:
      'From peaceful riverside cafés in Tirthan Valley and heritage hill towns like Shimla to dramatic high-altitude roads across Spiti, Himachal Pradesh invites travellers into crisp mountain air and unhurried Himalayan life.',
    highlights: [
      'Peaceful village stays surrounded by apple orchards and cedar valleys',
      'Scenic mountain drives and sunrise viewpoints over snowy ranges',
      'Quiet riverside trails in Tirthan, Jibhi, and Kinnaur',
    ],
    relatedExperienceId: 'adventure-calling',
    officialTourismUrl: 'https://himachaltourism.gov.in/',
    officialTourismLabel: 'Official Himachal Tourism Website',
    seoTitle: 'Himachal Pradesh Mountain Travel Guide | AVIE India',
    seoDescription:
      'Explore pine cedar valleys, quiet mountain hamlets, and Himalayan trails in Himachal Pradesh, India. Plan scenic mountain escapes from ₹16,000 with AVIE.',
    image: '/src/assets/images/himachal-pradesh-mountains-india.jpg',
    imageAlt: 'Sunlit mountain village and green cedar valley beneath snowy Himalayan peaks in Himachal Pradesh',
  },
  {
    id: 'meghalaya',
    slug: 'meghalaya',
    name: 'Meghalaya',
    country: 'India',
    scope: 'india',
    scopeLabel: 'India',
    bestSeason: 'October – April',
    indicativeBudget: '₹22,000 – ₹52,000',
    shortDescription:
      'Crystal-clear emerald rivers, mist-wrapped Khasi hills, cascading waterfalls, and living root bridges.',
    editorialOverview:
      'Tucked into Northeast India, Meghalaya rewards curious explorers with untouched natural artistry—translucent waters in Dawki, cloud-draped plateaus around Sohra, and ancient living root bridges nurtured over generations.',
    highlights: [
      'Boating over crystal-clear emerald waters along the Umngot River',
      'Forest hikes to double-decker living root bridges and canyon waterfalls',
      'Warm Khasi culture and tranquil misty viewpoints across Shillong',
    ],
    relatedExperienceId: 'adventure-calling',
    officialTourismUrl: 'https://www.meghalayatourism.in/',
    officialTourismLabel: 'Official Meghalaya Tourism Portal',
    seoTitle: 'Meghalaya Rivers & Waterfalls Travel Guide | AVIE',
    seoDescription:
      'Discover translucent emerald rivers, misty hills, and living root bridges in Meghalaya, Northeast India. Browse seasonal travel inspiration on AVIE today.',
    image: '/src/assets/images/meghalaya-emerald-river-india.jpg',
    imageAlt: 'Crystal-clear emerald river and forest waterfall surrounded by misty green cliffs in Meghalaya, India',
  },
  {
    id: 'bali',
    slug: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    scope: 'international',
    scopeLabel: 'International',
    bestSeason: 'April – October',
    indicativeBudget: '₹55,000 – ₹1,20,000',
    shortDescription:
      'Emerald terraced valleys, cliffside ocean temples, and tranquil mornings infused with island warmth.',
    editorialOverview:
      'A favourite international escape for Indian travellers, Bali blends misty rice terraces in Ubud with dramatic ocean cliffs in Uluwatu and welcoming island culture rooted in craft, nature, and calm.',
    highlights: [
      'Early morning walks through the terraced valleys of Tegallalang',
      'Coastal sunset views along the dramatic cliffs of Uluwatu',
      'Island hospitality, serene jungle retreats, and local culinary traditions',
    ],
    relatedExperienceId: 'budget-exploration',
    officialTourismUrl: 'https://www.indonesia.travel/',
    officialTourismLabel: 'Official Wonderful Indonesia Portal',
    seoTitle: 'Bali Indonesia Travel Guide for Indians | AVIE',
    seoDescription:
      'Discover terraced rice fields in Ubud, ocean cliffs in Uluwatu, and island culture in Bali, Indonesia. Explore curated international guides on AVIE.',
    image: '/src/assets/images/bali-indonesia-travel.jpg',
    imageAlt: 'Morning sunbeams shining across emerald terraced rice fields and palm trees in Bali, Indonesia',
  },
  {
    id: 'switzerland',
    slug: 'switzerland',
    name: 'Switzerland',
    country: 'Europe',
    scope: 'international',
    scopeLabel: 'International',
    bestSeason: 'May – September & Winter',
    indicativeBudget: '₹1,45,000 – ₹2,60,000',
    shortDescription:
      'Glacial turquoise lakes, panoramic alpine railways, and timeless mountain villages framed by snow-capped peaks.',
    editorialOverview:
      'Switzerland pairs effortless scenic rail routes with sweeping alpine stillness. Pause beside mirror-still mountain lakes, stroll wildflower pastures, and watch golden light fade over snow-dusted peaks.',
    highlights: [
      'Scenic mountain rail journeys linking lakeside towns and high passes',
      'Gentle ridge walks overlooking glacier-fed turquoise waters',
      'Charming alpine towns from Lucerne to the Jungfrau region',
    ],
    relatedExperienceId: 'adventure-calling',
    officialTourismUrl: 'https://www.myswitzerland.com/',
    officialTourismLabel: 'Official Switzerland Tourism Website',
    seoTitle: 'Switzerland Alps & Lakes Travel Guide | AVIE India',
    seoDescription:
      'Explore snow-covered mountains, turquoise alpine lakes, and scenic train routes in Switzerland. Read seasonal highlights and tips for Indian travellers.',
    image: '/src/assets/images/swiss-alps-mountain-view.jpg',
    imageAlt: 'Snow-covered mountains reflecting in a turquoise alpine lake beside a wooden chalet in Switzerland',
  },
  {
    id: 'maldives',
    slug: 'maldives',
    name: 'Maldives',
    country: 'Indian Ocean',
    scope: 'international',
    scopeLabel: 'International',
    bestSeason: 'November – April',
    indicativeBudget: '₹85,000 – ₹2,20,000',
    shortDescription:
      'Luminous coral lagoons, calm overwater sanctuaries, and unhurried days suspended between sea and sky.',
    editorialOverview:
      'Just a short flight from India across the Indian Ocean, the Maldives offers quiet coral atolls where daily life follows gentle tides, clear lagoon swims, and peaceful evenings under starlit skies.',
    highlights: [
      'Unhurried days overlooking turquoise coral lagoons',
      'Guided reef snorkeling alongside vibrant marine life',
      'Sunset sailing across calm atoll waters',
    ],
    relatedExperienceId: 'luxury-escapes',
    officialTourismUrl: 'https://visitmaldives.com/',
    officialTourismLabel: 'Official Visit Maldives Website',
    seoTitle: 'Maldives Lagoon & Island Travel Guide | AVIE India',
    seoDescription:
      'Discover turquoise coral lagoons, peaceful overwater sanctuaries, and reef snorkeling in the Maldives. Explore travel timing and ideas from India on AVIE.',
    image: '/src/assets/images/maldives-beach-resort.jpg',
    imageAlt: 'Overwater wooden villas stretching across a turquoise lagoon at sunset in the Maldives',
  },
  {
    id: 'japan',
    slug: 'japan',
    name: 'Japan',
    country: 'East Asia',
    scope: 'international',
    scopeLabel: 'International',
    bestSeason: 'Spring & Autumn',
    indicativeBudget: '₹1,30,000 – ₹2,40,000',
    shortDescription:
      'Lantern-lit Kyoto alleyways, quiet cedar shrines, seasonal gastronomy, and enduring craftsmanship.',
    editorialOverview:
      'Japan weaves quiet tradition into lively modern cities. From evening strolls along wooden machiya streets in Kyoto to serene mountain hot springs and regional culinary discoveries, every corner rewards curiosity.',
    highlights: [
      'Evening walks through historic lantern-lit streets in Kyoto',
      'Seasonal regional dining and traditional tea house culture',
      'Peaceful temple gardens framed by spring blossoms or autumn maples',
    ],
    relatedExperienceId: 'cultural-journeys',
    officialTourismUrl: 'https://www.japan.travel/',
    officialTourismLabel: 'Official Japan National Tourism Organization',
    seoTitle: 'Japan & Kyoto Cultural Travel Guide | AVIE India',
    seoDescription:
      'Experience lantern-lit Kyoto lanes, serene shrines, and seasonal travel in Japan. Browse curated cultural insights for Indian travellers on AVIE today.',
    image: '/src/assets/images/kyoto-japan-lantern-street.jpg',
    imageAlt: 'Lantern-lit historic wooden street with autumn maples at twilight in Kyoto, Japan',
  },
  {
    id: 'paris',
    slug: 'paris',
    name: 'Paris',
    country: 'France',
    scope: 'international',
    scopeLabel: 'International',
    bestSeason: 'April – June & September – October',
    indicativeBudget: '₹1,35,000 – ₹2,35,000',
    shortDescription:
      'Golden limestone boulevards, riverside twilight strolls, independent galleries, and timeless café culture.',
    editorialOverview:
      'At a relaxed pace, Paris reveals itself in quiet details—morning light over neighbourhood bakeries, tree-lined gardens, riverside bookstalls at blue hour, and long conversations shared across café tables.',
    highlights: [
      'Riverside walks along the Seine as bridges illuminate at dusk',
      'Neighbourhood gallery and architecture strolls through Le Marais',
      'Unhurried afternoons in historic parks and local patisseries',
    ],
    relatedExperienceId: 'cultural-journeys',
    officialTourismUrl: 'https://parisjetaime.com/',
    officialTourismLabel: 'Official Paris Tourism Guide',
    seoTitle: 'Paris France Architecture & Seine Guide | AVIE India',
    seoDescription:
      'Stroll along the River Seine, historic limestone boulevards, and neighbourhood cafés in Paris, France. Explore seasonal travel highlights on AVIE.',
    image: '/src/assets/images/paris-seine-twilight-france.jpg',
    imageAlt: 'Twilight view across the River Seine and limestone rooftops toward the Eiffel Tower in Paris',
  },
];

export const EXPERIENCES: ExperienceCategory[] = [
  {
    id: 'luxury-escapes',
    title: 'Luxury Escapes',
    subtitle: 'Restorative sanctuaries',
    indicativeRange: 'Typically ₹65,000 – ₹2,20,000+',
    description:
      'Thoughtfully chosen retreats, serene backwater villas, heritage palaces, and coastal hideaways designed around calm.',
    longDescription:
      'Our Luxury Escapes focus on quiet beauty and genuine rest—lakeside heritage palaces in Udaipur, private houseboats in Kerala, or overwater lagoons in the Maldives shaped for unhurried days together.',
    featuredDestinationIds: ['rajasthan', 'kerala', 'maldives'],
    image: '/src/assets/images/luxury-ocean-resort-escape.jpg',
    imageAlt: 'Architectural cliffside infinity pool overlooking a deep blue ocean horizon at dusk',
  },
  {
    id: 'adventure-calling',
    title: 'Adventure Calling',
    subtitle: 'Open landscapes',
    indicativeRange: 'Typically ₹22,000 – ₹1,40,000',
    description:
      'Himalayan valleys, misty canyon trails, alpine lakes, and refreshing outdoor journeys into untouched nature.',
    longDescription:
      'Step outside the everyday onto crisp cedar ridgelines in Himachal Pradesh, emerald river canyons in Meghalaya, or sweeping alpine passes in Switzerland. Adventure Calling celebrates active discovery and shared horizons.',
    featuredDestinationIds: ['himachal-pradesh', 'meghalaya', 'switzerland'],
    image: '/src/assets/images/mountain-ridge-adventure-trek.jpg',
    imageAlt: 'Two hikers standing on a mountain ridge above sea of clouds at sunrise',
  },
  {
    id: 'budget-exploration',
    title: 'Budget Exploration',
    subtitle: 'Mindful & accessible',
    indicativeRange: 'Typically ₹15,000 – ₹55,000',
    description:
      'Inspiring Indian and nearby international escapes, welcoming homestays, and rich experiences crafted without overspending.',
    longDescription:
      'Meaningful travel belongs to everyone. Budget Exploration highlights scenic rail routes, charming coastal stays in Goa and Himachal, and vibrant Southeast Asian escapes like Bali that deliver rich memories with smart value.',
    featuredDestinationIds: ['goa', 'himachal-pradesh', 'bali'],
    image: '/src/assets/images/budget-coastal-alley-travel.jpg',
    imageAlt: 'Sunlit coastal cobblestone lane leading down to turquoise harbor boats and an outdoor café',
  },
  {
    id: 'cultural-journeys',
    title: 'Cultural Journeys',
    subtitle: 'Living traditions',
    indicativeRange: 'Typically ₹28,000 – ₹1,50,000',
    description:
      'Local heritage, vibrant markets, regional cuisine, and stories shared directly with artisans and communities.',
    longDescription:
      'Look beyond landmarks to discover the heart of each destination—handloom weavers in Rajasthan, houseboat kitchens in Kerala, wooden shikara traditions in Kashmir, and lantern-lit craftsmanship in Japan.',
    featuredDestinationIds: ['rajasthan', 'kashmir', 'japan'],
    image: '/src/assets/images/cultural-artisan-market-travel.jpg',
    imageAlt: 'Traditional morning market courtyard filled with woven baskets, handmade ceramics, and spices',
  },
];

export const WHY_CHOOSE_AVIE: WhyChooseItem[] = [
  {
    id: 'curated',
    title: 'Thoughtfully Curated Experiences',
    description:
      'Every destination across India and abroad is chosen for authenticity, atmosphere, and genuine sense of place rather than rushed checklists.',
    iconName: 'compass',
  },
  {
    id: 'everyone',
    title: 'Destinations for Every Traveller',
    description:
      'From ₹18,000 weekend coastal escapes in Goa to restorative island stays and international cultural circuits, there is a journey shaped for you.',
    iconName: 'globe',
  },
  {
    id: 'guidance',
    title: 'Travel Inspiration and Guidance',
    description:
      'Clear seasonal ideas, approachable destination guides, and transparent budget perspectives tailored for Indian travellers.',
    iconName: 'map',
  },
  {
    id: 'memories',
    title: 'Memories Worth Sharing',
    description:
      'We believe the best moments happen together—around shared meals, quiet Himalayan overlooks, and stories that stay with you.',
    iconName: 'heart',
  },
];

export const TRAVEL_STORIES: TravelStory[] = [
  {
    id: 'seven-beautiful-places',
    slug: 'best-places-to-visit-in-india',
    category: 'Destinations',
    readTime: '5 min read',
    title: '7 Beautiful Places You Should Visit Once in Your Life.',
    excerpt:
      'From misty Himalayan valleys in Kashmir and Meghalaya’s emerald rivers to Kyoto’s lantern-lit lanes, explore seven places that leave a lasting imprint.',
    image: '/src/assets/images/coastal-highway-scenic-travel.jpg',
    imageAlt: 'Scenic coastal road winding above deep blue ocean waters and cliffs at golden hour',
    pullQuote:
      'The finest places do not merely fill a photograph—they slow your pace until every detail feels alive.',
    content: [
      'Certain landscapes stay with you long after your suitcase is unpacked. Closer to home, watching morning mist lift over Dal Lake in Kashmir or standing beside translucent emerald rivers in Meghalaya reminds us how extraordinary India’s own geography is.',
      'Pair domestic wonders with contrasting horizons abroad: peaceful backwaters in Kerala alongside the lantern-lit streets of Kyoto, or Rajasthan’s golden sandstone forts balanced with the alpine calm of Switzerland.',
      'In Europe and Southeast Asia, Paris and Bali reward travellers who wake early and linger—strolling riverside gardens at dawn or watching sunlight filter across terraced green hillsides.',
      'Wherever your curiosity points next, give yourself permission to explore fewer stops at a gentler pace. Meaningful memories rarely come from rushing.',
    ],
    relatedDestinationIds: ['kashmir', 'meghalaya', 'kerala', 'japan'],
    relatedStoryIds: ['beyond-tourist-spots', 'first-time-travellers-guide'],
  },
  {
    id: 'beyond-tourist-spots',
    slug: 'hidden-gems-beyond-tourist-spots',
    category: 'Discovery',
    readTime: '4 min read',
    title: 'Beyond the Tourist Spots: Discover Hidden Gems.',
    excerpt:
      'Step past crowded viewpoints to uncover quiet pine valleys in Himachal, lesser-known Goan coves, and serene canyon trails.',
    image: '/src/assets/images/hidden-waterfall-canyon-gem.jpg',
    imageAlt: 'Secluded emerald waterfall lagoon inside a mossy stone canyon illuminated by morning sunbeams',
    pullQuote:
      'Discovery rarely requires travelling farther—it simply asks us to take the quieter path and stay curious.',
    content: [
      'Almost every well-known destination holds quieter corners just minutes away from busy viewpoints. Taking a morning walk along a quiet cove in South Goa or settling into a riverside homestay in Himachal Pradesh’s Tirthan Valley often becomes the true highlight of a trip.',
      'In Meghalaya, stepping off main highways leads to forest trails, bamboo bridges, and calm limestone pools lit by morning sunbeams. Abroad, wandering side streets in Kyoto or local markets in Bali brings similar warmth.',
      'The secret is leaving open space in your itinerary. When every hour is not rigidly scheduled, you have room to follow a local recommendation, savour regional food, and experience a place on its own terms.',
    ],
    relatedDestinationIds: ['himachal-pradesh', 'goa', 'meghalaya', 'bali'],
    relatedStoryIds: ['seven-beautiful-places', 'first-time-travellers-guide'],
  },
  {
    id: 'first-time-travellers-guide',
    slug: 'first-time-travellers-guide',
    category: 'Travel Guide',
    readTime: '6 min read',
    title: "A First-Time Traveller's Guide to Exploring the World.",
    excerpt:
      'Practical, reassuring guidance for Indian travellers on choosing seasonal windows, estimating ₹ budgets comfortably, and packing with confidence.',
    image: '/src/assets/images/travel-journal-planning-guide.jpg',
    imageAlt: 'Open leather travel journal, brass compass, film camera, and coastal map on cream linen',
    pullQuote:
      'Every seasoned traveller started with a single curious step and an open notebook.',
    content: [
      'Planning your first big domestic or international trip can feel both thrilling and overwhelming. Start by choosing one destination that naturally excites you—whether a ₹18,000–₹35,000 getaway to Goa or Himachal Pradesh, or an international debut in nearby Bali or the Maldives.',
      'Travel in shoulder seasons whenever possible. October to March brings pleasant skies across Rajasthan, Kerala, and Goa, while spring and autumn offer softer light and calmer streets across Japan and Europe.',
      'Plan your spending in clear categories—transport, comfortable stays, local food, and unhurried experiences—leaving a small cushion in ₹ for spontaneous discoveries. After all, we wander together.',
    ],
    relatedDestinationIds: ['goa', 'rajasthan', 'bali', 'maldives'],
    relatedStoryIds: ['seven-beautiful-places', 'beyond-tourist-spots'],
  },
];
