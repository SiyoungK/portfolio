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
          <div className={`md:flex ${textFirst ? 'md:flex-row-reverse' : 'md:flex-row'} md:gap-4`}>
            {/* --- Image --- */}
            {/* TODO: Alt text input */}
            <div className="md:basis-1/2 flex justify-center pb-4">
              <Image 
                alt={"A grey and white image representing a lack of an image."} 
                src={imageSrc}
                className="rounded-xl object-cover shadow-md"
                width={300}
                height={300}
                /> 
            </div>

            {/* --- Text --- */}
            <div className="md:basis-1/2 text-center md:text-left md:flex md:flex-col md:justify-center gap-4">
              <h2 className="text-2xl">{title}</h2>
              <h3 className="pb-4">
                {description}
              </h3>
              <div>
                <BasicButton text="View project"
                  className="bg-black text-white hover:bg-zinc-700 border-black hover:border-zinc-700"/>
              </div>
              {/* TODO: Link to Alter Alley */}
            </div>
          </div>
        </section>
    )
}