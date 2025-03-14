
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Github, Heart } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="download" className={cn("section bg-gradient-to-b from-gray-50 to-white", className)}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="glass-strong p-10 rounded-2xl text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-sweet">
            Ready to Experience HyperOS on Sweet?
          </h2>
          <p className="text-sweet-light/70 max-w-2xl mx-auto mb-6">
            Download the latest build and follow the installation instructions for your device.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-hyper hover:bg-hyper-dark text-white font-medium transition-colors"
            >
              Download Android 13
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white hover:bg-gray-50 text-sweet border border-gray-200 font-medium transition-colors"
            >
              Installation Guide
            </a>
          </div>
          
          <div className="text-center text-sm text-sweet-light/60">
            <p>For Redmi Note 10 Pro (Sweet) devices only. Make sure to back up your data before flashing.</p>
          </div>
        </motion.div>
        
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sweet-light/60 text-sm">
            &copy; {currentYear} HyperOS Sweet Port. Not affiliated with Xiaomi.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-sweet-light/60 hover:text-hyper transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <span className="flex items-center gap-1 text-sm text-sweet-light/60">
              Built with <Heart className="h-3 w-3 text-red-500" /> for the community
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
