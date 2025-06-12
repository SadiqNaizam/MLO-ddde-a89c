import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // Assuming cn utility is available

interface GlassmorphicInfoCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const GlassmorphicInfoCard: React.FC<GlassmorphicInfoCardProps> = ({
  title,
  children,
  className,
}) => {
  console.log('GlassmorphicInfoCard loaded, title:', title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }} // Trigger when 25% of the element is in view
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }} // Using a common easing curve for smooth animation
      className={cn(
        'bg-white/10 backdrop-blur-md', // Frosted glass effect: semi-transparent background + backdrop blur
        'p-6 md:p-8', // Padding
        'rounded-xl', // Soft, rounded corners
        'shadow-2xl', // Subtle, diffused shadow for depth
        'border border-white/20', // Optional: subtle border to enhance the glass edge
        'font-inter', // Assuming 'Inter' font class is configured as per project context
        className // Allow consumers to pass additional classes
      )}
    >
      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
        {title}
      </h3>
      <div className="text-gray-200/90 text-base md:text-lg leading-relaxed space-y-3">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassmorphicInfoCard;