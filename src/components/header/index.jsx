import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-6 bg-black text-center">
      <NavLink to={""}>Home</NavLink>
      <NavLink to={"cart"}>cart</NavLink>
    </header>
  );
}
