// Only defines shape of buttons

type BasicButtonProps = {
    text: string;
    external?: boolean;
    href?: string;
    className?: string;
}

export default function BasicButton({text, external=false, href="", className}: BasicButtonProps) {
    return (
      <>
      {external ? 
        <a href={href} target="_blank" rel="noopener noreferrer" 
          className={`${className} py-2 px-5 w-[70%] md:w-auto rounded-xl 
            border-2`}>
          {text}
        </a>
      :
        <button 
          className={`${className} py-2 px-5 w-[70%] md:w-auto rounded-xl 
            border-2`}>
          {text}
        </button>
        }
      </>
    )
}