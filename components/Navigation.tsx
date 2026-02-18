import BasicButton from "./BasicButton";

export default function Navigation() {
  return (
    <nav className="flex justify-center">
      <div className="bg-white border-2 border-black flex fixed justify-between w-[80%] md:w-[50%] my-5 mx-auto p-2 rounded-xl z-9999">
        {/* Logo */}
        <button className="text-black py-2 px-5 rounded-xl">
            SK
        </button>
        {/* Links */}
        <div className="flex space-x-4 items-center">
          <div className="hidden md:block">
            <a
              href="#portfolio" 
              className="text-black py-2 px-5 rounded-xl"
            >
              Portfolio
            </a>
            <a 
              href="#experience"
              className="text-black py-2 px-5 rounded-xl"
            >
              Experience
            </a>
          </div>
          <div>
            <BasicButton text="Contact" external={true} href="https://www.linkedin.com/in/siyoung/" 
              className="text-black bg-white hover:bg-zinc-300 border-black hover:border-zinc-300"/>
          </div>
        </div>
      </div>
    </nav>
  )
}