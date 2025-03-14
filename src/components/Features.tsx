
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  CameraIcon, 
  ZapIcon, 
  LayersIcon, 
  BugPlayIcon, 
  SmartphoneIcon,
  ShieldCheckIcon, 
  SettingsIcon,
  KeyboardIcon
} from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const featuresList: FeatureProps[] = [
  {
    title: "Leica Camera 4.9",
    description: "Enhanced camera experience with Leica filters and optimized processing for better photos.",
    icon: <CameraIcon className="h-5 w-5" />
  },
  {
    title: "Performance Kernel",
    description: "Default performance kernel for smoother experience and better battery life.",
    icon: <ZapIcon className="h-5 w-5" />
  },
  {
    title: "UI Improvements",
    description: "Debloated system with refined UI elements for a cleaner experience.",
    icon: <LayersIcon className="h-5 w-5" />
  },
  {
    title: "Enhanced Gboard",
    description: "Special optimized Gboard build with improved features.",
    icon: <KeyboardIcon className="h-5 w-5" />
  },
  {
    title: "Bug Fixes",
    description: "Multiple bug fixes and stability improvements for daily usage.",
    icon: <BugPlayIcon className="h-5 w-5" />
  },
  {
    title: "Full RW Support",
    description: "Complete Read/Write partition access for advanced customization.",
    icon: <SmartphoneIcon className="h-5 w-5" />
  },
  {
    title: "Hidden Features",
    description: "Unlocked hidden system features and additional customization options.",
    icon: <SettingsIcon className="h-5 w-5" />
  },
  {
    title: "Security Updates",
    description: "Latest security patches and privacy enhancements from HyperOS.",
    icon: <ShieldCheckIcon className="h-5 w-5" />
  }
];

const FeatureCard: React.FC<FeatureProps & { index: number }> = ({ title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="feature-card"
    >
      <div className="rounded-full bg-hyper/10 p-3 w-12 h-12 flex items-center justify-center text-hyper mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-sweet">{title}</h3>
      <p className="text-sweet-light/70 text-sm">{description}</p>
    </motion.div>
  );
};

interface FeaturesProps {
  className?: string;
}

const Features: React.FC<FeaturesProps> = ({ className }) => {
  return (
    <section id="features" className={cn("section relative overflow-hidden", className)}>
      {/* Background Decoration */}
      <div className="absolute top-40 -right-64 w-[500px] h-[500px] bg-hyper/5 rounded-full filter blur-[120px]" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge badge-primary mb-3">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sweet">
            Everything You Need
          </h2>
          <p className="text-sweet-light/70 max-w-2xl mx-auto text-balance">
            HyperOS for Sweet brings a premium, optimized experience with features designed
            specifically for your Redmi Note 10 Pro.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((feature, index) => (
            <FeatureCard key={index} index={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
