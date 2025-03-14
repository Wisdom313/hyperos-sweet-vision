
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import CameraBump from "./CameraBump";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { DownloadIcon, ArrowDownIcon } from "lucide-react";
import VersionSelector from "./VersionSelector";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className={cn("min-h-screen relative overflow-hidden pt-24 pb-16", className)}>
      {/* Background Decoration */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-hyper/20 rounded-full filter blur-[120px] opacity-50" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-hyper/10 rounded-full filter blur-[100px] opacity-40" />
      
      <div className="container-custom relative z-10 px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-6"
        >
          <span className="badge badge-primary">Redmi Note 10 Pro - Sweet</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mb-4"
        >
          {/* Fancy Title with Background Glow */}
          <div className="relative">
            <h1 className="text-4xl md:text-7xl font-bold text-center tracking-tight">
              <span className="relative z-10 inline-block">
                <span className="text-sweet">Hyper</span>
                <span className="text-gradient">OS</span>
                <span className="text-sweet"> Ports</span>
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-hyper/0 via-hyper to-hyper/0"></div>
              </span>
            </h1>
            {/* Decorative Glow */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-32 bg-hyper/30 rounded-full filter blur-[60px] opacity-70"></div>
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-sweet-light/80 text-center max-w-2xl mb-8 text-balance"
        >
          Experience the premium interface of HyperOS on your Redmi Note 10 Pro with enhanced features,
          optimized performance, and the latest Android experience.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <Button 
            size="lg" 
            className="bg-hyper hover:bg-hyper-dark text-white shadow-lg shadow-hyper/25 px-8"
            onClick={() => window.open("https://devuploads.com/sn5n70ibfg1j", "_blank")}
          >
            <DownloadIcon className="h-4 w-4 mr-2" />
            Download ROM
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-hyper text-hyper hover:bg-hyper/5"
            onClick={() => document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDownIcon className="h-4 w-4 mr-2" />
            Explore Models
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <CameraBump variant="filled" animateStyle="float" className="text-hyper" />
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-hyper/10 rounded-full filter blur-[40px]" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-hyper/20 rounded-full filter blur-[50px]" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-strong p-8 rounded-2xl"
          >
            <h3 className="text-xl font-semibold mb-4 text-sweet">Choose Your Version</h3>
            <VersionSelector />
            
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-sm text-sweet-light/70">
                Available for Redmi Note 10 Pro (Sweet) with full compatibility and optimized performance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.7,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <ArrowDownIcon className="h-6 w-6 text-sweet-light/60" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
