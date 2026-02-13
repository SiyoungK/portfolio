import Image from "next/image";
import BasicButton from "./BasicButton";

export default function HeroPage() {
  return (
    <section className="py-2 md:grid md:grid-cols-2 md:h-[85vh] max-w-400 mx-auto">
      {/* Text Section */}
      <div className="md:basis-1/2 md: my-auto">
        <div className="text-center md:text-left py-10 md:p-10">
          <h1 className="text-7xl pb-4">Siyoung Kim</h1>
          <h3 className="pb-6">
            Frontend Web Developer & UI/UX Designer
          </h3>
          <div className="flex flex-col items-center md:flex-row md:justify-start gap-4">
            <BasicButton text="Contact"/>
            <BasicButton text="Resume"/>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:basis-1/2 md:my-auto">
          <Image 
            alt="Alter Alley, a website for artists to share alters of Magic the Gathering cards." 
            src="/alteralley-home.png"
            className="rounded-xl object-cover shadow-md"
            width={300}
            height={300}
            /> 
      </div>
    </section>
  )
}