// Medium cards have an image, title, and description.
// Designed to be contained in a parent, which will handle the layout of multiple medium cards in a section.
import Image from "next/image"

type MediumCardProps = {
  imageSrc: string;
  title: string;
  description: string;
}

export default function MediumCard({ imageSrc, title, description }: MediumCardProps) {
    return (
        <div className="flex justify-center">
          <div className="w-[90%] md:w-100 flex flex-col gap-4">
            {/* Image */}
            <div className="relative w-full aspect-5/6">
              <Image 
                alt={"TODO: alt text"} 
                src={imageSrc}
                className="rounded-xl object-cover shadow-md"
                fill
                /> 
            </div>
            {/* Text */}
            <div>
              <h2>{title}</h2>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </div>
        </div>
    )
}