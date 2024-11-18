"use client";
import { TextGenerateEffect } from "../../../ui/text-generate-effect";

const words = `belum ada isi teksnya
`;

export function PRAKtext() {
  return (
    <TextGenerateEffect
      duration={2}
      filter={true}
      words={words}
      className={undefined}
    />
  );
}
