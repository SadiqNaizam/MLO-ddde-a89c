import React from 'react';
import { cn } from '@/lib/utils'; // Assumed utility for conditional classNames

interface SectionLayoutProps {
  id?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  children: React.ReactNode;
  className?: string; // Applied to the root section element
  titleClassName?: string; // Applied to the H2 title or its wrapper
  subtitleClassName?: string; // Applied to the subtitle paragraph or its wrapper
  contentClassName?: string; // Applied to the div wrapping children, below the title/subtitle
  containerClassName?: string; // Applied to the inner max-width container
  disableDefaultPadding?: boolean; // Option to disable default py paddings
}

const SectionLayout: React.FC<SectionLayoutProps> = ({
  id,
  title,
  subtitle,
  children,
  className,
  titleClassName,
  subtitleClassName,
  contentClassName,
  containerClassName,
  disableDefaultPadding = false,
}) => {
  console.log(`SectionLayout loaded: ${typeof title === 'string' ? title : 'Custom Title Section'}`);

  return (
    <section
      id={id}
      className={cn(
        !disableDefaultPadding && 'py-16 md:py-20 lg:py-24', // Consistent vertical padding
        className
      )}
    >
      <div className={cn(
        'container mx-auto px-6 sm:px-8', // Max-width container with horizontal padding
        containerClassName
      )}>
        {/* Title */}
        {typeof title === 'string' ? (
          <h2
            className={cn(
              'text-3xl sm:text-4xl lg:text-5xl font-bold text-center font-sans', // Assumes 'Inter' is project's default font-sans
              'text-slate-800 dark:text-slate-100', // Default text colors
              subtitle ? 'mb-3 sm:mb-4' : 'mb-10 sm:mb-12 md:mb-16', // Margin bottom adjusted if subtitle exists
              titleClassName
            )}
          >
            {title}
          </h2>
        ) : (
          // Allows passing a custom JSX element as title
          <div className={cn(subtitle ? 'mb-3 sm:mb-4' : 'mb-10 sm:mb-12 md:mb-16', titleClassName)}>
            {title}
          </div>
        )}

        {/* Subtitle */}
        {subtitle && (
          typeof subtitle === 'string' ? (
            <p
              className={cn(
                'text-lg sm:text-xl text-center max-w-3xl mx-auto font-sans', // Assumes 'Inter' is project's default font-sans
                'text-slate-600 dark:text-slate-400',
                'mb-10 sm:mb-12 md:mb-16', // Margin bottom before content
                subtitleClassName
              )}
            >
              {subtitle}
            </p>
          ) : (
            // Allows passing a custom JSX element as subtitle
            <div className={cn('text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16', subtitleClassName)}>
              {subtitle}
            </div>
          )
        )}

        {/* Content */}
        <div className={cn(contentClassName)}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionLayout;