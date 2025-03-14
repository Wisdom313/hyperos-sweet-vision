
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  Smartphone, 
  Camera, 
  Trash2, 
  Zap, 
  ShieldCheck, 
  Wrench, 
  Keyboard,
  FileCheck
} from "lucide-react";

interface ChangelogItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ChangelogItem: React.FC<ChangelogItemProps> = ({ title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-4"
    >
      <div className="flex-shrink-0 mt-1">
        <div className="w-8 h-8 rounded-full bg-hyper/10 flex items-center justify-center text-hyper">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="font-medium text-sweet mb-1">{title}</h3>
        <p className="text-sweet-light/70 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

interface ChangelogProps {
  className?: string;
}

const Changelog: React.FC<ChangelogProps> = ({ className }) => {
  const changes = [
    {
      title: "Updated Base",
      description: "Base updated to THGMIXM OS1.0.13.0 SweetK6a (Redmi Note 12 Pro 4G)",
      icon: <Smartphone className="h-4 w-4" />
    },
    {
      title: "Leica Camera",
      description: "Integrated Leica Camera 4.9 for improved photography experience",
      icon: <Camera className="h-4 w-4" />
    },
    {
      title: "System Optimization",
      description: "Debloated system with UI improvements for smoother experience",
      icon: <Trash2 className="h-4 w-4" />
    },
    {
      title: "Full RW Support",
      description: "Added complete Read/Write partition access",
      icon: <FileCheck className="h-4 w-4" />
    },
    {
      title: "Performance Kernel",
      description: "Included optimized Performance Kernel by default",
      icon: <Zap className="h-4 w-4" />
    },
    {
      title: "Hidden Features",
      description: "Unlocked hidden system features and added bug fixes",
      icon: <ShieldCheck className="h-4 w-4" />
    },
    {
      title: "Enhanced Gboard",
      description: "Added improved Gboard with additional features (Clean Flash Required)",
      icon: <Keyboard className="h-4 w-4" />
    },
    {
      title: "Other Improvements",
      description: "Various system optimizations and refinements for better stability",
      icon: <Wrench className="h-4 w-4" />
    },
  ];

  return (
    <section id="changelog" className={cn("section bg-gradient-to-b from-white to-gray-50", className)}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge badge-secondary mb-3">What's New</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sweet">
            Changelog
          </h2>
          <p className="text-sweet-light/70 max-w-2xl mx-auto text-balance">
            Latest release: Android 13 | HyperOS OS1.0.15.0
          </p>
        </motion.div>
        
        <div className="glass-strong p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {changes.map((item, index) => (
              <ChangelogItem 
                key={index}
                index={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 pt-6 border-t border-white/20 text-center"
          >
            <p className="text-sweet-light/70 text-sm">
              Every bug report and feedback helps improve your future experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Changelog;
