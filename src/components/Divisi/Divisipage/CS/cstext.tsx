"use client";
import { TextGenerateEffect } from "../../../ui/text-generate-effect";

const words = `Divisi Riset Cyber Security di Laboratorium Multimedia Application,Big Data, dan Cybersecurity (MBC) Telkom University merupakan kelompok yang berfokus pada penelitian dan pengembangan di bidang keamanan siber. Divisi ini bertujuan untuk memperkuat kemampuan teknis serta memperdalam pengetahuan mahasiswa dalam menghadapi ancaman siber yang semakin kompleks. Selain melakukan riset, divisi ini juga berperan sebagai grup belajar, dimana anggota dapat berbagi wawasan, memecahkan masalah, dan berkolaborasi dalam berbagai proyek yang mencakup topik-topik seperti analisis malware, keamanan jaringan, kriptografi, dan forensik digital. Dengan menggabungkan riset dan pembelajaran kolaboratif, divisi ini berkontribusi dalam mencetak ahli keamanan siber yang siap menghadapi tantangan industri dan mendukung perkembangan keamanan teknologi informasi di Indonesia.
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
