
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { DownloadIcon, ArrowDownIcon, GithubIcon, CircleIcon, Sparkles, Layers, Atom } from "lucide-react";
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
      {/* Enhanced Background Decoration with more gradients */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-hyper/40 to-hyper-light/20 rounded-full filter blur-[120px] opacity-60" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-gradient-to-bl from-hyper/30 to-hyper-dark/10 rounded-full filter blur-[100px] opacity-50" />
      <div className="absolute bottom-32 left-1/4 w-64 h-64 bg-gradient-to-tr from-sweet-light/10 to-hyper/20 rounded-full filter blur-[80px] opacity-40" />
      
      <div className="container-custom relative z-10 px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-6"
        >
          <span className="badge badge-primary">Premium Custom ROM Experience</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mb-4"
        >
          {/* Fancy Title with Enhanced Background Glow */}
          <div className="relative">
            <h1 className="text-4xl md:text-7xl font-bold text-center tracking-tight">
              <span className="relative z-10 inline-block">
                <span className="text-sweet">Hyper</span>
                <span className="text-gradient bg-gradient-to-r from-hyper via-hyper-light to-hyper">OS</span>
                <span className="text-sweet"> Ports</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-hyper/0 via-hyper to-hyper/0"></div>
              </span>
            </h1>
            {/* Enhanced Decorative Glow */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-40 h-32 bg-gradient-to-r from-hyper/40 to-hyper-light/20 rounded-full filter blur-[60px] opacity-80"></div>
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
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-hyper to-hyper-dark text-white shadow-lg shadow-hyper/25 px-8 hover:opacity-90"
            onClick={() => window.open("https://github.com/Warrior-dev0/HyperOS_Ports", "_blank")}
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
        
        {/* Enhanced Developer Information with styled Warri⭕️R name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-center mb-10 glass px-6 py-3 rounded-full hover:shadow-lg transition-all"
        >
          <a 
            href="https://github.com/Warrior-dev0" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-sweet hover:text-hyper transition-colors"
          >
            <GithubIcon className="h-5 w-5" />
            <span className="text-base font-medium">
              Developed by Warri
              <span className="inline-flex items-center justify-center text-hyper">
                <CircleIcon className="h-4 w-4 fill-hyper text-white" />
              </span>
              R
            </span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Abstract Graphics Instead of Camera Bump */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[320px] h-[400px] glass-strong rounded-2xl p-6 flex flex-col items-center justify-center overflow-hidden">
              {/* MI and Snapdragon Abstract Graphics */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-hyper/5 to-sweet-light/5 opacity-50" />
              
              {/* Animated floating elements */}
              <motion.div 
                className="absolute top-10 left-10" 
                animate={{ y: [0, -10, 0], opacity: [0.8, 1, 0.8] }} 
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
              >
                <Sparkles className="h-8 w-8 text-hyper opacity-80" />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-20 right-12" 
                animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }} 
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
              >
                <Atom className="h-10 w-10 text-hyper opacity-70" />
              </motion.div>
              
              <motion.div 
                className="absolute top-32 right-10" 
                animate={{ y: [0, -8, 0], opacity: [0.6, 0.9, 0.6] }} 
                transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", delay: 2 }}
              >
                <Layers className="h-8 w-8 text-hyper-light opacity-80" />
              </motion.div>
              
              {/* MI Logo */}
              <div className="relative mb-8">
                <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-hyper to-hyper-light">MI</div>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-hyper to-transparent"></div>
              </div>
              
              {/* Snapdragon Logo */}
              <div className="relative text-center">
                <div className="text-xl font-medium text-sweet-light mb-1">powered by</div>
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sweet to-sweet-light">SNAPDRAGON</div>
                <div className="mt-3 text-xs text-sweet-light/70">Optimized for Performance</div>
                
                {/* Dragon-like curve */}
                <motion.div 
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                  animate={{ 
                    rotate: [0, 2, 0, -2, 0],
                    scale: [1, 1.02, 1, 1.02, 1] 
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <svg width="100" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20 C10 10, 30 5, 50 15 C70 25, 90 10, 110 20" 
                      stroke="url(#gradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
                        <stop offset="0%" stopColor="#147AFC" />
                        <stop offset="50%" stopColor="#53A0FF" />
                        <stop offset="100%" stopColor="#147AFC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-hyper/10 rounded-full filter blur-[60px]" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-hyper/20 rounded-full filter blur-[50px]" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-strong p-8 rounded-2xl relative overflow-hidden"
          >
            {/* Abstract decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-hyper/20 rounded-full filter blur-[30px]" />
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-hyper/30 rounded-full filter blur-[40px]" />
            
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
