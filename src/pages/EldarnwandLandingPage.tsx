import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GlassmorphicInfoCard from '@/components/GlassmorphicInfoCard';
import TokenCard from '@/components/TokenCard';
import SectionLayout from '@/components/layout/SectionLayout';
import ColorSwatchGrid, { SwatchDataItem } from '@/components/ColorSwatchGrid'; // Importing SwatchDataItem type
// InteractiveColorSwatch is used by ColorSwatchGrid, so direct import here isn't strictly necessary unless used standalone.
// shadcn/ui components like Button, Card, Tooltip are used within the custom components or App.tsx context.
// motion from framer-motion is used by GlassmorphicInfoCard.

const EldarnwandLandingPage: React.FC = () => {
  console.log('EldarnwandLandingPage loaded');

  const corePaletteSwatches: SwatchDataItem[] = [
    {
      id: 'eldar-pink',
      name: "Eldar Pink", // Prop name for InteractiveColorSwatch
      hex: "#E91E63",    // Prop hex for InteractiveColorSwatch
      roleDescription: "Primary, Energetic CTA, Vibrancy", // Prop roleDescription for InteractiveColorSwatch
      lightVariant: { name: "Pink Light", hex: "#F48FB1" },
      darkVariant: { name: "Pink Dark", hex: "#C2185B" }
    },
    {
      id: 'mystic-purple',
      name: "Mystic Purple",
      hex: "#9C27B0",
      roleDescription: "Secondary, Sophistication, Depth",
      lightVariant: { name: "Purple Light", hex: "#CE93D8" },
      darkVariant: { name: "Purple Dark", hex: "#7B1FA2" }
    },
    {
      id: 'deep-indigo',
      name: "Deep Indigo",
      hex: "#3F51B5",
      roleDescription: "Tertiary, Trust, Stability",
      lightVariant: { name: "Indigo Light", hex: "#9FA8DA" },
      darkVariant: { name: "Indigo Dark", hex: "#303F9F" }
    },
    {
      id: 'neutral-gray',
      name: "Neutral Gray",
      hex: "#616161", // Using a slightly more pronounced gray than #757575
      roleDescription: "Base Text, Borders, Neutrality",
      lightVariant: { name: "Gray Light", hex: "#E0E0E0" },
      darkVariant: { name: "Gray Dark", hex: "#424242" }
    },
    {
      id: 'pure-white',
      name: "Pure White",
      hex: "#FFFFFF",
      roleDescription: "Backgrounds, Contrast, Purity",
      // No dark variant for pure white usually, light variant could be off-white
      lightVariant: { name: "White Smoke", hex: "#F5F5F5" },
    }
  ];

  const feedbackColorSwatches: SwatchDataItem[] = [
    {
      id: 'success-green',
      name: "Success Green",
      hex: "#4CAF50",
      roleDescription: "Success states, confirmations",
    },
    {
      id: 'warning-amber',
      name: "Warning Amber",
      hex: "#FFC107",
      roleDescription: "Warnings, non-critical alerts",
    },
    {
      id: 'danger-red',
      name: "Danger Red",
      hex: "#F44336",
      roleDescription: "Error states, critical alerts",
    },
    {
      id: 'info-blue',
      name: "Info Blue",
      hex: "#2196F3",
      roleDescription: "Informational messages, tips",
    }
  ];

  const designTokens = [
    { id: 'token-primary', tokenName: "--color-primary", tokenValue: "#E91E63" },
    { id: 'token-secondary', tokenName: "--color-secondary", tokenValue: "#9C27B0" },
    { id: 'token-accent', tokenName: "--color-accent", tokenValue: "#3F51B5" }, // Example accent
    { id: 'token-text-base', tokenName: "--color-text-base", tokenValue: "#1F2937" },
    { id: 'token-text-inverted', tokenName: "--color-text-inverted", tokenValue: "#F9FAFB" },
    { id: 'token-bg-default', tokenName: "--color-background-default", tokenValue: "#FFFFFF" },
    { id: 'token-bg-alt', tokenName: "--color-background-alt", tokenValue: "#111827" }, // Dark alt bg for contrast
    { id: 'token-feedback-success', tokenName: "--color-feedback-success", tokenValue: "#4CAF50" },
    { id: 'token-feedback-warning', tokenName: "--color-feedback-warning", tokenValue: "#FFC107" },
    { id: 'token-feedback-error', tokenName: "--color-feedback-error", tokenValue: "#F44336" },
    { id: 'token-font-sans', tokenName: "--font-family-sans", tokenValue: "'Inter', sans-serif" },
    { id: 'token-radius-md', tokenName: "--border-radius-medium", tokenValue: "0.75rem" },
    { id: 'token-radius-lg', tokenName: "--border-radius-large", tokenValue: "1rem" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans selection:bg-pink-500 selection:text-white">
      <Header />

      <main>
        <SectionLayout
          id="philosophy"
          title="Guiding Philosophy"
          className="bg-gray-900" // Ensure section blends with page bg
          titleClassName="text-pink-400"
          subtitleClassName="text-gray-300"
          subtitle="The heart of Eldarnwand: clarity, versatility, and inclusivity."
        >
          <div className="grid md:grid-cols-2 gap-8">
            <GlassmorphicInfoCard title="Foundational Principles">
              <p>Eldarnwand is built on three pillars: Emotional Clarity, Aesthetic Versatility, and Unwavering Accessibility. Our colors are chosen to evoke precise feelings, adapt to diverse contexts, and ensure usability for everyone.</p>
            </GlassmorphicInfoCard>
            <GlassmorphicInfoCard title="Brand Color Strategy">
              <p>We employ a strategic 60-30-10 rule, ensuring visual harmony and brand cohesion. Primary colors establish presence, secondary colors support and guide, while accent colors highlight key interactions.</p>
            </GlassmorphicInfoCard>
          </div>
        </SectionLayout>

        <SectionLayout
          id="meaning-inclusivity"
          title="Meaning & Inclusivity"
          className="bg-gray-800" // Slightly different shade for visual separation
          titleClassName="text-purple-400"
          subtitleClassName="text-gray-300"
          subtitle="Understanding the 'why' behind our palette and our commitment to universal design."
        >
          <div className="max-w-4xl mx-auto space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-indigo-300 mb-4 text-center">Color Psychology</h3>
              <div className="space-y-4 text-gray-200 text-lg text-center">
                <p><strong className="text-pink-400">Pink (#E91E63):</strong> Represents vibrancy, passion, and creative energy. Used for primary calls-to-action and highlights.</p>
                <p><strong className="text-purple-400">Purple (#9C27B0):</strong> Evokes sophistication, depth, and ambition. Ideal for secondary elements and branding accents.</p>
                <p><strong className="text-indigo-400">Indigo (#3F51B5):</strong> Conveys trust, stability, and calmness. Often used for informational backgrounds or supportive UI.</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-indigo-300 mb-4 text-center">Accessibility Commitment</h3>
              <p className="text-gray-200 text-lg text-center leading-relaxed">Eldarnwand is committed to WCAG 2.1 Level AA compliance. All color combinations are rigorously tested for contrast to ensure readability and usability for users with visual impairments. We believe in design that empowers everyone.</p>
            </div>
          </div>
        </SectionLayout>

        <SectionLayout
          id="core-palette"
          title="Core Color Palette"
          className="bg-gray-900"
          titleClassName="text-pink-400"
          subtitleClassName="text-gray-300"
          subtitle="Explore the foundational colors of Eldarnwand. Interact with swatches to copy HEX codes."
        >
          <ColorSwatchGrid swatches={corePaletteSwatches} />
        </SectionLayout>
        
        <SectionLayout
          id="feedback-colors"
          title="Feedback & Status Colors"
          className="bg-gray-800"
          titleClassName="text-purple-400"
          subtitleClassName="text-gray-300"
          subtitle="Conveying information effectively through intuitive color cues for success, warnings, errors, and info."
        >
          <ColorSwatchGrid swatches={feedbackColorSwatches} />
        </SectionLayout>

        <SectionLayout
          id="design-tokens"
          title="Design Tokens"
          className="bg-gray-900"
          titleClassName="text-indigo-400" // Changed color for variety
          subtitleClassName="text-gray-300"
          subtitle="Implement Eldarnwand consistently with our design tokens. Click to copy values."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {designTokens.map(token => (
              <TokenCard key={token.id} tokenName={token.tokenName} tokenValue={token.tokenValue} />
            ))}
          </div>
        </SectionLayout>
      </main>

      <Footer />
    </div>
  );
};

export default EldarnwandLandingPage;