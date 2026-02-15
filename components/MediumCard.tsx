// Medium cards have an image, title, and description.
// Designed to be contained in a parent, which will handle the layout of multiple medium cards in a section.
import Image from "next/image"

type MediumCardProps = {
  imageSrc?: string;
  title: string;
  description: string;
  compact?: boolean;
}

export default function MediumCard({ imageSrc="/temp.png", title, description, compact=false }: MediumCardProps) {
    return (
        <div className="md:basis-1/3 flex justify-center wrap-break-word min-w-0">
          <div className="w-[90%] flex flex-col gap-4">
            {compact ?
            <>
              <div className="w-full aspect-5/6 flex flex-col rounded-xl overflow-hidden shadow-md">
                <div className="relative basis-1/2">
                  <Image 
                    alt={"TODO: alt text"} 
                    src={imageSrc}
                    className="object-cover"
                    fill
                  /> 
                </div>
                <div className="basis-1/2 p-4">
                  <h2>{title}</h2>
                <p className="text-sm text-gray-500">{description}</p>
                </div>
              </div>
            </>
            :
            <>
              {/* Image */}
              <div className="relative w-full aspect-5/6 shadow-md rounded-xl overflow-hidden">
                <Image 
                  alt={"TODO: alt text"} 
                  src={imageSrc}
                  className="object-cover"
                  fill
                  /> 
              </div>
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