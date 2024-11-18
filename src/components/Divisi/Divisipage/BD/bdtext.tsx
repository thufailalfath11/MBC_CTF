"use client";
import { TextGenerateEffect } from "../../../ui/text-generate-effect";

const words = `Divisi Big Data di Laboratorium Multimedia Application, Big Data, dan Cybersecurity (MBC) Telkom University berfokus pada penelitian dan pengembangan teknologi serta aplikasi data skala besar untuk mendukung pengambilan keputusan berbasis data. Divisi ini tidak hanya bertujuan untuk mengeksplorasi teknik pengolahan data yang efisien, seperti data mining, machine learning, dan data analytics, tetapi juga berfungsi sebagai grup belajar yang mendorong kolaborasi antar mahasiswa. Anggota divisi berkesempatan untuk mempelajari dan mengimplementasikan teknologi big data seperti Hadoop, Spark, dan NoSQL, serta mendiskusikan tren terkini dalam analisis data. Dengan pendekatan berbasis riset dan pembelajaran kolaboratif, divisi ini berupaya menghasilkan solusi inovatif yang dapat diaplikasikan di berbagai sektor industri, baik dalam konteks lokal maupun global.
`;

export function CStext() {
  return (
    <TextGenerateEffect
      duration={2}
      filter={true}
      words={words}
      className={undefined}
    />
  );
}
