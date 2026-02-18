import { motion } from "motion/react";

type MarqueeProps = {
 text?: string, 
 repeatCount?: number 
 slope?: number // clamped to 2, -2, or 0
}

export default function Marquee({ text="Lorem Ipsum", repeatCount=8, slope=0 }: MarqueeProps) {
  const texts = Array(repeatCount).fill(text)
  const rotation = (slope >= 0) ? (slope > 0 ? "-rotate-2" : "") : "rotate-2"
  return (
    <div className="py-4 md:py-10 flex justify-center">
      <div className={`relative flex bg-black text-white font-doto ${rotation} w-full scale-110`}>
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: "-50%"}}
          transition={{
            duration: 200,
            repeat: Infinity,
            ease: "linear"
          }}
          >
          {texts.map((text) => (
            text + " • "
          ))}
          {texts.map((text) => (
            text + " • "
          ))}
        </motion.div>
      </div>
    </div>
  )
}