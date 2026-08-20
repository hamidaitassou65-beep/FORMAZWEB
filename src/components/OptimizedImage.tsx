import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  webpSrc?: string;
  srcSetWebp?: string;
  srcSetJpg?: string;
  sizes?: string;
  alt: string;
  width: number;
  height: number;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  className?: string;
  containerClassName?: string;
  fallbackSrc?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  webpSrc,
  srcSetWebp,
  srcSetJpg,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  alt,
  width,
  height,
  loading = 'lazy',
  fetchPriority = 'auto',
  className = '',
  containerClassName = '',
  fallbackSrc,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // If webpSrc is not provided, check if src is a string ending with .jpg/.png to derive webp
  const inferredWebp = webpSrc || (typeof src === 'string' && src.endsWith('.jpg') ? src.replace(/\.jpg$/, '.webp') : undefined);

  return (
    <div
      className={`relative overflow-hidden bg-slate-800/20 ${containerClassName}`}
      style={{
        aspectRatio: `${width} / ${height}`,
      }}
    >
      {/* Lightweight Shimmer Skeleton Placeholder before load */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse"
          aria-hidden="true"
        />
      )}

      {/* Modern Picture Element with WebP source + Fallback */}
      <picture>
        {(srcSetWebp || inferredWebp) && !hasError && (
          <source
            srcSet={srcSetWebp || inferredWebp}
            sizes={sizes}
            type="image/webp"
          />
        )}
        <img
          src={hasError && fallbackSrc ? fallbackSrc : src}
          srcSet={!hasError ? srcSetJpg : undefined}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            if (!hasError && fallbackSrc) {
              setHasError(true);
            } else {
              setIsLoaded(true); // Don't hang skeleton if error occurs
            }
          }}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...rest}
        />
      </picture>
    </div>
  );
};
