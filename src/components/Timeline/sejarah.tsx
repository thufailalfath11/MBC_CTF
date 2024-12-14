import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2019",
      content: (
        <div>
          <h1 className=" dark:text-neutral-200 text-2xl sm:text-5xl  font-normal mb-8">
            MBC Laboratory Berdiri
          </h1>
          <div className="grid grid-cols-2 gap-12">
            <Image
              src="/MBC.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover  w-full "
            />
            <Image
              src="/NCM.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover  w-full "
            />
          </div>
          <p className="py-12 text-neutral-500">
            MBC Laboratory didirikan di bawah naungan Kementerian Komunikasi dan
            Multimedia (KK NCM) dengan fokus pada tiga bidang utama: Cyber
            Security, Big Data, dan Multimedia.
          </p>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <h1 className=" dark:text-neutral-200 text-2xl sm:text-5xl  font-normal mb-8">
            Kolaborasi dan Integrasi Pengetahuan
          </h1>

          <p className="py-12 text-neutral-500">
            MBC Laboratory menjadi wadah kolaboratif bagi peneliti, akademisi,
            dan profesional. Kolaborasi antar divisi meningkat, memungkinkan
            integrasi pengetahuan dan keahlian dalam pengembangan solusi lintas
            disiplin.
          </p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <h1 className=" dark:text-neutral-200 text-2xl sm:text-5xl  font-normal mb-8">
            Pengembangan Seluruh Divisi
          </h1>

          <p className="py-12 text-neutral-500">
            MBC Laboratory memantapkan seluruh divisi, melakukan studi mendalam
            tentang masing-masing bidang yang ditekuni
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <>
          <div>
            <h1 className=" dark:text-neutral-200 text-2xl sm:text-5xl  font-normal mb-8">
              Pusat Penelitian Unggulan
            </h1>

            <p className="py-12 text-neutral-500">
              MBC Laboratory berkembang menjadi pusat penelitian unggulan yang
              memimpin dalam pemahaman dan penanganan tantangan kompleks dalam
              Cyber Security, Big Data, dan Multimedia.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Seterusnya",
      content: (
        <div>
          <h1 className=" dark:text-neutral-200 text-2xl sm:text-5xl  font-normal mb-8">
            Inovasi dan Kontribusi pada Era Digital
          </h1>

          <p className="py-12 text-neutral-500">
            MBC Laboratory terus berkomitmen untuk menyediakan solusi inovatif
            melalui riset dan pengembangan. Garda terdepan dalam memberikan
            kontribusi pada perkembangan teknologi dan keamanan di era digital
            yang terus berkembang.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className=" w-full ">
      <Timeline data={data} />
    </div>
  );
}
