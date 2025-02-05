import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function Foot() {
  return (
    <Footer container className="bg-[#06283D] text-gray-300 pt-10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 text-center sm:text-left">
          {/* Logo Section */}
          <div className="flex justify-center sm:justify-start">
            <div className="pb-6">
              <p>MeciConnect</p>
            <iframe
                className="mt-4 h-40 w-full rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12674.309030315074!2d80.04545!3d6.8213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2466b63e1e34b%3A0xd2d5d5ef8b33d6df!2sNSBM%20Green%20University!5e0!3m2!1sen!2slk!4v1707089302932!5m2!1sen!2slk"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FooterLinkGroup col className="text-[#DFF6FF]">
              <FooterLink href="#">HOME</FooterLink>
              <FooterLink href="#">ALL DOCTORS</FooterLink>
              <FooterLink href="#">SHOP</FooterLink>
              <FooterLink href="#">ABOUT</FooterLink>
              <FooterLink href="#">CONTACT</FooterLink>
            </FooterLinkGroup>

            <FooterLinkGroup col className="text-[#DFF6FF]">
              <FooterLink href="#">Terms and Conditions</FooterLink>
              <FooterLink href="#">Feedback</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </FooterLinkGroup>

            <FooterLinkGroup col className="text-[#DFF6FF]">
              <FooterLink href="#">+94 70 2 877 313</FooterLink>
              <FooterLink href="#">mudithmilinda@gmail.com</FooterLink>
              <FooterLink href="#">
                No: 108, W A D Ramanayake Mawatha, <br /> Colombo 2, Sri Lanka.
              </FooterLink>
            </FooterLinkGroup>
          </div>
        </div>

        {/* Divider */}
        <FooterDivider />

        {/* Copyright and Social Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          <FooterCopyright href="#" by="Flowbite™" year={2024} />
          <div className="flex flex-wrap space-x-6 mt-4 sm:mt-0">
            <FooterIcon href="#" icon={BsFacebook} className="text-[#DFF6FF]" />
            <FooterIcon href="#" icon={BsInstagram} className="text-[#DFF6FF]" />
            <FooterIcon href="#" icon={BsTwitter} className="text-[#DFF6FF]" />
            <FooterIcon href="#" icon={BsGithub} className="text-[#DFF6FF]" />
            <FooterIcon href="#" icon={BsDribbble} className="text-[#DFF6FF]" />
          </div>
        </div>
      </div>
    </Footer>
  );
}
