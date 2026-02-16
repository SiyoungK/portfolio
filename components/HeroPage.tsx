import Image from "next/image";
import BasicButton from "./BasicButton";

export default function HeroPage() {
  return (
    <section className="overflow-x-hidden">
      <div className="relative max-w-400 md:grid md:grid-cols-2 md:h-180 md:max-h-[80vh] mx-auto">
        {/* Gradient */}
        <div className="absolute -z-10 bg-radial from-indigo-400 to-transparent to-70% blur-2xl
        w-[90%] h-[35%] bottom-0 left-0 right-0 m-auto
        md:w-[40%] md:h-[75%] md:top-0 md:left-3/7 md:right-auto"/>
        {/* Text */}
        <div className="md:basis-1/2 md:my-auto">
          <div className="text-center md:text-left py-10 md:p-10 wrap-break-word">
            <h1 className="text-7xl pb-4">Siyoung Kim</h1>
            <h3 className="pb-6">
              Frontend Web Developer & UI/UX Designer
            </h3>
            <div className="flex flex-col items-center md:flex-row md:justify-start gap-4">
              <BasicButton text="Contact" external={true} href="https://www.linkedin.com/in/siyoung/"
                className="hover:bg-zinc-700 text-white bg-black border-black hover:border-zinc-700"/>
              <BasicButton text="Resume" external={true} href="KimSiyoungResume2026.pdf"
                className="hover:bg-zinc-300 border-black"/>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="md:pl-10 md:h-full flex justify-center md:justify-start md:basis-1/2 md:my-auto md:items-center md:overflow-x-hidden lg:overflow-visible">
          <div className="relative w-[80%] md:w-auto md:h-[90%] aspect-video overflow-clip shadow-xl
            border border-t-10 border-black rounded-sm
            md:border-3 md:border-t-35 md:rounded-xl">
            <Image 
              alt="Alter Alley, a website for artists to share alters of Magic the Gathering cards." 
              src="/alteralley-home.png"
              className="object-cover object-top-left"
              fill
              /> 
          </div>
        </div>
      </div>
    </section>
  )
}