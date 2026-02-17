// Medium cards have an image, title, and description.
// Designed to be contained in a parent, which will handle the layout of multiple medium cards in a section.
import { motion } from "motion/react";
import Image from "next/image"

type MediumCardProps = {
  imageSrc?: string;
  title: string;
  description: string;
  compact?: boolean;
  alt?: string;
  delayIndex?: number;
}

export default function MediumCard({ imageSrc="/temp.png", title, description, compact=false, alt="", delayIndex=0 }: MediumCardProps) {
    return (
        <div className="md:basis-1/3 flex justify-center wrap-break-word min-w-0">
          <div className="w-full flex flex-col gap-4">
            {compact ?
            <>
              <motion.div className="w-full aspect-5/6 flex flex-col rounded-xl overflow-hidden shadow-md md:my-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: delayIndex * 0.2
                }}
                viewport={{
                  once: true,
                  amount: 0.2
                }}
              >
                <div className="relative basis-1/2">
                  <Image 
                    alt={alt} 
                    src={imageSrc}
                    className="object-contain"
                    fill
                  /> 
                </div>
                <div className="basis-1/2 p-4">
                  <h2>{title}</h2>
                <p className="text-sm text-gray-500">{description}</p>
                </div>
              </motion.div>
            </>
            :
            <>
              {/* Image */}
              <motion.div className="relative w-full aspect-5/6 shadow-md rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: delayIndex * 0.2
                }}
                viewport={{
                  once: true,
                  amount: 0.2
                }}
              >
                <Image 
                  alt={alt} 
                  src={imageSrc}
                  className="object-cover"
                  fill
                  /> 
              </motion.div>
              {/* Text */}
              <div>
                <h2>{title}</h2>
                <p className="text-sm text-gray-500">{description}</p>
              </div>
            </>
            }
          </div>
        </div>
    )
}