import { motion } from "motion/react"

export default function TypingHeader({ text }: { text: string }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.14
      }
    }
  }

  const letterVariants = {
    hidden: { display: "none" },
    visible: { 
      display: "inline",
      transition: { duration: 0 }
    }
  }

  return (
    <div className="max-w-400 mx-auto w-[90%] text-center md:text-left">
      <motion.h2
        className="w-fit flex"
        initial="hidden"
        variants={containerVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.8}}
      >
        {text.split("").map((char, index) => (
          <motion.span
            className="text-[3rem] md:text-[5rem]"
            key={index}
            variants={letterVariants}
          >
            {char === " " ? "_" : char}
          </motion.span>
        ))}
        <motion.div
          className="bg-black w-0.5 h-15 md:h-25 my-auto"
          animate={{
            opacity: [1, 1, 0, 0]
          }}
          transition={{
            repeat: Infinity,
            delay: 0.2 + 0.14 * text.split("").length,
            duration: 1,
            times: [0, 0.5, 0.5, 1],
            ease: "linear"
          }}
        />
      </motion.h2>
      
    </div>
  )
}