import { DM_Sans } from "next/font/google";
import { ReactNode } from "react";
import { HyperTextDemo } from "./Hero/Motto";
import App from "./Navbar/Navbarnew";

interface LayoutProps {
  children: ReactNode;
}

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Layout = ({ children }: LayoutProps) => {
  return (
    //<APP/> adalah navbar
    <div className="bg-[#f5f9fd] dark:bg-[#0a0a0a] text-black dark:text-white">
      <App />
      <div className="px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32">
        <main className={`${dmSans.className} font-sans`}>{children}</main>
      </div>

      <div className="overflow-hidden">
        <div className="bg-gradient-to-t from-slate-900 dark:from-slate-900 to-transparent w-dvw pt-24">
          <div className="pb-12 pt-32 md:pt-64">
            <HyperTextDemo />
            <div className="flex flex-col justify-center items-center py-5">
              <h1 className="font-light font- mt-12 mb-2 text-white">
                Connect with us
              </h1>
              <div className="space-y-5">
                <a
                  href="https://www.instagram.com/mbclab/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className=" hover:opacity-55 rounded-xl p-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                      />
                    </svg>
                  </button>
                </a>

                <a
                  href="https://www.linkedin.com/company/mbclaboratory/mycompany/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className=" hover:opacity-55 rounded-xl p-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                      />
                    </svg>
                  </button>
                </a>
                <a
                  href="https://linevoom.line.me/user/_dYH8QGpqFCBt7_3T8iYwqIdq-8XKGFB9YMzQOCk?utm_medium=windows&utm_source=desktop&utm_campaign=OA_Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className=" hover:opacity-55 rounded-xl p-2  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M19.365 9.863a.631.631 0 0 1 0 1.261H17.61v1.125h1.755a.63.63 0 1 1 0 1.259h-2.386a.63.63 0 0 1-.627-.629V8.108c0-.345.282-.63.63-.63h2.386a.63.63 0 0 1-.003 1.26H17.61v1.125zm-3.855 3.016a.63.63 0 0 1-.631.627a.62.62 0 0 1-.51-.25l-2.443-3.317v2.94a.63.63 0 0 1-1.257 0V8.108a.627.627 0 0 1 .624-.628c.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63c.345 0 .63.285.63.63zm-5.741 0a.63.63 0 0 1-.631.629a.63.63 0 0 1-.627-.629V8.108c0-.345.282-.63.63-.63c.346 0 .628.285.628.63zm-2.466.629H4.917a.634.634 0 0 1-.63-.629V8.108c0-.345.285-.63.63-.63c.348 0 .63.285.63.63v4.141h1.756a.63.63 0 0 1 0 1.259M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608c.391.082.923.258 1.058.59c.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645c1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <h1 className="text-center font-thin text-xs pt-12  text-neutral-300 dark:text-neutral-500">
              © MBC Laboratory, 2024.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
