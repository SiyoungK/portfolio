import Image from "next/image";

export default function HeroPage() {
  return (
    <section className="pb-10 md:grid md:grid-cols-2 md:h-[85vh] max-w-400 mx-auto">
      {/* Text Section */}
      <div className="md:basis-1/2 md: my-auto">
        <div className="text-center md:text-left py-10 md:p-10">
          <h1 className="text-7xl pb-4">Siyoung Kim</h1>
          <h3 className="pb-6">
            Frontend Web Developer & UI/UX Designer
          </h3>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-black text-white py-2 px-5 rounded-xl">Contact</button>
            <button className="bg-black text-white py-2 px-5 rounded-xl">Resume</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:basis-1/2 md:my-auto">
        <div>
          <Image 
            alt="Alter Alley, a website for artists to share alters of Magic the Gathering cards." 
            src="/alteralley-home.png"
            className="rounded-xl object-cover"
            width={300}
            height={300}
            /> 
        </div>
        {/* Image */}
        {/* <div className="md:static rounded-xl max-w-[90vw] h-[40vh] md:h-[527px] md:w-[826px] md:align-left drop-shadow-xl/50">
          <div className="md:absolute">
            <Image 
              alt="Alter Alley, a website for artists to share alters of Magic the Gathering cards." 
              src="/alteralley-home.png"
              className="md:mt-[32px] rounded-b-xl object-cover"
              fill={true}
              /> 
          </div> */}
          {/* Mac window bar */}
          {/* TODO: Replace with svg version to scale easily, and be more optimal than divs */}
          {/* <div className="bg-white absolute h-[32px] w-full rounded-t-xl align-top drop-shadow-sm">
            <div className="flex gap-[6px] p-[12px]">
              <div className="bg-red-400 size-[9px] rounded-full"/>
              <div className="bg-yellow-400 size-[9px] rounded-full"/>
              <div className="bg-green-400 size-[9px] rounded-full"/>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}