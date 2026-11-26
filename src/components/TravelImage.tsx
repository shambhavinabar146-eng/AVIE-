import { useState } from 'react';
import { Compass } from 'lucide-react';

interface TravelImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
  sizes?: string;
}

export function TravelImage({
  src,
  alt,
  className = 'h-full w-full object-cover',
  fallbackTitle,
  loading = 'lazy',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: TravelImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt || fallbackTitle || 'Travel photograph'}
        className="flex h-full w-full flex-col items-center justify-center bg-[#153247] p-6 text-center text-[#FFFFFF]"
      >
        <Compass className="mb-3 h-8 w-8 text-[#6B9A98]" aria-hidden="true" />
        {fallbackTitle && (
          <span className="font-serif text-lg font-medium tracking-wide text-[#FFFFFF]">
            {fallbackTitle}
          </span>
        )}
      </div>
    );
  }

  const isLocalAsset = src.startsWith('/src/assets/images/') && src.endsWith('.jpg');
  const base = isLocalAsset ? src.slice(0, -4) : null;

  if (base) {
    return (
      <picture className="block h-full w-full">
        <source
          type="image/webp"
          srcSet={`${base}-720w.webp 720w, ${base}.webp 1200w`}
          sizes={sizes}
        />
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding={loading === 'eager' ? 'sync' : 'async'}
          fetchPriority={loading === 'eager' ? 'high' : 'auto'}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={className}
        />
      </picture>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
