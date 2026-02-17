// Only defines shape of buttons

type BasicButtonProps = {
    text: string;
    external?: boolean;
    href?: string;
    disabled?: boolean;
    className?: string;
}

export default function BasicButton({text, external=false, href="", disabled, className}: BasicButtonProps) {
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
          disabled={disabled}
          className={`${className} py-2 px-5 w-[70%] md:w-auto rounded-xl border-2
          disabled:pointer-events-none disabled:bg-gray-400 disabled:border-gray-400`}>
          {text}
        </button>
        
        }
      </>
    )
}