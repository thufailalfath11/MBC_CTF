import { CardSpotlight } from "@/components/ui/card-spotlight";
import { CStext } from "./bdtext";

export function BDpage() {
  return (
    <>
      <CardSpotlight className="h-auto mx-4 my-12 p-4 sm:p-6 lg:p-8">
        <div className=" md:flex-row items-center relative">
          <div className="flex items-center justify-center h-full w-full pt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5em"
              height="5em"
              viewBox="0 0 256 256"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              >
                <path d="M 239.98507,55.993592 A 111.98507,39.994664 0 0 1 128,95.988256 111.98507,39.994664 0 0 1 16.01493,55.993592 111.98507,39.994664 0 0 1 128,15.998927 111.98507,39.994664 0 0 1 239.98507,55.993592 Z" />
                <path d="m 239.98507,199.97441 a 111.98507,39.994664 0 0 1 -55.99253,34.63639 111.98507,39.994664 0 0 1 -111.985079,0 111.98507,39.994664 0 0 1 -55.992531,-34.6364" />
                <path d="m 239.98507,151.9808 a 111.98507,39.994664 0 0 1 -55.99253,34.6364 111.98507,39.994664 0 0 1 -111.985079,-1e-5 A 111.98507,39.994664 0 0 1 16.01493,151.9808" />
                <path d="m 239.98507,103.9872 a 111.98507,39.994664 0 0 1 -55.99253,34.6364 111.98507,39.994664 0 0 1 -111.985079,0 111.98507,39.994664 0 0 1 -55.992531,-34.6364" />
                <path d="M 16.01493,55.99377 V 199.97441" />
                <path d="M 239.98507,55.993592 V 199.97441" />
              </g>
            </svg>
          </div>

          <h1 className="relative font-semibold text-5xl  text-center pt-6 pb-9">
            Big Data
          </h1>

          <div className="text-neutral-300 mt-4 relative z-20 text-lg text-justify px-4 sm:px-20 pb-6 ">
            <CStext />
          </div>
        </div>
      </CardSpotlight>
    </>
  );
}
