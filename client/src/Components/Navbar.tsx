import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <div className="pb-20">
    <Navbar fluid rounded className="bg-[#DFF6FF] shadow-md fixed top-0 w-full z-50 h-16">
      <NavbarBrand href="https://flowbite-react.com">
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
      </NavbarBrand>

      <NavbarCollapse>
        <NavbarLink href="#" className="text-[#06283D]" active>
          <Link to="/">HOME</Link>
        </NavbarLink>
        <NavbarLink href="#" className="text-[#06283D]">
          <Link to="/alldoctors">ALL DOCTORS</Link>
        </NavbarLink>
        <NavbarLink href="#" className="text-[#06283D]">
          <Link to="/Dashboard">SHOP</Link>
        </NavbarLink>
        <NavbarLink href="#" className="text-[#06283D]">
          <Link to="/about">ABOUT</Link>
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
