// components/ui/DivisionCard.tsx
import { CardSpotlight } from "@/components/ui/card-spotlight";

interface DivisionCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  url: string;
}

const DivisionCard: React.FC<DivisionCardProps> = ({
  icon,
  title,
  description,
  url,
}) => {
  return (
    <CardSpotlight className="h-auto w-full p-6 md:p-8 flex flex-col justify-between relative cursor-default">
      <div className="relative flex flex-col items-center">
        <div className="flex items-center justify-center pb-6 pt-6">{icon}</div>
        <h1 className="text-center font-bold text-xl md:text-2xl lg:text-3xl">
          {title}
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 mt-4 text-sm md:text-base lg:text-lg text-center px-4 md:px-6 mb-12">
          {description}
        </p>
      </div>
      <div className="absolute bottom-4 right-4 cursor-pointer p-6">
        <a href={url} className="text-gray-400 hover:text-white">
          See More
        </a>
      </div>
    </CardSpotlight>
  );
};

export default DivisionCard;
