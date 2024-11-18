"use client";
import { TextGenerateEffect } from "../../../ui/text-generate-effect";

const words = `Divisi Game Tech di Laboratorium Multimedia Application, Big Data, dan Cybersecurity (MBC) Telkom University berfokus pada penelitian dan pengembangan teknologi permainan yang mencakup aspek desain, pemrograman, serta optimasi game. Divisi ini memberikan wadah bagi mahasiswa untuk mendalami berbagai komponen teknologi game, mulai dari game engine seperti Unity dan Unreal Engine hingga teknik animasi, grafis 3D, dan virtual reality (VR). Selain menjadi ruang riset, divisi ini juga berfungsi sebagai grup belajar yang mendorong kolaborasi dalam mengembangkan game, baik yang bersifat edukatif, hiburan, maupun yang berkontribusi pada simulasi dan pelatihan. Dengan memadukan riset dan pembelajaran berbasis proyek, Divisi Game Tech bertujuan untuk melahirkan talenta muda yang kreatif dan terampil dalam menciptakan inovasi di industri game yang dinamis dan berkembang pesat.
`;

export function GTtext() {
  return (
    <TextGenerateEffect
      duration={2}
      filter={true}
      words={words}
      className={undefined}
    />
  );
}
