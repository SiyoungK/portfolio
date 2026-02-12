import HeroPage from "@/components/HeroPage";
import HorizontalDivider from "@/components/HorizontalDivider";
import Navigation from "@/components/Navigation";
import LargeCard from "@/components/LargeCard";

export default function Home() {
  return (
    <div >
      {/* TODO: Nav */}
      <Navigation/>
      <main className="pt-16 md:pt-13.75">
        {/* ================ Hero ================ */}
        <HeroPage/>
        <HorizontalDivider/>
        {/* ================ Alter Alley (Project 1) ================ */}
        {/* TODO: Giant label that says "Project work" */}
        <LargeCard title="Project: Alter Alley" description="A website for artists to share alters of Magic the Gathering cards." imageSrc="/alteralley-home.png"/>
        <HorizontalDivider/>
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
        <LargeCard title="About Me" description="TODO" imageSrc="/alteralley-home.png"/>
      </main>
      {/* TODO: Footer */}
    </div>
  );
}
