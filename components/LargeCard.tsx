// image space dimensions should define textbox height. Don't make redundant/conflicting dimension changes to text.
// image class only for image 1

import Image from "next/image";
import BasicButton from "./BasicButton";
import { motion } from "motion/react";

type LargeCardProps = {
  title: string;
  description: string;
  buttonText?: string;
  buttonDisabled?: boolean;
  imageSrc?: string;
  imageSrc2?: string;
  textFirst?: boolean;
  imageClass?: string;
}

export default function LargeCard({ title, description, buttonText, buttonDisabled, imageSrc="/temp.png", imageSrc2, textFirst=false, imageClass=""}: LargeCardProps) {
    return (
      <div className={`flex flex-col ${textFirst ? 'md:flex-row-reverse' : 'md:flex-row'} gap-4 md:gap-10
          max-w-400 mx-auto w-[90%] md:h-180 md:max-h-[80vh]`}>
        {/* --- Image --- */}
        {/* TODO: Alt text input */}
        <div className="md:basis-1/2 flex justify-center">
          <motion.div className="relative w-full aspect-7/5 md:m-auto rounded-xl shadow-md overflow-clip border-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
            viewport={{
              once: true,
              amount: 0.5
            }}
          >
            <Image 
              alt={"A grey and white image representing a lack of an image."} 
              src={imageSrc}
              className={`inset-0 object-cover z-6 ${imageSrc2 && "-mask-linear-70 mask-linear-from-48% mask-linear-to-52%"}
                ${imageClass}`}
              fill
            />
            {imageSrc2 &&
              <Image 
                alt={"A grey and white image representing a lack of an image."} 
                src={imageSrc2}
                className="object-cover z-5"
                fill
              />
            }
          </motion.div>
        </div>
        {/* --- Text --- */}
        <div className="md:basis-1/2 flex justify-center items-center">
          <div className="w-full h-fit text-center md:text-left flex flex-col md:justify-center gap-2 md:gap-4
          bg-white/80">
            <h2 className="text-2xl">{title}</h2>
            <h3 className="whitespace-pre-line">
              {description}
            </h3>
            {buttonText &&
              <div>
                <BasicButton text={buttonText}
                  disabled={buttonDisabled}
                  className={`bg-black text-white hover:bg-zinc-700 border-black hover:border-zinc-700`}/>
              </div>
            }
          </div>
        </div>
      </div>
    )
}