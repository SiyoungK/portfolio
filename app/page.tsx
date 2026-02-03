import HeroPage from "@/components/HeroPage";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div >
      {/* TODO: Nav */}
      <Navigation/>
      <main className="pt-[55px]">
        {/* ================ Hero ================ */}
        <HeroPage/>

        {/* ================ Alter Alley (Project 1) ================ */}
        {/* TODO: Giant label that says "Project work" */}
        <section>
          {/* TODO: Alter Alley photo */}
          <div>
            <h2 className="text-2xl">Project: Alter Alley</h2>
            <p>
              TODO: Add project description here.
            </p>
            {/* TODO: Link to Alter Alley */}
          </div>
        </section>

        {/* ================ Creative works ================ */}
        {/* TODO: Giant label that says "Creative work" */}
        <section>
          {/* TODO: Image + text component for this section, to repeat 3x */}
        </section>

        {/* ================ Experience ================ */}
        {/* TODO: Giant label that says "Experience" */}
        <section>
          {/* TODO: Card component for this section, to repeat 2x */}
        </section>

        {/* ================ About ================ */}
        <section>
          <h2>About Me</h2>
          <p>
            TODO: Add about me description here.
          </p>
        </section>

      </main>
      {/* TODO: Footer */}
    </div>
  );
}
