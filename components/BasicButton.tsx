// Put button in a div to prevent it from stretching when used in a flex container

type BasicButtonProps = {
    text: string;
    external?: boolean;
    href?: string;
}

export default function BasicButton({text, external=false, href=""}: BasicButtonProps) {
    return (
      <>
      {external ? 
        <a href={href} target="_blank" rel="noopener noreferrer" 
          className="bg-black text-white py-2 px-5 w-[70%] md:w-auto rounded-xl hover:bg-zinc-700">
          {text}
        </a>
      :
        <button 
          className="bg-black text-white py-2 px-5 w-[70%] md:w-auto rounded-xl hover:bg-zinc-700">
          {text}
        </button>
        }
      </>
    )
}