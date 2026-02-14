// image space dimensions should define textbox height. Don't make redundant/conflicting dimension changes to text.

import Image from "next/image";
import BasicButton from "./BasicButton";

type LargeCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  textFirst?: boolean;
}

export default function LargeCard({ title, description, imageSrc, textFirst=false }: LargeCardProps) {
    return (
        <section>
          <div className={`flex flex-col ${textFirst ? 'md:flex-row-reverse' : 'md:flex-row'} gap-4 md:gap-10
              max-w-400 mx-auto w-[90%]`}>
            {/* --- Image --- */}
            {/* TODO: Alt text input */}
            <div className="md:basis-1/2 flex justify-center">
              <div className="relative w-full  aspect-7/5 md:m-auto">
                <Image 
                  alt={"A grey and white image representing a lack of an image."} 
                  src={imageSrc}
                  className="rounded-xl object-cover shadow-md"
                  fill
                />
              </div>
            </div>

            {/* --- Text --- */}
            <div className="md:basis-1/2 flex justify-center">
              <div className="w-full text-center md:text-left flex flex-col md:justify-center gap-2 md:gap-4">
                <h2 className="text-2xl">{title}</h2>
                <h3>
                  {description}
                </h3>
                <div>
                  <BasicButton text="View project"
                    className="bg-black text-white hover:bg-zinc-700 border-black hover:border-zinc-700"/>
                </div>
                {/* TODO: Link to Alter Alley */}
              </div>
            </div>
          </div>
        </section>
    )
}