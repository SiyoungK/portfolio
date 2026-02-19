import Image from "next/image"

export default function CornersOverlay() {
  return (
    <div className="hidden md:block pointer-events-none">
      <div className="fixed w-full h-full flex flex-col justify-between z-20">
        {/* Upper */}
        <div className="flex justify-between">
          <div className="p-2">
            <Image src="favicon.ico" alt="logo of a crocodile head" width={32} height={32}/>
          </div>
          <div className="p-2 -scale-x-100">
            <Image src="favicon.ico" alt="logo of a crocodile head" width={32} height={32}/>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="p-2">
            <Image src="favicon.ico" alt="logo of a crocodile head" width={32} height={32}/>
          </div>
          <div className="p-2 -scale-x-100">
            <Image src="favicon.ico" alt="logo of a crocodile head" width={32} height={32}/>
          </div>
        </div>
      </div>
    </div>
  )
}