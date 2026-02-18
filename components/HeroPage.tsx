// import Image from "next/image";
import BasicButton from "./BasicButton";
import { motion } from "motion/react";
import InteractivePortfolio from "./InteractivePortfolio";

export default function HeroPage() {
  return (
    // Took out md:h-180 for the rolodex
    <div className="relative max-w-400 h-180 md:grid md:grid-cols-2 md:max-h-[80vh] mx-auto">
      {/* Text */}
      <div className="md:basis-1/2 md:my-auto">
        <div className="mx-auto w-fit text-center md:text-left my-10 md:m-10 wrap-break-word">
          <div className="mb-6">
            <h1 className="bg-white/80 leading-tight inline w-fit text-7xl">
              Siyoung Kim
            </h1>
          </div>
          <div className="mb-6">
            <h3 className="bg-white/80 inline w-fit">
              Frontend Web Developer & UI/UX Designer
            </h3>
          </div>
          <div className="flex flex-col md:w-fit items-center md:flex-row md:justify-start gap-4">
            <BasicButton text="Contact" external={true} href="https://www.linkedin.com/in/siyoung/"
              className="hover:bg-zinc-700 text-white bg-black border-black hover:border-zinc-700"/>
            <BasicButton text="Resume" external={true} href="KimSiyoungResume2026.pdf"
              className="hover:bg-zinc-300 bg-white border-black"/>
          </div>
        </div>
      </div>
      {/* Rolodex */}
      <div className="md:basis-1/2 flex items-center justify-center">
        <motion.div className="aspect-square w-[80%] md:w-180"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
          >
          <InteractivePortfolio/>
        </motion.div>
      </div>
    </div>
  )
}