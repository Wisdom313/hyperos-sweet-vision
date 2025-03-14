
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
        
        {/* Camera Module - Rectangular bump with rounded corners */}
        <rect
          x="150"
          y="30"
          width="65"
          height="90"
          rx="14"
          className={variant === "filled" ? "fill-sweet/20" : "fill-none"}
          stroke="currentColor"
          strokeWidth="2"
        />
        
        {/* Main Camera - Large primary camera */}
        <circle
          cx="182.5"
          cy="55"
          r="16"
          className={variant === "filled" ? "fill-hyper/20" : "fill-none"}
          stroke="currentColor"
          strokeWidth="2"
        />
        
        {/* Ultra-Wide Camera */}
        <circle
          cx="182.5"
          cy="95"
          r="12"
          className={variant === "filled" ? "fill-hyper/20" : "fill-none"}
          stroke="currentColor"
          strokeWidth="2"
        />
        
        {/* Macro Camera */}
        <circle
          cx="165"
          cy="75"
          r="8"
          className={variant === "filled" ? "fill-hyper/20" : "fill-none"}
          stroke="currentColor"
          strokeWidth="2"
        />
        
        {/* Depth Sensor */}
        <circle
          cx="200"
          cy="75"
          r="8"
          className={variant === "filled" ? "fill-hyper/20" : "fill-none"}
          stroke="currentColor"
          strokeWidth="2"
        />
        
        {/* Flash */}
        <rect
          x="200"
          y="40"
          width="6"
          height="16"
          rx="3"
          className={variant === "filled" ? "fill-hyper" : "fill-none"}
          stroke="currentColor"
          strokeWidth="1.5"
        />
        
        {/* AI Label */}
        <text
          x="155"
          y="115"
          className="text-[8px] font-light"
          stroke="currentColor"
          strokeWidth="0.3"
          fill="currentColor"
        >
          AI 108MP
        </text>
        
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
        
        {/* Camera Hole Punch */}
        <circle
          cx="130"
          cy="35"
          r="5"
          stroke="currentColor"
          strokeWidth="1"
          className={variant === "filled" ? "fill-sweet/20" : "fill-none"}
        />
      </svg>
    </div>
  );
};

export default CameraBump;
