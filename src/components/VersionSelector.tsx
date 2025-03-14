
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CheckIcon,
  Smartphone,
  Layers,
  ZapIcon
} from "lucide-react";

interface Version {
  id: string;
  name: string;
  androidVersion: string;
  hypersVersion: string;
  icon: React.ReactNode;
}

interface VersionSelectorProps {
  className?: string;
  onChange?: (version: Version) => void;
}

const VersionSelector: React.FC<VersionSelectorProps> = ({
  className,
  onChange
}) => {
  const versions: Version[] = [
    {
      id: "android13",
      name: "HyperOS 1.0",
      androidVersion: "Android 13",
      hypersVersion: "OS1.0.15.0",
      icon: <Smartphone className="h-5 w-5" />
    },
    {
      id: "android14",
      name: "HyperOS 2.0",
      androidVersion: "Android 14",
      hypersVersion: "OS2.0.x",
      icon: <Layers className="h-5 w-5" />
    },
    {
      id: "android15",
      name: "HyperOS 2.0",
      androidVersion: "Android 15",
      hypersVersion: "OS2.0.x",
      icon: <ZapIcon className="h-5 w-5" />
    }
  ];

  const [activeVersion, setActiveVersion] = useState<Version>(versions[0]);

  const handleVersionChange = (version: Version) => {
    setActiveVersion(version);
    if (onChange) {
      onChange(version);
    }
  };

  return (
    <div className={cn("flex flex-col space-y-3", className)}>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {versions.map((version) => (
          <Button
            key={version.id}
            variant={activeVersion.id === version.id ? "default" : "outline"}
            className={cn(
              "transition-all duration-300 relative overflow-hidden",
              activeVersion.id === version.id
                ? "bg-hyper text-white shadow-lg shadow-hyper/25"
                : "bg-white/80 backdrop-blur-sm hover:bg-white"
            )}
            onClick={() => handleVersionChange(version)}
          >
            <span className="flex items-center gap-2">
              {version.icon}
              {version.name}
            </span>
            {activeVersion.id === version.id && (
              <span className="absolute right-1.5 top-1.5">
                <CheckIcon className="h-3 w-3" />
              </span>
            )}
          </Button>
        ))}
      </div>
      
      <div className="glass p-3 rounded-lg text-sm flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="text-sweet-light/70">Android Version</span>
          <span className="font-medium text-sweet">{activeVersion.androidVersion}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sweet-light/70">HyperOS Version</span>
          <span className="font-medium text-sweet">{activeVersion.hypersVersion}</span>
        </div>
      </div>
    </div>
  );
};

export default VersionSelector;
