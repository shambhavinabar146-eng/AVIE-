/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { DestinationsSection } from './components/DestinationsSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import {
  DestinationModal,
  ExperienceModal,
  StoryModal,
} from './components/Modals';
import { Navbar } from './components/Navbar';
import { NotFoundView } from './components/NotFoundView';
import { StoriesSection } from './components/StoriesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import {
  DESTINATIONS,
  TRAVEL_STORIES,
  type Destination,
  type ExperienceCategory,
  type TravelStory,
} from './data/travelData';
import {
  SITE_ROUTES,
  STORY_ROUTE_META,
  applyPageSeo,
} from './seo/seoConfig';

function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() =>
    normalizePath(window.location.pathname),
  );
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceCategory | null>(null);
  const [selectedStory, setSelectedStory] = useState<TravelStory | null>(null);
  const [enquiryDestination, setEnquiryDestination] = useState<string>('');
  const [isNotFound, setIsNotFound] = useState<boolean>(false);

  const syncStateToPath = useCallback((rawPath: string, shouldScroll: boolean) => {
    const path = normalizePath(rawPath);
    setCurrentPath(path);

    // 1. Check standard section routes
    const routeMeta = SITE_ROUTES[path];
    if (routeMeta) {
      setIsNotFound(false);
      setSelectedDestination(null);
      setSelectedExperience(null);
      setSelectedStory(null);
      applyPageSeo({ meta: routeMeta });

      if (shouldScroll && routeMeta.sectionId) {
        requestAnimationFrame(() => {
          const el = document.getElementById(routeMeta.sectionId!);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      }
      return;
    }

    // 2. Check destination detail URL (/destinations/:slug)
    if (path.startsWith('/destinations/')) {
      const slug = path.replace('/destinations/', '');
      const dest = DESTINATIONS.find((d) => d.slug === slug);
      if (dest) {
        setIsNotFound(false);
        setSelectedExperience(null);
        setSelectedStory(null);
        setSelectedDestination(dest);
        applyPageSeo({
          meta: {
            path,
            title: dest.seoTitle,
            description: dest.seoDescription,
            breadcrumbName: dest.name,
          },
          breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Destinations', path: '/destinations' },
            { name: dest.name, path },
          ],
        });
        return;
      }
    }

    // 3. Check travel story detail URL (/travel-stories/:slug)
    if (path.startsWith('/travel-stories/')) {
      const slug = path.replace('/travel-stories/', '');
      const story = TRAVEL_STORIES.find((s) => s.slug === slug);
      const storyMeta = STORY_ROUTE_META[path];
      if (story && storyMeta) {
        setIsNotFound(false);
        setSelectedDestination(null);
        setSelectedExperience(null);
        setSelectedStory(story);
        applyPageSeo({
          meta: storyMeta,
          breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Travel Stories', path: '/travel-stories' },
            { name: story.title, path },
          ],
          article: {
            headline: story.title,
            description: story.excerpt,
            image: story.image,
          },
        });
        return;
      }
    }

    // 4. Unknown route -> 404 page
    setIsNotFound(true);
    setSelectedDestination(null);
    setSelectedExperience(null);
    setSelectedStory(null);
    applyPageSeo({
      meta: {
        path,
        title: 'Page Not Found (404) | AVIE Travel India',
        description:
          'The travel page you requested could not be found on AVIE. Return to our homepage or browse curated Indian and global destinations.',
        breadcrumbName: 'Page Not Found',
      },
    });
  }, []);

  useEffect(() => {
    syncStateToPath(window.location.pathname, window.location.pathname !== '/');
    const handlePopState = () => {
      syncStateToPath(window.location.pathname, true);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [syncStateToPath]);

  const navigatePath = useCallback(
    (targetPath: string) => {
      const normalized = normalizePath(targetPath);
      if (normalizePath(window.location.pathname) !== normalized) {
        window.history.pushState({}, '', normalized);
      }
      syncStateToPath(normalized, true);
    },
    [syncStateToPath],
  );

  const handleOpenDestination = useCallback(
    (dest: Destination) => {
      navigatePath(`/destinations/${dest.slug}`);
    },
    [navigatePath],
  );

  const handleOpenStory = useCallback(
    (story: TravelStory) => {
      navigatePath(`/travel-stories/${story.slug}`);
    },
    [navigatePath],
  );

  const handleCloseDestination = useCallback(() => {
    navigatePath('/destinations');
  }, [navigatePath]);

  const handleCloseStory = useCallback(() => {
    navigatePath('/travel-stories');
  }, [navigatePath]);

  const handleEnquireFromModal = useCallback(
    (destinationLabel: string) => {
      setSelectedDestination(null);
      setSelectedExperience(null);
      setSelectedStory(null);
      setEnquiryDestination(destinationLabel);
      navigatePath('/contact');
    },
    [navigatePath],
  );

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#303B40]" data-route={currentPath}>
      <Navbar onNavigatePath={navigatePath} />

      {isNotFound ? (
        <NotFoundView onNavigatePath={navigatePath} />
      ) : (
        <main>
          <HeroSection onNavigatePath={navigatePath} />

          <AboutSection onNavigatePath={navigatePath} />

          <DestinationsSection onSelectDestination={handleOpenDestination} />

          <ExperiencesSection
            onSelectExperience={(exp) => setSelectedExperience(exp)}
          />

          <WhyChooseSection />

          <StoriesSection onSelectStory={handleOpenStory} />

          <FaqSection onNavigatePath={navigatePath} />

          <ContactSection preselectedDestination={enquiryDestination} />
        </main>
      )}

      <Footer
        onNavigatePath={navigatePath}
        onSelectDestination={handleOpenDestination}
      />

      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          onClose={handleCloseDestination}
          onEnquire={handleEnquireFromModal}
          onSelectExperience={(exp) => {
            setSelectedDestination(null);
            setSelectedExperience(exp);
          }}
        />
      )}

      {selectedExperience && (
        <ExperienceModal
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
          onEnquire={handleEnquireFromModal}
          onSelectDestination={(dest) => {
            setSelectedExperience(null);
            handleOpenDestination(dest);
          }}
        />
      )}

      {selectedStory && (
        <StoryModal
          story={selectedStory}
          onClose={handleCloseStory}
          onEnquire={handleEnquireFromModal}
          onSelectDestination={handleOpenDestination}
          onSelectStory={handleOpenStory}
        />
      )}
    </div>
  );
}
