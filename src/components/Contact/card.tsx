import { CardSpotlight } from "@/components/ui/card-spotlight";

export function Profile() {
  const fileUrl = "/crpto/crpto.py";  // Ganti dengan URL file yang sesuai
  const fileName = "crypto.py";  // Nama file yang akan didownload
  const kripto = "{Nynu_Xrgrzh_yntv_xnaa_pnev_yntv_qnu}";
  return (
    <>
      <h1 className="relative font-bold text-3xl  text-center mt-16 ">
        Kunjungi Laboratorium kami{" "}
      </h1>
      <CardSpotlight className="h-auto mx-4 my-12 p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col md:flex-row items-center relative">
          <div className="pl-0  md:pl-12 max-w-full md:max-w-[900px] w-full ">
            <div
              className="relative w-full h-0 "
              style={{ paddingBottom: "56.25%" }} // 16:9 Aspect Ratio
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.338981620444!2d107.6255820757401!3d-6.969276668241611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9bc3974981d%3A0x613eec0feec9fcf7!2sTelkom%20University%20Landmark%20Tower%20(TULT)!5e0!3m2!1sid!2sid!4v1728920185527!5m2!1sid!2sid"
                className="absolute top-0 left-0 w-full h-full rounded-3xl p-4"
                style={{
                  border: "0",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="py-5 text-neutral-500 dark:text-neutral-300 text-justify font-extralight max-w-[900px] p-6">
              Telkom University, TULT 13.04, TULT 11.12, Jl. Telekomunikasi. 1,
              Terusan Buahbatu - Bojongsoang, Telkom University, Sukapura, Kec.
              Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257
            </div>
          </div>

          <div className="flex flex-col items-center  md:mt-0 md:-translate-y-12 pl-0 md:pl-24 pr-0 md:pr-12">
            <div className="space-y-5">
              <a
                href="https://www.instagram.com/mbclab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex hover:opacity-55 rounded-xl p-2 w-[200px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                    />
                  </svg>
                  <span className="px-5 pt-1 ">Instagram</span>
                </button>
              </a>
              <a
                href="https://www.linkedin.com/company/mbclaboratory/mycompany/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex hover:opacity-55 rounded-xl p-2 w-[200px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                    />
                  </svg>
                  <span className="px-5 pt-1">Linked In</span>
                </button>
              </a>
              <a
                href="https://linevoom.line.me/user/_dYH8QGpqFCBt7_3T8iYwqIdq-8XKGFB9YMzQOCk?utm_medium=windows&utm_source=desktop&utm_campaign=OA_Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex hover:opacity-55 rounded-xl p-2 w-[200px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19.365 9.863a.631.631 0 0 1 0 1.261H17.61v1.125h1.755a.63.63 0 1 1 0 1.259h-2.386a.63.63 0 0 1-.627-.629V8.108c0-.345.282-.63.63-.63h2.386a.63.63 0 0 1-.003 1.26H17.61v1.125zm-3.855 3.016a.63.63 0 0 1-.631.627a.62.62 0 0 1-.51-.25l-2.443-3.317v2.94a.63.63 0 0 1-1.257 0V8.108a.627.627 0 0 1 .624-.628c.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63c.345 0 .63.285.63.63zm-5.741 0a.63.63 0 0 1-.631.629a.63.63 0 0 1-.627-.629V8.108c0-.345.282-.63.63-.63c.346 0 .628.285.628.63zm-2.466.629H4.917a.634.634 0 0 1-.63-.629V8.108c0-.345.285-.63.63-.63c.348 0 .63.285.63.63v4.141h1.756a.63.63 0 0 1 0 1.259M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608c.391.082.923.258 1.058.59c.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645c1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"
                    />
                  </svg>
                  <span className="px-5 pt-1">@sok8073r</span>
                </button>
               
              </a>
              <a
                href="https://linevoom.line.me/user/_dYH8QGpqFCBt7_3T8iYwqIdq-8XKGFB9YMzQOCk?utm_medium=windows&utm_source=desktop&utm_campaign=OA_Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex hover:opacity-55 rounded-xl p-2 w-[200px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19.365 9.863a.631.631 0 0 1 0 1.261H17.61v1.125h1.755a.63.63 0 1 1 0 1.259h-2.386a.63.63 0 0 1-.627-.629V8.108c0-.345.282-.63.63-.63h2.386a.63.63 0 0 1-.003 1.26H17.61v1.125zm-3.855 3.016a.63.63 0 0 1-.631.627a.62.62 0 0 1-.51-.25l-2.443-3.317v2.94a.63.63 0 0 1-1.257 0V8.108a.627.627 0 0 1 .624-.628c.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63c.345 0 .63.285.63.63zm-5.741 0a.63.63 0 0 1-.631.629a.63.63 0 0 1-.627-.629V8.108c0-.345.282-.63.63-.63c.346 0 .628.285.628.63zm-2.466.629H4.917a.634.634 0 0 1-.63-.629V8.108c0-.345.285-.63.63-.63c.348 0 .63.285.63.63v4.141h1.756a.63.63 0 0 1 0 1.259M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608c.391.082.923.258 1.058.59c.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645c1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"
                    />
                  </svg>
                 
                </button>
               
              </a>
              <div className="mt-8 text-center">
              <h3 className="px-5 pt-1">ZOP2024{kripto}</h3>
          <a 
          
            href={fileUrl} 
            download={fileName} 
            className="inline-block px-6 py-3 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Download File
          </a>
        </div>
            </div>
          </div>
        </div>
      </CardSpotlight>
    </>
  );
}
