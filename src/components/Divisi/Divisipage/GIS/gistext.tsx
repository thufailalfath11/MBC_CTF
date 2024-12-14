"use client";
import { TextGenerateEffect } from "../../../ui/text-generate-effect";

const words = `Divisi Geographic Information System (GIS) di Laboratorium Multimedia Application, Big Data, dan Cybersecurity (MBC) Telkom University berfokus pada penelitian dan pengembangan teknologi pemetaan serta analisis data geospasial. Divisi ini mendukung mahasiswa dalam mempelajari dan menerapkan konsep GIS untuk memecahkan berbagai masalah terkait lokasi, seperti perencanaan kota, manajemen sumber daya alam, dan analisis risiko bencana. Dengan menggunakan perangkat lunak seperti ArcGIS, QGIS, dan teknologi remote sensing, anggota divisi ini dapat mengasah keterampilan dalam pemrosesan, visualisasi, dan analisis data spasial. Selain berperan sebagai pusat riset, divisi ini juga berfungsi sebagai grup belajar, yang memfasilitasi diskusi dan kolaborasi antar mahasiswa untuk mengembangkan solusi inovatif yang relevan dengan kebutuhan industri dan pemerintah. Melalui pendekatan berbasis riset dan pembelajaran kolaboratif, divisi ini berupaya mencetak ahli GIS yang mampu memanfaatkan teknologi geospasial untuk mendukung pembangunan berkelanjutan di Indonesia.
`;

export function GIStext() {
  return (
    <TextGenerateEffect
      duration={2}
      filter={true}
      words={words}
      className={undefined}
    />
  );
}
