import { ChangeEvent, FC, useState } from "react";
import styles from "./input.module.scss";

interface INavbar {
  menu?: [];
}

const Navbar: FC<INavbar> = () => {
  const [open, setOpen] = useState(true);

  const menus = [
    { title: "Dashboard", src: "", icon: "" },
    { title: "Settings", src: "", icon: "" },

    { title: "Reports", src: "", icon: "" },
    { title: "Tasks", src: "", icon: "" },
    { title: "Users", src: "", icon: "" },
    
    { title: "Log out", src: "", icon: "" },
  ];

  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } duration-300 h-screen bg-blue-950 relative`}
    >
      <div
        className={`
          flex items-center justify-center
          absolute cursor-pointer rounded-full
          -right-5 top-9 border-2 border-blue-950
          bg-white
          h-10 w-10
          `}
        onClick={() => setOpen(!open)}
      >
        <img
          src="../../src/assets/control.png"
          className={`
          w-2 h-auto
          ${!open && "rotate-180"}
          `}
          alt=""
        />
      </div>

      <div
        className={`
          ${!open && "scale-0"}
        `}
      >
        <div
          className="
          flex flex-col
          gap-y-4 items-center
          "
        >
          <img
            src="../../src/assets/user.jpg"
            className="w-36 rounded-full mt-7 duration-500"
          />

          <h2
            className={`text-white origin-left font-medium text-xl duration-300`}
          >
            Front End
          </h2>
        </div>

        <ul>
          {menus.map((menu, index) => (
            <li
              key={`link${index}`}
              className={`
                  text-gray-300 text-sm flex items-center
                  gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md
                `}
            >
              <img src={`../../src/assets/${menu.src}.png`} alt="" />
              <span> {menu.title} </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
