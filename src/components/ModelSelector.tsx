
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  DownloadIcon, 
  ImageIcon, 
  MessageCircleIcon, 
  HeartIcon, 
  ListOrderedIcon, 
  SmartphoneIcon,
  Smartphone
} from "lucide-react";
import CameraBump from "./CameraBump";

interface ModelLink {
  title: string;
  url: string;
  icon: React.ReactNode;
}

interface Model {
  id: string;
  name: string;
  codeName: string;
  description: string;
  links: ModelLink[];
}

const ModelSelector = () => {
  const models: Model[] = [
    {
      id: "sweet",
      name: "Redmi Note 10 Pro",
      codeName: "Sweet",
      description: "Experience premium HyperOS for Redmi Note 10 Pro with enhanced features and optimized performance.",
      links: [
        { title: "Download", url: "https://devuploads.com/sn5n70ibfg1j", icon: <DownloadIcon className="w-4 h-4" /> },
        { title: "Screenshots", url: "https://t.me/xiaomi_eu_ports/53", icon: <ImageIcon className="w-4 h-4" /> },
        { title: "Support", url: "https://t.me/XiaomiEUPortsGroup", icon: <MessageCircleIcon className="w-4 h-4" /> },
        { title: "Recommended Recovery", url: "https://t.me/xiaomi_eu_ports/31", icon: <HeartIcon className="w-4 h-4" /> },
        { title: "Installation Steps", url: "https://t.me/c/2301324998/8", icon: <ListOrderedIcon className="w-4 h-4" /> },
      ]
    },
    {
      id: "alioth",
      name: "POCO F3",
      codeName: "Alioth",
      description: "Coming soon - HyperOS optimized for POCO F3 with flagship performance and enhanced features.",
      links: []
    },
    {
      id: "munch",
      name: "POCO F4",
      codeName: "Munch",
      description: "Coming soon - HyperOS optimized for POCO F4 with premium experience and performance enhancements.",
      links: []
    }
  ];

  return (
    <section id="models" className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom relative">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <span className="badge-primary">MODELS</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-sweet mb-4"
          >
            <span className="text-gradient">HyperOS</span> Ports for All Models
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sweet-light/70 max-w-2xl mx-auto"
          >
            Select your device model to explore custom HyperOS builds with enhanced features and optimized performance.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Tabs defaultValue="sweet" className="w-full">
            <TabsList className="w-full max-w-3xl mx-auto flex mb-8 bg-white/60 p-1 rounded-xl backdrop-blur-sm border border-white/30">
              {models.map((model) => (
                <TabsTrigger 
                  key={model.id} 
                  value={model.id}
                  className="flex-1 data-[state=active]:bg-hyper data-[state=active]:text-white rounded-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Smartphone className="w-4 h-4" />
                    {model.name}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {models.map((model) => (
              <TabsContent key={model.id} value={model.id} className="focus-visible:outline-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="glass p-6 rounded-xl">
                      <h3 className="text-xl md:text-2xl font-semibold mb-3">
                        {model.name} <span className="text-hyper">({model.codeName})</span>
                      </h3>
                      <p className="text-sweet-light/70 mb-6">{model.description}</p>
                      
                      {model.links.length > 0 ? (
                        <div className="space-y-3">
                          {model.links.map((link, index) => (
                            <a 
                              key={index}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={cn(
                                "flex items-center gap-3 p-3 rounded-lg transition-all",
                                "hover:bg-white hover:shadow-md",
                                "bg-white/60 backdrop-blur-sm border border-white/30"
                              )}
                            >
                              <span className="bg-hyper/10 p-2 rounded-full text-hyper">
                                {link.icon}
                              </span>
                              <span className="font-medium text-sweet">{link.title}</span>
                            </a>
                          ))}
                        </div>
                      ) : (
                        <div className="flex justify-center mt-4">
                          <Button variant="outline" disabled className="bg-white/60">
                            <SmartphoneIcon className="w-4 h-4 mr-2" />
                            Coming Soon
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-center order-1 md:order-2">
                    <div className="relative">
                      <CameraBump variant="filled" animateStyle="float" className="text-hyper drop-shadow-lg" />
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-hyper/10 rounded-full filter blur-[50px]" />
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-hyper/20 rounded-full filter blur-[60px]" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default ModelSelector;
