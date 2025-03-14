
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Changelog from "@/components/Changelog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen overflow-x-hidden"
    >
      <Header />
      <Hero />
      <Features />
      <Changelog />
      <Footer />
    </motion.div>
  );
};

export default Index;
