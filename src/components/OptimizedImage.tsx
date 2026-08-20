import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  webpSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  className?: string;
  containerClassName?: string;
  fallbackSrc?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  webpSrc,
  alt,
  width = 800,
  height = 450,
  loading = 'lazy',
  fetchPriority = 'auto',
  className = '',
  containerClassName = '',
  fallbackSrc = '/images/fallback-industrie.webp',
  onError,
  ...rest
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [currentWebp, setCurrentWebp] = useState<string | undefined>(webpSrc || (src.endsWith('.jpg') ? src.replace(/\.jpg$/, '.webp') : undefined));
  const [hasError, setHasError] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
      setCurrentWebp(undefined);
    }
    if (onError) {
      onError(e);
    }
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-slate-900 ${containerClassName}`}
      style={{
        aspectRatio: width && height ? `${width} / ${height}` : undefined,
      }}
    >
      <picture className="block w-full h-full">
        {currentWebp && !hasError && (
          <source srcSet={currentWebp} type="image/webp" />
        )}
        <img
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding="async"
          onError={handleError}
          className={`w-full h-full object-cover ${className}`}
          {...rest}
        />
      </picture>
    </div>
  );
};
