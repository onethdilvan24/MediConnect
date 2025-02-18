import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";

export function Nav() {
  return (
    <div className="pb-14">
      <Navbar fluid rounded className="bg-[#DFF6FF] shadow-md fixed top-0 w-full z-50 h-16 ">
        <NavbarBrand>
          <img src={Logo} className="w-36" alt="Logo" />
        </NavbarBrand>

        <NavbarCollapse>
          <NavbarLink as={Link} to="/" className="text-[#06283D]">
            HOME
          </NavbarLink>
          <NavbarLink as={Link} to="/alldoctors" className="text-[#06283D]">
            ALL DOCTORS
          </NavbarLink>
          <NavbarLink as={Link} to="/Shop" className="text-[#06283D]">
            SHOP
          </NavbarLink>

          <NavbarLink as={Link} to="/about" className="text-[#06283D]">
            ABOUT
          </NavbarLink>
        </NavbarCollapse>

        <div className="flex md:order-2">
          <Link to="/login">
            <Button className="rounded-3xl bg-[#1363DF] text-[#CFF5E7]">
              Login
            </Button>
          </Link>
          <NavbarToggle />
        </div>
      </Navbar>
    </div>
  );
}
