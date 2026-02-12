import Image from "next/image";
import BasicButton from "./BasicButton";

export default function ProjectExample() {
    return (
        <section className="py-2">
          {/* TODO: Alter Alley photo */}
          <div className="flex justify-center pb-4">
            <Image 
              alt="Alter Alley, a website for artists to share alters of Magic the Gathering cards." 
              src="/alteralley-home.png"
              className="rounded-xl object-cover shadow-md"
              width={300}
              height={300}
              /> 
          </div>
          <div className="text-center">
            <h2 className="text-2xl">Project: Alter Alley</h2>
            <h3 className="pb-4">
              TODO: Add project description here.
            </h3>
            <BasicButton text="View project"/>
            {/* TODO: Link to Alter Alley */}
          </div>
        </section>
    )
}