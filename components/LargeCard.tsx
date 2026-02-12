import Image from "next/image";
import BasicButton from "./BasicButton";

type LargeCardProps = {
  title: string;
  description: string;
  imageSrc: string;
}

export default function LargeCard({ title, description, imageSrc }: LargeCardProps) {
    return (
        <section className="py-2">
          {/* TODO: Alt text input */}
          <div className="flex justify-center pb-4">
            <Image 
              alt={"A grey and white image representing a lack of an image."} 
              src={imageSrc}
              className="rounded-xl object-cover shadow-md"
              width={300}
              height={300}
              /> 
          </div>
          <div className="text-center">
            <h2 className="text-2xl">{title}</h2>
            <h3 className="pb-4">
              {description}
            </h3>
            <BasicButton text="View project"/>
            {/* TODO: Link to Alter Alley */}
          </div>
        </section>
    )
}