import { motion } from "motion/react";

export default function Marquee({ text="Lorem Ipsum", repeatCount=8 }: { text?: string, repeatCount?: number }) {
  const texts = Array(repeatCount).fill(text)
  return (
    <div className="py-4 md:py-10 flex justify-center">
      <div className="relative flex bg-black text-white font-doto rotate-2 w-full scale-110">
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