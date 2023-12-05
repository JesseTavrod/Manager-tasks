import { FC } from "react";

interface ICard {
  label: string;
  icon: string;
  color: string;
  background: string;
}

const Card: FC<ICard> = ({ label, icon, color, background }) => {
  return (
    <>
      <div
        className="w-100 flex-1 flex flex-col items-center justify-center h-32 rounded-md" 
        style={{
          background: background,
        }}
      >
        <img className="h-8" src={`../../src/assets/${icon}.png`} alt="" />

        <h2
          className="mt-4 text-lg font-semibold text-1xl"
          style={{
            color: color,
          }}
        >
          {label}{" "}
        </h2>
      </div>
    </>
  );
};

export default Card;
