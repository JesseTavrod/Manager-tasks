import { ChangeEvent, FC, useState } from "react";

interface ICard {
  label: string;
  icon: string;
  color: string;
  background: string;
}

const Card: FC<ICard> = () => {
  const [open, setOpen] = useState(true);


  return <div>



  </div>;
};

export default Card;
