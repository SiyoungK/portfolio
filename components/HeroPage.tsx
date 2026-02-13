import Image from "next/image";
import BasicButton from "./BasicButton";

export default function HeroPage() {
  return (
    <section className="overflow-x-hidden">
      {/* Text */}
      <div className="max-w-400 md:grid md:grid-cols-2 md:h-180 md:max-h-[70vh] mx-auto ">
        <div className="md:basis-1/2 md:my-auto">
          <div className="text-center md:text-left py-10 md:p-10 wrap-break-word">
            <h1 className="text-7xl pb-4">Siyoung Kim</h1>
            <h3 className="pb-6">
              Frontend Web Developer & UI/UX Designer
            </h3>
            <div className="flex flex-col items-center md:flex-row md:justify-start gap-4">
              <BasicButton text="Contact" external={true} href="https://www.linkedin.com/in/siyoung/"/>
              <BasicButton text="Resume" external={true} href="KimSiyoungResume2026.pdf"/>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="px-2 md:h-full flex justify-center md:justify-start md:basis-1/2 md:my-auto md:items-center md:overflow-x-hidden lg:overflow-visible">
          <div className="relative w-[80%] md:w-auto md:h-[90%] aspect-video rounded-xl shadow-md/50 overflow-clip">
              <Image 
              alt="Alter Alley, a website for artists to share alters of Magic the Gathering cards." 
              src="/AlterAlleyHome.png"
              className="object-cover object-top-left"
              fill
              /> 
          </div>
        </div>
      </div>
    </section>
  )
}