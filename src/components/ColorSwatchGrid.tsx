import React from 'react';
import InteractiveColorSwatch, { InteractiveColorSwatchProps } from '@/components/InteractiveColorSwatch'; // Assuming InteractiveColorSwatchProps is exported from its module

// Define the structure for each swatch item that ColorSwatchGrid will receive
// This should align with the props expected by InteractiveColorSwatch
// Adding 'id' for React key is a good practice
export interface SwatchDataItem extends Omit<InteractiveColorSwatchProps, 'className'> {
  id: string; // Unique identifier for the key prop
}

interface ColorSwatchGridProps {
  swatches: SwatchDataItem[];
  className?: string;
}

const ColorSwatchGrid: React.FC<ColorSwatchGridProps> = ({ swatches, className = '' }) => {
  console.log('ColorSwatchGrid loaded with', swatches.length, 'swatches.');

  if (!swatches || swatches.length === 0) {
    return <p className="text-center text-gray-500">No color swatches to display.</p>;
  }

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 ${className}`}
      aria-label="Color Swatch Grid"
    >
      {swatches.map((swatch) => (
        <InteractiveColorSwatch
          key={swatch.id}
          colorName={swatch.colorName}
          hexCode={swatch.hexCode}
          role={swatch.role}
          lightVariantHex={swatch.lightVariantHex}
          darkVariantHex={swatch.darkVariantHex}
          // Pass any other props InteractiveColorSwatch might expect
        />
      ))}
    </div>
  );
};

export default ColorSwatchGrid;