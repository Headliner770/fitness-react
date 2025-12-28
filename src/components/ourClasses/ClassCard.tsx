import React from "react";

type Props = {
  title: string;
  image: string;
  description?: string;
};

const ClassCard = ({ title, image, description }: Props) => {
  return (
    <div className="w-full max-w-[450px] mx-auto h-[380px] px-4 sm:px-0 relative cursor-pointer">
      <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center px-5 bg-primary-500 text-white text-center opacity-0 hover:opacity-90 focus-within:opacity-90 mobile-show-overlay transition-all duration-300 ease-in-out">
        <p className="text-2xl font-semibold">{title}</p>
        {description && <p className="mt-5 text-sm">{description}</p>}
      </div>
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover object-center rounded-md shadow-md"
      />
    </div>
  );
};

export default ClassCard;
