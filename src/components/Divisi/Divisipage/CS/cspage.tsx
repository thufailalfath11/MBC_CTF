import { CardSpotlight } from "@/components/ui/card-spotlight";
import { CStext } from "./cstext";

export function CSpage() {
  return (
    <>
      <CardSpotlight className="h-auto mx-4 my-12 p-4 sm:p-6 lg:p-8">
        <div className=" md:flex-row items-center relative">
          <div className="flex items-center justify-center h-full w-full pt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5em"
              height="5em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                color="currentColor"
              >
                <path d="M11.998 2c-2.85 0-4.697 2.019-6.882 2.755c-.888.3-1.333.449-1.512.66c-.18.21-.233.519-.338 1.135c-1.127 6.596 1.336 12.694 7.209 15.068c.631.255.947.382 1.526.382s.896-.128 1.527-.383c5.873-2.373 8.333-8.471 7.206-15.067c-.106-.616-.158-.925-.338-1.136s-.624-.36-1.512-.659C16.698 4.019 14.848 2 11.998 2" />
                <path d="M10.45 6.501V8.48m-3.487 1.521h2.052m5.971 0h2.052m-2.052 2.974h2.052m-10.075 0h2.052m1.435 1.545v1.98m3.025-1.98v1.98m-.01-9.999V8.48m-3.45 5.989h3.971a1 1 0 0 0 1-1V9.48a1 1 0 0 0-1-1h-3.971a1 1 0 0 0-1 1v3.989a1 1 0 0 0 1 1" />
              </g>
            </svg>
          </div>

          <h1 className="relative font-semibold text-5xl  text-center pt-6 pb-9">
            Cyber Security
          </h1>

          <div className="text-neutral-300 mt-4 relative z-20 text-lg text-justify px-4 sm:px-20 pb-6 ">
            <CStext />
          </div>
        </div>
      </CardSpotlight>
    </>
  );
}
