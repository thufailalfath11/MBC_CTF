import { CardSpotlight } from "@/components/ui/card-spotlight";
import Image from "next/image";

export function Profile() {

  return (
    <CardSpotlight className="h-fit mx-4 sm:mx-12 mb-12">
      <div>
        <div className="flex flex-col sm:flex-row justify-around items-center relative pb-10">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <Image
              src="/MBC.png"
              alt="MBC Laboratory Image"
              width={550}
              height={350}
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 mt-4 sm:mt-0">
            <Image
              src="/NCM.png"
              alt="NCM Laboratory Image"
              width={350}
              height={350}
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        <p className="text-neutral-500 dark:text-neutral-300 mt-4 relative z-20 text-lg text-justify px-4 sm:px-20 pb-6 ">
          MBC Laboratory, singkatan dari Multimedia, Big Data, dan Cyber
          Security Laboratory, merupakan salah satu entitas penelitian yang
          beroperasi di bawah Kementerian Komunikasi dan Multimedia (KK NCM).
          Fokus utama laboratorium ini adalah mempelajari dan mengembangkan
          pengetahuan di bidang Cyber Security, Big Data, dan Multimedia.
          Didirikan pada tanggal 4 Oktober 2019, MBC Laboratory telah menjadi
          pusat penelitian yang berdedikasi untuk memahami, mengatasi, dan
          mengembangkan solusi terkini dalam tiga bidang utamanya.
        </p>
        

        {/* <div className="absolute bottom-4 right-4  cursor-pointer p-6 mr-20">
          <a href={"/"} className="text-gray-400 hover:text-white">
            See More
          </a>
        </div> */}
      </div>
     
    </CardSpotlight>
  );
}
