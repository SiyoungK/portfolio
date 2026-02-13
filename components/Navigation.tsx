export default function Navigation() {
  return (
    <nav className="flex justify-center">
      <div className="bg-black flex fixed justify-between w-[70%] my-5 mx-auto p-2 rounded-xl z-9999">
        {/* Logo */}
        <button className="text-white py-2 px-5 rounded-xl">
            SK
        </button>
        {/* Links */}
        <div className="flex space-x-4">
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
            <button className="bg-white text-black py-2 px-5 rounded-xl">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}