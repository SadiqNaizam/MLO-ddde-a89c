import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Copy } from 'lucide-react';

interface TokenCardProps {
  /** The name of the design token (e.g., --primary-color) */
  tokenName: string;
  /** The value of the design token (e.g., #E91E63) */
  tokenValue: string;
}

const TokenCard: React.FC<TokenCardProps> = ({ tokenName, tokenValue }) => {
  const { toast } = useToast();

  console.log('TokenCard loaded for token:', tokenName);

  const handleCopyValue = async () => {
    try {
      await navigator.clipboard.writeText(tokenValue);
      toast({
        title: "Copied to clipboard!",
        description: `Value "${tokenValue}" copied.`,
      });
    } catch (err) {
      console.error("Failed to copy token value:", err);
      toast({
        title: "Copy Failed",
        description: "Could not copy value to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="group w-full p-4 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(233,30,99,0.2)] dark:hover:shadow-[0_6px_20px_rgba(233,30,99,0.3)]">
      <div className="flex items-center justify-between space-x-3">
        <div className="flex-grow min-w-0">
          <p className="text-xs font-medium text-muted-foreground truncate" title={tokenName}>
            {tokenName}
          </p>
          <p className="text-base font-semibold font-mono text-foreground truncate" title={tokenValue}>
            {tokenValue}
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopyValue}
          aria-label={`Copy token value ${tokenValue}`}
          className="flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-200"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default TokenCard;