import HeroPage from "@/components/HeroPage";
import HorizontalDivider from "@/components/HorizontalDivider";
import Navigation from "@/components/Navigation";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";

export default function Home() {
  return (
    <div>
      {/* TODO: Nav */}
      <Navigation/>
      <main className="pt-16 md:pt-13.75">
        {/* ================ Hero ================ */}
        <HeroPage/>
        <HorizontalDivider/>
        {/* ================ Alter Alley (Project 1) ================ */}
        {/* TODO: Giant label that says "Project work" */}
        <LargeCard title="Project: Alter Alley" 
          description="A website for artists to share alters of Magic the Gathering cards." 
          buttonText="Coming Soon"
          buttonDisabled={true}
          imageSrc="/alteralley-home.png"/>
        <HorizontalDivider/>
        {/* ================ Creative works ================ */}
        {/* TODO: Giant label that says "Creative work" */}
        <section>
          <div className="gap-8 flex flex-col md:flex-row md:justify-center
            max-w-400 mx-auto w-[80%]">
            {/* TODO: Image + text component for this section, to repeat 3x */}
            <MediumCard title="3D Animation" description="Short film development using Maya, Blender, and Adobe After Effects"/>
            <MediumCard title="2D Animation" description="TODO"/>
            <MediumCard title="Digital Paintings" description="TODOssssssssssssssssssssssssssssssssssss"/>
          </div>
        </section>
        <HorizontalDivider/>
        {/* ================ Experience ================ */}
        {/* TODO: Giant label that says "Experience" */}
        <section>
          <div className="gap-8 flex flex-col md:flex-row md:justify-center 
          max-w-400 mx-auto w-[80%]">
            <MediumCard compact={true} title="AWS" description="TODO"/>
            <MediumCard compact={true} title="Erie Insurance" description="TODO"/>
            {/* TODO: Card component for this section, to repeat 2x */}
          </div>
        </section>
        <HorizontalDivider/>
        {/* ================ About ================ */}
        <LargeCard title="About Me" description="TODO" textFirst={true}
         imageSrc2="/aboutme-pic3.jpg"
         imageSrc="/aboutme-pic4.jpg"
         />
      </main>
    </div>
  );
}
