"use client"
import HeroPage from "@/components/HeroPage";
import HorizontalDivider from "@/components/HorizontalDivider";
import Navigation from "@/components/Navigation";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import Marquee from "@/components/Marquee";
import TypingHeader from "@/components/TypingHeader";
import InteractivePortfolio from "@/components/InteractivePortfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-white bg-[radial-gradient(lightgray_1px,transparent_1px)] bg-size-[40px_40px]">
      {/* TODO: Nav */}
      <Navigation/>
      <main className="pt-16 md:pt-13.75">
        {/* ================ Hero ================ */}
        <section id="hero" className="overflow-x-hidden scroll-mt-16 md:scroll-mt-13.75">
          <HeroPage/>
        </section>
        <Marquee text="REACT TYPESCRIPT NEXTJS TAILWIND CSS HTML MOTION"/>
        {/* ================ Portfolio ================ */}
        <section id="portfolio" className="scroll-mt-16 md:scroll-mt-13.75">
          <TypingHeader text="PORTFOLIO"/>
          <LargeCard title="Project: Alter Alley" 
            description="A website for artists to share alters of Magic the Gathering cards." 
            imageSrc="/alteralley-home.png"
            imageClass="object-top-left"/>
          <HorizontalDivider/>
          <div className="gap-8 flex flex-col md:flex-row md:justify-center
            max-w-400 mx-auto w-[90%] md:h-180 md:max-h-[80vh]">
            <MediumCard title="Lost Home - Animated Short" description="Created using Maya and Adobe After Effects."
              imageSrc="/newhome-thumb.png"
              delayIndex={0}
              />
            <MediumCard title="Pim Sticker" description="Sticker designs inspired by Smiling Friends."
              imageSrc="/pim.png"
              delayIndex={1}
              />
            <MediumCard title="Charizard Fan Art" description="Submitted for 2024's Pokemon TCG Illustration Competition."
              imageSrc="/charizard.png"
              delayIndex={2}
              />
          </div>
        </section>
        <HorizontalDivider/>
        {/* ================ Experience ================ */}
        <section id="experience" className="scroll-mt-16 md:scroll-mt-13.75">
          <TypingHeader text="EXPERIENCE"/>
          <div className="gap-8 flex flex-col md:flex-row md:justify-center 
          max-w-400 mx-auto w-[90%] md:h-180 md:max-h-[80vh]">
            <MediumCard compact={true} title="AWS" 
              description="Software Development Engineer"
              imageSrc="/aws-logo.png"
              alt="AWS Logo"
              delayIndex={0}
              />
            <MediumCard compact={true} title="Erie Insurance" description="Software Engineering Intern"
              imageSrc="/erieinsurance-logo.png"
              alt="Erie Insurance Logo"
              delayIndex={1}
              />
          </div>
        </section>
        <HorizontalDivider/>
        {/* ================ About ================ */}
        <section>
          <TypingHeader text="ABOUT ME"/>
          <LargeCard title="About Me" textFirst={true}
           description="Hey, my name's Siyoung (see-young)! I graduated from Georgia Tech with a B.S. in Computer Science. "
           imageSrc2="/aboutme-pic3.jpg"
           imageSrc="/aboutme-pic4.jpg"
           />
        </section>
      </main>
    </div>
  );
}
