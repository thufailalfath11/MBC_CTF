import { CardSpotlight } from "@/components/ui/card-spotlight";
import { PRAKtext } from "./praktext";

export function PRAKpage() {
  return (
    <>
      <CardSpotlight className="h-auto mx-4 my-12 p-4 sm:p-6 lg:p-8">
        <div className=" md:flex-row items-center relative">
          <div className="flex items-center justify-center h-full w-full pt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5em"
              height="5em"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M11 21H9v-2a3.003 3.003 0 0 1 3-3h6v2h-6a1 1 0 0 0-1 1zm4-6a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m9 13a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m6 12h-2v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2h-2v-2a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3z"
              />
              <path
                fill="currentColor"
                d="m14 27.733l-5.234-2.79A8.99 8.99 0 0 1 4 17V4h20v6h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13a10.98 10.98 0 0 0 5.824 9.707L14 30Z"
              />
            </svg>
          </div>

          <h1 className="relative font-semibold text-5xl  text-center pt-6 pb-9">
            Data Security and Blockchain Practicum
          </h1>

          <div className="text-neutral-300 mt-4 relative z-20 text-lg text-justify px-4 sm:px-20 pb-6 ">
            <PRAKtext />
          </div>
        </div>
      </CardSpotlight>
    </>
  );
}
