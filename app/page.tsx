import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";
import Description from "./skyfitness/Description";
import CelebrateAchievement from "./skyfitness/CelebrateAchievement";
export default function Home() {
  return (
    <main className="wrapper">
      <div className="grid md:grid-cols-2 mx-auto md:gap-0 gap-[2rem]">
      <div className="grid-cols-1 md:w-[70%] mx-auto mt-[4rem]">
        <h1 className="md:h6-bold md:text-start text-center w-[90%]  md:w-full h3-bold antialiased title2">Helps For Your Ideal Body Fitness</h1>
        <p className="p-regular-14 mt-6 md:mt-[1.5rem] antialiased">
          SkyFitness is a comprehensive body fitness platform that offers a wide range of workout routines, nutrition advice, 
          and personalized guidance. With our expert instructors and community support, you'll find the perfect balance of strength, flexibility, and endurance.
        </p>
        <div className="flex md:flex-row flex-col justify-start items-center gap-8 md:mt-8 mt-6">
            <Button>
              Get Started
            </Button>
            <div>
            <div className="inline-flex items-center gap-1"> <div className=" relative border border-black rounded-full p-4"> <p className="text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><FaCirclePlay/> </p>  </div> Watch Demo</div>
            </div>
        </div>
      </div>
      <div className="flex-1 sm:pl-8 col-span-1 mx-auto">
        <Image src="/workout6.jpg" alt="A lady working out" height={500} width={400} />
      </div>
      </div>
      <Description/>
      <CelebrateAchievement/>
    </main>
  );
}

