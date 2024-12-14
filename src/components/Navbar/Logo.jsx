import Image from "next/image";

export const Logo = () => (
  <>
    <Image
      src="/MBC.png" // Default logo for desktop
      width={150}
      height={100}
      alt="Logo"
      className="block cursor-pointer" // Hidden on mobile
    />
  </>
);
