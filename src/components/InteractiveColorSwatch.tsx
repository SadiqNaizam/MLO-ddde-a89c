import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Copy } from 'lucide-react';

interface ColorVariant {
  name: string;
  hex: string;
}

interface InteractiveColorSwatchProps {
  name: string;
  hex: string;
  roleDescription: string;
  lightVariant?: ColorVariant;
  darkVariant?: ColorVariant;
}

const InteractiveColorSwatch: React.FC<InteractiveColorSwatchProps> = ({
  name,
  hex,
  roleDescription,
  lightVariant,
  darkVariant,
}) => {
  const { toast } = useToast();
  console.log('InteractiveColorSwatch loaded for:', name);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast({
          title: "Copied to clipboard!",
          description: `${label} (${text}) copied.`,
        });
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
        toast({
          title: "Failed to copy",
          description: "Could not copy text to clipboard.",
          variant: "destructive",
        });
      });
  };

  return (
    <Card className="w-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <div 
        className="h-32 w-full border-b"
        style={{ backgroundColor: hex }}
        aria-label={`${name} color swatch`}
      />
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <div className="flex items-center justify-between mt-1">
            <span className="text-sm font-mono text-gray-600">{hex.toUpperCase()}</span>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => copyToClipboard(hex, `${name} HEX`)}
              aria-label={`Copy ${name} HEX code ${hex}`}
            >
              <Copy className="h-4 w-4 text-gray-500 hover:text-gray-700" />
            </Button>
          </div>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed">{roleDescription}</p>

        {(lightVariant || darkVariant) && (
          <div className="pt-3 mt-3 border-t border-gray-200">
            <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Variants</h4>
            <div className="space-y-2">
              {lightVariant && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="h-5 w-5 rounded-sm border border-gray-300" 
                      style={{ backgroundColor: lightVariant.hex }}
                      aria-label={`${lightVariant.name} color swatch`}
                    />
                    <div>
                      <p className="text-xs font-medium text-gray-700">{lightVariant.name}</p>
                      <p className="text-xs font-mono text-gray-500">{lightVariant.hex.toUpperCase()}</p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6"
                    onClick={() => copyToClipboard(lightVariant.hex, `${lightVariant.name} HEX`)}
                    aria-label={`Copy ${lightVariant.name} HEX code ${lightVariant.hex}`}
                  >
                    <Copy className="h-3 w-3 text-gray-400 hover:text-gray-600" />
                  </Button>
                </div>
              )}
              {darkVariant && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="h-5 w-5 rounded-sm border border-gray-300" 
                      style={{ backgroundColor: darkVariant.hex }}
                      aria-label={`${darkVariant.name} color swatch`}
                    />
                    <div>
                      <p className="text-xs font-medium text-gray-700">{darkVariant.name}</p>
                      <p className="text-xs font-mono text-gray-500">{darkVariant.hex.toUpperCase()}</p>
                    </div>
                  </div>
                   <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6"
                    onClick={() => copyToClipboard(darkVariant.hex, `${darkVariant.name} HEX`)}
                    aria-label={`Copy ${darkVariant.name} HEX code ${darkVariant.hex}`}
                  >
                    <Copy className="h-3 w-3 text-gray-400 hover:text-gray-600" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InteractiveColorSwatch;