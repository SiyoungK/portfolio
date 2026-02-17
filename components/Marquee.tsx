import { motion } from "motion/react";

export default function Marquee({ text }: { text: string }) {
  const texts = Array(8).fill(text)
  return (
    <div className="py-4 md:py-0">
      <div className="relative flex overflow-hidden bg-black text-white font-doto rotate-2 scale-110">
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