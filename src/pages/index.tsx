import Divisi from "@/components/Divisi/Divisi";
import { ImagesSliderDemo } from "@/components/Hero/imageslider";
import Intro from "@/components/Profile/intro";
import { TimelineDemo } from "@/components/Timeline/sejarah";
import VisiMisi from "@/components/VisiMisi/visimisi";
import { Fade, Slide } from "react-awesome-reveal";

export default function Home() {
  return (
    <>
      <main>
        <div className="-mx-4 sm:-mx-8 md:-mx-16 lg:-mx-32 xl:-pm-64">
          <ImagesSliderDemo />
        </div>
        {/* <WavyBackgroundDemo /> */}
        {/*Flagnya ini mah */}
        
        <section id="profile" className="pt-12" />
        <h1 className="text-center text-5xl font-normal my-24"> About Us</h1>
        <Slide direction="left">
          <Fade>
            <Intro />
          </Fade>
        </Slide>
        <section id="vision" className="pt-12" />
        <h1 className="text-center text-5xl font-normal my-24">
          Vision and Mission
        </h1>
        <Slide direction="right">
          <Fade>
            <VisiMisi />
          </Fade>
        </Slide>
        <section id="division" className="pt-12" />
        <h1 className="text-center text-5xl font-normal my-24"> Division</h1>

        <Fade>
          <Divisi />
        </Fade>
        
        <section id="history" className="pt-12" /> 
        <h1 id="Sejarah" className="text-center text-5xl font-normal mt-24">
          {" "}
          History
        </h1>
        <TimelineDemo />
      </main>
    </>
  );
}
