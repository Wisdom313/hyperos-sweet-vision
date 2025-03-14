
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DownloadIcon, MenuIcon, XIcon } from "lucide-react";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm"
          : "py-6 bg-transparent",
        className
      )}
    >
      <div className="container-custom flex items-center justify-between px-6">
        <div className="flex items-center">
          <span className="text-xl font-semibold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sweet via-hyper to-sweet-light">HyperOS Ports</span>
            <span className="text-xs ml-1 opacity-70">Logo</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sweet-light/80 hover:text-sweet transition-colors">
            Features
          </a>
          <a href="#changelog" className="text-sweet-light/80 hover:text-sweet transition-colors">
            Changelog
          </a>
          <a href="#download" className="text-sweet-light/80 hover:text-sweet transition-colors">
            Download
          </a>
          <Button 
            className="ml-2 bg-hyper hover:bg-hyper-dark text-white"
            onClick={() => window.open("https://github.com/Warrior-dev0/HyperOS_Ports", "_blank")}
          >
            <DownloadIcon className="h-4 w-4 mr-2" />
            Get ROM
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-sweet"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed top-[57px] left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="flex flex-col py-6 px-6 space-y-4">
          <a 
            href="#features" 
            className="text-sweet-light/80 hover:text-sweet py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#changelog" 
            className="text-sweet-light/80 hover:text-sweet py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Changelog
          </a>
          <a 
            href="#download" 
            className="text-sweet-light/80 hover:text-sweet py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Download
          </a>
          <Button 
            className="w-full bg-hyper hover:bg-hyper-dark text-white mt-2"
            onClick={() => {
              window.open("https://github.com/Warrior-dev0/HyperOS_Ports", "_blank");
              setIsMenuOpen(false);
            }}
          >
            <DownloadIcon className="h-4 w-4 mr-2" />
            Get ROM
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
