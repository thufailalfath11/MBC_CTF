import { CardSpotlight } from "@/components/ui/card-spotlight";

export function Profile() {
  return (
    <CardSpotlight className="h-fit mx-4 sm:mx-12 mb-12 px-6  sm:p-6 lg:p-8">
      <p className="text-xl font-bold relative z-20 mt-2 "></p>

      <h1 className=" mt-4 relative z-20 text-2xl text-center font-bold">
        Visi
      </h1>
      <p className="text-neutral-500 dark:text-neutral-400 mt-4 relative z-20 text-lg text-justify sm:px-20">
        Menjadi Laboratorium unggulan dalam pengembangan teknologi Multimedia
        Application, Big Data, dan Cybersecurity dengan mendorong eksplorasi dan
        merancang riset yang memberikan dampak positif dan mengikuti
        perkembangan teknologi masa kini serta menjadi lingkungan yang
        membentuk, mematangkan, dan mempersiapkan skill asisten MBC Laboratory
        agar dapat bersaing di Industri.
        <br />
        <br />
        <span className="block text-center">
          “Inspirasi dari Legenda Gatot Kaca dan Kawah Candradimuka”
        </span>
      </p>

      <h1 className=" mt-4 relative z-20 text-2xl text-center font-bold">
        Misi
      </h1>
      <p className="text-neutral-500 dark:text-neutral-400 mt-4 relative z-20 text-lg text-justify sm:px-20">
        1. Menjadi lingkungan yang mendukung pembelajaran dan penelitian jangka
        panjang.
        <br />
        2. Menciptakan lingkungan yang fokus pada pertumbuhan pribadi dan
        profesional serta mendukung karier.
        <br />
        3. Menjadi pusat informasi Teknologi, Multimedia, dan Softskill yang
        berguna bagi mahasiswa.
        <br />
        <br />
        <span className="block text-center">
          “Work Life Balance bukan berarti melakukan sesuatu secara singkat
          namun efektif”
        </span>
      </p>
    </CardSpotlight>
  );
}
