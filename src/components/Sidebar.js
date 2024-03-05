import {
  faBook,
  faDove,
  faHouse,
  faMountainSun,
  faMugSaucer,
} from "@fortawesome/free-solid-svg-icons";
import { classname } from "../funcs/classname";
import { NavButton } from "./NavButton";

const navInfo = [
  {
    title: "home",
    navTo: "/",
    icon: faHouse,
    pic: require("../img/icons/house.png"),
  },
  {
    title: "about",
    navTo: "about",
    icon: faMugSaucer,
    pic: require("../img/icons/mug.png"),
  },
  {
    title: "art projects",
    navTo: "arts",
    icon: faBook,
    pic: require("../img/icons/notebook.png"),
  },
  {
    title: "poetry",
    navTo: "poetry",
    icon: faDove,
    pic: require("../img/icons/bird.png"),
  },
  {
    title: "websites",
    navTo: "websites",
    icon: faMountainSun,
    pic: require("../img/icons/flower.png"),
  },
];

export const Sidebar = ({ isMenuOpen }) => {
  return (
    <div
      className={classname(
        "flex shrink-0 bg-slate-100 transition-width duration-500 overflow-hidden",
        isMenuOpen ? "w-[220px]" : "w-0"
      )}
    >
      <div
        className={classname(
          "py-6 pl-6 transition-opacity duration-200 bg-slate-100",
          isMenuOpen ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="flex justify-center mb-6 mt-3">
          <img
            src={require("../img/me.png")}
            className="w-48 h-48"
            alt="drawing of Pat"
          />
        </div>
        <div className="flex flex-col space-y-2">
          {navInfo.map((i, j) => (
            <NavButton
              key={j}
              title={i.title}
              navTo={i.navTo}
              icon={i.icon}
              pic={i.pic}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
