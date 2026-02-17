import Image from "next/image";
import BasicButton from "./BasicButton";
import { motion } from "motion/react";

export default function HeroPage() {
  return (
    <section className="overflow-x-hidden">
      <div className="relative max-w-400 md:grid md:grid-cols-2 md:h-180 md:max-h-[80vh] mx-auto">
        {/* Text */}
        <div className="md:basis-1/2 md:my-auto 
          bg-white/80"
          >
          <div className="text-center md:text-left py-10 md:p-10 wrap-break-word">
            <h1 className="text-7xl pb-6">Siyoung Kim</h1>
            <h3 className="pb-6">
              Frontend Web Developer & UI/UX Designer
            </h3>
            <div className="flex flex-col items-center md:flex-row md:justify-start gap-4">
              <BasicButton text="Contact" external={true} href="https://www.linkedin.com/in/siyoung/"
                className="hover:bg-zinc-700 text-white bg-black border-black hover:border-zinc-700"/>
              <BasicButton text="Resume" external={true} href="KimSiyoungResume2026.pdf"
                className="hover:bg-zinc-300 border-black"/>
            </div>
          </div>
        </div>
        {/* Image */}
        <motion.div className="md:pl-10 md:h-full flex justify-center md:justify-start md:basis-1/2 md:my-auto md:items-center md:overflow-x-hidden lg:overflow-visible"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
          >
          <div className="relative w-[80%] md:w-auto md:h-[90%] aspect-video overflow-clip shadow-xl
            border border-t-10 border-black rounded-sm
            md:border-2 md:border-t-35 md:rounded-xl">
            <Image 
              alt="Alter Alley, a website for artists to share alters of Magic the Gathering cards." 
              src="/alteralley-home.png"
              className="object-cover object-top-left"
              fill
              /> 
          </div>
        </motion.div>
      </div>
    </section>
  )
}