
import React from "react";
import { cn } from "@/lib/utils";

interface CameraBumpProps {
  className?: string;
  variant?: "outline" | "filled";
  animateStyle?: "float" | "pulse" | "none";
}

const CameraBump: React.FC<CameraBumpProps> = ({
  className,
  variant = "outline",
  animateStyle = "float"
}) => {
  const getAnimationClass = () => {
    switch (animateStyle) {
      case "float":
        return "animate-float";
      case "pulse":
        return "animate-pulse-subtle";
      default:
        return "";
    }
  };
  
  return (
    <div className={cn("relative w-full max-w-[320px]", getAnimationClass(), className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Phone Outline */}
        <rect
          x="30"
          y="10"
          width="200"
          height="240"
          rx="28"
          className={variant === "filled" ? "fill-sweet-light/10" : "fill-none"}
          stroke="currentColor"
          strokeWidth="2"
        />
        
        {/* Camera Module */}
        <rect
          x="160"
          y="35"
          width="50"
          height="70"
          rx="10"
          className={variant === "filled" ? "fill-sweet/20" : "fill-none"}
          stroke="currentColor"
          strokeWidth="2"
        />
        
        {/* Main Camera */}
        <circle
          cx="185"
          cy="55"
          r="12"
          className={variant === "filled" ? "fill-hyper/20" : "fill-none"}
          stroke="currentColor"
          strokeWidth="2"
        />
        
        {/* Secondary Camera */}
        <circle
          cx="185"
          cy="85"
          r="12"
          className={variant === "filled" ? "fill-hyper/20" : "fill-none"}
          stroke="currentColor"
          strokeWidth="2"
        />
        
        {/* Flash */}
        <rect
          x="165"
          y="50"
          width="6"
          height="6"
          rx="2"
          className={variant === "filled" ? "fill-hyper" : "fill-none"}
          stroke="currentColor"
          strokeWidth="1.5"
        />
        
        {/* Screen */}
        <rect
          x="45"
          y="25"
          width="170"
          height="210"
          rx="16"
          className="fill-none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
      </svg>
    </div>
  );
};

export default CameraBump;
