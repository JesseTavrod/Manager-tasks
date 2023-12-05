import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface INavbar {
  menu?: [];
}

const Navbar: FC<INavbar> = () => {
  const [open, setOpen] = useState(true);

  const menus = [
    { title: "Dashboard", icon: "dashboard", src: "/" },
    { title: "Settings",  icon: "settings", src: "settings" },

    { title: "Reports", icon: "reports", src: "reports", gap: true },
    { title: "Tasks", icon: "task", src: "tasks" },
    { title: "Users", icon: "users", src: "users" },
    
    { title: "Log out", icon: "logout", src: "/", gap: true },
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

      <div className="py-4 px-4">
        <div
          className="
          flex 
          items-center
          gap-4 
          h-20
          "
        >
          <img
            src="../../src/assets/user.jpg"
            className="w-9 rounded-full duration-500"
          />

          <h2
            className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}
          >
            Jessé Tavares
          </h2>
        </div>

        <ul className="pt-6">
          {menus.map((menu, index) => (
            <li
              key={`link${index}`}
              className={`
                  text-gray-300 text-sm flex items-center
                  gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md
                  ${ menu.gap ? "mt-9" : "mt-4"}
                `}
            >
              <img 
                className="w-6"
                src={`../../src/assets/${menu.icon}.png`} alt="" 
              />
              <Link to={menu.src}><span className={`${!open && 'hidden'} origin-left duration-200 font-semibold text-base`}> {menu.title} </span></Link>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
