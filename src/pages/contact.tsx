import { Profile } from "@/components/Contact/card";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Fade } from "react-awesome-reveal";

export default function Contact() {
  // URL file yang ingin di-download
 

  return (
    <WavyBackground
      className="max-w-screen mx-auto" // Pastikan lebar penuh dan sembunyikan overflow horizontal
      containerClassName="your-container-class" // Ganti dengan kelas kontainer yang diinginkan
      colors={[
        "#d93433",
        "#1e3f74",
        "#ffffff",
        "#d93433",
        "#1e3f74",
        "#3484bf",
      ]}
      waveWidth={50} // Sesuaikan lebar gelombang jika perlu
      backgroundFill="#0a0a0a" // Ganti dengan warna latar belakang yang diinginkan
    >
      <div className="relative cursor-default">
        <Fade duration={5000} triggerOnce>
          <Profile />
        </Fade>
        {/* Tombol Download */}
        
      </div>
    </WavyBackground>
  );
}
