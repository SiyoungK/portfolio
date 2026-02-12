export default function BasicButton({text}: {text: string}) {
    return (
        <button className="bg-black text-white py-2 px-5 w-[70%] md:w-auto rounded-xl hover:bg-zinc-700">
          {text}
        </button>
    )
}