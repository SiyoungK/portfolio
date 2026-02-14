import BasicButton from "./BasicButton";

export default function Navigation() {
  return (
    <nav className="flex justify-center">
      <div className="bg-black flex fixed justify-between w-[80%] md:w-[50%] my-5 mx-auto p-2 rounded-xl z-9999">
        {/* Logo */}
        <button className="text-white py-2 px-5 rounded-xl">
            SK
        </button>
        {/* Links */}
        <div className="flex space-x-4 items-center">
          <div className="hidden md:block">
            <button className="text-white py-2 px-5 rounded-xl">
              Projects
            </button>
            <button className="text-white py-2 px-5 rounded-xl">
              Artwork
            </button>
            <button className="text-white py-2 px-5 rounded-xl">
              Experience
            </button>
            <button className="text-white py-2 px-5 rounded-xl">
              About
            </button>
          </div>
          <div>
            <BasicButton text="Contact" external={true} href="https://www.linkedin.com/in/siyoung/" 
              className="text-black bg-white hover:bg-zinc-300 border-white hover:border-zinc-300"/>
          </div>
        </div>
      </div>
    </nav>
  )
}