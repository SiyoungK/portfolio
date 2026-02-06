import Image from "next/image";

export default function ProjectExample() {
    return (
        <section className="py-6">
          {/* TODO: Alter Alley photo */}
          <div className="flex justify-center pb-6">
            <div>
              <Image 
                alt="Alter Alley, a website for artists to share alters of Magic the Gathering cards." 
                src="/alteralley-home.png"
                className="rounded-xl object-cover"
                width={300}
                height={300}
                /> 
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl">Project: Alter Alley</h2>
            <p>
              TODO: Add project description here.
            </p>
            {/* TODO: Link to Alter Alley */}
          </div>
        </section>
    )
}