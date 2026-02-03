import Image from "next/image";

export default function HeroPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-[85vh] max-w-400 mx-auto">
      {/* Text Section */}
      <div className="basis-1/2 my-auto">
        <div className="text-left p-10">
          <h1 className="text-7xl pb-4">Siyoung Kim</h1>
          <h3 className="pb-6">
            Frontend Web Developer & UI/UX Designer
          </h3>
          <div className="flex gap-4">
            <button className="bg-black text-white py-2 px-5 rounded-xl">Contact</button>
            <button className="bg-black text-white py-2 px-5 rounded-xl">Resume</button>
          </div>
        </div>
      </div>
      <div className="basis-1/2 my-auto">
        {/* Image Section */}
        <div className="static rounded-xl h-[527px] w-[826px] align-left drop-shadow-xl/50">
          <div className="absolute h-full w-full">
            <Image 
              alt="Alter Alley, a website for artists to share alters of Magic the Gathering cards." 
              src="/alteralley-home.png"
              className="mt-[32px] rounded-b-xl object-cover"
              fill={true}
              /> 
          </div>
          {/* Mac window bar */}
          {/* TODO: Replace with svg version to scale easily, and be more optimal than divs */}
          <div className="bg-white absolute h-[32px] w-full rounded-t-xl align-top drop-shadow-sm">
            <div className="flex gap-[6px] p-[12px]">
              <div className="bg-red-400 size-[9px] rounded-full"/>
              <div className="bg-yellow-400 size-[9px] rounded-full"/>
              <div className="bg-green-400 size-[9px] rounded-full"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}